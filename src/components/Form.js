import React from 'react';
import Slideshow from './Slideshow';
import PDF0 from '../form/0.pdf'
import PDF1 from '../form/1.pdf'
import PDF2 from '../form/2.pdf'
import PDF3 from '../form/3.pdf'
import PDF4 from '../form/4.pdf'
import PDF5 from '../form/5.pdf'
import PDF6 from '../form/6.pdf'
import PDF7 from '../form/7.pdf'
import PDF8 from '../form/8.pdf'
import PDF9 from '../form/9.pdf'
import PDF10 from '../form/10.pdf'
import IMG0 from '../image/form/0.png'
import IMG1 from '../image/form/1.png'
import IMG2 from '../image/form/2.png'
import IMG3 from '../image/form/3.png'
import IMG4 from '../image/form/4.png'
import IMG5 from '../image/form/5.png'
import IMG6 from '../image/form/6.png'
import IMG7 from '../image/form/7.png'
import IMG8 from '../image/form/8.png'
import IMG9 from '../image/form/9.png'
import IMG10 from '../image/form/10.png'


class Form extends React.Component {
  state={
    formList: [
      {
        'url' : PDF1,
        'title' : 'General Adult History',
        'sample' : IMG1
      },
      {
        'url' : PDF2,
        'title' : 'Medical/Family History Questionaire',
        'sample' : IMG2
      },
      {
        'url' : PDF7,
        'title' : 'Preventive Screen Questionaire',
        'sample' : IMG7
      },
      {
        'url' : PDF8,
        'title' : 'HIPAA Complaint Authorization for Release of Health Information',
        'sample' : IMG8
      },
      {
        'url' : PDF6,
        'title' : 'Mental Health Questionaire Age 3-5',
        'sample' : IMG6
      },
      {
        'url' : PDF5,
        'title' : 'Mental Health Questionaire Age 6-9',
        'sample' : IMG5
      },
      {
        'url' : PDF3,
        'title' : 'Mental Health Questionaire Age 10-12',
        'sample' : IMG3
      },
      {
        'url' : PDF4,
        'title' : 'Mental Health Questionaire Age 13-20',
        'sample' : IMG4
      },
      {
        'url' : PDF9,
        'title' : '9 Month Questionaire',
        'sample' : IMG9
      },
      {
        'url' : PDF10,
        'title' : '12 Month Quetionaire',
        'sample' : IMG10
      },      
      {
        'url' : PDF0,
        'title' : '14 Month Questionaire',
        'sample' : IMG0
      },
    ],
    newFormList:[],
    searchQuery: ''
  }
  componentDidMount(){
    this.splitForms(this.state.formList);
  }
  splitForms (formList){
    let copyFormList = [...formList];
    let splitBy = 0;
    if (Math.ceil(window.outerWidth/300>4))
      splitBy = 4;
    else
      splitBy = Math.ceil(window.outerWidth/300);
    let newFormList = [];
    while (copyFormList.length > 0)
      newFormList.push(copyFormList.splice(0,splitBy));
    this.setState(()=>({newFormList:newFormList}))
  }
  handleForm (e) {
    this.setState({searchQuery:e.target.value||''})
    this.splitForms(this.state.formList.filter(form=>(
      form.title.toLowerCase().includes(e.target.value.toString().toLowerCase())
    )))
  }
  render(){
    return(
    <React.Fragment>
      <span id="form"></span>
      <div className='container-fluid align-self-center'>
        <br className="d-inline d-md-none"/> 
        <br className="d-inline d-md-none"/> 
        <div className="row">
          <div className="d-none d-md-block offset-1 col-10 p-0">
            <h1 className="col-2 col-md-12 text-center" style={{color:'white'}}><strong>Forms</strong></h1>
            <br className="d-none d-md-inline"/>
            <input className="col-10 col-md-12 w-100 form-control align-self-center" onChange={(e)=>this.handleForm(e)} value={this.state.searchQuery} placeholder="Search for a Form"/>
          </div>
          <div id="formSmall" className="d-block d-md-none offset-1 col-10 p-0">
            <h3 id="formHeader" className="col-12 text-center" style={{color:'white'}}><strong>Forms</strong></h3>
            {/* <br className="d-none d-md-inline"/> */}
            <input id="formInput" className="col-12 form-control align-self-center" onChange={(e)=>this.handleForm(e)} value={this.state.searchQuery} placeholder="Search for a Form"/>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <Slideshow formList={this.state.newFormList}/>
        </div>

        <div className="container p-0" style={{bottom:'0',position:'absolute'}}>
          {/* <Footer /> */}
          <div className="text-right">Created By Gerard Cancino</div>
        </div>

      </div>
    </React.Fragment>
    );
  }
}


export default Form;
