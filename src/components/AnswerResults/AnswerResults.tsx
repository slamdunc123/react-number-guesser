import styles from './AnswerResults.module.scss';

interface PropsInt {
	resultsMessageArr: string[];
}

const AnswerResults = ({ resultsMessageArr }: PropsInt) => {
	return (
		<div className={styles.container}>
			{resultsMessageArr.map((result, index) => (
				<div className={styles.result} key={index} data-testid="result-message">
					{result}
				</div>
			))}
		</div>
	);
};

export default AnswerResults;
