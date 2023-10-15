import instance from 'axios'
import config from '../config/config'

const axios = instance.create({
    baseURL: config.API_ENDPOINT,
    timeout: 10000,
})

export default axios