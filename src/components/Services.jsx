import React from 'react'
import { Container } from '@mui/material'
import { Navigate } from 'react-router-dom';


const Services = () => {
  const loginstatus = localStorage.getItem("loginAuth");
  return (
    <>
    {!loginstatus || loginstatus == null ?
        <>
          <Navigate to="/login" />
        </>
        :
    <div>
      Services
    </div>
}
    </>
  )
}

export default Services