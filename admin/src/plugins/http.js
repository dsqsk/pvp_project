import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8081/admin/api'
})

export default http