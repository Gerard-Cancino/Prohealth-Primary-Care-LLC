import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Section from './components/Section';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Form from './components/Form';


import FrontBackground from './image/front.jpg';
import ContactBackground from './image/contact.jpg';
import FormBackground from './image/wood.jpg';

const sectionList = {
  home: {
    navStyle: {
      color: 'white'
    },
    backgroundStyle: {
      backgroundImage: `url(${FrontBackground})`,
      height: '100vh',
      backgroundPosition:'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      top: '0'
    },
    sectionStyle: {
      height:'100vh',position:'absolute'
    },
    body: Home
  },
  contact: {
    navStyle: {
      color: 'white'
    },
    backgroundStyle: {
      backgroundImage: `url(${ContactBackground})`,
      height: '100vh',
      backgroundPosition:'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    sectionStyle: {
      height:'100vh',position:'absolute', top: '100vh'
    },
    body: ContactUs
  },
  form: {
    navStyle: {
      color: 'white'
    },
    backgroundStyle: {
      backgroundImage: `url(${FormBackground})`,
      height: '100vh',
      backgroundPosition:'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      top: '200vh',
    },
    sectionStyle: {
      height:'100vh',position:'absolute', top: '200vh'
    },
    body: Form
  }
}

let isScrolling = false;
let startScroll = {
  'contact':undefined,
  'form':undefined,
};

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

class App extends React.Component {
  state = {
    section: 'home',
    scrollLocation: 0,
    direction: 'down',
    sectionHeight: 0,
    sectionPosition: {
      contact:0,
      form:0
    },
    doc: {
      contact: undefined,
      form: undefined
    },
    sectionHash: {
      home:-1,
      contact:1,
      form:2
    }
  }

  componentDidMount () {
    window.scrollTo(0,0)
    this.initializePositioningHeight();
    setTimeout(()=>{
      this.changeScroll();
    },500)
  }
  componentWillUnmount(){
    Object.keys(startScroll).map(key=>clearInterval(startScroll[key]))
  }
  initializePositioningHeight () {
    const height = document.getElementById('home').offsetHeight;
    this.setState({sectionPosition:this.getPosition(),
      sectionHeight:height,
      doc:{
        contact: document.getElementById('contact'),
        form: document.getElementById('form')
      }
    })
  }
  preventEventType(e){
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    const keyList = {
      38: 1,
      40: 1,
      33: 1,
      34: 1,
      35: 1
    }
    if(e.type.toString()!=='keydown')
      e.preventDefault()
    else
      if(keyList[e.keyCode]!==undefined)
        e.preventDefault()
  }
  changeScroll() {  
      if (window.addEventListener) // older FF
          window.addEventListener('DOMMouseScroll', e=>this.move(e), false);
      document.addEventListener('wheel', e=>this.move(e), {passive: false}); // Disable scrolling in Chrome
    window.onmousewheel = document.onmousewheel = (e) => this.move(e); 
    window.onwheel = (e) => this.move(e); 
    window.ontouchmove = (e) => this.move(e);  
    document.onkeydown = (e) => this.move(e);  
  }
  getPosition(){
    return {
      contact: document.getElementById('contact').getBoundingClientRect().top,
      form: document.getElementById('form').getBoundingClientRect().top
    }
  }
  move(e){
    this.preventEventType(e)
    if(!isScrolling){
      isScrolling = true;
      const direction = this.determineDirection(e)
      let newContactPosition = this.state.sectionPosition['contact'];
      let newFormPosition = this.state.sectionPosition['form'];
      let isChanging = false;
      if(this.isAbleMoveSection('contact',direction)){
        console.log('test')
        if(!this.isOtherSectionsOnTop('contact')){
          isChanging=true;
          this.moveSection('contact',direction);
          newContactPosition = direction==='down'?(this.state.sectionPosition['contact'] - this.state.sectionHeight):(this.state.sectionPosition['contact'] + this.state.sectionHeight);
        }
      }
      if(this.isAbleMoveSection('form',direction)){
        if(!this.isOtherSectionsOnTop('form')){
          isChanging=true;
          this.moveSection('form',direction);
          newFormPosition = direction==='down'?(this.state.sectionPosition['form'] - this.state.sectionHeight):(this.state.sectionPosition['form'] + this.state.sectionHeight);
        }
      }
      if(!isChanging){
        isScrolling = false;
      }
      this.setState((prevState)=>({
        sectionPosition:{
          contact: newContactPosition,
          form: newFormPosition
        }
      }))
    }
  }
  isOtherSectionsOnTop(checkThisSection){
    if(Object.keys(this.state.sectionPosition)
      .filter(section=>checkThisSection!==section)
      .filter(section=>this.state.sectionHash[section]>this.state.sectionHash[checkThisSection])
      .filter(section=>this.state.sectionPosition[section]===this.state.sectionPosition[checkThisSection]).length===0)
      return false;
    else
      return true;
  }
  isAbleMoveSection(section,direction){
    if(direction==='down'){
      if(this.state.sectionPosition[section]<=0)
        return false;
      return true;
    }
    else if (direction==='up'){
      if(this.state.sectionPosition[section]>=this.state.sectionHeight*this.state.sectionHash[section])
        return false;
      return true;
    }
    else
      return false;
  }
  moveSection(section,direction){
    let doc = this.state.doc[section]
    let docPosition = this.state.sectionPosition[section];
    let originalPosition = this.state.sectionPosition[section];
    let scrollLength = this.state.sectionHeight/200;
    // console.log(docPosition)
    // console.log(`${this.state.sectionPosition[section]}`)
    // console.log(`${this.state.sectionHeight}`)
    // console.log(`${this.state.sectionPosition[section] - this.state.sectionHeight}`)
    let newPosition = 0;
    if(direction==='up') 
      newPosition = originalPosition+this.state.sectionHeight
    else
      newPosition = originalPosition-this.state.sectionHeight
    let isClear = false;
    startScroll[section] = setInterval(()=>{
      if(direction==='up')
        docPosition += scrollLength;
      else
        docPosition -= scrollLength;
      doc.style.top = docPosition + 'px';
      if(newPosition>=Math.floor(docPosition)&&direction==='down'){
        isClear = true;
      }
      else if(newPosition<=Math.floor(docPosition)&&direction==='up'){
        isClear = true;
      }
      if (isClear){
        clearInterval(startScroll[section])
        doc.style.top = newPosition;
        isScrolling = false;
      }
    },1)
  }
  determineDirection = (e) =>{
    if(e.deltaY<0||e.keyCode===38||e.keyCode===33)
      return 'up';
    if(e.deltaY>0||e.keyCode===40||e.keyCode===32||e.keyCode===34||e.keyCode===35)
      return 'down';
  }
  render() {
    return (
      <div className="h-100 w-100" style={{overflow:'initial'}}>
        <Nav navStyle={sectionList[this.state.section].navStyle} handleNav={this.handleNav}/>
        {Object.keys(sectionList).map(key=>(
          <Section
            key={key}
            theKey={key}
            backgroundStyle={sectionList[key].backgroundStyle} 
            sectionStyle={sectionList[key].sectionStyle}
            body={sectionList[key].body}/>
        ))}
      </div>
    );
  }
}

export default App;
