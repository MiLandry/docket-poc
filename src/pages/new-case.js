import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import NewCaseForm from '../components/forms/NewCaseForm'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>New case</h1>
    <NewCaseForm />

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
