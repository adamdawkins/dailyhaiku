import React from 'react';
import Haiku from '../components/Haiku';

const HaikuTemplate = ({data: { haiku } }) => { 
	return (
		<Haiku
			date={haiku.frontmatter.date}
			html={haiku.html}
		/>
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
