import { useState, useEffect } from 'react'
import countriesService from './service/countries'
import Filter from './components/Filter'

const App = () => {
  const [countryName, setCountryName] = useState('')
  const [countriesList, setCountriesList] = useState([])
  
  useEffect(() => {
      countriesService
      .getAllNames()
      .then(countries => {
        const filtered = countries.filter(name => {
          if (countryName)
            return name.includes(countryName)
        })
      setCountriesList(filtered)
    })
  }, [countryName])

  const handleChange = (event) => {
    setCountryName(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <h1>Find Countries</h1>
      <form onSubmit={onSearch}>
        <input value={countryName} onChange={handleChange} />
      </form>

      <Filter countriesNames={countriesList} />

    </div>
  )
}

export default App
