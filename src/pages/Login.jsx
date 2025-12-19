import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
  <div className="login_sec">
    <div className="container">
      <ol className="breadcrumb">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li className="active">Login</li>
      </ol>
      <h2>Login</h2>
      <div className="col-md-6 log">
        <p>Welcome, please enter the folling to continue.</p>
        <p>
          If you have previously Login with us, <span>click here</span>
        </p>
        <form>
          <h5>Username:</h5>
          <input type="text" defaultValue="" />
          <h5>Password:</h5>
          <input type="password" defaultValue="" />
          <input type="submit" defaultValue="Login" />
          <Link className="acount-btn" to="/register">
            Create an Account
          </Link>
        </form>
        <a href="#">Forgot Password ?</a>
      </div>
      <div className="clearfix" />
    </div>
  </div>
  {/**/}
  <div className="shoping">
    <div className="container">
      <div className="shpng-grids">
        <div className="col-md-4 shpng-grid">
          <h3>Free Shipping</h3>
          <p>On Order Over Rs 999</p>
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
  {/**/}
  <div className="footer">
    <div className="container">
      <div className="ftr-grids">
        <div className="col-md-3 ftr-grid">
          <h4>About Us</h4>
          <ul>
            <li>
              <a href="#">Who We Are</a>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
            </li>
            <li>
              <a href="#">Our Sites</a>
            </li>
            <li>
              <a href="#">In The News</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 ftr-grid">
          <h4>Customer service</h4>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Cancellation</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Bulk Orders</a>
            </li>
            <li>
              <a href="#">Buying Guides</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 ftr-grid">
          <h4>Your account</h4>
          <ul>
            <li>
              <a href="account.html">Your Account</a>
            </li>
            <li>
              <a href="#">Personal Information</a>
            </li>
            <li>
              <a href="#">Addresses</a>
            </li>
            <li>
              <a href="#">Discount</a>
            </li>
            <li>
              <a href="#">Track your order</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 ftr-grid">
          <h4>Categories</h4>
          <ul>
            <li>
              <a href="#">&gt; Wedding</a>
            </li>
            <li>
              <a href="#">&gt; Jewellerys</a>
            </li>
            <li>
              <a href="#">&gt; Shoes</a>
            </li>
            <li>
              <a href="#">&gt; Flowers</a>
            </li>
            <li>
              <a href="#">&gt; Cakes</a>
            </li>
            <li>
              <a href="#">...More</a>
            </li>
          </ul>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
</>

  )
}

export default Login