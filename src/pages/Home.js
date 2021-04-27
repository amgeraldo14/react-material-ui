import React from 'react'
import { Typography, Grid, Container, Button } from '@material-ui/core' 
import useStyles from '../styles'
import Cards from '../components/Cards'

function Home(){
  const classes = useStyles()
  return (
    <main>
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Photo Album
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Hello everyone. This is a photo album and im trying to make this sentence as long as possible
          </Typography>
          <div className={classes.buttons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  See my photos
                </Button>
              </Grid>

              <Grid item>
                <Button variant="contained" color="secondary">
                  Second Button
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Cards/>
    </main>
  )
}

export default Home