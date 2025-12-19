import React from 'react'

function Register() {
  return (
    <>
  <div className="container">
    <ol className="breadcrumb">
      <li>
        <a href="index.html">Home</a>
      </li>
      <li className="active">Account</li>
    </ol>
    <div className="registration">
      <div className="registration_left">
        <h2>
          new user? <span> create an account </span>
        </h2>
        {/* [if IE] 
				< link rel='stylesheet' type='text/css' href='ie.css'/>  
			 [endif] */}
        {/* [if lt IE 7]>  
				< link rel='stylesheet' type='text/css' href='ie6.css'/>  
			 <! [endif] */}
        <div className="registration_form">
          {/* Form */}
          <form id="registration_form" >
            <div>
              <label  style={{width: "100%"}}>
                <input
                  placeholder="first name:"
                  type="text"
                  tabIndex={1}
                  required=""
                  autofocus=""
                />
              </label>
            </div>
            <div>
              <label style={{width: "100%"}}>
                <input
                  placeholder="last name:"
                  type="text"
                  tabIndex={2}
                  required=""
                  autofocus=""
                />
              </label>
            </div>
            <div>
              <label  style={{width: "100%"}}>
                <input
                  placeholder="email address:"
                  type="email"
                  tabIndex={3}
                  required=""
                />
              </label>
            </div>
            <div>
              <label  style={{width: "100%"}}>
                <input
                  placeholder="Mobile:"
                  type="email"
                  tabIndex={3}
                  required=""
                />
              </label>
            </div>
            <div className="sky_form1">
              <ul>
                <li>
                  <label className="radio left">
                    <input type="radio" name="radio" defaultChecked="" />
                    <i />
                    Male
                  </label>
                </li>
                <li>
                  <label className="radio">
                    <input type="radio" name="radio" />
                    <i />
                    Female
                  </label>
                </li>
                <div className="clearfix" />
              </ul>
            </div>
            <div>
              <label style={{width: "100%"}}>
                <input
                  placeholder="password"
                  type="password"
                  tabIndex={4}
                  required=""
                />
              </label>
            </div>
            <div>
              <label  style={{width: "100%"}}>
                <input
                  placeholder="retype password"
                  type="password"
                  tabIndex={4}
                  required=""
                />
              </label>
            </div>
            <div>
              <input
                type="submit"
                defaultValue="create an account"
                id="register-submit"
              />
            </div>
            <div className="sky-form">
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />i agree to mobilya.com &nbsp;
                <a className="terms" href="#">
                  {" "}
                  terms of service
                </a>{" "}
              </label>
            </div>
          </form>
          {/* /Form */}
        </div>
      </div>
      <div className="registration_left">
        <h2>existing user</h2>
        <div className="registration_form">
          {/* Form */}
          <form id="registration_form">
            <div>
              <label  style={{width: "100%"}}>
                <input
                  placeholder="email:"
                  type="email"
                  tabIndex={3}
                  required=""
                />
              </label>
            </div>
            <div>
              <label  style={{width: "100%"}}>
                <input
                  placeholder="password"
                  type="password"
                  tabIndex={4}
                  required=""
                />
              </label>
            </div>
            <div>
              <input
                type="submit"
                defaultValue="sign in"
                id="register-submit"
              />
            </div>
            <div className="forget">
              <a href="#">forgot your password</a>
            </div>
          </form>
          {/* /Form */}
        </div>
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

export default Register