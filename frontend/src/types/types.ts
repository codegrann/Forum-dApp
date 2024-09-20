export type writeContractFn = Readonly<
	| "createComment"
	| "createPoll"
	| "createPost"
	| "downVoteComment"
	| "downVotePost"
	| "upVoteComment"
	| "upVotePollOption"
	| "upVotePost"
>;

export type readContractFn = Readonly<
	| "commentIdIncrement"
	| "comments"
	| "compareStringsbyBytes"
	| "getComment"
	| "getCommentsFromPost"
	| "getPoll"
	| "getPollFromPost"
	| "getPost"
	| "getPostsFromAddress"
	| "pollIdIncrement"
>;

export type PostDetails = {
	owner: `0x${string}`;
	id: bigint;
	title: string;
	description: string;
	spoil: boolean;
	likes: bigint;
	timestamp: bigint;
};

// Alias it so we don't get confused. Both have the same fields
export type CommentDetails = PostDetails;

export type PollFormDetails = {
	question: string;
	option1: string;
	option2: string;
};

export type PollAllDetails = {
	id: bigint;
	question: string;
	option1: string;
	option2: string;
	option1Counter: bigint;
	option2Counter: bigint;
};