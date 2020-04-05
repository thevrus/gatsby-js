const path = require('path');

const postTemplate = path.resolve('../templates/post')

const GET_POSTS = `query GET_POSTS {
    wpgraphql {
      posts {
        nodes {
          uri
          id
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

const allPosts = [];

module.exports = async ({ actions, graphql }) => {
	const { createPage } = actions;

	const fetchPosts = async () => {

		return await graphql(GET_POSTS)
			.then(({ data }) => {
				const {
					wpgraphql: {
						posts: {
							nodes
						}
					}
				} = data

				const blogPagePath = '/blog'
				const nodeIds = nodes.map(node => node.postId);

				const blogPage = {
					path: blogPage,
					component: postTemplate
				}

			})

	}
}