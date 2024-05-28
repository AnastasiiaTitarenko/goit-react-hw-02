import css from "./Options.module.css"

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  
  return (
    <div className={css.OptionsContainer}>
      <button className={css.OptionsButton} onClick={() => updateFeedback('good')}>Good</button>
      <button className={css.OptionsButton}  onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button className={css.OptionsButton}  onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button className={css.OptionsResetButton} onClick={resetFeedback}>Reset</button>
      )}
      <p>Total Feedback: {totalFeedback}</p>
    </div>
  )
}

export default Options
