import { MouseEvent, useState } from 'react';
import Numbers from './components/Numbers/Numbers';
import NumberAnswers from './components/NumberAnswers/NumberAnswers';
import AnswerResults from './components/AnswerResults/AnswerResults';
import {
	CORRECT,
	INCORRECT,
	ONE_AWAY,
	TWO_AWAY,
} from './contants/AnswerMessages';
import './App.css';
import {
	isChosenNumberOneAway,
	isChosenNumberTwoAway,
} from './utils/checkValue';
import Controls from './components/Controls/Controls';

function App() {
	const initialBlockArrState = ['', '', '', ''];
	const initialResulsMessageArrState = ['', '', '', ''];
	const [blockArr, setBlockArr] = useState(initialBlockArrState);
	const [resultsMessageArr, setResultsMessageArr] = useState(
		initialResulsMessageArrState
	);
	const [activeBlock, setActiveBlock] = useState(0);
	const [answerIndex, setAnswerIndex] = useState(0);

	const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // numbers available to select
	const answerArr = [1, 7, 3, 4]; // the answer in array format, this is to be made random every 24hrs

	const correctValue = answerArr[answerIndex];
	const firstNumberInNumbersArr = numbersArr[0];
	const secondNumberInNumbersArr = numbersArr[1];
	const lastNumberInNumbersArr = numbersArr[numbersArr.length - 1];
	const secondToLastNumberInNumbersArr = numbersArr[numbersArr.length - 2];

	const lastMessageInResultsMessageArr =
		resultsMessageArr[resultsMessageArr.length - 1];

	// TODO: refactor
	const isChosenNumberCorrect = (value: number) => {
		const updatedResultsMessageArr = [...resultsMessageArr];
		if (activeBlock !== blockArr.length)
			if (value === answerArr[answerIndex]) {
				setAnswerIndex((prevAnswerIndex) => prevAnswerIndex + 1);
				updatedResultsMessageArr[activeBlock] = CORRECT;
				setResultsMessageArr(updatedResultsMessageArr);
				setActiveBlock((prevActiveBlock) => prevActiveBlock + 1);
			} else if (
				isChosenNumberTwoAway(
					value,
					correctValue,
					firstNumberInNumbersArr,
					secondNumberInNumbersArr,
					lastNumberInNumbersArr,
					secondToLastNumberInNumbersArr
				)
			) {
				updatedResultsMessageArr[activeBlock] = TWO_AWAY;
				setResultsMessageArr(updatedResultsMessageArr);
			} else if (
				isChosenNumberOneAway(
					value,
					correctValue,
					firstNumberInNumbersArr,
					lastNumberInNumbersArr
				)
			) {
				updatedResultsMessageArr[activeBlock] = ONE_AWAY;
				setResultsMessageArr(updatedResultsMessageArr);
			} else {
				updatedResultsMessageArr[activeBlock] = INCORRECT;
				setResultsMessageArr(updatedResultsMessageArr);
			}
	};

	const handleNumberButtonOnClick = (e: MouseEvent<HTMLButtonElement>) => {
		const { value } = e.target as HTMLButtonElement;
		const numberValue = parseInt(value);
		isChosenNumberCorrect(numberValue);
		const updatedBlockArr = [...blockArr];
		if (activeBlock !== blockArr.length) {
			updatedBlockArr[activeBlock] = value;
			setBlockArr(updatedBlockArr);
		}
	};

	const handleOnPlayAgainButton = () => {
		console.log('handlePlayAgainButton fired');
		setActiveBlock(0);
		setBlockArr(initialBlockArrState);
		setResultsMessageArr(initialResulsMessageArrState);
		setActiveBlock(0);
		setAnswerIndex(0);
	};
	console.log(blockArr.length);

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Number Guesser</h1>
				<AnswerResults resultsMessageArr={resultsMessageArr} />
				<NumberAnswers blockArr={blockArr} />
				<Numbers
					numbersArr={numbersArr}
					handleNumberButtonOnClick={handleNumberButtonOnClick}
				/>
				{lastMessageInResultsMessageArr === CORRECT && (
					<Controls
						handleOnPlayAgainButton={handleOnPlayAgainButton}
					/>
				)}
			</header>
		</div>
	);
}

export default App;
