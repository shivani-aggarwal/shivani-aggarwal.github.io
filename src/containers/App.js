import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.portfolio = React.createRef();
    this.about = React.createRef();
    this.contact = React.createRef();
  }

  render() {
    return (
      <div style={{overflowX:'hidden'}}>
      	<NavBar portfolioRef={this.portfolio} aboutRef={this.about} contactRef={this.contact}/>
        <Home aboutRef={this.about}/>
        <About ref={this.about}/>
      	<Portfolio ref={this.portfolio}/>
        <Contact ref={this.contact}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
