  import axios from 'axios'
import config from '~/config'
import { notify } from "~/plugins/notiwind/index.esm"


export default function () {
  let token 

  //read and convert to object
  let storeObj = JSON.parse( localStorage.getItem('vuex') );
  if (storeObj && storeObj.auth) {
      token = storeObj.auth.token
  }

  // When sending a request, if there is a token, it needs to be attached to the request header
  let instance = axios

  if (token) {
    instance = axios.create({
      baseURL: `${config.baseUrl}`,
      headers: {
        'Access-Control-Allow-Headers': 'x-access-token',
        'X-Access-Token': `${config.token}`,
        'Content-Type': 'application/json',
        // 'Authorization': token,
        // 'Access-Control-Allow-Origin' : '*',
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
  }

  instance.interceptors.response.use(
    (resp) => {
      return resp
    },
    (err) => {
      // Permission denied.
      if ( err.response && err.response.status === 403) {
        //reject and retrieve error message 
        notify({
          group: "error",
          title: 'Error occured',
          text: err.response.data.detail
        }, 6000)
        return Promise.reject(err)
      }
      //  Invalid token, Not Authenticated.
      if (err.response && err.response.status === 401) {
        if (storeObj.auth) {
            delete storeObj['auth'];  //remove the key from object
            delete storeObj['user'];
            localStorage.setItem('vuex', JSON.stringify(storeObj));
        }
        window.location.href = "/login";
      }

      notify({
          group: "error",
          title: 'Error occured',
          text: err.response.data.message
      }, 8000)
      return Promise.reject(err)
    }
  )

  return instance
}