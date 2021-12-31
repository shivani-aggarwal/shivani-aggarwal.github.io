import React, { Component } from 'react';
import './NavBar.css'
import logo from '../assets/logo.png';

const offset = 80;

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.portfolio = this.props.portfolioRef;
		this.about = this.props.aboutRef;
		this.contact = this.props.contactRef;
		this.state = {
			active: 'home',
			clicked: 'false'
		}
		this.addScrollEvent();
	}

	scrollToHome = () => {
		window.removeEventListener('scroll', this.handleScrollEvent);
		this.setState({active: 'home'});
		window.scroll({top: 0, left:0, behaviour: 'smooth'});
		window.onscroll = (e) => {
			if (window.scrollY === 0) {
				this.addScrollEvent();
			}
		}
		return false;
	}

	scrollToAbout = () => {
		window.removeEventListener('scroll', this.handleScrollEvent);
		this.setState({active: 'about'});
		window.scrollTo({
		    top: this.about.current.offsetTop - offset, 
		    behavior: "smooth"
		})  
		window.onscroll = (e) => {
			if (window.scrollY+offset >= this.about.current.offsetTop) {
				this.addScrollEvent();
			}
		}  
		return false;
	}

	scrollToPortfolio = () => {
		window.removeEventListener('scroll', this.handleScrollEvent);
		this.setState({active: 'portfolio'});
		window.scrollTo({
		    top: this.portfolio.current.offsetTop - offset, 
		    behavior: "smooth"
		})
		window.onscroll = (e) => {
			if (window.scrollY+offset >= this.portfolio.current.offsetTop) {
				this.addScrollEvent();
			}
		}
		return false;
	}

	scrollToContact = () => {
		window.removeEventListener('scroll', this.handleScrollEvent);
		this.setState({active: 'contact'});
		window.scrollTo({
	   		top: this.contact.current.offsetTop - offset, 
	    	behavior: "smooth"
		})
		window.onscroll = (e) => {
			if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight || 
				window.scrollY+offset >= this.contact.current.offsetTop) {
				this.addScrollEvent();
			}
		} 
		return false;
	}

	addScrollEvent = () => {
	    window.addEventListener('scroll', this.handleScrollEvent);
  	}

  	handleScrollEvent = (e) => {
      if (window.scrollY+offset < this.about.current.offsetTop) {
        if (this.state.active !== 'home') { 
          this.setState({active: 'home'});
        }
      }
      else if (window.scrollY+offset < this.portfolio.current.offsetTop) {
        if (this.state.active !== 'about') {
          this.setState({active: 'about'});
        }
      }
      else if (window.scrollY+offset < this.contact.current.offsetTop) {
        if (this.state.active !== 'portfolio') {
          this.setState({active: 'portfolio'});
        }
      }
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight ||
                window.scrollY+offset >= this.contact.current.offsetTop) {
        if (this.state.active !== 'contact') {
          this.setState({active: 'contact'});
        }
      }
    }

	render() {
		return (
		  <div>
		      <nav className="navbar fixed-top navbar-expand-sm bg-dark navbar-dark justify-content-end">
		        <a className="navbar-brand" href="javascript:;" onClick={this.scrollToHome}>
		        	<img src={logo} alt='logo' height='55px' width='55px'/>
		        </a>
		        <button className="ml-auto navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
		            <span className="navbar-toggler-icon"></span>
		        </button>
		        <div className="ml-auto collapse navbar-collapse flex-grow-0" id="navbarContent">
		            <ul className="navbar-nav text-right">
		              <li className="nav-item">
		                <a className={`nav-link ${this.state.active === "home" ? 'active' : ''}`} href="javascript:;" onClick={this.scrollToHome}>Home</a>
		              </li>
		              <li className="nav-item">
		                <a className={`nav-link ${this.state.active === "about" ? 'active' : ''}`} href="javascript:;" onClick={this.scrollToAbout}>About</a>
		              </li>
		              <li className="nav-item">
		                <a className={`nav-link ${this.state.active === "portfolio" ? 'active' : ''}`} href="javascript:;" onClick={this.scrollToPortfolio}>Portfolio</a>
		              </li>
		              <li className="nav-item">
		                <a className={`nav-link ${this.state.active === "contact" ? 'active' : ''}`} href="javascript:;" onClick={this.scrollToContact}>Contact</a>
		              </li>
		            </ul>
		        </div>
		      </nav>
		    </div>
		);
	}
}
export default NavBar;