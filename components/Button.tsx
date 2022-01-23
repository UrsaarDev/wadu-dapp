import { MouseEventHandler, ReactNode } from "react";

interface Props {
	className?: string;
	onClick?: () => void;
	children?: ReactNode;
	disabled?: boolean;
}

const Button = (props: Props) => {
	return (
		<button
			className={
				"flex bg-light border-gray items-center justify-center rounded-md h-8 p-1 px-2 w-32 text-white truncate font-medium cursor-pointer " +
				props.className
			}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

export default Button;
