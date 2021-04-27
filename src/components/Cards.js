import React from 'react'
import { Grid, Container } from '@material-ui/core' 
import useStyles from '../styles'
import CardComponent from '../components/Card'

function Cards(){
  const classes = useStyles()
  const cards = '123456789'.split('')
  return (
    <Container className={classes.cardGrid} maxWidth='md'>
      <Grid container spacing={4}>
      {cards.map(card => (
        <CardComponent key={card}/>
      ))}
      </Grid>
    </Container>
  )
}

export default Cards