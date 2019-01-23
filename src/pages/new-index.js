import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>Case ID </th>
            <th>Plaintiff </th>
            <th>Lawyer</th>
            <th>Defendant </th>
          </tr>
        </thead>
        <tbody>
          {}
          <tr>
            <td>data</td>
            <td>{data.courtCaseGQL.courtCase.plaintiff.firstName}</td>
            <td>{data.courtCaseGQL.courtCase.plaintiff.firstName}</td>
            <td>{data.courtCaseGQL.courtCase.plaintiff.firstName}</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  {
    courtCaseGQL {
      courtCase {
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
  }
`
