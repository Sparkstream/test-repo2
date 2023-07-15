import React from 'react';
import FeedbackButton from '../components/FeedbackButton';

const ToggleOffPage = () => {
    return (
        <div>
            <h1>Toggle Off Page</h1>
            <FeedbackButton  isFeedbackButtonEnabled={false}/>
        </div>
    )
}

export default ToggleOffPage;