import { useRouter } from "next/router";
import { deployedAddress } from "../../contracts/deployed-contract";
import { useEffect, useState } from "react";
import ShareablePostComponent from "../../components/ShareablePostComponent";
import Comments from "../../components/Comments";
import type { ParsedUrlQuery } from "node:querystring";
import { getAccount } from "@wagmi/core";
import config from "../../wagmi";
import Link from "next/link";
import Poll from "../../components/Poll";
import styles from "../../styles/Custom.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useReadForumGetPost } from "../../contracts/generated";
import CommentForm from "../../components/CommentForm";

export interface PostIdParams extends ParsedUrlQuery {
	id: string;
}

export default function Post() {
	const account = getAccount(config);
	const router = useRouter();
	const [postId, setPostId] = useState<string>("0");

	useEffect(() => {
    	if (!router.isReady) {
        	return;
    	}
    	if (!router.query.id) {
        	router.push("/");
    	}
    	const { id: postId } = router.query as PostIdParams;
    	setPostId(postId);
	}, [router.isReady, router.query, router.push]);

	const { data: postDetails, isError: isErrorLoadingPost } =
    	useReadForumGetPost({
        	address: deployedAddress,
        	args: [BigInt(Number.parseInt(postId.trim(), 10))],
    	});

	return (
    	<>
        	{postDetails?.id && (
            	<div className={styles.main}>
                	<ConnectButton />
                	{isErrorLoadingPost && "Failed to load post"}
                	<h3>
                    	<Link href="/forum">Go back to forum</Link>{" "}
                    	<Link href={"/comments"}>See all comments</Link>
                	</h3>
                	<ShareablePostComponent post={postDetails} />
                	<Poll postId={postDetails.id} />
                	<div className={styles.card}>
                    	{account.isConnected ? (
                        	<CommentForm post={postDetails} />
                    	) : (
                        	<h3>You must sign in to comment</h3>
                    	)}
                	</div>
                	<h3>⇓⇓⇓ Comments ⇓⇓⇓</h3>
                	<Comments post={postDetails} />
            	</div>
        	)}
    	</>
	);
}