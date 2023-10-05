import React, { useState } from "react";
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // Функція, що при натисканні на кнопку оновлює стейт екземпляра класу
  const onLeaveFeedback = event => {
    switch(event.target.name) {
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
  // Функція, що підраховує загальну кількість відгуків
  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  // Функція, що підраховує відсоток хороших відгуків відгуків
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good+neutral+bad));
  } 

  const total = countTotalFeedback();
  const options = [ good, neutral, bad ];

  return (
    <div className='app'>
      <div className='app_container'>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/>
      </Section>
      <Section title="Statistics">
        {total ? 
        <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={countPositiveFeedbackPercentage()}
          /> :
        <Notification message="There is no feedback"></Notification>
        }
        </Section>        
      </div>
    </div>
  );
}