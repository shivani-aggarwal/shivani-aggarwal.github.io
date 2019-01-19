import React from 'react';
import Heading from './Heading';
import Project from './Project';
import sotaro from '../assets/sotaro.png';
import readykit from '../assets/readykit.png';
import todoey from '../assets/todoey.png';
import './Portfolio.css';

const Portfolio = React.forwardRef((props, ref)=> {
    return (
      <div ref={ref}>
        	<Heading text='Portfolio'/>
        	<div className='body' style={{marginLeft:'0'}}>
            <div className='projectContainer'>
              <Project 
                src={sotaro} 
                title='Sotaro' 
                text='Web adventure game where you help the wizard, Sotaro, escape the forest while defeating enemies along the way.' 
                link='https://github.com/shivani-aggarwal/Sotaro'/>
              <Project 
                src={readykit} 
                title='Ready Kit' 
                text='Built for the NASA Space Apps Hackathon, this is a website designed to prepare individuals for disasters that may strike.' 
                link='https://github.com/NASASpaceAppsHackathon/readyKit'/>
              <Project 
                src={todoey} 
                title='Todoey' 
                text='An iOS app made to help students efficiently organize work for all their classes in customizable lists.' 
                link='https://github.com/shivani-aggarwal/Todoey'/>
            </div>
        	</div>
      </div>
    );
});
export default Portfolio;