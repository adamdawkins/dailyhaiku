import React from "react"
import Helmet from "react-helmet"
import Haiku from '../components/Haiku';

export default class Index extends React.Component {
	 constructor(props) {
			super(props);
			window.location = props.data.allMarkdownRemark.haikus[0].haiku.frontmatter.path;
	 }
  render() {
    return (
			<Haiku 
				html="<p>Finding the most recent Haiku...</p>"
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
				}
			}
		}
	}
}
`;
