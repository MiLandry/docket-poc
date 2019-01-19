import React from 'react'

const NewCaseForm = ({ value, foo }) => {
  return (
    <>
      <form action="" method="post">
        <label htmlFor="">Plaintiff</label>
        <input type="text" name="plaintiff" id="" />
        <label htmlFor="">Attorney</label>
        <input type="text" name="attorney" id="" />
        <label htmlFor="">Defendant</label>
        <input type="text" name="defendant" id="" />
      </form>
      <button type="submit">Submit</button>
    </>
  )
}

export default NewCaseForm
