import styles from './Controls.module.scss';

interface PropsInt {
	handleOnPlayAgainButton: () => void;
}

const Controls = ({ handleOnPlayAgainButton }: PropsInt) => {
	return (
		<div className={styles.container}>
			<button className={styles.button} onClick={handleOnPlayAgainButton}>
				Play Again
			</button>
		</div>
	);
};

export default Controls;
