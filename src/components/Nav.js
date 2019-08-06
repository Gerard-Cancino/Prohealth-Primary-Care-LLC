import React from 'react';
import PropTypes from 'prop-types'


const Opacity = {
  background: 'none',
  borderBottom: '1px solid white',
  transition: 'background-color 1s ease-out'
}

const Tint = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  borderBottom: '1px solid white',
  transition: 'background-color 1s ease-out'
}

const navContentShow = {
  maxHeight: '126px',
  transition: 'max-height 5s ease'
}

const navContentHide = {
  maxHeight: '0',
  transition: 'max-height 5s ease'
}

class Nav extends React.Component {
  state ={
    isShow: false,
  }
  showNavbar = (e) => {
    e.preventDefault();
    const navbarContent = document.getElementById('navbarContent');
    if(!this.state.isShow){
      this.setState({isShow:true})
      navbarContent.classList.remove('collapse');
    }
    else{
      this.setState({isShow:false})
      navbarContent.classList.add('collapse');
    }
  }
  render(){
    return(
      <header className="fixed-top container-fluid">
        <div className="row" >
          <nav id="navbar" className="navbar navbar-expand-lg offset-md-1 col-md-10 border-rounded" style={this.state.isShow?(Tint):(Opacity)}>
            <button className="navbar-brand btn btn-link m-0 p-0" style={this.props.navStyle} onClick={(e)=>this.props.navMove(e,'home')}>
              <p className='d-block d-md-none h4 m-0' style={this.props.navStyle}>Prohealth Primary Care</p>
              <p className='d-none d-md-block h1 m-0' style={this.props.navStyle}><strong>Prohealth Primary Care</strong></p>
            </button>
            <button className="navbar-toggler" onClick={e=>this.showNavbar(e)} style={{color:'white',outline:'none'}} >&#9776;</button>
            <div className="collapse navbar-collapse" id="navbarContent" style={this.state.isShow?(navContentShow):(navContentHide)}>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item align-self-center">
                  <button className="nav-link btn btn-link" onClick={(e)=>this.props.navMove(e,'home')}><p className="h5 m-0" style={this.props.navStyle}>Home</p></button>
                </li>
                <li className="nav-item align-self-center">
                  <button className="nav-link btn btn-link" onClick={(e)=>this.props.navMove(e,'contact')}><p className="h5 m-0" style={this.props.navStyle}>Contact Us</p></button>
                </li>
                <li className="nav-item align-self-center">
                  <button className="nav-link btn btn-link" onClick={(e)=>this.props.navMove(e,'form')}><p className="h5 m-0" style={this.props.navStyle}>Forms</p></button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

Nav.propTypes={
  navStyle: PropTypes.object.isRequired,
  navMove: PropTypes.func.isRequired,
}

export default Nav;
