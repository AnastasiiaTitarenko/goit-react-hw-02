import css from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
    return (
        <div className={css.feedbackContainer}>
            <p className={css.FeedbackItem}>Good: {feedback.good}</p>
            <p className={css.FeedbackItem}>Neutral: {feedback.neutral}</p>
            <p className={css.FeedbackItem}>Bad: {feedback.bad}</p>
            <p className={css.FeedbackItem}>Total: {totalFeedback}</p>
            <p className={css.FeedbackItem}>Positive Feedback:{positivePercentage}%</p>
        </div>
    )
}
export default Feedback