import type { PollFormDetails, PostDetails } from "../types/posts/types";
import { type FormEvent, useEffect, useState } from "react";
import { readContract, simulateContract } from "@wagmi/core";
import config from "../wagmi";
import type { Address } from "viem";
import { ABI, deployedAddress } from "../contracts/deployed-contract";
import { redirect } from "next/navigation";
import styles from "../styles/Custom.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPoll, faWarning } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Posts from "./Posts";
import allPosts from "./allPosts";
import { useWaitForTransactionReceipt } from "wagmi";
import {
	useWriteForumCreatePoll,
	useWriteForumCreatePost,
} from "../contracts/generated";

const PostForm = ({ account }: { account: Address | undefined }) => {
	if (account === undefined) return <div>Account not connected.</div>;
	const postInitialiser: PostDetails = {
		id: BigInt(0),
		title: "",
		owner: account,
		description: "",
		spoil: false,
		likes: BigInt(0),
		timestamp: BigInt(0),
	};

	const { data: postTxHash, writeContractAsync: submitPost } =
		useWriteForumCreatePost();

	const { data: pollTxHash, writeContractAsync: submitPoll } =
		useWriteForumCreatePoll();

	const {
		isSuccess: isPostSubmitted,
		isLoading: isPostSubmitting,
		isError: isPostSubmitError,
	} = useWaitForTransactionReceipt({
		hash: postTxHash,
	});
	const {
		isSuccess: isPollSubmitted,
		isLoading: isPollSubmitting,
		isError: isPollSubmitError,
	} = useWaitForTransactionReceipt({
		hash: pollTxHash,
	});
	const [posts, setPosts] = useState<PostDetails[]>([]);
	const [post, setPost] = useState<PostDetails>(postInitialiser);
	const [pollElementVisible, setPollElementVisible] = useState(false);

	const pollInitialiser: PollFormDetails = {
		question: "",
		option1: "",
		option2: "",
	};
	const [pollDetails, setPollDetails] =
		useState<PollFormDetails>(pollInitialiser);

	const handlePostCreation = async (e: FormEvent) => {
		e.preventDefault();
		// Block if poll first is visible but one or more details are empty
		if (pollElementVisible) {
			if (
				!pollDetails.question?.trim() ||
				!pollDetails.option1?.trim() ||
				!pollDetails.option2?.trim()
			) {
				alert(
					"One or more of your poll details are empty. Consider checking your inputs.",
				);
				return;
			}
			if (pollDetails.option1.trim() === pollDetails.option2.trim()) {
				alert("Option 1 and 2 are the same. Consider checking your inputs.");
				return;
			}
		}
		// Block post submission if either post title or description is empty
		if (!post.description.trim() || !post.title.trim()) {
			alert("Title or description not allowed to be empty...");
			return;
		}

		await simulateContract(config, {
			abi: ABI,
			address: deployedAddress,
			functionName: "createPost",
			args: [post.title, post.description, post.spoil],
		}).catch((err) => {
			console.error("Simulation failed with ", err);
		});

		await submitPost({
			address: deployedAddress,
			args: [post.title, post.description, post.spoil],
		});

		if (isPostSubmitError) {
			alert("Creating post failed!");
			return redirect(".");
		}

		if (isPollSubmitted) alert("Post submitted");

		const readUserPosts = await readContract(config, {
			abi: ABI,
			address: deployedAddress,
			functionName: "getPostsFromAddress",
			args: [account],
		});

		const latestPostId = readUserPosts[readUserPosts.length - 1];

		if (pollElementVisible) {
			alert(
				"You created a poll. You have to sign another transaction again 🙏",
			);
			await simulateContract(config, {
				abi: ABI,
				address: deployedAddress,
				functionName: "createPoll",
				args: [
					latestPostId,
					pollDetails.question.trim(),
					pollDetails.option1.trim(),
					pollDetails.option2.trim(),
				],
			}).catch((err) => {
				console.error("Simulation failed with ", err);
			});

			await submitPoll({
				address: deployedAddress,
				args: [
					latestPostId,
					pollDetails.question.trim(),
					pollDetails.option1.trim(),
					pollDetails.option2.trim(),
				],
			});

			if (isPollSubmitError) {
				alert("Creating poll failed!");
				return;
			}

			if (isPollSubmitted) {
				alert("Poll submitted");
			}
		}
		if (isPostSubmitted) alert("Post submission complete.");
		setPollDetails(pollInitialiser);
		setPost(postInitialiser);
	};

	useEffect(() => {
		const fetchPosts = async () => {
			const posts = await allPosts();
			setPosts(posts);
		};
		if (!isPostSubmitting) {
			fetchPosts();
		}
	}, [isPostSubmitting]);

	return (
		<>
			{account !== undefined && (
				<div className={styles.cardPlain}>
					<div className={styles.home}>
						<h3>
							<Link href="/">Go back to main page</Link>{" "}
							<Link href={"/comments"}>See all comments</Link>
						</h3>
					</div>
					<form
						className={styles.form}
						onSubmit={(e) => {
							handlePostCreation(e);
						}}
					>
						<input
							type="text"
							name="post-title"
							value={post.title}
							placeholder="Post title"
							onChange={(e) => setPost({ ...post, title: e.target.value })}
							required
						/>
						<textarea
							rows={5}
							name="post-description"
							placeholder="What's on your mind?"
							value={post.description}
							onChange={(e) =>
								setPost({ ...post, description: e.target.value })
							}
						/>
						{pollElementVisible && (
							<>
								<input
									type="text"
									name="poll-question"
									placeholder="What's the poll about?"
									value={pollDetails.question}
									onChange={(e) =>
										setPollDetails({ ...pollDetails, question: e.target.value })
									}
									required
								/>
								<input
									type="text"
									name="poll-option1"
									placeholder="Option 1 Description"
									value={pollDetails.option1}
									onChange={(e) =>
										setPollDetails({ ...pollDetails, option1: e.target.value })
									}
									required
								/>
								<input
									type="text"
									name="poll-option2"
									placeholder="Option 2 Description"
									value={pollDetails.option2}
									onChange={(e) =>
										setPollDetails({ ...pollDetails, option2: e.target.value })
									}
									required
								/>
							</>
						)}
						<div className={styles.bottomPrimary}>
							<div className={styles.secondary}>
								<label htmlFor="spoiler">
									<button
										type="button"
										onClick={() => setPost({ ...post, spoil: !post.spoil })}
									>
										<FontAwesomeIcon
											icon={faWarning}
											color={!post.spoil ? "#359AECff" : "#FF5D64ff"}
										/>{" "}
										Spoiler
									</button>
								</label>
								<label htmlFor="hasPoll">
									<button
										type="button"
										onClick={() => setPollElementVisible(!pollElementVisible)}
									>
										<FontAwesomeIcon
											icon={faPoll}
											color={!pollElementVisible ? "#359AECff" : "#FF5D64ff"}
										/>{" "}
										{isPollSubmitting ? "Generating poll..." : "Poll"}
									</button>
								</label>

								<button type="submit" className={styles.submit}>
									<FontAwesomeIcon
										icon={faPencil}
										color={!isPostSubmitting ? "#359AECff" : "#FF5D64ff"}
									/>{" "}
									{isPostSubmitting ? "Submitting..." : "Submit post"}
								</button>
							</div>
						</div>
					</form>
				</div>
			)}
			<section>
				<Posts account={account} posts={posts} />
			</section>
		</>
	);
};

export default PostForm;