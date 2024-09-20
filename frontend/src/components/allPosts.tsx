import { readContract } from "@wagmi/core";
import config from "../wagmi";
import { ABI, deployedAddress } from "../contracts/deployed-contract";
import type { PostDetails } from "../types/posts/types";

const allPosts = async () => {
	const postIdIncrement = (await readContract(config, {
    	abi: ABI,
    	address: deployedAddress,
    	functionName: "postIdIncrement",
    	args: [],
	})) as bigint;

	const posts: Promise<PostDetails | undefined>[] = [];
	// the first post was already initialised with 0x000000000
	for (let i = 1; i < postIdIncrement; i++) {
    	const post: Promise<PostDetails | undefined> = readContract(config, {
        	abi: ABI,
        	address: deployedAddress,
        	functionName: "getPost",
        	args: [BigInt(i)],
    	}) as Promise<PostDetails | undefined>;

    	posts.push(post);
	}
	return await Promise.all(posts).then((values) => {
    	const binding = values.filter((post): post is PostDetails => !!post);
    	return binding;
	});
};

export default allPosts;