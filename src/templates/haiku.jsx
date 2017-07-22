import React from 'react';
import Link from 'gatsby-link';
import Haiku from '../components/Haiku';
import Helmet from 'react-helmet';

const HaikuTemplate = ({data: { haiku }, pathContext }) => { 
	const { next, previous, path } = pathContext;
	return (
		<div>
			<Helmet>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:creator" content="@adamdawkins" />
				<meta name="twitter:image" content='https://adamshaikus.now.sh/logo.png'/>
				<meta name="twitter:image:alt" content="俳句"/>
				<meta property="og:url" content={`https://adamshaikus.now.sh${path}`} />
				<meta property="og:title" content={`${haiku.frontmatter.date} - A haiku.`} />
				<meta property="og:description" content={haiku.internal.content.split('---')[2].split('\n\n')[1]}/>
			</Helmet>
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
internal {
content
}
		}
	}
`
