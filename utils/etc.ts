import { BigNumber } from "@ethersproject/bignumber";
import { formatEther } from "@ethersproject/units";

export const parseEther = (value: BigNumber) => {
	return parseFloat(formatEther(value)).toFixed(3);
};
