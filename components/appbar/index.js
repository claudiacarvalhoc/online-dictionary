import { Component } from 'react';
import { AppBar } from '@material-ui/core';
import { appBarStyles } from './style';

class  extends Component {
  constructor() {

  }
  render() {
    const classes = appBarStyles();
    return <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>;
  }
}



export default connect(
  ({  }) => ({  }),
  {
    
  }
)(AppBar);