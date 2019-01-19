import React from 'react';
import Heading from './Heading';
import ProgressBar from './ProgressBar';

const About = React.forwardRef((props, ref)=> {
	return (
		<div ref={ref}>
			<Heading text='About Me'/>
			<div className='body'>
				<div style={{display:'flex'}}>
					<div className='leftColumn'>
						<p>
							I am a Systems Design Engineering student at the University
							of Waterloo and am passionate about solving problems with
							efficient code. I enjoy learning about new technologies and
							the many different areas of web development and design.
							<br></br>
							<br></br>
							While not coding in front of the computer, my interests lie
							in cooking, taking photos, and skiing.
						</p>
					</div> 
					<div className='middleColumn'>
						<ul>
							<p>HTML/CSS</p>
							<p>Bootstrap</p>
							<p>React</p>
							<p>Javascript</p>
							<p>Node.js</p>
							<p>Express.js</p>
							<p>Mongodb</p>
							<p>AWS</p>
						</ul>
					</div>
					<div className='rightColumn'>
						<ProgressBar margin='9px' width='90%'/>
						<ProgressBar margin='36px' width='70%'/>
						<ProgressBar margin='36px' width='85%'/>
						<ProgressBar margin='36px' width='90%'/>
						<ProgressBar margin='36px' width='85%'/>
						<ProgressBar margin='36px' width='85%'/>
						<ProgressBar margin='36px' width='70%'/>
						<ProgressBar margin='36px' width='75%'/>
					</div>
				</div>
			</div>
		</div>
	);
});

export default About;