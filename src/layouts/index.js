import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navi from '../components/nav'
import Header from '../components/header'
import Footer from '../components/footer'


// react-strap
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.scss'



const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Navi/>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 2000,
        padding: '0px .95rem 1.05rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
