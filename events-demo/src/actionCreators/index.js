import shop from '../api/shop'
import * as types from '../actionTypes'

/**
 * 
 * @param {get the books} products 
 */
const getProductsActions = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(getProductsActions(products))
    })
}

/**
 * action: addtocart
 * @param productid
 */

 const addToCartAction = productId =>({
     type: types.ADD_TO_CART,
     productId
 })

 export const addToCart = productId => (dispatch, getState) => {
     if ( getState().products.byId[productId].inventory > 0) {
         dispatch(addToCartAction(productId))
     }
 }

 /**
  * 
  * 
  * check out!
  */

export const checkout = products => (dispatch, getState) => {
    const { cart } = getState()
    dispatch({
        type: types.CHECKOUT_REQUEST
    })
    shop.byProducts(products, () => {
        dispatch({
            type: types.CHECKOUT_SUCCEED,
            cart
        })
    })
    // CHECKOUT_FAILED
}
// 3 steps to create a action: define type, payload, actionCreator
// then reducer
// then shop