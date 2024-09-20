import Link from "next/link";
import type { PostDetails } from "../types/posts/types";
import styles from "../styles/Custom.module.css";
import CommonVoteStubs from "./CommonVoteStubs";

const ShareablePostComponent = ({ post }: { post: PostDetails }) => {
	return (
    	<article key={post.id} className={styles.card}>
        	<Link
            	href={{
                	pathname: "/posts/[id]",
                	query: { id: post.id.toString() },
            	}}
        	>
            	<h2>{post.title}</h2>
        	</Link>
        	<h3>
            	from <span className={styles.address}>{post.owner}</span>
        	</h3>
        	<div className={styles.description}>
            	<p>{post.description}</p>
        	</div>
        	<CommonVoteStubs
            	key={post.id}
            	id={post.id}
            	likes={post.likes}
            	upVoteFn={"upVotePost"}
            	downVoteFn={"downVotePost"}
            	getFn={"getPost"}
        	/>
    	</article>
	);
};

export default ShareablePostComponent;