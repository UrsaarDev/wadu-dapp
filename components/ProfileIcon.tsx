import { useEthers } from "@usedapp/core";
import { useEffect, useRef } from "react";
import Jazzicon from "@metamask/jazzicon";

const ProfileIcon = () => {
	const ref = useRef<HTMLDivElement>();
	const { account } = useEthers();

	useEffect(() => {
		if (account && ref.current) {
			ref.current.innerHTML = "";
			ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)));
		}
	}, [account]);

	return (
		<div
			className="h-8 w-8 px-0 rounded-full bg-light mr-1 flex justify-center items-center"
			ref={ref as any}
		/>
	);
};

export default ProfileIcon;
