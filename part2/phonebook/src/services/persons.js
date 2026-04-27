import axios from 'axios'
const baseUrl = 'http://localhost:3000/persons'

const getAll = () => axios.get(baseUrl).then(response => response.data)

const create = (personObject) => {
  const request = axios.post(baseUrl, personObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const update = (id, newPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, newPerson)
  return request.then(response => response.data)
}

export default {getAll, create, remove, update}