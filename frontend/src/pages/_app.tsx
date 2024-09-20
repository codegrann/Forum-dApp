import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config as fontawesomeConfig } from "@fortawesome/fontawesome-svg-core";
fontawesomeConfig.autoAddCss = false;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

import config from "../wagmi";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={client}>
				<RainbowKitProvider>
					<Component {...pageProps} />
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}

export default MyApp;
