// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
  } from "../constants/cartConstants";
  
export const addToCart = (id, qty) => async dispatch => {
    // if cart exist in localstorage, use it, otherwise set to empty array
    const cartItems = localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [];


    // check if item exist in cart
    const duplicates = cartItems.filter(item => item._id == id)

    // if not exist, proceed
    if (duplicates.length === 0) {
        // prerp product data
        const { data } = await axios.get(`https://nirshop-apinew.onrender.com/api/products/${id}`)
        const productToAdd = {
            ...data,
            qty
        }

        // add product to cart
        cartItems.push(productToAdd)

        // add cart to local storege
        localStorage.setItem('cartItems', JSON.stringify(cartItems))

        // add cart to redux
        dispatch({
            type: CART_ADD_ITEM,
            payload: cartItems,
        })

    }
    // if do exist, change qty
    else {
        // prerp product data
        const index = cartItems.indexOf(duplicates[0])
        cartItems[index].qty = qty

        // add cart to local storege
        localStorage.setItem('cartItems', JSON.stringify(cartItems))

        // add cart to redux
        dispatch({
            type: CART_ADD_ITEM,
            payload: cartItems,
        })

    }
}



export const removeFromCart = (id) => (dispatch, getState) => {
    // if cart exist in localstorage, use it, otherwise set to empty array
    const cartItems = localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [];
    // check if item exist in cart
    const duplicates = cartItems.filter(item => item._id == id)

    // if not exist, do nothing
    if (duplicates.length === 0) {
        // add cart to local storege
        localStorage.setItem('cartItems', JSON.stringify(cartItems))

        // add cart to redux
        dispatch({
            type: CART_REMOVE_ITEM,
            payload: cartItems,
        })
    } else {

        const index = cartItems.indexOf(duplicates[0])
        cartItems.splice(index, 1)


        // add cart to local storege
        localStorage.setItem('cartItems', JSON.stringify(cartItems))

        // add cart to redux
        dispatch({
            type: CART_REMOVE_ITEM,
            payload: cartItems,
        })

    }

}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })
        localStorage.setItem('shippingAddress', JSON.stringify(data))
    }

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    })
        localStorage.setItem('paymentMethod', JSON.stringify(data))
    }