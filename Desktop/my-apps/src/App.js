import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
//Components
import Navbar from './components/Navbar'
//Pages
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
 

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff'
    },
    secondary: {
      light: '##ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'
    }
  },
  typography :{
    useNextVariants: true
  },
  form:{
    textAlign: 'center'

},
image: {
    margin: '20px auto 20px auto'
},
pageTitle :{
    margin:'10px auto 10px auto'
},
textField : {
margin: '10px auto 10px auto'
},
button: {
margintop: 20,
position: 'relative'
},
customError: {
color: 'red',
fontSize : '0.8rem',
margintop: 10

},
progress:{
position: 'absolute'
}

}
)
class App extends Component {
  render() {
  return (
<MuiThemeProvider theme={theme}>
<div className="App">
   <Router>
   <Navbar/>
<div className = 'container'>
    <Switch>
      <Route exact path = '/' component = {home}/>
      <Route exact path = '/login' component = {login}/>
      <Route exact path = '/signup' component = {signup}/>

    </Switch>
</div>
</Router>
    </div>
</MuiThemeProvider>
  );
}
}

export default App;