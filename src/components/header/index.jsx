import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
function Header() {
  return (
    <nav className="navbar navbar-expand-md fixed-top  navbar-light  bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/images/logo.png" height="50" alt="brand" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">首页</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">产品列表</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUs">联系我们</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>);
}
export default Header;