import React, { useState, useEffect } from 'react'
import { ButtonGroup, Typography, Button, Card, CardHeader, CardMedia, CardContent, CardActions, Rating } from '@mui/material';
import { styled } from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import { Favorite, FavoriteBorder, Star } from '@mui/icons-material';
import Collapse from '@mui/material/Collapse';
import { Navigate } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Home = () => {
  const [products, setProducts] = useState([]);
  const loginstatus = localStorage.getItem("loginAuth");
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
    <>
      {!loginstatus || loginstatus == null ?
        <>
          <Navigate to="/login" />
        </>
        :
        <>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: "50px", marginTop: "15px" }}>
            {
              products.map((item) => (
                <Card sx={{ width: "340px", margin: "60px" }}>
                  <CardHeader title={item.title} subheader={item.id} />
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.image}
                    alt={item.id}
                  />
                  <CardContent>
                    <div style={{ display: "flex", textAlign: "center" }}>
                      <Typography variant="body2" color="text.secondary">
                        <Rating name="read-only"
                          value={item.rating.rate}
                          precision={0.5} // Use 0.5 precision to show half stars
                          readOnly // Set to read-only mode/>
                        />
                      </Typography>
                      <span style={{ margin: "4px" }}>{item.rating.rate}</span>
                      <Typography variant="body2" color="text.secondary">
                        Reviews : {item.rating.count}
                      </Typography>
                    </div>
                  </CardContent>
                  <CardActions disableSpacing>

                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                    <IconButton aria-label="add to favorites">
                      <Favorite />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Details:</Typography>
                      <Typography paragraph>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>

              ))
            }
          </div>
        </>
      }
    </>
  );
};

export default Home;

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
}));
