import { render } from '@testing-library/react';
import ToggleOnPage from './toggle-on';

describe('<ToggleOnPage />', () => {
    it('should render Toggle On Page title with Feedback button enabled', () => {
        const { getByText } = render(<ToggleOnPage />);
        const pageTitleElement = getByText('Toggle On Page');
        const feedbackButtonElement = getByText('Feedback');

        expect(pageTitleElement).toBeInTheDocument();
        expect(feedbackButtonElement).not.toBeDisabled();
    })
})

