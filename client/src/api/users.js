import axios from "axios";

export const gestUsers=()=>{
    return axios.get('/users',{
        params:{
            limit:500
        }
    })
}