import { useState, useEffect } from "react"
import countriesService from "../service/countries"

const Filter = ({countriesNames}) => {

  const [currentCountry, setCurrentCountry] = useState(null)

  useEffect(() => {
    if (countriesNames.length === 1){
      countriesService
        .getCountryData(countriesNames[0])
        .then(country => {
          setCurrentCountry(country)
        })
    }
  }, [countriesNames])

  if (countriesNames.length > 10)
    return <p>Too much</p>

  else if (countriesNames.length === 1){
    if (currentCountry){
      return (
        <div>
          <h1>{currentCountry.name.common}</h1>

          <p>Capital: {currentCountry.capital}</p>
          <p>Area: {currentCountry.area}</p>

          <h2>Languages</h2>

          <ul>
            {console.log((currentCountry.languages))}
          </ul>

          <p>{currentCountry.flag}</p>

        </div>
      )
    }
  }

  return (
    <div>
      <ul>
        {countriesNames.map(name => {
          return (
          <li key={name}>
            <p>{name}</p>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Filter