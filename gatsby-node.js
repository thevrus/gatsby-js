// const createPosts = require('./utils/createPosts');

const path = require('path');


const GET_POSTS = `{
			wpgraphql {
					posts {
						nodes {
								uri
								id
								slug
								title
								postId
								excerpt
								content
								featuredImage {
											srcSet
											altText
											sourceUrl
								}
							}
					}
			}
	}`;

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return graphql(GET_POSTS)
		.then(result => {
			result.data.wpgraphql.posts.nodes.forEach(node => {
				createPage({
					path: node.slug,
					component: path.resolve('./src/templates/post.js'),
					context: {
						...node
					}
				})
			})
		})
}


