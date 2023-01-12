import React, { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Statistic } from '../Statistic/Statistic';
import { Notification } from '../Notification/Notification';

export class App extends Component {
  static defaultProps = {
    feedbackTypes: ['good', 'neutral', 'bad'],
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback()) || 0;

  };

  render() {
    const { good, neutral, bad } = this.state;
    const { feedbackTypes } = this.props;
    return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={feedbackTypes} onLeaveFeedback={this.addFeedback}></FeedbackOptions>
        </Section>
        <Section title='Statistic'>
          {this.countTotalFeedback() === 0 ? (<Notification message='There is no feedback' />) :
            (<Statistic good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}></Statistic>)}
        </Section>
      </div>
    );
  }
}
