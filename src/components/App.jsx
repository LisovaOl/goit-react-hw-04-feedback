import React, { useState } from 'react';

import Section from './SectionTitle/SectionTitle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import StatData from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad })

  const onLeaveFeedback = event => {
    const currentButton = event.currentTarget.value;
    switch (currentButton) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const onCountTotal = () => {
    return good + neutral + bad;
  };

  const onPositiveFeedback = () => {
    const positive = good;
    return Math.round((positive * 100) / onCountTotal());
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {good || neutral || bad ? (
        <Section title="Statistics">
          <StatData
            good={good}
            neutral={neutral}
            bad={bad}
            total={onCountTotal()}
            positive={onPositiveFeedback()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}
