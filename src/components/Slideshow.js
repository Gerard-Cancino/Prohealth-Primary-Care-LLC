import React from 'react';
import PropTypes from 'prop-types';

class Slideshow extends React.Component{
  state = {
    slideIndex: 0,
    doc: {},
  }
  componentDidUpdate(){
  }
  prevSlide (e) {
    e.preventDefault();
    let newIndex;
    if(this.state.slideIndex===0)
      newIndex = this.props.formList.length-1;
    else
      newIndex = this.state.slideIndex-1;
    this.noDisplaySlide();
    this.displayCurrentSlide();
    this.setState({slideIndex:newIndex})
  }
  nextSlide (e) {
    e.preventDefault();
    let newIndex;
    if(this.state.slideIndex===this.props.formList.length-1)
      newIndex = 0;
    else
      newIndex = this.state.slideIndex+1;
    this.noDisplaySlide();
    this.displayCurrentSlide();
    this.setState({slideIndex:newIndex})
  }
  chooseSlide(e,index){
    e.preventDefault();
    this.setState({slideIndex:index})
  }
  noDisplaySlide () {
    const carouselList = document.getElementsByClassName('item');
    for(let carousel of carouselList){
      carousel.style.display = "none";
      carousel.classList.remove('active');
    }
    const dotList = document.getElementsByClassName('dot');
    for(let dot of dotList){
      dot.classList.remove('active');
    }
  }
  displayCurrentSlide(index) {
    const item = document.getElementById(`carousel${index}`);
    if(item!==null){
      item.style.display = "flex";
      item.classList.add('active');
    }
    const dot = document.getElementById(`indicator${index}`);
    if(dot!==null)
      dot.classList.add('active');
  }
  render(){
    return(
      <React.Fragment>
        <div id="slideshow" className="offset-1 col-10" style={{backgroundColor:'rgba(0, 0, 0, 0.2)', height:'60vh'}}>
          <div className="row align-self-center h-100">
            <button id="prevButton" className="col-2 col-sm-1 slideButton h-100" onClick={(e)=>this.prevSlide(e)} style={{outline:'none'}}>&#10094;</button>
            <div className="col-8 col-sm-10 p-0 align-self-center h-75">
            {this.props.formList.map((formChunk,index)=>(          
              <div key={index} id={`carousel${index}`} className={`item h-100 row ${index===this.state.slideIndex?('active d-flex'):('d-none')}`}>   
              {formChunk.map(form=>(
                <a key={form.url} href={form.url} className="form col mx-2 p-0 h-100">
                  <img className="w-100 h-75 p-2" src={form.sample} alt="Need Form"/>
                  <div className="h-25 d-flex p-2 justify-content-center">
                    <p className="text-center align-self-center mb-0" style={{color:'white', textOverflow: 'ellipsis', overflow:'hidden'}}><strong>{`${form.title}`}</strong></p>
                  </div>
                </a>
              ))}
              </div>
            ))}
            </div>
            <button id="nextButton" className="col-2 col-sm-1 slideButton h-100" onClick={(e)=>this.nextSlide(e)} style={{outline:'none'}}>&#10095;</button>
            <ol className="carousel-indicators col-12 m-0">
              {this.props.formList.map((form,index)=>(
                <li key={index} id={`indicator${index}`} onClick={(e)=>this.chooseSlide(e,index)} className={`dot ${index===this.state.slideIndex?('active'):('')}`}></li>
              ))}
            </ol>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Slideshow.propTypes={
  formList: PropTypes.array.isRequired
}

export default Slideshow;