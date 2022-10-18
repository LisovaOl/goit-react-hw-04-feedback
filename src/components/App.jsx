import React, { Component } from 'react';

import Section from './SectionTitle/SectionTitle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import StatData from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = event => {
    const currentButton = event.currentTarget.value;
    this.setState(prevState => ({
      ...prevState,
      [currentButton]: prevState[currentButton] + 1,
    }));
  };

  onCountTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  onPositiveFeedback = () => {
    const positive = this.state.good;
    return Math.round(
      (positive * 100) / (this.onCountTotal() - this.state.neutral)
    );
  };

  render() {
    const buttonNames = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.state.good || this.state.neutral || this.state.bad ? (
          <Section title="Statistics">
            <StatData
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.onCountTotal()}
              positive={this.onPositiveFeedback()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;
