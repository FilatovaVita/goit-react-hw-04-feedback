import  { useState } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Statistic } from '../Statistic/Statistic';
import { Notification } from '../Notification/Notification';

export const App =()=> {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

 const addFeedback = event => {
   switch (event) {
    case 'good':
      setGood(prevState => prevState + 1);
      break;
    case 'neutral':
      setNeutral(prevState => prevState + 1);
      break;
    case 'bad':
      setBad(prevState => prevState + 1);
      break;
    default:
      return;
  }
};

 const countFeedback = () => {
    const total  = good + neutral + bad;
    return total;
 };
    const countPositiveFeedbackPercentage = () => {
      const positiveFeedbackPercentage = Math.round((good * 100) / countFeedback()) || 0;
      return positiveFeedbackPercentage;
  };

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={addFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistic">
          {countFeedback() ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistic>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }


