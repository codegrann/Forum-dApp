import { useState } from "react";
import PostForm from "../../components/PostForm";
import styles from "../../styles/Custom.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useAccountEffect } from "wagmi";

const Forum = () => {
	const [account, setAccount] = useState(useAccount()?.address);
	useAccountEffect({
    	onConnect(data) {
        	setAccount(data.address);
    	},
    	onDisconnect() {
        	console.log("Account Disconnected");
        	setAccount(undefined);
    	},
	});
	return (
    	<>
        	<div className={styles.main}>
            	<header>
                	<nav>
                    	<ConnectButton
                        	label={account === undefined ? "Connect Wallet To Post" : ""}
                    	/>
                	</nav>
            	</header>

            	<div>
                	<PostForm account={account} />
            	</div>
        	</div>
    	</>
	);
};

export default Forum;