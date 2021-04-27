import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  icon: {
    marginRight: '20px'
  },
  buttons: {
    marginTop: '30px'
  },
  cardGrid: {
    padding: '20px 5px'
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  card: {
    height: '100%',
    
  },
  cardContent: {
    
  }
}))

export default useStyles