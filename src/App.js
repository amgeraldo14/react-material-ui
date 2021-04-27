import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core' 
import { PhotoCamera } from '@material-ui/icons'
function App(){
  return (
    <>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera/>
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello everyone. This is a photo album and im trying to make this sentence as long as possible
            </Typography>
          </Container>
        </div>
      </main>
    </>
  )
}

export default App