import axios from 'axios'
import {baseURL} from '../config'
function getIndex(){
  return new Promise(
    function(resolve,reject){
      axios.get(baseURL+'/index',).then(result=>{
        resolve(result.data)
      })
    }
  )
}
export {
  getIndex
}