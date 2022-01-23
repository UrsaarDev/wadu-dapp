import { useEthers } from "@usedapp/core";
import Button from "../components/Button";
import { Nav } from "../components/Nav";

export default function Home() {
	const { activateBrowserWallet, account } = useEthers();

	return (
		<div className="flex h-screen flex-col justify-start bg-dark py-8 px-1/5 text-white">
			<Nav />
			<div className="h-full w-full flex justify-center">
				<Button
					className="self-center justify-self-center h-14 font-bold"
					onClick={!account && activateBrowserWallet}
				>
					{account ? "Mint" : "Connect"}
				</Button>
			</div>
		</div>
	);
}
