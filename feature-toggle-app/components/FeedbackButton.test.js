import { render, screen } from '@testing-library/react';
import FeedbackButton from './FeedbackButton'

describe("<FeedbackButton/>", () => {
    it("renders a new FeedbackButton with Feedback text", async () => {
        render(<FeedbackButton />);
        const button = await screen.findByRole('button', { name: 'Feedback' });
        expect(button).toBeInTheDocument();
    })

    it("should be disabled if isFeedbackButtonEnabled is false", () => {
        render(<FeedbackButton isFeedbackButtonEnabled={false} />);
        const button = screen.getByRole('button', { name: 'Feedback' });
        expect(button).toBeDisabled();
    })

    it("should be enabled if isFeedbackButtonEnabled is true", () => {
        render(<FeedbackButton isFeedbackButtonEnabled={true} />);
        const button = screen.getByRole('button', { name: 'Feedback' });
        expect(button).not.toBeDisabled();
    })
})