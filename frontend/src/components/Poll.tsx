import { useWaitForTransactionReceipt } from "wagmi";
import { deployedAddress } from "../contracts/deployed-contract";
import styles from "../styles/Custom.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import {
	useReadForumGetPollFromPost,
	useWriteForumUpVotePollOption,
} from "../contracts/generated";

const Poll = ({ postId }: { postId: bigint }) => {
	const { data: pollDetails } = useReadForumGetPollFromPost({
    	address: deployedAddress,
    	args: [postId],
	});

	let voteCounter1 = pollDetails?.option1Counter;
	let voteCounter2 = pollDetails?.option2Counter;

	const { data: option1TxHash, writeContractAsync: votingOption1 } =
    	useWriteForumUpVotePollOption();
	const { data: option2TxHash, writeContractAsync: votingOption2 } =
    	useWriteForumUpVotePollOption();

	const { isLoading: isVotingOption1, isSuccess: hasVotedOption1 } =
    	useWaitForTransactionReceipt({
        	hash: option1TxHash,
    	});

	const { isLoading: isVotingOption2, isSuccess: hasVotedOption2 } =
    	useWaitForTransactionReceipt({
        	hash: option2TxHash,
    	});

	if (hasVotedOption1 && voteCounter1 !== undefined) voteCounter1 += BigInt(1);
	if (hasVotedOption2 && voteCounter2 !== undefined) voteCounter2 += BigInt(1);

	return (
    	<>
        	{pollDetails?.id && (
            	<div className={styles.card}>
                	<div className={styles.form}>
                    	<h1>Here is the poll: {pollDetails?.question}</h1>
                    	<button
                        	className={styles.pollButton}
                        	type="button"
                        	onClick={() => {
                            	votingOption1({
                                	address: deployedAddress,
                                	args: [postId, pollDetails?.option1.trim()],
                            	});
                        	}}
                    	>
                        	{isVotingOption1 ? (
                            	<>Voting... {pollDetails?.option1}</>
                        	) : (
                            	<>
                                	<FontAwesomeIcon icon={faArrowUpLong} />{" "}
                                	{pollDetails?.option1}
                            	</>
                        	)}
                        	{": "}
                        	{voteCounter1?.toString()}
                    	</button>
                    	<button
                        	className={styles.pollButton}
                        	type="button"
                        	onClick={() => {
                            	votingOption2({
                                	address: deployedAddress,
                                	args: [postId, pollDetails?.option2.trim()],
                            	});
                        	}}
                    	>
                        	{isVotingOption2 ? (
                            	<>Voting... {pollDetails?.option2}</>
                        	) : (
                            	<>
                                	<FontAwesomeIcon icon={faArrowUpLong} />{" "}
                                	{pollDetails?.option2}
                            	</>
                        	)}
                        	{": "}
                        	{voteCounter2?.toString()}
                    	</button>
                	</div>
            	</div>
        	)}
    	</>
	);
};

export default Poll;