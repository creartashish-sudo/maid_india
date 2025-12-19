import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [weddingDropDown,setWeddingDropDown] = useState(false)

  return (
    <>
  <div className="top_bg">
    <div className="container">
      <div className="header_top-sec">
        <div className="top_right">
          <ul>
            <li>
              <Link to="/">help</Link>
            </li>
            |
            <li>
              <Link to="contact">Contact</Link>
            </li>
            |
            <li>
              <Link to="/login">Track Order</Link>
            </li>
          </ul>
        </div>
        <div className="top_left">
          <ul>
            <li className="top_link">
              Email:<a href="mailto:info@example.com">mail@example.com</a>
            </li>
            |
            <li className="top_link">
              <Link to="/login">My Account</Link>
            </li>
          </ul>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  <div className="header-top">
    <div className="header-bottom">
      <div className="container" style={{display: "flex",alignItems: "center"}}>
        <div className="logo">
          <Link to="/">
            <h1>Wedding Store</h1>
          </Link>
        </div>
        {/**/}
        <div className="top-nav">
          <ul className="memenu skyblue">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className='grid'>
              <Link to="#" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Wedding</Link>
              <div className={`mepanel ${weddingDropDown ? "" : "hidden"}`}>
                <div className="row" >
                  <div className="col1 me-one">
                    <h4>Shop</h4>
                    <ul>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>New Arrivals</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Men</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Women</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Accessories</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Kids</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>login</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Brands</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>My Shopping Bag</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col1 me-one">
                    <h4>Style Zone</h4>
                    <ul>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Men</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Women</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Brands</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Kids</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Accessories</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Style Videos</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col1 me-one">
                    <h4>Popular Brands</h4>
                    <ul>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Levis</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Persol</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Nike</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Edwin</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>New Balance</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Jack &amp; Jones</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Paul Smith</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Ray-Ban</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Wood Wood</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="grid">
              <Link to="#" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Bride Style</Link>
              <div className={`mepanel ${weddingDropDown ? "" : "hidden"}`}>
                <div className="row">
                  <div className="col1 me-one">
                    <h4>Shop</h4>
                    <ul>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>New Arrivals</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Men</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Women</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Accessories</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Kids</Link>
                      </li>
                      <li>
                        <a href="login.html">login</a>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Brands</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>My Shopping Bag</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col1 me-one">
                    <h4>Style Zone</h4>
                    <ul>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Men</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Women</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Brands</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Kids</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Accessories</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Style Videos</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col1 me-one">
                    <h4>Popular Brands</h4>
                    <ul>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Levis</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Persol</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Nike</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Edwin</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>New Balance</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Jack &amp; Jones</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Paul Smith</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Ray-Ban</Link>
                      </li>
                      <li>
                        <Link to="/product" onClick={()=>setWeddingDropDown(!weddingDropDown)}>Wood Wood</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/type">Typo</Link>
            </li>
            <li className="active">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="clearfix"> </div>
        </div>
        {/**/}
        <div className="cart box_1">
          <a href="checkout.html">
            <h3>
              {" "}
              <div className="total">
                <span className="simpleCart_total" /> (
                <span
                  id="simpleCart_quantity"
                  className="simpleCart_quantity"
                />
                )
              </div>
              <span
                className="glyphicon glyphicon-shopping-cart"
                aria-hidden="true"
              />
            </h3>
          </a>
          <p>
            <a href="javascript:;" className="simpleCart_empty">
              Empty Cart
            </a>
          </p>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
        {/**/}
      </div>
      <div className="clearfix"> </div>
    </div>
  </div>
</>

  )
}

export default Header