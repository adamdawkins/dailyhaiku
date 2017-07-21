import React from "react"
import Helmet from "react-helmet"
import Haiku from '../components/Haiku';

export default class Index extends React.Component {
  render() {
		const { haikus } = this.props.data.allMarkdownRemark;
    return (
			<div>
			{haikus.map(({ haiku }, index) => (
				<Haiku
					key={haiku.frontmatter.path}
					path={haiku.frontmatter.path}
					date={haiku.frontmatter.date}
					html={haiku.html}
					/>
			))}
			</div>
    )
  }
}

export const pageQuery = graphql`
query allHaikus {
	 allMarkdownRemark(sort: {fields:[frontmatter___date], order: DESC}) {
		haikus:edges {
			haiku:node {
				frontmatter {
				  date(formatString: "Do MMMM, YYYY")
					path
				}
				html
			}
		}
	}
}
`;
