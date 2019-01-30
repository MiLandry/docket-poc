import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';

const QUERY = gql`
  query {
    courtCases {
      id
      createdAt
      plaintiff {
        firstName
        lastName
      }
      defendant {
        firstName
        lastName
      }
      lawyer {
        firstName
        lastName
      }
    }
  }
`;
const formatName = (fn, ln) => fn + ' ' + ln;

const DocketTable = () => (
  <Query query={QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const table = data.courtCases.map(
        ({ id, plaintiff, defendant, lawyer, createdAt }) => {
          console.log('createdAt', createdAt);
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{formatName(plaintiff.firstName, plaintiff.lastName)}</td>
              <td>{formatName(defendant.firstName, defendant.lastName)}</td>
              <td>{formatName(lawyer.firstName, lawyer.lastName)}</td>
              <td>{createdAt}</td>
            </tr>
          );
        }
      );

      return (
        <table>
          <tbody>
            <tr>
              <th>Case ID</th>
              <th>Plaintiff</th>
              <th>Defendant</th>
              <th>Lawyer</th>
              <th>Date created</th>
            </tr>
            {table}
          </tbody>
        </table>
      );
    }}
  </Query>
);

export default DocketTable;
