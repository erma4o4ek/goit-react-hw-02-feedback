import { Component } from "react";
import Section from './components/Section/Section';
import Feedback from './components/Feedback/Feedback';
import  Notification from './components/Notification/Notification';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const {good} = this.state;
    const percentage = (good*100) / result;
    return Math.round(percentage);
  };

  onLeaveFeedback = event => {
    const {name} = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render () {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const objKey = Object.keys(this.state);

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <Feedback
            options={objKey}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {total === 0 ? (
					<Notification message="No feedback given" />
				) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
        )}
      </div>
    )
  }
};

export default App;



