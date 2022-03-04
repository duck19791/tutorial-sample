import axios from 'axios'

const instance = axios.create({
    baseURL : "https://random-data-api.com/api/"
})

export async function getRandomUser(size=10){
    const users = await instance.get(`/users/random_user?size=${size}`)
    return users
}

export async function getRandomFlag(size=10){
    const flags = await instance.get(`/nation/random_nation?size=${size}`)
    return flags
}