import React from "react";
import { getVisibleProducts } from "../../reducers/products";
import { addToCart } from "../../actionCreators"
import { connect } from 'react-redux'
const BooksContainer = ({ products, addToCart }) => (
  <div>
    <h2>BOOOOOKISH</h2>
    {products.map((product) => (
      <div>
        {product.title} : ${product.price}
        Inventory:{product.inventory ? product.inventory : null}
        <button
          onClick={() => addToCart(product.id)}
          disabled={product.inventory > 0 ? "" : "disabled"}
        >
          {product.inventory > 0 ? "add to cart" : "sold out"}
        </button>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state.products),
});
export default connect(mapStateToProps, { addToCart })(BooksContainer);
