import { ABI, deployedAddress } from "../../contracts/deployed-contract";
import { useEffect, useState } from "react";
import type { PostDetails } from "../../types/posts/types";
import styles from "../../styles/Custom.module.css";
import { getAccount, readContract } from "@wagmi/core";
import config from "../../wagmi";
import Comments from "../../components/Comments";
import Link from "next/link";
import { useReadForumPostIdIncrement } from "../../contracts/generated";

const AllComments = () => {
	const {
    	isLoading,
    	data: postIdIncrement,
	}: { isLoading: boolean; data: bigint | undefined } =
    	useReadForumPostIdIncrement({
        	address: deployedAddress,
        	args: [],
    	});
	const [posts, setPosts] = useState<Array<PostDetails | undefined>>([]);

	useEffect(() => {
    	if (postIdIncrement === undefined) {
        	return;
    	}
    	const fetchPosts = async () => {
        	const posts: Promise<PostDetails | undefined>[] = [];
        	// the first post was already initialised with 0x000000000
        	for (let i = 1; i < postIdIncrement; i++) {
            	const post = readContract(config, {
                	abi: ABI,
                	address: deployedAddress,
                	functionName: "getPost",
                	args: [BigInt(i)],
                	account: getAccount(config).address,
            	});

            	posts.push(post);
        	}
        	Promise.all(posts).then((values) => {
            	setPosts(values);
        	});
    	};
    	if (!isLoading) {
        	fetchPosts();
    	}
	}, [isLoading, postIdIncrement]);

	if (posts === undefined) return <div>Loading comments...</div>;

	return (
    	<div className={styles.main}>
        	{!isLoading ? (
            	<>
                	<h3>
                    	<Link href="/forum">Go back to forum</Link>
                	</h3>
                	{posts.map((post) => (
                    	// biome-ignore lint/correctness/useJsxKeyInIterable: bogus
                    	<>{post !== undefined && <Comments key={post?.id} post={post} />}</>
                	))}
            	</>
        	) : (
            	<>
                	<h3>
                    	<Link href="/forum">Go back to forum</Link>
                	</h3>
                	<h4>Loading comments....</h4>
            	</>
        	)}
    	</div>
	);
};

export default AllComments;