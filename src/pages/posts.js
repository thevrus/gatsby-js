import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostsPage = ({ data }) => (
    <Layout>
        <SEO title="Posts" />
        {data.wpgraphql.posts.nodes.map(post => (
            <div key={post.id}>
                <Link to={post.uri}>{post.title}</Link>
            </div>
        ))}
    </Layout>
)

export const postsQuery = graphql`
    {
        wpgraphql {
                posts {
                    nodes {
                            uri
                            id
                            title
                            slug
                            postId
                            excerpt
                            content
                    }
                }
        }
    }
`

export default PostsPage