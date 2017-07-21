import React from 'react';

const Haiku = ({ date, html }) => { 
	return (
		<div className="haiku">
			<span className="date">{date}</span>
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	);
};

export default Haiku;
