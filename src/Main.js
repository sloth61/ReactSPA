import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import Modal from 'react-modal';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Instruction from "./Instruction";
import Finansi from "./Finansi";
import Risk from "./Risk";
import "./index.css";


const customStyles = {
 overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0)'
  },
  content : {
  
    WebkitOverflowScrolling    : 'touch',
   
  }
};
 


class Main extends Component {
	constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
 
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
	<HashRouter>
	
        <div className="wrapper">
		<div className="header">
          
		  </div>
          <ul className="NavBar">
            <li><NavLink exact to="/">Главная</NavLink></li>
            <li><NavLink to="/instruction">Инструкция</NavLink></li>
			<li><NavLink to="/finansi">Финансы</NavLink></li>
			<li><NavLink to="/risk">Риски</NavLink></li>
            <li onClick={this.openModal} className="myBtn">Контакты</li>
          </ul>
		  <Modal
		   className={{
    base: 'myClass',
    afterOpen: 'myClass_after-open',
    beforeClose: 'myClass_before-close'
  }}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <div className="modalheader"><span>Контакты</span><span onClick={this.closeModal} className="close">&times;</span></div>
          <div><p>Email : email@mail.com</p>
      <p>тел. +380000000000</p></div>
      <div className="modalfooter"> </div>
        </Modal> 
          <div className="content">
                 <Route exact path="/" component={Home}/>
            <Route path="/instruction" component={Instruction}/>
            <Route path="/finansi" component={Finansi}/>
			<Route path="/risk" component={Risk}/>
          </div>
		  <div className="Aside"> <div className="Asidecont"><a href=""><img src="pexels-photo-533572.jpeg" width="100" height="100"/><span>Туристический бизнес в Швейцарии</span></a>
		  </div>
		  <div className="Asidecont"><a href=""><img src="pexels-photo-533572.jpeg" width="100" height="100"/><span>Туристический бизнес в Швейцарии</span></a></div>
		  <div className="Asidecont"><a href=""><img src="pexels-photo-533572.jpeg" width="100" height="100"/><span>Туристический бизнес в Швейцарии</span></a></div>
		  </div>
		  <div className="footer"><span>Обращайтесь за консультациями в нашу фирму, предоставим квалифицированное юридическое сопровождение всех нужных процессов.</span></div>
        </div>
		</HashRouter>
    );
  }
}
export default Main;