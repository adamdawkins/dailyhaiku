import React from 'react';
import Link from "gatsby-link"

const Haiku = ({ path, date, html }) => { 
	return (
		<div className="haiku">
			<Link to={path} className="date"> {date} </Link>
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	);
};

export default Haiku;
