import axios from 'axios'

const getAllNames = () => {
  return axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => (response.data).map(country => country.name.common))
}

const getCountryData = (countryName) => {
  return axios
  .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countryName}`)
  .then(response => response.data)
}

export default {getAllNames, getCountryData}