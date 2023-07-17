import { Card } from '@mui/material';
import React, { useState, useEffect } from 'react'

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
    <div style={{ marginTop: "80px", marginBottom: "10px", display: "flex", flex:"1,1,1"}}>
      {products.map((item) => (
        <section key={item.id} style={{ minWidth: "300px", margin: "0 10px" }}>
          <Card style={{ padding: "20px", width: "300px", height: "400px" }}>
            <div>{item.title}</div>
            <div>
              <img src={item.image} alt={item.title} style={{ height: '100px' }} />
            </div>
            <div>{item.description}</div>
          </Card>
        </section>
      ))}
    </div>
  )
}

export default Home;
