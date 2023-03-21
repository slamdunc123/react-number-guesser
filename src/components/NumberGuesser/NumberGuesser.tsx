// @ts-nocheck

import React, { useState } from 'react';
import styles from './NumberGuesser.module.scss';

const NumberGuesser = () => {
	// set correct value position to look for
	const array = [0, 1, 2, 3, 4, 5];
	const correctVal = 5;
	const correctValIndex = array.indexOf(correctVal);

	const [activeButton, setActiveButton] = useState(null);
	const [message, setMessage] = useState('');

	// if correctValIndex === 0
	const checkValPos = (valPos) => {
		console.log('incorrect');
		if (correctValIndex === array[0]) {
			// check if first array index
			if (
				valPos === correctValIndex + 1 ||
				valPos === array[array.length - 1]
			) {
				setMessage('within 1');
			} else setMessage('miles out');
		} else if (correctValIndex === array[array.length - 1]) {
			// check if last array index
			if (valPos === correctValIndex - 1 || valPos === array[0]) {
				setMessage('within 1');
			} else setMessage('miles out');
		} else if (
			valPos === correctValIndex + 1 ||
			valPos === correctValIndex - 1
		) {
			setMessage('within 1');
		} else setMessage('miles out');
	};

	// check value position of selected value
	const checkValPosCorrect = (e) => {
		setActiveButton(parseInt(e.target.value));

		const val = parseInt(e.target.value);
		const valPos = array.indexOf(val);
		console.log(valPos, correctValIndex);

		if (valPos === correctValIndex) {
			setMessage('correct');
		} else checkValPos(valPos);
	};

	return (
		<>
			<div>Number Guesser</div>
			{console.log('activeButton', activeButton)}
			<div className={styles.button - array}>
				{array.map((item, index) => {
					console.log('index', index);
					return (
						<button
							onClick={checkValPosCorrect}
							value={item}
							className={
								activeButton === item
									? `${styles.button} ${styles.active}`
									: styles.button
							}
							onAnimationEnd={() => setActiveButton(null)}
						>
							{index}
						</button>
					);
				})}
			</div>

			<p>{message}</p>
		</>
	);
};

export default NumberGuesser;
