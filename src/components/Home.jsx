import { Card, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <CardContainer>
      {products.map((item) => (
        <section key={item.id}>
          <StyledCard>
            <Typography variant="h6" align='center'>{item.title}</Typography>
            <div>
              <Typography align='center'><img src={item.image} alt={item.title} style={{ height: "200px", width: "200px", padding: "15px" }} /></Typography>
            </div>
            <StyledDescription>{item.description}</StyledDescription>
            <div>
              <span style={{ margin: '10px' }}>Rate: {item.rating.rate}</span>
              <span style={{ margin: '10px' }}>Price: {item.price}</span>
              <span style={{ margin: '10px' }}>Count: {item.rating.count}</span>
            </div>
          </StyledCard>
        </section>
      ))}
    </CardContainer>
  );
};

export default Home;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100vw; /* Adjust the max-width to fit your desired layout */
  margin: 0 auto; /* Centers the cards on the page */
  margin-left:30px;
`;

const StyledCard = styled.div`
width: 410px;
height: 550px;
border: 1px solid #ccc;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 30px;
margin: 10px;
background-color: #f9f9f9; /* Light background color */
color: #333; /* Font color */
`;
const StyledDescription = styled.div`
color:cornflowerblue;
font-family:system ui;
`;
