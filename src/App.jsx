import axios from 'axios';
import {useFormik} from 'formik';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Login from './Components/login';
import Signup from './Components/signup';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
function App(){
  let history = useHistory();
    return(
    <div className="App">
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button variant="h6" component="div" onClick={()=> history.push('/')}>
            MERN project
          </Button>
          <Button color="inherit" onClick={()=> {history.push('/signup')} }>Signup</Button>
          <Button color="inherit" onClick={()=> {history.push('/login') }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <Switch>
        <Route path="/signup">
          <Signup/>
        </Route>
      <Route path="/login">
            <Login />
          </Route>
      </Switch>
    </div>
   
  )
  
}
export default App;