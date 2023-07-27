import React from 'react'
import { Navigate } from 'react-router-dom'

const About = () => {
  const loginstatus = localStorage.getItem("loginAuth")
  return (
    <>
    {!loginstatus || loginstatus == null ?
      <>
        <Navigate to="/login" />
      </>
      :
    <div> this is About</div>
    }
    </>
  )
}

export default About