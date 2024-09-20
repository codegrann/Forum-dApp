import Link from "next/link";
import styles from "../styles/Custom.module.css";
import CommonVoteStubs from "./CommonVoteStubs";
import type { CommentDetails, PostDetails } from "../types/posts/types";

const ShareableCommentComponent = ({
	comment,
	post,
}: { comment: CommentDetails; post: PostDetails }) => {
	return (
    	<article key={comment.id} className={styles.cardPlain}>
        	<h2>
            	{comment.title} on{" "}
            	<Link href={`/posts/${encodeURIComponent(post.id.toString())}`}>
                	{post.title}
            	</Link>
        	</h2>
        	<h3>
            	from <span className={styles.address}>{comment.owner}</span>
        	</h3>
        	<p>{comment.description}</p>
        	<CommonVoteStubs
            	key={comment.id}
            	id={comment.id}
            	likes={comment.likes}
            	upVoteFn={"upVoteComment"}
            	downVoteFn={"downVoteComment"}
            	getFn={"getComment"}
        	/>
    	</article>
	);
};

export default ShareableCommentComponent;