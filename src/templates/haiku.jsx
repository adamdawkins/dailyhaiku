import React from 'react';

const HaikuTemplate = ({data: { haiku } }) => { 
	return (
		<div className="haiku">
			<span className="date">{haiku.frontmatter.date}</span>
			<div dangerouslySetInnerHTML={{ __html: haiku.html }} />
		</div>
	);
};

export default HaikuTemplate;

export const pageQuery = graphql`
	query HaikuByPath($path: String!) {
		haiku:markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
			 date(formatString:"Do MMMM, YYYY")
			}
		}
	}

`
