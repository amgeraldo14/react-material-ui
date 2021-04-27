import React from 'react'
import { CssBaseline } from '@material-ui/core'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App(){
  return (
    <>
      <CssBaseline/>
      <Navbar/>
      <Home/>
      
    </>
  )
}

export default App