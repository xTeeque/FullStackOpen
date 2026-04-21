import { useState } from 'react'

const Button = ({operation, text}) => {
  return <button onClick={operation} >{text}</button>
}

const Stats = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if (all === 0)
    return <p>No feedback given</p>
  else return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><p>good</p></td>
            <td><p>{good}</p></td>
          </tr>
          <tr>
            <td><p>neutral</p></td>
            <td><p>{neutral}</p></td>
          </tr>
          <tr>
            <td><p>bad</p></td>
            <td><p>{bad}</p></td>
          </tr>
          <tr>
            <td><p>all</p></td>
            <td><p>{all}</p></td>
          </tr>
          <tr>
            <td><p>average</p></td>
            <td><p>{((good - bad) / all).toFixed(1)}</p></td>
          </tr>
          <tr>
            <td><p>positive</p></td>
            <td><p>{((good / all) * 100).toFixed(1)} %</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      
      <Button operation={() => {setGood(good + 1)}} text={"good"}/>
      <Button operation={() => {setNeutral(neutral + 1)}} text={"neutral"}/>
      <Button operation={() => {setBad(bad + 1)}} text={"bad"}/>
      
      <h1>statistics</h1>

      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App