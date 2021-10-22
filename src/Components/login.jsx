import axios from 'axios';
import {useFormik} from 'formik';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const dev = 'http://localhost:8000';

const baseURL = window.location.hostname.split(':')[0] === 'localhost' ? dev : ""
function Login(){
    const formik = useFormik({
        initialValues:{
            email: '',
            password: ''
          },
          onSubmit: onSubmitFunction
    })
    function onSubmitFunction(values){
        axios.post(`${baseURL}/api/v1/login`,{
            email: values.email,
            password: values.password
        })
        .then(res=>{
            if(res.data.email){
                alert('login successfull');
            }
           
        })
        .catch(err=>{
            alert('login unsuccessfull error found');
        })
    }
    return(
        <div className="login">
            <h1> Log In</h1>
       <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <TextField
            
            color="primary"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type = "email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}

            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            
            color="primary"
            type="password"
            id="filled-basic"
            label="Password"
            variant="outlined"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}

            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            />

          <Button  variant="contained" color="primary" type="submit">Log in</Button>
        </Stack>
        </form>
        </div>
    )
}

export default Login;