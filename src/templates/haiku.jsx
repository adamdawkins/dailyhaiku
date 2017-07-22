import React from 'react';
import Link from 'gatsby-link';
import Haiku from '../components/Haiku';

const HaikuTemplate = ({data: { haiku }, pathContext }) => { 
	const { next, previous } = pathContext;
	return (
		<div>
		<Haiku
			id={haiku.frontmatter.id}
			date={haiku.frontmatter.date}
			html={haiku.html}
		/>
		<p>
			{previous ? (
				<span>
				Newer: <Link to={previous.frontmatter.path}>{previous.frontmatter.date}</Link>
			</span>
				) : null}
				{next ? (
					<span style={{marginLeft: '2em'}}>
					Older: <Link to={next.frontmatter.path}>{next.frontmatter.date}</Link>
				</span>
					) : null}</p>
		</div>
	);
};

export default HaikuTemplate;

export const pageQuery = graphql`
	query HaikuByPath($path: String!) {
		haiku:markdownRemark(frontmatter: { path: { eq: $path } }) {
			id
			html
			frontmatter {
			 date(formatString:"Do MMMM, YYYY")

			}
		}
	}
`
