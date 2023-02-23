import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Cards />
    </div>
  );
}

function Cards() {
  return (
    <div className="container py-5">
      <div className="row text-center">
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="bg-white p-5 rounded-lg shadow">
            <h1 className="h6 text-uppercase font-weight-bold mb-4">BASICS</h1>
            <h2 className="h1 font-weight-bold">
              $199
              <span
                className="text-small 
            font-weight-normal ml-2"
              >
                / month
              </span>
            </h2>
            <div className="custom-seperator my-4 mx-auto bg-primary"></div>
            <ul className="list-unstyled my-5 text-small text-left">
              <li className="mb-3">
                <i className="fa fa-check mr-2 text-primary"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="mb-3">
                <i className="fa fa-check mr-2 text-primary"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="mb-3">
                <i className="fa fa-check mr-2 text-primary"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="mb-3 text-muted">
                <i className="fa fa-times mr-2"></i>
                <del>Lorem ipsum dolor sit amet</del>
              </li>
              <li className="mb-3 text-muted">
                <i className="fa fa-times mr-2"></i>
                <del>Lorem ipsum dolor sit amet</del>
              </li>
              <li className="mb-3 text-muted">
                <i className="fa fa-times mr-2"></i>
                <del>Lorem ipsum dolor sit amet</del>
              </li>
            </ul>
            <a
              href="#"
              className="btn btn-primary btn-block p-2 shadow rounded-pill"
            >
              Subscribe
            </a>
          </div>
        </div>
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="bg-white p-5 rounded-lg shadow">
            <h1 className="h6 text-uppercase font-weight-bold mb-4">PRO</h1>
            <h2 className="h1 font-weight-bold">
              $399
              <span
                className="text-small 
            font-weight-normal ml-2"
              >
                / month
              </span>
            </h2>
            <div className="custom-seperator my-4 mx-auto bg-primary"></div>
            <ul className="list-unstyled my-5 text-small text-left">
              <li className="mb-3">
                <i className="fa fa-check mr-2 text-primary"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="mb-3">
                <i className="fa fa-check mr-2 text-primary"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="mb-3">
                <i className="fa fa-check mr-2 text-primary"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="mb-3">
                <i className="fa fa-check mr-2 text-primary"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="mb-3">
                <i className="fa fa-check mr-2 text-primary"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="mb-3 text-muted">
                <i className="fa fa-times mr-2"></i>
                <del>Lorem ipsum dolor sit amet</del>
              </li>
            </ul>
            <a
              href="#"
              className="btn btn-primary btn-block p-2 shadow rounded-pill"
            >
              Subscribe
            </a>
          </div>
        </div>
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="bg-white p-5 rounded-lg shadow">
            <h1 className="h6 text-uppercase font-weight-bold mb-4">
              ENTERPRISE
            </h1>
            <h2 className="h1 font-weight-bold">
              $899
              <span
                className="text-small 
            font-weight-normal ml-2"
              >
                / month
              </span>
            </h2>
            <div className="custom-seperator my-4 mx-auto bg-primary"></div>
            <ul className="list-unstyled my-5 text-small text-left">
              <li className="mb-3">
                <i className="fa fa-check mr-2 text-primary"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="mb-3">
                <i className="fa fa-check mr-2 text-primary"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="mb-3">
                <i className="fa fa-check mr-2 text-primary"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="mb-3">
                <i className="fa fa-check mr-2 text-primary"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="mb-3">
                <i className="fa fa-check mr-2 text-primary"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="mb-3">
                <i className="fa fa-check mr-2 text-primary"></i>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
            <a
              href="#"
              className="btn btn-primary btn-block p-2 shadow rounded-pill"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
