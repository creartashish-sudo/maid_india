import React from 'react'

function Type() {
  return (
    <div className="pages">
  <div className="container">
    <ol className="breadcrumb">
      <li>
        <a href="index.html">Home</a>
      </li>
      <li className="active">Typo</li>
    </ol>
    <h2 className="top">Typography</h2>
    <div className="headdings">
      <h3 className="ghj">Headings</h3>
      <div className="bs-example">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <h1 id="h1.-bootstrap-heading">
                  h1. Bootstrap heading
                  <a className="anchorjs-link" href="#h1.-bootstrap-heading">
                    <span className="anchorjs-icon" />
                  </a>
                </h1>
              </td>
              <td className="type-info">Semibold 36px</td>
            </tr>
            <tr>
              <td>
                <h2 id="h2.-bootstrap-heading">
                  h2. Bootstrap heading
                  <a className="anchorjs-link" href="#h2.-bootstrap-heading">
                    <span className="anchorjs-icon" />
                  </a>
                </h2>
              </td>
              <td className="type-info">Semibold 30px</td>
            </tr>
            <tr>
              <td>
                <h3 id="h3.-bootstrap-heading">
                  h3. Bootstrap heading
                  <a className="anchorjs-link" href="#h3.-bootstrap-heading">
                    <span className="anchorjs-icon" />
                  </a>
                </h3>
              </td>
              <td className="type-info">Semibold 24px</td>
            </tr>
            <tr>
              <td>
                <h4 id="h4.-bootstrap-heading">
                  h4. Bootstrap heading
                  <a className="anchorjs-link" href="#h4.-bootstrap-heading">
                    <span className="anchorjs-icon" />
                  </a>
                </h4>
              </td>
              <td className="type-info">Semibold 18px</td>
            </tr>
            <tr>
              <td>
                <h5 id="h5.-bootstrap-heading">
                  h5. Bootstrap heading
                  <a className="anchorjs-link" href="#h5.-bootstrap-heading">
                    <span className="anchorjs-icon" />
                  </a>
                </h5>
              </td>
              <td className="type-info">Semibold 14px</td>
            </tr>
            <tr>
              <td>
                <h6>h6. Bootstrap heading</h6>
              </td>
              <td className="type-info">Semibold 12px</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="Buttons">
      <h3 className="ghj">Buttons</h3>
      <h1 className="b1">
        <a href="#">
          <span className="label label-default">Default</span>
        </a>
        <a href="#">
          <span className="label label-primary">Primary</span>
        </a>
        <a href="#">
          <span className="label label-success">Success</span>
        </a>
        <a href="#">
          <span className="label label-info">Info</span>
        </a>
        <a href="#">
          <span className="label label-warning">Warning</span>
        </a>
        <a href="#">
          <span className="label label-danger">Danger</span>
        </a>
      </h1>
      <h2 className="b2">
        <a href="#">
          <span className="label label-default">Default</span>
        </a>
        <a href="#">
          <span className="label label-primary">Primary</span>
        </a>
        <a href="#">
          <span className="label label-success">Success</span>
        </a>
        <a href="#">
          <span className="label label-info">Info</span>
        </a>
        <a href="#">
          <span className="label label-warning">Warning</span>
        </a>
        <a href="#">
          <span className="label label-danger">Danger</span>
        </a>
      </h2>
      <h3 className="b3">
        <a href="#">
          <span className="label label-default">Default</span>
        </a>
        <a href="#">
          <span className="label label-primary">Primary</span>
        </a>
        <a href="#">
          <span className="label label-success">Success</span>
        </a>
        <a href="#">
          <span className="label label-info">Info</span>
        </a>
        <a href="#">
          <span className="label label-warning">Warning</span>
        </a>
        <a href="#">
          <span className="label label-danger">Danger</span>
        </a>
      </h3>
      <h4 className="b4">
        <a href="#">
          <span className="label label-default">Default</span>
        </a>
        <a href="#">
          <span className="label label-primary">Primary</span>
        </a>
        <a href="#">
          <span className="label label-success">Success</span>
        </a>
        <a href="#">
          <span className="label label-info">Info</span>
        </a>
        <a href="#">
          <span className="label label-warning">Warning</span>
        </a>
        <a href="#">
          <span className="label label-danger">Danger</span>
        </a>
      </h4>
      <h5 className="b5">
        <a href="#">
          <span className="label label-default">Default</span>
        </a>
        <a href="#">
          <span className="label label-primary">Primary</span>
        </a>
        <a href="#">
          <span className="label label-success">Success</span>
        </a>
        <a href="#">
          <span className="label label-info">Info</span>
        </a>
        <a href="#">
          <span className="label label-warning">Warning</span>
        </a>
        <a href="#">
          <span className="label label-danger">Danger</span>
        </a>
      </h5>
      <h6 className="b6">
        <a href="#">
          <span className="label label-default">Default</span>
        </a>
        <a href="#">
          <span className="label label-primary">Primary</span>
        </a>
        <a href="#">
          <span className="label label-success">Success</span>
        </a>
        <a href="#">
          <span className="label label-info">Info</span>
        </a>
        <a href="#">
          <span className="label label-warning">Warning</span>
        </a>
        <a href="#">
          <span className="label label-danger">Danger</span>
        </a>
      </h6>
    </div>
    <div className="progress-bars">
      <h3 className="ghj">Progress Bars</h3>
      <div className="tab-content">
        <div className="tab-pane active" id="domprogress">
          <div className="progress">
            <div
              className="progress-bar progress-bar-primary"
              style={{ width: "20%" }}
            />
          </div>
          <p>
            Info with <code>progress-bar-info</code> class.
          </p>
          <div className="progress">
            <div
              className="progress-bar progress-bar-info"
              style={{ width: "60%" }}
            />
          </div>
          <p>
            Success with <code>progress-bar-success</code> class.
          </p>
          <div className="progress">
            <div
              className="progress-bar progress-bar-success"
              style={{ width: "30%" }}
            />
          </div>
          <p>
            Warning with <code>progress-bar-warning</code> class.
          </p>
          <div className="progress">
            <div
              className="progress-bar progress-bar-warning"
              style={{ width: "70%" }}
            />
          </div>
          <p>
            Danger with <code>progress-bar-danger</code> class.
          </p>
          <div className="progress">
            <div
              className="progress-bar progress-bar-danger"
              style={{ width: "50%" }}
            />
          </div>
          <p>
            Inverse with <code>progress-bar-inverse</code> class.
          </p>
          <div className="progress">
            <div
              className="progress-bar progress-bar-inverse"
              style={{ width: "40%" }}
            />
          </div>
          <p>
            Inverse with <code>progress-bar-inverse</code> class.
          </p>
          <div className="progress">
            <div
              className="progress-bar progress-bar-success"
              style={{ width: "35%" }}
            >
              <span className="sr-only">35% Complete (success)</span>
            </div>
            <div
              className="progress-bar progress-bar-warning"
              style={{ width: "20%" }}
            >
              <span className="sr-only">20% Complete (warning)</span>
            </div>
            <div
              className="progress-bar progress-bar-danger"
              style={{ width: "10%" }}
            >
              <span className="sr-only">10% Complete (danger)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bread-crumbs">
      <h3 className="ghj">Breadcrumbs</h3>
      <ol className="breadcrumb">
        <li className="active">Home</li>
      </ol>
      <ol className="breadcrumb">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="active">Library</li>
      </ol>
      <ol className="breadcrumb">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Library</a>
        </li>
        <li className="active">Data</li>
      </ol>
    </div>
    <div className="pagenatin">
      <h3 className="ghj">Pagination</h3>
      <div className="col-md-6">
        <nav>
          <ul className="pagination pagination-lg">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="pagination">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="pagination pagination-sm">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-md-6">
        <nav>
          <ul className="pagination pagination-lg">
            <li className="disabled">
              <a href="#">
                <i className="fa fa-angle-left">«</i>
              </a>
            </li>
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-angle-right">»</i>
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="pagination">
            <li className="disabled">
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className="active">
              <a href="#">
                1 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="pagination pagination-sm">
            <li className="disabled">
              <a href="#">
                <i className="fa fa-angle-left" />«
              </a>
            </li>
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-angle-right" />»
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="alerts">
      <h3 className="ghj">Alerts</h3>
      <div className="alert alert-success" role="alert">
        <strong>Well done!</strong> You successfully read this important alert
        message.
      </div>
      <div className="alert alert-info" role="alert">
        <strong>Heads up!</strong> This alert needs your attention, but it's not
        super important.
      </div>
      <div className="alert alert-warning" role="alert">
        <strong>Warning!</strong> Best check yo self, you're not looking too
        good.
      </div>
      <div className="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> Change a few things up and try submitting
        again.
      </div>
    </div>
    <div className="distracted">
      <h3 className="ghj">Wells</h3>
      <div className="well">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration
      </div>
      <div className="well">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here
      </div>
      <div className="well">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic
      </div>
    </div>
    <div className="appearance">
      <h3 className="ghj">Badges</h3>
      <div className="col-md-6">
        <p>Add modifier classes to change the appearance of a badge.</p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th width="50%">Classes</th>
              <th width="50%">Badges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No modifiers</td>
              <td>
                <span className="badge">42</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.badge-primary</code>
              </td>
              <td>
                <span className="badge badge-primary">1</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.badge-success</code>
              </td>
              <td>
                <span className="badge badge-success">22</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.badge-info</code>
              </td>
              <td>
                <span className="badge badge-info">30</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.badge-warning</code>
              </td>
              <td>
                <span className="badge badge-warning">412</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.badge-danger</code>
              </td>
              <td>
                <span className="badge badge-danger">999</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-6">
        <p>
          Easily highlight new or unread items with the <code>.badge</code>{" "}
          class
        </p>
        <div className="list-group list-group-alternate">
          <a href="#" className="list-group-item">
            <span className="badge">201</span> <i className="ti ti-email" />{" "}
            Inbox{" "}
          </a>
          <a href="#" className="list-group-item">
            <span className="badge badge-primary">5021</span>{" "}
            <i className="ti ti-eye" /> Profile visits{" "}
          </a>
          <a href="#" className="list-group-item">
            <span className="badge">14</span>{" "}
            <i className="ti ti-headphone-alt" /> Call{" "}
          </a>
          <a href="#" className="list-group-item">
            <span className="badge">20</span> <i className="ti ti-comments" />{" "}
            Messages{" "}
          </a>
          <a href="#" className="list-group-item">
            <span className="badge badge-warning">14</span>{" "}
            <i className="ti ti-bookmark" /> Bookmarks{" "}
          </a>
          <a href="#" className="list-group-item">
            <span className="badge badge-danger">30</span>{" "}
            <i className="ti ti-bell" /> Notifications{" "}
          </a>
        </div>
      </div>
      <div className="clearfix"> </div>
    </div>
  </div>
</div>

  )
}

export default Type