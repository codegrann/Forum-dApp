import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
	anvil,
	arbitrum,
	arbitrumSepolia,
	base,
	hardhat,
	mainnet,
	optimism,
	polygon,
	sepolia,
} from "wagmi/chains";
import { cookieStorage, createStorage } from "wagmi";
import { defineChain } from "viem";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string;

const localhost = defineChain({
	id: 31337,
	name: "Anvil Foundry",
	nativeCurrency: {
		name: "Ether",
		decimals: 10,
		symbol: "ETH",
	},
	rpcUrls: {
		default: {
			http: ["http://localhost:8545"],
		},
	},
});

const config = getDefaultConfig({
	appName: "StackUp Forums",
	projectId: projectId,
	storage: createStorage({
		storage: cookieStorage,
	}),
	chains:
		process.env.NEXT_PUBLIC_ONLY_ANVIL_HARDHAT_TESTNETS === "true"
			? [anvil, hardhat]
			: [
					mainnet,
					polygon,
					optimism,
					arbitrum,
					base,
					...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
						? [sepolia, arbitrumSepolia, anvil]
						: []),
				],
	ssr: true,
});

export default config;
