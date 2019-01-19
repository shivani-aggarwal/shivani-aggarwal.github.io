import React, { Component } from 'react';
import './Home.css'
import arrow from '../assets/downArrow.png';
import Typing from 'react-typing-animation';

class Home extends Component {
	constructor(props) {
		super(props);
		this.about = this.props.aboutRef;
	}

	scrollToAbout = () => {
	window.scrollTo({
	    top: this.about.current.offsetTop - 60, 
	    behavior: "smooth"
	})    
	return false;
	}

	render() {
	return (
	  <div className='page centerAlign' style={{backgroundColor: '#99CED3'}}>
	    	<h1>Hello, my name is Shivani Aggarwal.</h1>
			<Typing speed={80}><h2>I am a Full Stack Developer</h2></Typing>
	    	<a href="javascript:;" onClick={this.scrollToAbout}>
	    		<img src={arrow} alt='down arrow' width='55px' height='55px' style={{position:'absolute', bottom:'80px'}} className='grow'/>
	    	</a>
	  </div>
	);
	}
}
export default Home;