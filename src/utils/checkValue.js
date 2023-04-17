export const isChosenNumberOneAway = (
	value,
	correctValue,
	firstNumberInNumbersArr,
	lastNumberInNumbersArr
) => {
	const conditionsArray = [
		value === correctValue + 1 || value === correctValue - 1,
		correctValue === firstNumberInNumbersArr &&
			value === lastNumberInNumbersArr,
		correctValue === lastNumberInNumbersArr &&
			value === firstNumberInNumbersArr,
	];

	if (conditionsArray.includes(true)) return true;
};

export const isChosenNumberTwoAway = (
	value,
	correctValue,
	firstNumberInNumbersArr,
	secondNumberInNumbersArr,
	lastNumberInNumbersArr,
	secondToLastNumberInNumbersArr
) => {
	const conditionsArray = [
		value === correctValue + 2 || value === correctValue - 2,
		correctValue === secondNumberInNumbersArr &&
			value === lastNumberInNumbersArr,
		correctValue === firstNumberInNumbersArr &&
			value === secondToLastNumberInNumbersArr,
		correctValue === lastNumberInNumbersArr &&
			value === secondNumberInNumbersArr,
		correctValue === secondToLastNumberInNumbersArr &&
			value === firstNumberInNumbersArr,
	];

	if (conditionsArray.includes(true)) return true;
};
