import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import {rhythm, scale} from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <div>
        <div
          style={{
            minHeight: `100vh`,
          }}>
          <SEO
            title={siteTitle}
            keywords={[`blog`, `lion vollnhals`, `aufwachen`, `spiritualität`]}
          />
          <h1
            style={{
              ...scale(2.7),
              marginBottom: rhythm(0.3),
              paddingTop: `47vh`,
              textAlign: `right`,
              marginRight: `10vw`,
            }}
          >
            <Link
              style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
              }}
              to={`/`}
            >
              {siteTitle}
            </Link>
          </h1>
          <p
            style={{
              textAlign: `right`,
              marginLeft: `1.0875rem`,
              marginRight: `10vw`,
              marginBottom: rhythm(1.5),
            }}
          >
            Geschichten von <strong>Lion Vollnhals</strong> auf der Suche nach der Wahrheit.
          </p>
        </div>
        <Layout location={this.props.location} title={siteTitle}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </Layout>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
