module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		'gatsby-transformer-remark',
		'gatsby-plugin-react-helmet',
	],
};
