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

const timeForScrolling = 1.5;
const transition = `top ${timeForScrolling}s`;
const transitionTimingFunction = 'cubic-bezier(0.7,0.2,0.5,0.9)';

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
      height:'100vh',position:'absolute', top:'0', zIndex:'0', 
      transition: transition,
      transitionTimingFunction: transitionTimingFunction
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
      height:'100vh',position:'absolute', top: '100vh',zIndex:'1',
      transition: transition,
      transitionTimingFunction: transitionTimingFunction
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
      height:'100vh',position:'absolute', top: '200vh',zIndex:'2',
      transition: transition,
      transitionTimingFunction: transitionTimingFunction
    },
    body: Form
  }
}

let isScrolling = false;
class App extends React.Component {
  state = {
    section: 'home',
    scrollLocation: 0,
    direction: 'down',
    sectionHeight: 0,
    sectionPosition: {
      home:0,
      contact:0,
      form:0
    },
    doc: {
      home: undefined,
      contact: undefined,
      form: undefined
    },
    sectionHash: {
      home:0,
      contact:1,
      form:2
    }
  }

  componentDidMount () {
    window.scrollTo(0,0)
    this.initializePositioningHeight();
    this.changeScroll();
    window.onresize = () => {
      window.scrollTo(0,0);
      this.resetScreenSize();
      this.initializePositioningHeight();
    }
  }
  initializePositioningHeight () {
    const height = document.getElementById('home').offsetHeight;
    this.setState({sectionPosition:this.getPosition(),
      sectionHeight:height,
      doc:{
        home: document.getElementById('home'),
        contact: document.getElementById('contact'),
        form: document.getElementById('form')
      }
    })
  }
  resetScreenSize () {
    const height = document.getElementById('home').offsetHeight;
    let newPosition = {
      home: this.state.sectionPosition['home'],
      contact: this.state.sectionPosition['contact'],
      form: this.state.sectionPosition['form']
    }
    Object.keys(this.state.sectionPosition).map(key=>{
      let doc = this.state.doc[key] ;
      newPosition[key] = height*this.state.sectionHash[key];
      doc.style.top = newPosition[key] + 'px';
      return true;
    })
    setTimeout(()=>{
      this.setState((prevState)=>({
        sectionPosition:{
          home: newPosition['home'],
          contact: newPosition['contact'],
          form: newPosition['form']
        }
      }))
    },timeForScrolling*1000)
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
      home: document.getElementById('home').getBoundingClientRect().top,
      contact: document.getElementById('contact').getBoundingClientRect().top,
      form: document.getElementById('form').getBoundingClientRect().top
    }
  }
  move(e){
    this.preventEventType(e)
    if(!isScrolling){
      isScrolling = true;
      const direction = this.determineDirection(e);
      let newPosition = {
        home: this.state.sectionPosition['home'],
        contact: this.state.sectionPosition['contact'],
        form: this.state.sectionPosition['form']
      }
      let isChanging = false;
      const sectionList = Object.keys(this.state.sectionPosition)
      for(let section of sectionList){
        if(this.isAbleMoveSection(section,direction)){
          if(!this.isOtherSectionsOnTop(section)){
            isChanging=true;
            if(this.isGoingAbovePage(section,direction)){
              if(direction==='up')
                newPosition[section] = 0;
              else
                newPosition[section] = this.calcNewTop(section,direction)/2;
                
            }
            else{
              newPosition[section] = this.calcNewTop(section,direction);
            }
            this.moveSection(newPosition[section],this.state.doc[section]);
          }
        }
      }
      if(!isChanging){
        isScrolling = false;
      }
      setTimeout(()=>{
        this.setState((prevState)=>({
          sectionPosition:{
            home: newPosition['home'],
            contact: newPosition['contact'],
            form: newPosition['form']
          }
        }))
      },timeForScrolling*1000)
    }
  }
  isGoingAbovePage(checkThisSection,direction){
    return this.state.sectionPosition[checkThisSection]<0?(true):(direction==='down'&&this.state.sectionPosition[checkThisSection]===0?true:false)
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
    if(section==='form'&&direction==='down')
      return this.state.sectionPosition[section]!==0;
    if(direction==='down'){
      if(this.state.sectionPosition[section]<=this.state.sectionHeight/-2)
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
  calcNewTop(section,direction){
    return this.state.sectionPosition[section] + (direction==='up'?(this.state.sectionHeight):(this.state.sectionHeight*-1))
  }
  moveSection(topBound,docSection){
    docSection.style.top=topBound+'px';
    setTimeout(()=>{
      isScrolling=false;
    },timeForScrolling*1001) 
  }
  determineDirection = (e) =>{
    if(e.deltaY<0||e.keyCode===38||e.keyCode===33)
      return 'up';
    if(e.deltaY>0||e.keyCode===40||e.keyCode===32||e.keyCode===34||e.keyCode===35)
      return 'down';
  }
  navMove = (e,selectedSection) => {
    if(!isScrolling){
      isScrolling=true;
      e.preventDefault();
      const originalPosition = this.state.sectionPosition[selectedSection];
      let nextPositionList = {
        home: this.state.sectionPosition['home'],
        contact: this.state.sectionPosition['contact'],
        form: this.state.sectionPosition['form']
      };

      if (this.originalPosition!==0){
        const keys = Object.keys(this.state.sectionPosition);
        if(originalPosition<0){
          let aboveSections = keys
          .filter(section=>selectedSection!==section)
          .filter(section=>this.state.sectionHash[section]>this.state.sectionHash[selectedSection])
          .filter(section=>this.state.sectionPosition[section]===this.state.sectionPosition[selectedSection]);
          let length = aboveSections.length+1;
          keys.reverse().map(key=>{
            if(this.state.sectionPosition[key]<0){
              if(length!==0){
                nextPositionList[key] = 0;
                length--;
              }
              nextPositionList[key] = nextPositionList[key] + this.state.sectionHeight*length;
              this.moveSection(nextPositionList[key],this.state.doc[key])
            }
            else{
              let currentPosition = this.state.sectionPosition[key];
              nextPositionList[key] = currentPosition +this.state.sectionHeight*(length);
              this.moveSection(nextPositionList[key],this.state.doc[key])
            }
            return true;
          })
        }
        else{
          keys.map(key=>{
            if(originalPosition<0){
              if(this.state.section[key]-originalPosition>0){
                nextPositionList[key] = this.state.sectionPosition[key]-originalPosition;
                this.moveSection(nextPositionList[key],this.state.doc[key])
              }
            }
            else{
              if(this.state.sectionPosition[key]-originalPosition<0){
                nextPositionList[key] = -this.state.sectionHeight/2;
                this.moveSection(nextPositionList[key],this.state.doc[key])
              }
              else{
                nextPositionList[key] = this.state.sectionPosition[key]-originalPosition;
                this.moveSection(nextPositionList[key],this.state.doc[key])
              }
            }
            return true;
          });
        }
      }
      setTimeout(()=>{
        this.setState(()=>({sectionPosition:nextPositionList}));
      },1001);
    }
  }
  render() {
    return (
      <div className="h-100 w-100">
        <Nav navStyle={sectionList[this.state.section].navStyle} navMove={this.navMove.bind(this)}/>
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
