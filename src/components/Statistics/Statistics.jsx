export const Statistics = ({ good, neutral, bad , total ,positivePercentage}) => {
    return <div>
      <p>Good:{good}</p>
  <p>Neutral:{neutral}</p>
  <p>Bad:{bad}</p>
  <p>total:{total}</p>
  <p>PositiveFeedback:{positivePercentage}</p>
</div>
}