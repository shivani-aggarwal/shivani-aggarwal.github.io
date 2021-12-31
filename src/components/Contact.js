import React from 'react';
import Heading from './Heading';
import email from '../assets/email.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

const Contact = React.forwardRef((props, ref)=> {
  return (
    <div ref={ref}>
      	<Heading text='Contact'/>
      	<div className='body'>
      		<p style={{marginTop:'1rem'}}>
      			Now that you know a bit about me, let's connect!
      		</p>
      	</div>
        <div style={{width: '100vw', display:'flex', flexDirection: 'column'}}>
          <div style={{display: 'inline', textAlign: 'center', marginTop: '10px', marginBottom: '50px'}}>
              <a href='mailto:shivanisa33@gmail.com' style={{marginRight: '45px'}}>
                <img src={email} alt='email' height='90px' width='90px' className='grow'/>
              </a>
              <a href='https://www.linkedin.com/in/shivani-aggarw' target='_blank' rel="noopener noreferrer" style={{marginLeft: '45px', marginRight: '45px'}}>
                <img src={linkedin} alt='linkedin' height='90px' width='90px' className='grow'/>
              </a> 
              <a href='https://www.github.com/shivani-aggarwal' target='_blank' rel="noopener noreferrer" style={{marginLeft: '45px'}}>
                <img src={github} alt='github' height='90px' width='90px' className='grow'/>
              </a>
          </div>
        </div>
    </div>
  );
});

export default Contact;