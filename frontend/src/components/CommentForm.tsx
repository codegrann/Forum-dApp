import styles from "../styles/Custom.module.css";
import { faWarning, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Address } from "viem";
import { useState } from "react";
import {
	useWaitForTransactionReceipt,
	useAccount,
} from "wagmi";
import { deployedAddress } from "../contracts/deployed-contract";
import type { CommentDetails, PostDetails } from "../types/posts/types";
import { useWriteForumCreateComment } from "../contracts/generated";

const CommentForm = ({ post }: { post: PostDetails }) => {
	const initialiser: CommentDetails = {
		id: BigInt(0),
		title: "",
		owner: useAccount().address as Address,
		description: "",
		spoil: false,
		likes: BigInt(0),
		timestamp: BigInt(0),
	};
	const [comment, setComment] = useState<CommentDetails>(initialiser);
	const { writeContract, data: commentTxHash } = useWriteForumCreateComment();
	const { isLoading } = useWaitForTransactionReceipt({
		hash: commentTxHash,
	});

	return (
		<>
			<form
				className={styles.form}
				onSubmit={(e) => {
					e.preventDefault();
					if (!comment.title.trim() || !comment.description.trim()) {
						alert("Empty title or description not allowed.");
						return;
					}
					writeContract({
						address: deployedAddress,
						args: [post.id, comment.title, comment.description, comment.spoil],
					});
				}}
			>
				<h1>Comment something wonderful!</h1>
				<input
					type="text"
					name="comment-title"
					placeholder="Comment title"
					value={comment.title}
					onChange={(e) => setComment({ ...comment, title: e.target.value })}
					required
				/>
				<textarea
					rows={5}
					name="comment-description"
					placeholder="What's on your mind?"
					value={comment.description}
					onChange={(e) =>
						setComment({ ...comment, description: e.target.value })
					}
				/>
				<div className={styles.secondary}>
					<label htmlFor="spoiler">
						<button
							type="button"
							onClick={() => setComment({ ...comment, spoil: !comment.spoil })}
						>
							<FontAwesomeIcon
								icon={faWarning}
								color={!comment.spoil ? "#359AECff" : "#FF5D64ff"}
							/>{" "}
							Spoiler
						</button>
					</label>
					<button type="submit" className={styles.submit}>
						<FontAwesomeIcon
							icon={faPencil}
							color={!isLoading ? "#359AECff" : "#FF5D64ff"}
						/>{" "}
						{isLoading ? "Submitting..." : "Submit comment"}
					</button>
				</div>
			</form>
		</>
	);
};

export default CommentForm;