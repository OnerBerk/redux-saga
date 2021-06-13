import axios from "axios";

export const gestUsers=()=>{
    return axios.get('/users',{
        params:{
            limit:500
        }
    })
}
export const createUser=({firstName,lastName})=>{
    return axios.post('/users',{
        firstName,
        lastName
    })
}
export const deleteUser=(userId)=>{
    return axios.delete(`/users/${userId}`)
}
