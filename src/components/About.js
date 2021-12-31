import React from 'react';
import Heading from './Heading';
import dashboard from '../assets/dashboard.png';
import resume from '../assets/ShivaniAggarwal_Resume.pdf';

const About = React.forwardRef((props, ref)=> {
	return (
		<div ref={ref}>
			<Heading text='About Me'/>
			<div className='body'>
				<div style={{display:'flex'}}>
					<div className='leftColumn'>
						<p>
							I am a 4th year Systems Design Engineering student at the University
							of Waterloo and am passionate about creating intuitive user interfaces and experiences. I enjoy learning about new technologies and
							the different areas of web development and design.
							<br></br>
							<br></br>
							Outside of work, my interests lie
							in learning languages, photography, and pilates.
						</p>
						<a href={resume} alt="Shivani Aggarwal Resume" target='_blank' rel="noopener noreferrer" style={{fontSize:'18pt',marginBottom:'16px'}}>
							Check out my resume here!
						</a>
					</div> 
					<div className='rightColumn'>
						<img src={dashboard} alt='web design' height='90%' width='100%' />
						<p style={{fontSize:'13pt',marginTop:'5px', fontStyle:'italic'}}>Dashboard design for a health information system</p>
					</div>
				</div>
			</div>
		</div>
	);
});

export default About;