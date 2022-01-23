import { useEtherBalance, useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import { parseEther } from "../utils/etc";
import { web3 } from "../utils/web3";
import Button from "./Button";
import ProfileIcon from "./ProfileIcon";

const ConnectButton = () => {
	const { activateBrowserWallet, account } = useEthers();
	const etherBalance = useEtherBalance(account);

	return account ? (
		<Button disabled className="p-0 w-24 justify-self-end">
			<ProfileIcon />
			{etherBalance && parseEther(etherBalance) + "Ξ"}
		</Button>
	) : (
		<Button className="w-36" onClick={activateBrowserWallet}>
			Connect Wallet
		</Button>
	);
};

export const Nav = () => {
	return (
		<div className="flex sticky-top flex-flow h-16 w-full justify-between items-center justify-self-start">
			mint smokynft now
			<ConnectButton />
		</div>
	);
};
