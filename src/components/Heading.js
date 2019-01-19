import React from 'react';

const Heading = ({text}) => {
	return (
		<div className='headingBar'>
			<h1 className='heading'>{text}</h1>
		</div>
	);
}

export default Heading;