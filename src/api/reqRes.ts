import axios from "axios";

//Constante que contiene la conexión a nuestra API
export const reqResApi = axios.create({
    baseURL:'https://reqres.in/api' 
})