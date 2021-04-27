import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core' 
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles'

function App(){
  const classes = useStyles()
  const cards = '1234'.split('')
  return (
    <>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
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
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
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
                  <Button size="sm" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default App