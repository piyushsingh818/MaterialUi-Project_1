import { Container } from '@mui/material'
import React from 'react'

const Services = () => {
  return (
    <div style={{marginTop:"80px"}}>
    <p>container material ui styles</p>
    <Container maxWidth="xl" fixed style={{backgroundColor:"red"}}>Services</Container>
    <Container maxWidth="lg" sticky  style={{backgroundColor:"red",marginLeft:"200px"}}>Services</Container>
    <Container maxWidth="md" disableGutters fixed style={{backgroundColor:"red"}}>Services</Container>
    <Container maxWidth="sm" style={{backgroundColor:"red",height:"30px"}}>Services</Container>
    </div>
  )
}

export default Services