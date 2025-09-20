import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { authDataContext } from './AuthContext'
import axios from 'axios'
import { userDataContext } from './UserContext'
import { toast } from 'react-toastify'

// Export context first (removes fast-refresh warning)
export const shopDataContext = createContext()

function ShopContext({ children }) {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const { userData } = useContext(userDataContext)
    const [showSearch, setShowSearch] = useState(false)
    const { serverUrl } = useContext(authDataContext)
    const [cartItem, setCartItem] = useState({})
    const [loading, setLoading] = useState(false)
    const currency = '₹'
    const delivery_fee = 40

    const getProducts = useCallback(async () => {
        try {
            const { data } = await axios.get(serverUrl + "/api/product/list")
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }, [serverUrl])

    const addtoCart = async (itemId, size) => {
        if (!size) return console.log("Select Product Size")
        const cartData = structuredClone(cartItem)

        if (cartData[itemId]) {
            cartData[itemId][size] = (cartData[itemId][size] || 0) + 1
        } else {
            cartData[itemId] = { [size]: 1 }
        }

        setCartItem(cartData)

        if (userData) {
            setLoading(true)
            try {
                await axios.post(serverUrl + "/api/cart/add", { itemId, size }, { withCredentials: true })
                toast.success("Product Added")
            } catch (error) {
                console.log(error)
                toast.error("Add Cart Error")
            } finally {
                setLoading(false)
            }
        }
    }

    const getUserCart = useCallback(async () => {
        try {
            const { data } = await axios.post(serverUrl + '/api/cart/get', {}, { withCredentials: true })
            setCartItem(data)
        } catch (error) {
            console.log(error)
        }
    }, [serverUrl])

    const updateQuantity = async (itemId, size, quantity) => {
        const cartData = structuredClone(cartItem)
        cartData[itemId][size] = quantity
        setCartItem(cartData)

        if (userData) {
            try {
                await axios.post(serverUrl + "/api/cart/update", { itemId, size, quantity }, { withCredentials: true })
            } catch (error) {
                console.log(error)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                if (cartItem[items][item] > 0) totalCount += cartItem[items][item]
            }
        }
        return totalCount
    }

    const getCartAmount = () => {
        let totalAmount = 0
        for (const items in cartItem) {
            const itemInfo = products.find(p => p._id === items)
            for (const item in cartItem[items]) {
                if (cartItem[items][item] > 0) totalAmount += itemInfo.price * cartItem[items][item]
            }
        }
        return totalAmount
    }

    useEffect(() => { getProducts() }, [getProducts])
    useEffect(() => { getUserCart() }, [getUserCart])

    const value = {
        products,
        currency,
        delivery_fee,
        getProducts,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItem,
        addtoCart,
        getCartCount,
        setCartItem,
        updateQuantity,
        getCartAmount,
        loading
    }

    return (
        <shopDataContext.Provider value={value}>
            {children}
        </shopDataContext.Provider>
    )
}

export default ShopContext
