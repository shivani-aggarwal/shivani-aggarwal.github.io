import React from 'react';
import Heading from './Heading';
import Project from './Project';
import sotaro from '../assets/sotaro.png';
import readykit from '../assets/readykit.png';
import healthra from '../assets/healthra.png';
import healthraDetails from '../assets/Healthra.pdf';
import './Portfolio.css';

const Portfolio = React.forwardRef((props, ref)=> {
    return (
      <div ref={ref}>
        	<Heading text='Portfolio'/>
        	<div className='body' style={{marginLeft:'0'}}>
            <div className='projectContainer'>
              <Project 
                src={healthra} 
                title='Healthra' 
                text='An integrated health information system designed to allow patients to view all of their medical data in one web application.' 
                link={healthraDetails}/>
              <Project 
                src={sotaro} 
                title='Sotaro' 
                text='Web adventure game where you help the wizard, Sotaro, escape the forest while defeating enemies along the way.' 
                link='https://github.com/shivani-aggarwal/Sotaro'/>
              <Project 
                src={readykit} 
                title='Ready Kit' 
                text='Built for the NASA Space Apps Hackathon, this is a website designed to prepare individuals for natural disasters.' 
                link='https://github.com/NASASpaceAppsHackathon/readyKit'/>
            </div>
        	</div>
      </div>
    );
});
export default Portfolio;