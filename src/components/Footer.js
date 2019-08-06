import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return(
      <div id="footer" className="col-12 offset-md-4 col-md-4 navbar-expand p-0" >
        <ul className=" navbar-nav ">
          <li className="col text-center navbar-item px-0 "><a className="navbar-link" href="#home">Home</a></li>
          <li className="col text-center navbar-item px-0 "><a className="navbar-link" href="form">Forms</a></li>
          <li className="col text-center navbar-item px-0 "><a className="navbar-link" href="#contact">Contact Us</a></li>
        </ul>
      </div>
    );
  }
}

export default Footer;
