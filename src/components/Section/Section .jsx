import React, { Component } from "react";
import {Statistics} from '../Statistics/Statistics'
import {FeedbackOptions} from '../FeedbackOptions/FeedbackOptions'

class Section extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  handelOnButtonClick = (evt) => {
    this.setState({good:this.props.good, neutral:this.props.neutral, bad:this.props.bad})
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad
    console.log(total)
  }


  render() {
      const { good, neutral, bad } = this.state;
        return  <section>
          <h1>Please leave feedback</h1>
          <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={this.handelOnButtonClick}></FeedbackOptions>
         
          <h2>Statistics</h2>
          
          <Statistics good={good} neutral={neutral} bad={bad} total={6} positivePercentage={54}></Statistics> 
          
</section>
    }
}
export default Section;