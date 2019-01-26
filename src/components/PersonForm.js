import React from 'react'
import PropTypes from 'prop-types'

const PersonForm = ({
  personType,
  firstName,
  setFirstName,
  lastName,
  setLastName,
}) => (
  <fieldset>
    <legend>{personType}</legend>
    <label>First Name</label>
    <input
      type="text"
      value={firstName}
      onChange={e => setFirstName(e.target.value)}
      placeholder="John"
    />
    <label>Last Name</label>
    <input
      value={lastName}
      onChange={e => setLastName(e.target.value)}
      type="text"
      placeholder="Smith"
    />
  </fieldset>
)

PersonForm.propTypes = {
  personType: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  setFirstName: PropTypes.func.isRequired,
  lastName: PropTypes.string,
  setLastName: PropTypes.func.isRequired,
}

export default PersonForm
