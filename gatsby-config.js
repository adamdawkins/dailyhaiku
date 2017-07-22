module.exports = {
	pathPrefix: '/',
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
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-smartypants',
				],
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-catch-links',
	],
};
