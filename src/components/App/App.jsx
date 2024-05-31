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
  const [showFeedback, setShowFeedback] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
    setShowFeedback (true);
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback === 0 ? 0 : Math.round((feedback.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  return (
    <>
      <Description />
      <Options
            updateFeedback={updateFeedback}
            totalFeedback={totalFeedback}
            resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <>
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        </>
      ) : (
      <Notification message="No feedback yet." />
      )}
    </>
  );
}

export default App
