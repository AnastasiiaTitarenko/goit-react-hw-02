import { useState, useEffect } from 'react'

import css from './App.module.css'
import Feedback from '../Feedback/Feedback'
import Options from '../Options/Options'
import Notification from '../Notification/Notification';
import Description from '../ Description/Description';

function App() {

  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = localStorage.getItem('feedback');
    return storedFeedback ? JSON.parse(storedFeedback) :
      {
        good: 0,
        neutral: 0,
        bad: 0
      };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    })
  };

  return (
    <>
      <Description />
      
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positivePercentage={positiveFeedback}
      />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {isNaN(positiveFeedback) ? 0 : positiveFeedback}%</p>
      {totalFeedback === 0 && <Notification message="No feedback yet." />}
    </>
  );
}

export default App
