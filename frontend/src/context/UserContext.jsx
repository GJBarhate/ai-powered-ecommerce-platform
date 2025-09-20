import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { authDataContext } from './AuthContext'
import axios from 'axios'

// Export context first (fixes fast-refresh warning)
export const userDataContext = createContext()

function UserContext({ children }) {
    const [userData, setUserData] = useState("")
    const { serverUrl } = useContext(authDataContext)

    // Wrap in useCallback to fix missing dependency warning
    const getCurrentUser = useCallback(async () => {
        try {
            const { data } = await axios.get(serverUrl + "/api/user/getcurrentuser", { withCredentials: true })
            setUserData(data)
            console.log(data)
        } catch (error) {
            setUserData(null)
            console.log(error)
        }
    }, [serverUrl])

    useEffect(() => {
        getCurrentUser()
    }, [getCurrentUser])

    const value = { userData, setUserData, getCurrentUser }

    return (
        <userDataContext.Provider value={value}>
            {children}
        </userDataContext.Provider>
    )
}

export default UserContext
