import React from 'react';

const ProgressBar = ({margin, width}) => {
	return (
		<div class='progress' style={{marginTop: margin}}>
            <div class="progress-bar" style={{width: width}}></div>
        </div>
	);
}

export default ProgressBar;