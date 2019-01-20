import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
// import './layout.css'

function Case(props) {
  return (
    <StaticQuery
      query={graphql`
        query SiteCaseQuery {
          site {
            siteMetadata {
              title
              foo
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          The data : {data.site.siteMetadata.foo}
        </>
      )}
    />
  )
}
Case.propTypes = {}

export default Case
