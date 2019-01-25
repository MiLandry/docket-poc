import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
// import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const POST_MUTATION = gql`
  mutation createPersonMutation($firstName: String!, $lastName: String!) {
    createPerson(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`
// mutation PostMutation($description: String!, $url: String!) {
//   post(description: $description, url: $url) {
//     id
//     createdAt
//     url
//     description
//   }
// }

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

const NewCaseForm = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  // const [count, setCount] = useState(0);
  return (
    <ApolloProvider client={client}>
      <div>
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          type="text"
          placeholder="First name"
        />
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          type="text"
          placeholder="Last name"
        />
        {/* <Mutation mutation={POST_MUTATION} variables={{ description, url }}>
          {() => (
            <button onClick={`... you'll implement this 🔜`}>Submit</button>
          )}
        </Mutation> */}
        <Mutation mutation={POST_MUTATION} variables={{ firstName, lastName }}>
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
      )
    </ApolloProvider>
  )
}

export default NewCaseForm
// registerServiceWorker()

// import React from 'react'
// import { Link } from 'gatsby'

// import Layout from '../components/layout'
// import SEO from '../components/seo'
// import NewCaseForm from '../components/forms/NewCaseForm'

// const SecondPage = () => (
//   <Layout>
//     <SEO title="Page two" />
//     <h1>New case</h1>
//     <NewCaseForm />

//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

// export default SecondPage
