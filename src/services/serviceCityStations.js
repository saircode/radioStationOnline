import config from "./config.js";
import axios from 'axios';

export default {
    getCitiesStations(){
        return new Promise((resolve, reject)=> {
            axios({
                url: config.apiUrl+'/api/v1/citystations',
                method: 'GET'
            })
            .then(res=> {
                resolve(res)
            })
            .catch(err=>{
    
            })
        })
    }
}

