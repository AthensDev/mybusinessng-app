import request from '../axios.js'
import config from '~/config'

export default {
  // Log in
  async login (data) {
    return await request().post(`${config.baseUrl}/login`, data)

  },
  
  async register (data) {
    const reqHeaders = {
        'headers': {
            'Access-Control-Allow-Headers': 'x-access-token',
            'X-Access-Token': `${config.token}`,
        }
    }
    return await request().post(`${config.baseUrl}/vendor/signup`, data, reqHeaders)
  },

  async user () {
    return await request().get(`${config.baseUrl}/user`)
  },
}