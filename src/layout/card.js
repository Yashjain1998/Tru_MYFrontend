import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Chip,
  Stack,
} from "@mui/material";



export default function MovieCard() {
    return (
      <Card sx={{ maxWidth: 230, minWidth: 150, background: '#616161', color: 'white', position: 'relative'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="260"
            image="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.webp"
            onMouseLeave={()=>console.log(29)}
            alt="green iguana"
            
          />
          <CardContent sx={{ 
                 position: 'absolute',
                 top: 'auto',
                 bottom: 0,
                 width: '100%',
                 backgroundColor: 'rgb(94 92 92 / 94%)', // Semi-transparent overlay
                 visibility: 'visible',
                 transition: 'opacity 0.3s ease, visibility 0.3s ease',
                 opacity: 0,
                 '&:hover': {
                   opacity: 1,
                 },
            p:1 }}>
            <Typography gutterBottom variant="h6" component="div">
              {'Top Funny Comedian: The Movie'.substring(0,30)}
            </Typography>
            <Stack direction="row" spacing={1}>
              {"Comedy,Family".split(",").map((genre, index) => (
                <Chip key={index} label={genre.trim()} size="small" sx={{color: '#eeeeee', background: 'rgb(58 58 58)'}} />
              ))}
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              marginTop={0.8}
              color='#eeeeee'
            >
              <Typography variant="subtitle1" >
                Votes: 120
              </Typography>
              <Typography variant="subtitle1">
                Score: 32
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{background: 'rgb(14 14 14 / 65%)', p: 0.3, paddingInline: 1 }}>
          <Button size="small" color="primary" sx={{color: '#d3d6da',width:'100%'}}>
            ADD Video
          </Button>
        </CardActions>
      </Card>
    );
  }