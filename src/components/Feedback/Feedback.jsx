import css from './Feedback.module.css'

const Feedback = ({ feedback }) => {
    return (
        <div className={css.feedbackContainer}>
            <p className={css.FeedbackItem}>Good: {feedback.good}</p>
            <p className={css.FeedbackItem}>Neutral: {feedback.neutral}</p>
            <p className={css.FeedbackItem}>Bad: {feedback.bad}</p>
        </div>
    )
}
export default Feedback