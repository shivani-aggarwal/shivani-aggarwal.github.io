import React from 'react';

const Footer = () => {
	return (
		<div className='footer'>
			<p style={{fontSize: '18px', margin: '0px'}}>@ 2019 Shivani Aggarwal</p>
			<p style={{fontSize: '18px', margin: '0px'}}>
				<a href='https://www.facebook.com/shivani.aggarwal.7773' target='_blank' rel="noopener noreferrer" className='footerLink'>
					Facebook
				</a> | 
				<a href='https://twitter.com/ShivaniAggarw' target='_blank' rel="noopener noreferrer" className='footerLink'> 
					Twitter
				</a> | 
				<a href='https://www.instagram.com/_shivaniaggarwal/?hl=en' target='_blank' rel="noopener noreferrer" className='footerLink'> 
					Instagram
				</a>
			</p>
		</div>
	);
}

export default Footer;