import { render, screen } from '@testing-library/react';
import AnswerResults from './AnswerResults';

const resultsMessageArr = ['Correct', 'Incorrect', '', ''];

describe('AnswerResults component', () => {
	it('should render element of resultsMessageArr correctly', () => {
		render(<AnswerResults resultsMessageArr={resultsMessageArr} />);
		const element = screen.getByText(/^correct$/i);
		expect(element).toBeInTheDocument();
	});
	it('should render correct number of elements in resultsMessageArr', () => {
		render(<AnswerResults resultsMessageArr={resultsMessageArr} />);
		const elements = screen.getAllByTestId(/^result-message$/i);
		expect(elements.length).toBe(4);
	});
});
