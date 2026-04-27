const Filter = ({onChange}) => {
  return (
    <div>
      <p>filter shown with</p>
      <input onChange={(event) => {onChange(event.target.value)}} />
    </div>
  )
}

export default Filter
