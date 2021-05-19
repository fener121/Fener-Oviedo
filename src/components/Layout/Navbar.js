import { React} from "react";
import {Link} from 'react-router-dom';
const Navbar =()=>{
      return(
            <nav className="navbar navbar-expand-lg navbar-primary bg-dark ">
                  <div className="container">
                  <img src="img/emo.jpg" alt="" width="80" height="80"></img>
                  <a className="navbar-brand" href="/">CRUD</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <Link className="nav-link" exact to="/">
                   Home
                   </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" exact to="/about">
                  About
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" exact to="/contact">
                  Contact
                  </Link>
                  </li>
                  </ul>
                  </div>
                  </div>
                 
            </nav>
      
      );
};
      export default Navbar;