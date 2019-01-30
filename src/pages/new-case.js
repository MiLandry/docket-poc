import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import PersonForm from '../components/PersonForm';
import Layout from '../components/layout';

const POST_MUTATION = gql`
  mutation createCourtCaseMutation(
    $plaintiffFirstName: String!
    $plaintiffLastName: String!
    $defendantFirstName: String!
    $defendantLastName: String!
    $lawyerFirstName: String!
    $lawyerLastName: String!
  ) {
    createCourtCase(
      plaintiffFirstName: $plaintiffFirstName
      plaintiffLastName: $plaintiffLastName
      defendantFirstName: $defendantFirstName
      defendantLastName: $defendantLastName
      lawyerFirstName: $lawyerFirstName
      lawyerLastName: $lawyerLastName
    ) {
      id
      plaintiff {
        firstName
        id
      }
      defendant {
        firstName
        id
      }
      lawyer {
        firstName
        id
      }
    }
  }
`;

const httpLink = createHttpLink({
  uri: process.env.GATSBY_PRISMA_URI,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const NewCaseForm = () => {
  const [plaintiffFirstName, setPlaintiffFirstName] = useState();
  const [plaintiffLastName, setPlaintiffLastName] = useState();
  const [defendantFirstName, setDefendantFirstName] = useState();
  const [defendantLastName, setDefendantLastName] = useState();
  const [lawyerFirstName, setLawyerFirstName] = useState();
  const [lawyerLastName, setLawyerLastName] = useState();
  return (
    <ApolloProvider client={client}>
      <Layout>
        <h1>Start a new case</h1>
        <form>
          <PersonForm
            personType="Plaintiff"
            firstName={plaintiffFirstName}
            lastName={plaintiffLastName}
            setFirstName={setPlaintiffFirstName}
            setLastName={setPlaintiffLastName}
          />
          <PersonForm
            personType="Defendant"
            firstName={defendantFirstName}
            lastName={defendantLastName}
            setFirstName={setDefendantFirstName}
            setLastName={setDefendantLastName}
          />
          <PersonForm
            personType="Lawyer"
            firstName={lawyerFirstName}
            lastName={lawyerLastName}
            setFirstName={setLawyerFirstName}
            setLastName={setLawyerLastName}
          />

          <Mutation
            mutation={POST_MUTATION}
            variables={{
              plaintiffFirstName,
              plaintiffLastName,
              defendantFirstName,
              defendantLastName,
              lawyerFirstName,
              lawyerLastName,
            }}
            onCompleted={() => {
              window.location = '/';
            }}
          >
            {postMutation => {
              const handleFormSubmit = e => {
                e.preventDefault();
                postMutation();
              };
              return <button onClick={handleFormSubmit}>Submit</button>;
            }}
          </Mutation>
        </form>
      </Layout>
    </ApolloProvider>
  );
};

export default NewCaseForm;
