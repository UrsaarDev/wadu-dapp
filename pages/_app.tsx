import "tailwindcss/tailwind.css";
import { DAppProvider } from "@usedapp/core";

function MyApp({ Component, pageProps }) {
	return (
		<DAppProvider config={{}}>
			<Component {...pageProps} />
		</DAppProvider>
	);
}

export default MyApp;
