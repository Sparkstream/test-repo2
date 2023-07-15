import { render } from '@testing-library/react';
import ToggleOffPage from './toggle-off';

describe('<ToggleOffPage />', () => {
    it('should render Toggle Off Page title with Feedback button disabled', () => {
        const { getByText } = render(<ToggleOffPage />);
        const pageTitle = getByText('Toggle Off Page');
        const feedbackButton = getByText('Feedback');

        expect(pageTitle).toBeInTheDocument();
        expect(feedbackButton).toBeDisabled();
    })
})

