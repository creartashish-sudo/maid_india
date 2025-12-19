import React from 'react'

import Slider from "react-slick";

// import '../assets/js/jquery.flexisel'

function ProductDetail() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>
  <div className="single-sec">
    <div className="container">
      <ol className="breadcrumb">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li className="active">Products</li>
      </ol>
      {/* start content */}
      <div className="col-md-9 det">
        <div className="single_left">
          <div className="flexslider">
            <ul className="slides">
              <li data-thumb="images/s11.jpeg">
                <img src="images/s11.jpeg" />
              </li>
              <li data-thumb="images/s22.jpeg">
                <img src="images/s22.jpeg" />
              </li>
              <li data-thumb="images/s33.jpeg">
                <img src="images/s33.jpeg" />
              </li>
              <li data-thumb="images/s44.jpeg">
                <img src="images/s44.jpeg" />
              </li>
            </ul>
          </div>
          {/* FlexSlider */}
          <link
            rel="stylesheet"
            href="css/flexslider.css"
            type="text/css"
            media="screen"
          />
        </div>
        <div className="single-right">
          <h3>American Diamond Famina Ruby Copper, Brass Jewel Set</h3>
          <div className="id">
            <h4>ID: SB2379</h4>
          </div>
          <form action="" className="sky-form">
            <fieldset>
              <section>
                <div className="rating">
                  <input type="radio" name="stars-rating" id="stars-rating-5" />
                  <label htmlFor="stars-rating-5">
                    <i className="icon-star" />
                  </label>
                  <input type="radio" name="stars-rating" id="stars-rating-4" />
                  <label htmlFor="stars-rating-4">
                    <i className="icon-star" />
                  </label>
                  <input type="radio" name="stars-rating" id="stars-rating-3" />
                  <label htmlFor="stars-rating-3">
                    <i className="icon-star" />
                  </label>
                  <input type="radio" name="stars-rating" id="stars-rating-2" />
                  <label htmlFor="stars-rating-2">
                    <i className="icon-star" />
                  </label>
                  <input type="radio" name="stars-rating" id="stars-rating-1" />
                  <label htmlFor="stars-rating-1">
                    <i className="icon-star" />
                  </label>
                  <div className="clearfix" />
                </div>
              </section>
            </fieldset>
          </form>
          <div className="cost">
            <div className="prdt-cost">
              <ul>
                <li>
                  MRP: <del>Rs 55000</del>
                </li>
                <li>Sellling Price:</li>
                <li className="active">Rs 35000</li>
                <a href="#">BUY NOW</a>
              </ul>
            </div>
            <div className="check">
              <p>
                <span
                  className="glyphicon glyphicon-map-marker"
                  aria-hidden="true"
                />
                Enter pin code for delivery &amp; availability
              </p>
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Pin code"
                  />
                </div>
                <button type="submit" className="btn btn-default">
                  Verify
                </button>
              </form>
            </div>
            <div className="clearfix" />
          </div>
          <div className="item-list">
            <ul>
              <li>Material: Silver,Gold</li>
              <li>Color: Red</li>
              <li>Type: Earring &amp; Pendant Set</li>
              <li>Brand: American Diamond</li>
              <li>
                <a href="#">Click here for more details</a>
              </li>
            </ul>
          </div>
          <div className="single-bottom1">
            <h6>Details</h6>
            <p className="prod-desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam. Ut wisi enim ad minim veniam iriure dolor in hendrerit in
              vulputate velit esse molestie consequat.
            </p>
          </div>
        </div>
        <div className="clearfix" />
        <div className="sofaset-info">
          <h4>
            Product Summary: American Diamond Famina Ruby Copper, Brass Jewel
            Set
          </h4>
          <ul>
            <li>Classic and vibrant detailing</li>
            <li>
              Design: Exquisitely crafted necklace set to suit your festive mood
            </li>
            <li>Stones Used: Synthetic stones and beads</li>
            <li>Colour: Brown Jute, Sheron Brown</li>
            <li>Recommended Wear: Festive</li>
            <li>Note: The image has been enlarged for better viewing</li>
            <li>Contents: 4 Pc</li>
            <li>Delivery Time: 7 to 10 days from the Day of Dispatch</li>
          </ul>
        </div>
        {/**/}
        <div className="product-table">
          <h3>
            Specifications of American Diamond Famina Ruby Copper, Brass Jewel
            Set
          </h3>
          <div className="item-sec">
            <h4>Features</h4>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <p>Pearl Type</p>
                  </td>
                  <td>
                    <p>Plastic</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Color</p>
                  </td>
                  <td>
                    <p>Gold</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="item-sec">
            <h4>General</h4>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <p>Base Material</p>
                  </td>
                  <td>
                    <p>Alloy</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Brand</p>
                  </td>
                  <td>
                    <p>Ethnic Jewels</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Precious/Artificial Jewellery</p>
                  </td>
                  <td>
                    <p>Fashion Jewellery</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Model Number</p>
                  </td>
                  <td>
                    <p>ID 4523</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Occasion</p>
                  </td>
                  <td>
                    <p>Wedding &amp; Engagement</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Type</p>
                  </td>
                  <td>
                    <p>Earring &amp; Necklace Set</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Ideal For</p>
                  </td>
                  <td>
                    <p>Women</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="arrivals">
          <h3>Related Products</h3>
          <div className="arrival-grids">
            <ul id="flexiselDemo1">
              <li>
                <a href="product.html">
                  <img src="images/p2.jpg" alt="" />
                  <div className="arrival-info">
                    <h4>Jewellerys #1</h4>
                    <p>Rs 12000</p>
                    <span className="pric1">
                      <del>Rs 18000</del>
                    </span>
                    <span className="disc">[12% Off]</span>
                  </div>
                </a>
                <div className="viw">
                  <a href="product.html"></a>
                  <a href="#">
                    <span
                      className="glyphicon glyphicon-eye-open"
                      aria-hidden="true"
                    />
                    Quick View
                  </a>
                </div>
              </li>
              <li>
                <a href="product.html">
                  <img src="images/p3.jpg" alt="" />
                  <div className="arrival-info">
                    <h4>Jewellerys #1</h4>
                    <p>Rs 14000</p>
                    <span className="pric1">
                      <del>Rs 15000</del>
                    </span>
                    <span className="disc">[10% Off]</span>
                  </div>
                </a>
                <div className="viw">
                  <a href="product.html"></a>
                  <a href="#">
                    <span
                      className="glyphicon glyphicon-eye-open"
                      aria-hidden="true"
                    />
                    Quick View
                  </a>
                </div>
              </li>
              <li>
                <a href="product.html">
                  <img src="images/p4.jpg" alt="" />
                  <div className="arrival-info">
                    <h4>Jewellerys #1</h4>
                    <p>Rs 4000</p>
                    <span className="pric1">
                      <del>Rs 8500</del>
                    </span>
                    <span className="disc">[45% Off]</span>
                  </div>
                </a>
                <div className="viw">
                  <a href="product.html"></a>
                  <a href="#">
                    <span
                      className="glyphicon glyphicon-eye-open"
                      aria-hidden="true"
                    />
                    Quick View
                  </a>
                </div>
              </li>
              <li>
                <a href="product.html">
                  {" "}
                  <img src="images/p5.jpg" alt="" />
                  <div className="arrival-info">
                    <h4>Jewellerys #1</h4>
                    <p>Rs 18000</p>
                    <span className="pric1">
                      <del>Rs 21000</del>
                    </span>
                    <span className="disc">[8% Off]</span>
                  </div>
                </a>
                <div className="viw">
                  <a href="product.html"></a>
                  <a href="#">
                    <span
                      className="glyphicon glyphicon-eye-open"
                      aria-hidden="true"
                    />
                    Quick View
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/**/}
      </div>
      <div className="rsidebar span_1_of_left">
        <section className="sky-form">
          <div className="product_right">
            <h4 className="m_2">
              <span className="glyphicon glyphicon-minus" aria-hidden="true" />
              Categories
            </h4>
            <div className="tab1">
              <ul className="place">
                <li className="sort">Fashion</li>
                <li className="by">
                  <img src="images/do.png" alt="" />
                </li>
                <div className="clearfix"> </div>
              </ul>
              <div className="single-bottom">
                <a href="#">
                  <p>Gifts</p>
                </a>
                <a href="#">
                  <p>Flowers</p>
                </a>
                <a href="#">
                  <p>Shoes</p>
                </a>
                <a href="#">
                  <p>Suits</p>
                </a>
                <a href="#">
                  <p>Dresses</p>
                </a>
              </div>
            </div>
            <div className="tab2">
              <ul className="place">
                <li className="sort">Women Ethnic Wear</li>
                <li className="by">
                  <img src="images/do.png" alt="" />
                </li>
                <div className="clearfix"> </div>
              </ul>
              <div className="single-bottom">
                <a href="#">
                  <p>Sarees &amp; More</p>
                </a>
                <a href="#">
                  <p>Salwar Suits</p>
                </a>
              </div>
            </div>
            <div className="tab3">
              <ul className="place">
                <li className="sort">Personal Care</li>
                <li className="by">
                  <img src="images/do.png" alt="" />
                </li>
                <div className="clearfix"> </div>
              </ul>
              <div className="single-bottom">
                <a href="#">
                  <p>Make Up</p>
                </a>
              </div>
            </div>
            <div className="tab4">
              <ul className="place">
                <li className="sort">Jewellery</li>
                <li className="by">
                  <img src="images/do.png" alt="" />
                </li>
                <div className="clearfix"> </div>
              </ul>
              <div className="single-bottom">
                <a href="#">
                  <p>Fashion</p>
                </a>
                <a href="#">
                  <p>Precious</p>
                </a>
                <a href="#">
                  <p>1 Gram Gold</p>
                </a>
              </div>
            </div>
            <div className="tab5">
              <ul className="place">
                <li className="sort">Specials</li>
                <li className="by">
                  <img src="images/do.png" alt="" />
                </li>
                <div className="clearfix"> </div>
              </ul>
              <div className="single-bottom">
                <a href="#">
                  <p>Cakes</p>
                </a>
                <a href="#">
                  <p>Party Items</p>
                </a>
                <a href="#">
                  <p />
                </a>
                <a href="#">
                  <p>Relax Chairs</p>
                </a>
              </div>
            </div>
            {/*script*/}
            {/* script */}
          </div>
        </section>
        <section className="sky-form">
          <h4>
            <span className="glyphicon glyphicon-minus" aria-hidden="true" />
            DISCOUNTS
          </h4>
          <div className="row row1 scroll-pane">
            <div className="col col-4">
              <label className="checkbox">
                <input type="checkbox" name="checkbox" defaultChecked="" />
                <i />
                Upto - 10% (20)
              </label>
            </div>
            <div className="col col-4">
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                40% - 50% (5)
              </label>
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                30% - 20% (7)
              </label>
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                10% - 5% (2)
              </label>
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                Other(50)
              </label>
            </div>
          </div>
        </section>
        <section className="sky-form">
          <h4>
            <span className="glyphicon glyphicon-minus" aria-hidden="true" />
            Price
          </h4>
          <ul className="dropdown-menu1">
            <li>
              <a href="">
                <div id="slider-range" />
                <input
                  type="text"
                  id="amount"
                  style={{
                    border: 0,
                    fontWeight: "NORMAL",
                    fontFamily: '"Arimo", sans-serif'
                  }}
                />
              </a>
            </li>
          </ul>
        </section>
        {/**/}
        <link rel="stylesheet" type="text/css" href="css/jquery-ui.css" />
        {/**/}
        <section className="sky-form">
          <h4>
            <span className="glyphicon glyphicon-minus" aria-hidden="true" />
            Type
          </h4>
          <div className="row row1 scroll-pane">
            <div className="col col-4">
              <label className="checkbox">
                <input type="checkbox" name="checkbox" defaultChecked="" />
                <i />1 Gram Gold (30)
              </label>
            </div>
            <div className="col col-4">
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                Gold Plated (30)
              </label>
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                Platinum (30)
              </label>
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                Silver (30)
              </label>
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                Jewellery Sets (30)
              </label>
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                Stone Items (30)
              </label>
            </div>
          </div>
        </section>
        <section className="sky-form">
          <h4>
            <span className="glyphicon glyphicon-minus" aria-hidden="true" />
            Brand
          </h4>
          <div className="row row1 scroll-pane">
            <div className="col col-4">
              <label className="checkbox">
                <input type="checkbox" name="checkbox" defaultChecked="" />
                <i />
                Akasana Collectio
              </label>
            </div>
            <div className="col col-4">
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                Colori
              </label>
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                Crafts Hub
              </label>
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                Jisha
              </label>
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                Karatcart
              </label>
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                Titan
              </label>
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i />
                Amuktaa
              </label>
            </div>
          </div>
        </section>
      </div>
      <div className="clearfix" />
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
  




    <div className="slider-container" style={{maxWidth: "100vw"}}>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>

  <div className="arrival-grids">
  <ul id="flexiselDemo1">
    <li>
      <a href="product.html">
        <img src="images/p2.jpg" alt="" />
        <div className="arrival-info">
          <h4>Jewellerys #1</h4>
          <p>Rs 12000</p>
          <span className="pric1">
            <del>Rs 18000</del>
          </span>
          <span className="disc">[12% Off]</span>
        </div>
      </a>
      <div className="viw">
        <a href="product.html"></a>
        <a href="#">
          <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />
          Quick View
        </a>
      </div>
    </li>
    <li>
      <a href="product.html">
        <img src="images/p3.jpg" alt="" />
        <div className="arrival-info">
          <h4>Jewellerys #1</h4>
          <p>Rs 14000</p>
          <span className="pric1">
            <del>Rs 15000</del>
          </span>
          <span className="disc">[10% Off]</span>
        </div>
      </a>
      <div className="viw">
        <a href="product.html"></a>
        <a href="#">
          <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />
          Quick View
        </a>
      </div>
    </li>
    <li>
      <a href="product.html">
        <img src="images/p4.jpg" alt="" />
        <div className="arrival-info">
          <h4>Jewellerys #1</h4>
          <p>Rs 4000</p>
          <span className="pric1">
            <del>Rs 8500</del>
          </span>
          <span className="disc">[45% Off]</span>
        </div>
      </a>
      <div className="viw">
        <a href="product.html"></a>
        <a href="#">
          <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />
          Quick View
        </a>
      </div>
    </li>
    <li>
      <a href="product.html">
        {" "}
        <img src="images/p5.jpg" alt="" />
        <div className="arrival-info">
          <h4>Jewellerys #1</h4>
          <p>Rs 18000</p>
          <span className="pric1">
            <del>Rs 21000</del>
          </span>
          <span className="disc">[8% Off]</span>
        </div>
      </a>
      <div className="viw">
        <a href="product.html"></a>
        <a href="#">
          <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />
          Quick View
        </a>
      </div>
    </li>
  </ul>
</div>

</>

  )
}

export default ProductDetail