const path = require('path');

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const haikuTemplate = path.resolve(`src/templates/haiku.jsx`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
      {
			 allMarkdownRemark(sort:{fields:[frontmatter___date], order:DESC}) {
          edges {
            node {
              frontmatter {
                path
								date(formatString: "Do MMMM, YYYY")
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        // Create pages for each markdown file.
				const haikus = result.data.allMarkdownRemark.edges;
        haikus.forEach(({ node }, index) => {
					const previous = index === 0 ? false : haikus[index - 1].node;
					const next = index === haikus.length - 1 ? false : haikus[index + 1].node;
          const path = node.frontmatter.path;
          createPage({
            path,
            component: haikuTemplate,
            context: {
              path,
							next,
							previous
            }
          })
        })
      })
    )
  })
}
