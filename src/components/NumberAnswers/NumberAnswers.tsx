import styles from './NumberAnswers.module.scss';

interface PropsInt {
	blockArr: string[];
}

const NumberAnswers = ({ blockArr }: PropsInt) => {
	return (
		<div className={styles.container}>
			{blockArr.map((block, index) => (
				<div className={styles.block} key={index}>
					{block}
				</div>
			))}
		</div>
	);
};

export default NumberAnswers;
