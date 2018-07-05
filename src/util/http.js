import axios from 'axios'
import store from '../store'
import router from '../routes/'
import {getCookie,setCookie} from "./util";



export function fetch(name,passwd){
return new Promise((resolve,reject)=>{
  axios.get('http://www.honor99.com/blood_station/visit.php',{
    params:{
      name:name,
      password:passwd
    }
  }).then(response=>{
    resolve(response.data)
  }).catch(err=>{
    reject(err)
  })
})
}


