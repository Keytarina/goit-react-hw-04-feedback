import React, { Component } from "react";

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  // Функція, що при натисканні на кнопку оновлює стейт екземпляра класу
  onLeaveFeedback = event => {
    this.setState( prevState => { 
      return { [event.target.name]: (prevState[event.target.name] + 1) };
    });
  };
  // Функція, що підраховує загальну кількість відгуків
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  // Функція, що підраховує відсоток хороших відгуків відгуків
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good+neutral+bad));
  } 

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const options = Object.keys(this.state);

    return (
      <div className='app'>
        <div className='app_container'>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          {total ? 
          <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={this.countPositiveFeedbackPercentage()}
           /> :
          <Notification message="There is no feedback"></Notification>
          }
          </Section>        
      </div>
      </div>
    );
  };

}