(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/0.68811c6e.pdf"},function(e,t,n){e.exports=n.p+"static/media/1.e5fd1277.pdf"},function(e,t,n){e.exports=n.p+"static/media/2.eb704749.pdf"},function(e,t,n){e.exports=n.p+"static/media/3.6574a73c.pdf"},function(e,t,n){e.exports=n.p+"static/media/4.8958f3cf.pdf"},function(e,t,n){e.exports=n.p+"static/media/5.c5933bab.pdf"},function(e,t,n){e.exports=n.p+"static/media/6.c3d7ef6c.pdf"},function(e,t,n){e.exports=n.p+"static/media/7.712cc424.pdf"},function(e,t,n){e.exports=n.p+"static/media/8.a73757fa.pdf"},function(e,t,n){e.exports=n.p+"static/media/9.88b988f6.pdf"},function(e,t,n){e.exports=n.p+"static/media/10.9c7b291d.pdf"},function(e,t,n){e.exports=n.p+"static/media/0.d042ec1a.png"},function(e,t,n){e.exports=n.p+"static/media/1.55c28cb6.png"},function(e,t,n){e.exports=n.p+"static/media/2.7f1cb423.png"},function(e,t,n){e.exports=n.p+"static/media/3.f3d464a3.png"},function(e,t,n){e.exports=n.p+"static/media/4.93d13082.png"},function(e,t,n){e.exports=n.p+"static/media/5.3d30e04c.png"},function(e,t,n){e.exports=n.p+"static/media/6.33af61c8.png"},function(e,t,n){e.exports=n.p+"static/media/7.6104024d.png"},function(e,t,n){e.exports=n.p+"static/media/8.9c8259a2.png"},function(e,t,n){e.exports=n.p+"static/media/9.874f9cd3.png"},function(e,t,n){e.exports=n.p+"static/media/10.54e06ed8.png"},function(e,t,n){e.exports=n.p+"static/media/front.8d5a0688.jpg"},function(e,t,n){e.exports=n.p+"static/media/contact.0afcb6f1.jpg"},function(e,t,n){e.exports=n.p+"static/media/wood.5e8245c9.jpg"},,function(e,t,n){e.exports=n(44)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),s=n.n(i),c=(n(40),n(1)),r=n(2),l=n(4),m=n(3),u=n(5),d=(n(42),{background:"none",borderBottom:"1px solid white",transition:"background-color 1s ease-out"}),h={backgroundColor:"rgba(0, 0, 0, 0.7)",borderBottom:"1px solid white",transition:"background-color 1s ease-out"},p={maxHeight:"126px",transition:"max-height 5s ease"},f={maxHeight:"0",transition:"max-height 5s ease"},v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={isShow:!1},n.showNavbar=function(e){e.preventDefault();var t=document.getElementById("navbarContent");n.state.isShow?(n.setState({isShow:!1}),t.classList.add("collapse")):(n.setState({isShow:!0}),t.classList.remove("collapse"))},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("header",{className:"fixed-top container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("nav",{id:"navbar",className:"navbar navbar-expand-lg offset-md-1 col-md-10 border-rounded",style:this.state.isShow?h:d},o.a.createElement("button",{className:"navbar-brand btn btn-link m-0 p-0",style:this.props.navStyle,onClick:function(t){return e.props.navMove(t,"home")}},o.a.createElement("p",{className:"d-block d-md-none h4 m-0",style:this.props.navStyle},"Prohealth Primary Care"),o.a.createElement("p",{className:"d-none d-md-block h1 m-0",style:this.props.navStyle},o.a.createElement("strong",null,"Prohealth Primary Care"))),o.a.createElement("button",{className:"navbar-toggler",onClick:function(t){return e.showNavbar(t)},style:{color:"white",outline:"none"}},"\u2630"),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarContent",style:this.state.isShow?p:f},o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item align-self-center"},o.a.createElement("button",{className:"nav-link btn btn-link",onClick:function(t){return e.props.navMove(t,"home")}},o.a.createElement("p",{className:"h5 m-0",style:this.props.navStyle},"Home"))),o.a.createElement("li",{className:"nav-item align-self-center"},o.a.createElement("button",{className:"nav-link btn btn-link",onClick:function(t){return e.props.navMove(t,"contact")}},o.a.createElement("p",{className:"h5 m-0",style:this.props.navStyle},"Contact Us"))),o.a.createElement("li",{className:"nav-item align-self-center"},o.a.createElement("button",{className:"nav-link btn btn-link",onClick:function(t){return e.props.navMove(t,"form")}},o.a.createElement("p",{className:"h5 m-0",style:this.props.navStyle},"Forms"))))))))}}]),t}(o.a.Component),y=function(e){return o.a.createElement("section",{id:e.theKey,key:e.theKey,className:"container-fluid",style:e.sectionStyle},o.a.createElement("div",{className:"row",style:e.backgroundStyle},o.a.createElement(e.body,null)))},g=function(e){return o.a.createElement("span",{id:"home"})},b=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{id:"contact"}),o.a.createElement("div",{className:"container-fluid align-self-center"},o.a.createElement("br",{className:"d-inline d-sm-none"}),o.a.createElement("br",{className:"d-inline d-sm-none"}),o.a.createElement("br",{className:"d-inline d-md-none"}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-12 text-center",style:{color:"white"}},o.a.createElement("h1",{className:"text-center",style:{color:"white"}},o.a.createElement("strong",null,"Contact Us")),o.a.createElement("br",{className:"d-none d-lg-inline"})),o.a.createElement("div",{className:"col-3 col-md-12 text-center",style:{color:"white"}},o.a.createElement("h5",null,o.a.createElement("strong",null,"Hours of Operations")),o.a.createElement("p",{className:"m-0"},"Monday - Friday:"),o.a.createElement("p",{className:""},"7AM to 4:30PM"),o.a.createElement("p",{className:"m-0"},"Saturday - Sunday:"),o.a.createElement("p",null,"Closed")),o.a.createElement("div",{className:"col-3 col-md-12 text-center",style:{color:"white"}},o.a.createElement("h5",null,o.a.createElement("strong",null,"Address:")),o.a.createElement("p",{className:"m-0"},"115 W. Bel Air Ave,"),o.a.createElement("p",null,"Aberdeen, MD 21001")),o.a.createElement("div",{className:"col-3 col-md-12 text-center",style:{color:"white"}},o.a.createElement("h5",null,o.a.createElement("strong",null,"Phone Number")),o.a.createElement("p",{className:"m-0"},"Nathaniel M. Sumilang, M.D."),o.a.createElement("p",{className:"m-0"},"(410)-272-3377"),o.a.createElement("p",{className:"m-0"},"Gwenneth Cancino, M.D."),o.a.createElement("p",null,"(410)-272-1692")),o.a.createElement("div",{className:"col-3 col-md-12 text-center",style:{color:"white"}},o.a.createElement("h5",null,o.a.createElement("strong",null,"Email")),o.a.createElement("p",null,"TODO"),o.a.createElement("h5",null,o.a.createElement("strong",null,"Fax")),o.a.createElement("p",null,"(410)-273-1479")))))},E=n(33),w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={slideIndex:0,doc:{}},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"prevSlide",value:function(e){var t;e.preventDefault(),t=0===this.state.slideIndex?this.props.formList.length-1:this.state.slideIndex-1,this.noDisplaySlide(),this.displayCurrentSlide(),this.setState({slideIndex:t})}},{key:"nextSlide",value:function(e){var t;e.preventDefault(),t=this.state.slideIndex===this.props.formList.length-1?0:this.state.slideIndex+1,this.noDisplaySlide(),this.displayCurrentSlide(),this.setState({slideIndex:t})}},{key:"chooseSlide",value:function(e,t){e.preventDefault(),this.setState({slideIndex:t})}},{key:"noDisplaySlide",value:function(){var e=document.getElementsByClassName("item"),t=!0,n=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var s=o.value;s.style.display="none",s.classList.remove("active")}}catch(h){n=!0,a=h}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}var c=document.getElementsByClassName("dot"),r=!0,l=!1,m=void 0;try{for(var u,d=c[Symbol.iterator]();!(r=(u=d.next()).done);r=!0){u.value.classList.remove("active")}}catch(h){l=!0,m=h}finally{try{r||null==d.return||d.return()}finally{if(l)throw m}}}},{key:"displayCurrentSlide",value:function(e){var t=document.getElementById("carousel".concat(e));null!==t&&(t.style.display="flex",t.classList.add("active"));var n=document.getElementById("indicator".concat(e));null!==n&&n.classList.add("active")}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"slideshow",className:"offset-1 col-10",style:{backgroundColor:"rgba(0, 0, 0, 0.2)",height:"60vh"}},o.a.createElement("div",{className:"row align-self-center h-100"},o.a.createElement("button",{id:"prevButton",className:"col-2 col-sm-1 slideButton h-100",onClick:function(t){return e.prevSlide(t)},style:{outline:"none"}},"\u276e"),o.a.createElement("div",{className:"col-8 col-sm-10 p-0 align-self-center h-75"},this.props.formList.map(function(t,n){return o.a.createElement("div",{key:n,id:"carousel".concat(n),className:"item h-100 row ".concat(n===e.state.slideIndex?"active d-flex":"d-none")},t.map(function(e){return o.a.createElement("a",{key:e.url,href:e.url,className:"form col mx-2 p-0 h-100"},o.a.createElement("img",{className:"w-100 h-75 p-2",src:e.sample,alt:"Need Form"}),o.a.createElement("div",{className:"h-25 d-flex p-2 justify-content-center"},o.a.createElement("p",{className:"text-center align-self-center mb-0",style:{color:"white",textOverflow:"ellipsis",overflow:"hidden"}},o.a.createElement("strong",null,"".concat(e.title)))))}))})),o.a.createElement("button",{id:"nextButton",className:"col-2 col-sm-1 slideButton h-100",onClick:function(t){return e.nextSlide(t)},style:{outline:"none"}},"\u276f"),o.a.createElement("ol",{className:"carousel-indicators col-12 m-0"},this.props.formList.map(function(t,n){return o.a.createElement("li",{key:n,id:"indicator".concat(n),onClick:function(t){return e.chooseSlide(t,n)},className:"dot ".concat(n===e.state.slideIndex?"active":"")})})))))}}]),t}(o.a.Component),k=n(8),S=n.n(k),N=n(9),x=n.n(N),P=n(10),C=n.n(P),O=n(11),H=n.n(O),I=n(12),j=n.n(I),M=n(13),B=n.n(M),F=n(14),L=n.n(F),A=n(15),D=n.n(A),T=n(16),z=n.n(T),Q=n(17),R=n.n(Q),G=n(18),W=n.n(G),K=n(19),U=n.n(K),J=n(20),Y=n.n(J),$=n(21),q=n.n($),V=n(22),X=n.n(V),Z=n(23),_=n.n(Z),ee=n(24),te=n.n(ee),ne=n(25),ae=n.n(ne),oe=n(26),ie=n.n(oe),se=n(27),ce=n.n(se),re=n(28),le=n.n(re),me=n(29),ue=n.n(me),de=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={formList:[{url:x.a,title:"General Adult History",sample:Y.a},{url:C.a,title:"Medical/Family History Questionaire",sample:q.a},{url:D.a,title:"Preventive Screen Questionaire",sample:ie.a},{url:z.a,title:"HIPAA Complaint Authorization for Release of Health Information",sample:ce.a},{url:L.a,title:"Mental Health Questionaire Age 3-5",sample:ae.a},{url:B.a,title:"Mental Health Questionaire Age 6-9",sample:te.a},{url:H.a,title:"Mental Health Questionaire Age 10-12",sample:X.a},{url:j.a,title:"Mental Health Questionaire Age 13-20",sample:_.a},{url:R.a,title:"9 Month Questionaire",sample:le.a},{url:W.a,title:"12 Month Quetionaire",sample:ue.a},{url:S.a,title:"14 Month Questionaire",sample:U.a}],newFormList:[],searchQuery:""},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.splitForms(this.state.formList)}},{key:"splitForms",value:function(e){var t=Object(E.a)(e),n=0;n=Math.ceil(window.outerWidth/300>4)?4:Math.ceil(window.outerWidth/300);for(var a=[];t.length>0;)a.push(t.splice(0,n));this.setState(function(){return{newFormList:a}})}},{key:"handleForm",value:function(e){this.setState({searchQuery:e.target.value||""}),this.splitForms(this.state.formList.filter(function(t){return t.title.toLowerCase().includes(e.target.value.toString().toLowerCase())}))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{id:"form"}),o.a.createElement("div",{className:"container-fluid align-self-center"},o.a.createElement("br",{className:"d-inline d-md-none"}),o.a.createElement("br",{className:"d-inline d-md-none"}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"d-none d-md-block offset-1 col-10 p-0"},o.a.createElement("h1",{className:"col-2 col-md-12 text-center",style:{color:"white"}},o.a.createElement("strong",null,"Forms")),o.a.createElement("br",{className:"d-none d-md-inline"}),o.a.createElement("input",{className:"col-10 col-md-12 w-100 form-control align-self-center",onChange:function(t){return e.handleForm(t)},value:this.state.searchQuery,placeholder:"Search for a Form"})),o.a.createElement("div",{id:"formSmall",className:"d-block d-md-none offset-1 col-10 p-0"},o.a.createElement("h3",{id:"formHeader",className:"col-12 text-center",style:{color:"white"}},o.a.createElement("strong",null,"Forms")),o.a.createElement("input",{id:"formInput",className:"col-12 form-control align-self-center",onChange:function(t){return e.handleForm(t)},value:this.state.searchQuery,placeholder:"Search for a Form"})),o.a.createElement("div",{className:"col-1"})),o.a.createElement("div",{className:"row"},o.a.createElement(w,{formList:this.state.newFormList})),o.a.createElement("div",{className:"container p-0",style:{bottom:"0",position:"absolute"}},o.a.createElement("div",{className:"text-right"},"Created By Gerard Cancino"))))}}]),t}(o.a.Component),he=n(30),pe=n.n(he),fe=n(31),ve=n.n(fe),ye=n(32),ge=n.n(ye),be="top ".concat(1.5,"s"),Ee={home:{navStyle:{color:"white"},backgroundStyle:{backgroundImage:"url(".concat(pe.a,")"),height:"100vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",top:"0"},sectionStyle:{height:"100vh",position:"absolute",top:"0",zIndex:"0",transition:be,transitionTimingFunction:"cubic-bezier(0.7,0.2,0.5,0.9)"},body:g},contact:{navStyle:{color:"white"},backgroundStyle:{backgroundImage:"url(".concat(ve.a,")"),height:"100vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},sectionStyle:{height:"100vh",position:"absolute",top:"100vh",zIndex:"1",transition:be,transitionTimingFunction:"cubic-bezier(0.7,0.2,0.5,0.9)"},body:b},form:{navStyle:{color:"white"},backgroundStyle:{backgroundImage:"url(".concat(ge.a,")"),height:"100vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",top:"200vh"},sectionStyle:{height:"100vh",position:"absolute",top:"200vh",zIndex:"2",transition:be,transitionTimingFunction:"cubic-bezier(0.7,0.2,0.5,0.9)"},body:de}},we=!1,ke=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={section:"home",scrollLocation:0,direction:"down",sectionHeight:0,sectionPosition:{home:0,contact:0,form:0},doc:{home:void 0,contact:void 0,form:void 0},sectionHash:{home:0,contact:1,form:2}},n.determineDirection=function(e){return e.deltaY<0||38===e.keyCode||33===e.keyCode?"up":e.deltaY>0||40===e.keyCode||32===e.keyCode||34===e.keyCode||35===e.keyCode?"down":void 0},n.navMove=function(e,t){if(!we){we=!0,e.preventDefault();var a=n.state.sectionPosition[t],o={home:n.state.sectionPosition.home,contact:n.state.sectionPosition.contact,form:n.state.sectionPosition.form};if(0!==n.originalPosition){var i=Object.keys(n.state.sectionPosition);if(a<0){var s=i.filter(function(e){return t!==e}).filter(function(e){return n.state.sectionHash[e]>n.state.sectionHash[t]}).filter(function(e){return n.state.sectionPosition[e]===n.state.sectionPosition[t]}).length+1;i.reverse().map(function(e){if(n.state.sectionPosition[e]<0)0!==s&&(o[e]=0,s--),o[e]=o[e]+n.state.sectionHeight*s,n.moveSection(o[e],n.state.doc[e]);else{var t=n.state.sectionPosition[e];o[e]=t+n.state.sectionHeight*s,n.moveSection(o[e],n.state.doc[e])}return!0})}else i.map(function(e){return a<0?n.state.section[e]-a>0&&(o[e]=n.state.sectionPosition[e]-a,n.moveSection(o[e],n.state.doc[e])):n.state.sectionPosition[e]-a<0?(o[e]=-n.state.sectionHeight/2,n.moveSection(o[e],n.state.doc[e])):(o[e]=n.state.sectionPosition[e]-a,n.moveSection(o[e],n.state.doc[e])),!0})}setTimeout(function(){n.setState(function(){return{sectionPosition:o}})},1001)}},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0),this.initializePositioningHeight(),this.changeScroll(),window.onresize=function(){window.scrollTo(0,0),e.resetScreenSize(),e.initializePositioningHeight()}}},{key:"initializePositioningHeight",value:function(){var e=document.getElementById("home").offsetHeight;this.setState({sectionPosition:this.getPosition(),sectionHeight:e,doc:{home:document.getElementById("home"),contact:document.getElementById("contact"),form:document.getElementById("form")}})}},{key:"resetScreenSize",value:function(){var e=this,t=document.getElementById("home").offsetHeight,n={home:this.state.sectionPosition.home,contact:this.state.sectionPosition.contact,form:this.state.sectionPosition.form};Object.keys(this.state.sectionPosition).map(function(a){var o=e.state.doc[a];return n[a]=t*e.state.sectionHash[a],o.style.top=n[a]+"px",!0}),setTimeout(function(){e.setState(function(e){return{sectionPosition:{home:n.home,contact:n.contact,form:n.form}}})},1500)}},{key:"preventEventType",value:function(e){"keydown"!==e.type.toString()?e.preventDefault():void 0!=={38:1,40:1,33:1,34:1,35:1}[e.keyCode]&&e.preventDefault()}},{key:"changeScroll",value:function(){var e=this;window.addEventListener&&window.addEventListener("DOMMouseScroll",function(t){return e.move(t)},!1),document.addEventListener("wheel",function(t){return e.move(t)},{passive:!1}),window.onmousewheel=document.onmousewheel=function(t){return e.move(t)},window.onwheel=function(t){return e.move(t)},window.ontouchmove=function(t){return e.move(t)},document.onkeydown=function(t){return e.move(t)}}},{key:"getPosition",value:function(){return{home:document.getElementById("home").getBoundingClientRect().top,contact:document.getElementById("contact").getBoundingClientRect().top,form:document.getElementById("form").getBoundingClientRect().top}}},{key:"move",value:function(e){var t=this;if(this.preventEventType(e),!we){we=!0;for(var n=this.determineDirection(e),a={home:this.state.sectionPosition.home,contact:this.state.sectionPosition.contact,form:this.state.sectionPosition.form},o=!1,i=Object.keys(this.state.sectionPosition),s=0;s<i.length;s++){var c=i[s];this.isAbleMoveSection(c,n)&&(this.isOtherSectionsOnTop(c)||(o=!0,this.isGoingAbovePage(c,n)?a[c]="up"===n?0:this.calcNewTop(c,n)/2:a[c]=this.calcNewTop(c,n),this.moveSection(a[c],this.state.doc[c])))}o||(we=!1),setTimeout(function(){t.setState(function(e){return{sectionPosition:{home:a.home,contact:a.contact,form:a.form}}})},1500)}}},{key:"isGoingAbovePage",value:function(e,t){return this.state.sectionPosition[e]<0||"down"===t&&0===this.state.sectionPosition[e]}},{key:"isOtherSectionsOnTop",value:function(e){var t=this;return 0!==Object.keys(this.state.sectionPosition).filter(function(t){return e!==t}).filter(function(n){return t.state.sectionHash[n]>t.state.sectionHash[e]}).filter(function(n){return t.state.sectionPosition[n]===t.state.sectionPosition[e]}).length}},{key:"isAbleMoveSection",value:function(e,t){return"form"===e&&"down"===t?0!==this.state.sectionPosition[e]:"down"===t?!(this.state.sectionPosition[e]<=this.state.sectionHeight/-2):"up"===t&&!(this.state.sectionPosition[e]>=this.state.sectionHeight*this.state.sectionHash[e])}},{key:"calcNewTop",value:function(e,t){return this.state.sectionPosition[e]+("up"===t?this.state.sectionHeight:-1*this.state.sectionHeight)}},{key:"moveSection",value:function(e,t){t.style.top=e+"px",setTimeout(function(){we=!1},1501.5)}},{key:"render",value:function(){return o.a.createElement("div",{className:"h-100 w-100"},o.a.createElement(v,{navStyle:Ee[this.state.section].navStyle,navMove:this.navMove.bind(this)}),Object.keys(Ee).map(function(e){return o.a.createElement(y,{key:e,theKey:e,backgroundStyle:Ee[e].backgroundStyle,sectionStyle:Ee[e].sectionStyle,body:Ee[e].body})}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[34,2,1]]]);
//# sourceMappingURL=main.3d6f2c94.chunk.js.map