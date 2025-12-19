import React from 'react'

function Contact() {
  return (
    <>

    <div className="contact">
  <div className="container">
    <ol className="breadcrumb">
      <li>
        <a href="index.html">Home</a>
      </li>
      <li className="active">Contact</li>
    </ol>
    {/*-start-contact--*/}
    <h3>Contact Us</h3>
    <div className="section group">
      <div className="col-md-6 span_1_of_3">
        <div className="contact_info">
          <h4>Find Us Here</h4>
          <div className="map">
            <iframe
              width="100%"
              height={175}
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.co.in/maps?f=q&source=s_q&hl=en&geocode=&q=Lighthouse+Point,+FL,+United+States&aq=4&oq=light&sll=26.275636,-80.087265&sspn=0.04941,0.104628&ie=UTF8&hq=&hnear=Lighthouse+Point,+Broward,+Florida,+United+States&t=m&z=14&ll=26.275636,-80.087265&output=embed"
            />
            <br />
            <small>
              <a
                href="https://maps.google.co.in/maps?f=q&source=embed&hl=en&geocode=&q=Lighthouse+Point,+FL,+United+States&aq=4&oq=light&sll=26.275636,-80.087265&sspn=0.04941,0.104628&ie=UTF8&hq=&hnear=Lighthouse+Point,+Broward,+Florida,+United+States&t=m&z=14&ll=26.275636,-80.087265"
                style={{ color: "#666", textAlign: "left", fontSize: "0.85em" }}
              >
                View Larger Map
              </a>
            </small>
          </div>
        </div>
        <div className="company_address">
          <h4>Company Information :</h4>
          <p>500 Lorem Ipsum Dolor Sit,</p>
          <p>22-56-2-9 Sit Amet, Lorem,</p>
          <p>USA</p>
          <p>Phone:(00) 222 666 444</p>
          <p>Fax: (000) 000 00 00 0</p>
          <p>
            Email: <a href="mailto:info@example.com">info@mycompany.com</a>
          </p>
          <p>
            Follow on: <a href="#">Facebook</a>, <a href="#">Twitter</a>
          </p>
        </div>
      </div>
      <div className="col-md-6 span_2_of_3">
        <div className="contact-form">
          <form>
            <div>
              <span>
                <label>NAME</label>
              </span>
              <span>
                <input name="userName" type="text" className="textbox" />
              </span>
            </div>
            <div>
              <span>
                <label>E-MAIL</label>
              </span>
              <span>
                <input name="userEmail" type="text" className="textbox" />
              </span>
            </div>
            <div>
              <span>
                <label>MOBILE</label>
              </span>
              <span>
                <input name="userPhone" type="text" className="textbox" />
              </span>
            </div>
            <div>
              <span>
                <label>SUBJECT</label>
              </span>
              <span>
                <textarea name="userMsg" defaultValue={" "} />
              </span>
            </div>
            <div>
              <span>
                <input
                  type="submit"
                  className="mybutton"
                  defaultValue="Submit"
                />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

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

export default Contact