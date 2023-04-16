import { MouseEventHandler } from 'react';
import styles from './Numbers.module.scss';

interface PropsInt {
  numbersArr: number[],
  handleNumberButtonOnClick: MouseEventHandler<HTMLButtonElement>
}

const Numbers = ({ numbersArr, handleNumberButtonOnClick }: PropsInt) => {
	return (
		<div className={styles.container}>
			{numbersArr.map((number, index) => (
				<button
					className={styles['number-button']}
					key={index}
					onClick={handleNumberButtonOnClick}
					value={number}
				>
					{number}
				</button>
			))}
		</div>
	);
};

export default Numbers;
