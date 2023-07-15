import React from 'react';
import FeedbackButton from '../components/FeedbackButton';

const ToggleOnPage = () => {
    return (
        <div>
            <h1>Toggle On Page</h1>
            <FeedbackButton isFeedbackButtonEnabled={true}/>
        </div>
    )
}

export default ToggleOnPage;