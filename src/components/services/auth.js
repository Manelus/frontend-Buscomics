import axios from "axios";
import { Navigate } from "react-router-dom";
import authHeader from "./auth-header";

const url = 'http://localhost:4000/'


class AuthService {
    login(email, password) {
        try {
            return axios.post(url + 'tienda/signin', {
                email,
                password
            }).then(response=>{
                if (response.data) {
                    localStorage.setItem("token", JSON.stringify(response.data.token));
                }
                return true;

            }
            )
        } catch (error) {
            return false;
        }
    } 

    logout(){
        axios.get(url + 'tienda/logout')
        localStorage.removeItem('token')
        return <Navigate to='/login' />
    } 

   
    async register(nombre, email, password){
        try {
            const res = await axios.post(url + 'tienda/signup', {
                nombre, 
                email, 
                password
            })
            console.log(res)
            return true//this.login(email, password)
            
        } catch (error) {
            console.log(error)
            throw new Error(error.message)
        }
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('/tienda/id/:id'))
    }

    async registrar(nombre, precio, autor, personaje, imagen, nombre_tienda, enlace){
        try {
            const res = await axios.post(url + 'comics/register', {
                nombre, 
                precio, 
                autor,
                personaje,
                imagen,
                nombre_tienda,
                enlace
            }, { headers: authHeader() })
            console.log(res)
            return true
            
        } catch (error) {
            console.log(error)
            throw new Error(error.message)
        }
    }

}

export default new AuthService()