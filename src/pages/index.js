import React from "react"
import Helmet from "react-helmet"
import Haiku from '../components/Haiku';

export default class Index extends React.Component {
  render() {
		const { path, date } = this.props.data.allMarkdownRemark.haikus[0].haiku.frontmatter;
		return (
			<Haiku 
				html={`<p>Latest haiku:<br/> <a href="${path}">${date}</a></p>`}
			/>
    )
  }
}

export const pageQuery = graphql`
query allHaikus {
	 allMarkdownRemark(limit: 1, sort: {fields:[frontmatter___date], order: DESC}) {
		haikus:edges {
			haiku:node {
				frontmatter {
					path
					date(formatString:"Do MMMM, YYYY")
				}
			}
		}
	}
}
`;
