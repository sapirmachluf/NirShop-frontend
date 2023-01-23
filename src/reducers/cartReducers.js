import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_CLEAR_ITEMS, 
} from "../constants/cartConstants";

let INITIAL_STATE = {
  cartItems: [],
  shippingAddress: {},
  paymentMethod:"PayPal"
};

if (localStorage.getItem("cartItems")) {
  INITIAL_STATE.cartItems = JSON.parse(localStorage.getItem("cartItems"));
} else {
  INITIAL_STATE.cartItems = [];
}
if (localStorage.getItem("shippingAddress")) {
  INITIAL_STATE.shippingAddress = JSON.parse(localStorage.getItem("shippingAddress"));
} else {
  INITIAL_STATE.shippingAddress = {};
}
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        cartItems: [...action.payload],
        // shippingAddress:[...action.payload]
      };
    case CART_REMOVE_ITEM:
      return {
        cartItems: [...action.payload],
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case CART_CLEAR_ITEMS:
      return{
        ...state,
        cartItems:[]
      }

    default:
      return state;
  }
};

export default cartReducer;