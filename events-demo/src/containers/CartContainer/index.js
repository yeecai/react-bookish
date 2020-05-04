/**
 * a cart with map of products and a button to add up
 */
import React from 'react'
import { connect } from 'react-redux'
import { checkout } from '../../actionCreators'
import { getTotal, getCartProducts } from '../../reducers'

const CartContainer = ({ products, total, checkout }) => {
    const hasProducts = products.length > 0;
    return (
        <div>
            <h3>Welcome to your shopping cart!</h3>
            <div>
                <div>
                    {
                        products.map(product => 
                            <div key={product.id}> {product.title} --> ${ product.price }
                            {product.quantity ? `* ${product.quantity}` : null}

                            </div>)
                    }
                </div>
                <p>Total price is {total}</p>
            </div>
            <button
                onClick={() => checkout(products)}
                disabled={hasProducts ? '' : 'disabled'}
            >
                Check out!
            </button>
        </div>
    )
}

const mapStateToProps = ( state ) => ({
    products: getCartProducts(state),
    total: getTotal(state)
})

export default connect(
    mapStateToProps,
    { checkout }
)(CartContainer)