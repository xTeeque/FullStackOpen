const Persons = ({persons, filter, remove}) => {
  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <div>
      {personsToShow.map(person => {
        return (
          <p key={person.id}>
            {person.name} {person.number}
            <button onClick={() => remove(person.id)}>delete</button>
          </p>
        )
      })}
    </div>
  )
}

export default Persons
