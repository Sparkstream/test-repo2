import React from 'react';

const FeedbackButton = ({ isFeedbackButtonEnabled }) => {
    return <button disabled={!isFeedbackButtonEnabled}>Feedback</button>
}

export default FeedbackButton;