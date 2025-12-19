import React from 'react'

function Checkout() {
  return (
    <>
  <div className="checkout">
    <div className="container">
      <ol className="breadcrumb">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li className="active">Cart</li>
      </ol>
      <div className="col-md-9 product-price1">
        <div className="check-out">
          <div className=" cart-items">
            <h3>My Shopping Bag (2)</h3>
            <div className="in-check">
              <ul className="unit">
                <li>
                  <span>Item</span>
                </li>
                <li>
                  <span>Product Name</span>
                </li>
                <li>
                  <span>Unit Price</span>
                </li>
                <li>
                  <span>Stock Status</span>
                </li>
                <li> </li>
                <div className="clearfix"> </div>
              </ul>
              <ul className="cart-header">
                <div className="close1"> </div>
                <li className="ring-in">
                  <a href="single.html">
                    <img
                      src="images/f1.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <span>Woo Dress</span>
                </li>
                <li>
                  <span>$ 60.00</span>
                </li>
                <li>
                  <span>In Stock</span>
                </li>
                <li>
                  {" "}
                  <a href="single.html" className="add-cart cart-check">
                    ADD TO CART
                  </a>
                </li>
                <div className="clearfix"> </div>
              </ul>
              <ul className=" cart-header1">
                <div className="close2"> </div>
                <li className="ring-in">
                  <a href="single.html">
                    <img
                      src="images/f2.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <span>Woo Dress</span>
                </li>
                <li>
                  <span>$ 60.00</span>
                </li>
                <li>
                  <span>In Stock</span>
                </li>
                <li>
                  {" "}
                  <a href="single.html" className="add-cart cart-check">
                    ADD TO CART
                  </a>
                </li>
                <div className="clearfix"> </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 cart-total">
        <a className="continue" href="#">
          Continue to basket
        </a>
        <div className="price-details">
          <h3>Price Details</h3>
          <span>Total</span>
          <span className="total">350.00</span>
          <span>Discount</span>
          <span className="total">---</span>
          <span>Delivery Charges</span>
          <span className="total">100.00</span>
          <div className="clearfix" />
        </div>
        <h4 className="last-price">TOTAL</h4>
        <span className="total final">450.00</span>
        <div className="clearfix" />
        <a className="order" href="#">
          Place Order
        </a>
        <div className="total-item">
          <h3>OPTIONS</h3>
          <h4>COUPONS</h4>
          <a className="cpns" href="#">
            Apply Coupons
          </a>
          <p>
            <a href="#">Log In</a> to use accounts - linked coupons
          </p>
        </div>
      </div>
    </div>
  </div>
  {/**/}
  <div className="shoping">
    <div className="container">
      <div className="shpng-grids">
        <div className="col-md-4 shpng-grid">
          <h3>Free Shipping</h3>
          <p>On Order Over Rs999</p>
        </div>
        <div className="col-md-4 shpng-grid">
          <h3>Order Return</h3>
          <p>Return Within 14days</p>
        </div>
        <div className="col-md-4 shpng-grid">
          <h3>COD</h3>
          <p>Cash On Delivery</p>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
</>

  )
}

export default Checkout