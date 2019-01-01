import React from 'react'
import { Link, graphql } from 'gatsby'
import skrollr from 'skrollr'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import {rhythm, scale} from '../utils/typography'

class BlogIndex extends React.Component {
  componentDidMount() {
    if (skrollr) {
      skrollr.init({
        forceHeight: false
      });
    }
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <div
        id="skrollr-body"
        data-50="background-color[swing]:rgb(255,255,255);"
        data-125="background-color[swing]:rgb(0,0,0);"
      >
        <SEO
            title={siteTitle}
            keywords={[`blog`, `lion vollnhals`, `aufwachen`, `spiritualität`]}
        />
        <div
          style={{
            minHeight: `100vh`,
          }}>
          <h1
            data-0="padding-top[swing]:47vh;"
            data-200="padding-top[swing]:-0vh;"
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
        <div
          style={{
            marginTop: `15vh`,
          }}
          data-50-bottom-top="margin-top[swing]:15vh;"
          data--50-bottom-top="margin-top[swing]:-50vh;"
        >
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
