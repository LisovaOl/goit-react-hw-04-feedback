import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map(option => (
        <Button
          key={option}
          value={option}
          type="button"
          onClick={option => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
