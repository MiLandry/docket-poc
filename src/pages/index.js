import React from 'react';
import { Link } from 'gatsby';
import DocketTable from '../components/DocketTable';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Layout from '../components/layout';
import { createHttpLink } from 'apollo-link-http';

const httpLink = createHttpLink({
  uri: process.env.GATSBY_PRISMA_URI,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const IndexPage = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <h1>Docket</h1>

        <DocketTable />

        <Link to="/new-case/">Go to new case</Link>
      </Layout>
    </ApolloProvider>
  );
};

export default IndexPage;
