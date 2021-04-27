import React from 'react'
import { Typography, Card, CardActions, CardContent, CardMedia, Grid, Button } from '@material-ui/core' 
import useStyles from '../styles'

function CardComponent(props){
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia 
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>
            Heading
          </Typography>
          <Typography variant='body1' gutterBottom>
            This is media card
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CardComponent