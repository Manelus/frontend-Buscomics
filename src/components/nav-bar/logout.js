import { useEffect } from "react"
import { Navigate } from "react-router"
import Auth from '../services/auth'

const Logout = () => {

    useEffect(() => {
        Auth.logout()
        
    })

    return <Navigate to='/login'>logout</Navigate>
}

export default Logout