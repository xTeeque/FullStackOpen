const Notification = ({message}) => {
  const error = {
    color: 'blue',
    fontSize: 24,
    border: '2px solid blue',
    backgroundColor: 'yellow'
  }

  if (message === null) {
    return null
  }

  if (String(message).includes('deleted')) {
    const error = {
      color: 'red',
      fontSize: 24,
      border: '2px solid red',
      backgroundColor: 'green'
    }
    return (
      <div style={error}>
        {message}
      </div>
    )
  }

  return (
    <div style={error}>
      {message}
    </div>
  )
}

export default Notification