import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect (() => {    
    personsService
      .getAll()
      .then(initialPersons =>{
        setPersons(initialPersons)
      })
  }, [])

  const clearInputs = () => {
    setNewName('')
    setNewPhone('')
  }

  const throwMessage = (message) => {
    setErrorMessage(message)
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = { name: newName, number: newPhone }

    if (persons.map(person => person.name).includes(personObject.name)) {
      if (persons.map(person => person.number).includes(personObject.number)) {
        return alert(`${personObject.name} is already added to phonebook`)
      } else {
        if (window.confirm(`Do you want to update ${personObject.name}'s number?`)) {
          const existingPerson = persons.find(person => person.name === personObject.name)
          personsService
            .update(existingPerson.id, personObject)
            .then(updatedPerson => {
              setPersons(persons.map(p => p.id === updatedPerson.id ? updatedPerson : p))
              clearInputs()
              throwMessage(`${updatedPerson.name} number updated to: ${updatedPerson.number}`)
            })
            .catch(error => {
              throwMessage(`${personObject.name} has been deleted from the server`)
              setPersons(persons.filter(person => person.name !== personObject.name))
            })
        }
      }
    } else {
      personsService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          throwMessage(`${returnedPerson.name} added to the DB`)
          clearInputs()
        })
    }
  }

  const handleRemove = (id) => {
    if (window.confirm("Do you want to remove this person?")) {
      personsService.remove(id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={errorMessage} />

      <Filter onChange={setFilter} />

      <h3>add a new</h3>
      
      <PersonForm onSubmit={addPerson} newName={newName} newPhone={newPhone} setNewPhone={setNewPhone} setNewName={setNewName} />

      <h3>Numbers</h3>

      <Persons persons={persons} filter={filter} remove={handleRemove} />
    </div>
  )
}

export default App