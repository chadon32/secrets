import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
//import AppIcon from '../images/Crest.jpg'
import axios from 'axios'
import {Link} from 'react-router-dom'
//Mui stuff
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'


const styles= {
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


export class signup extends Component {
    constructor(){
        super();
        this.state= {
            email: '',
            password: '',
            confirmpassword: '',
            handle:'',
        loading:false ,
        errors: {}
            }
    }
    handleChange = (event) =>{
this.setState({
    
   [ event.target.name] : event.target.value

})
    }
    handleSubmit = (event) => {
       event.preventDefault();
       this.setState({
           loading:true
       })
       const newuserData = {
           email:this.state.email,
           password:this.state.password,
           confirmPassword: this.state.confirmPassword,
           handle:this.state.handle
       }
       axios.post('/signup',newuserData)
       .then(res => {
           console.log(res.data)
           localStorage.setItem('FBIdtoken', `Bearer ${res.data.token}`)
           this.setState({
               loading: false
           })
           this.props.history.push('/')
       })
       .catch(err => {
           this.setState({
               errors: err.response.data,
               loading: false
           }) 
       })
    }
    render() {
        const {classes} = this.props
        const{errors, loading} = this.state
        return (
            <Grid container className = {classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <Typography variant = "h1" className= {classes.pageTitle}>
                        Signup
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                    <TextField id = 'email' name='email' type ='email' 
                    label = "Email" className = {classes.textField}
                    helperText = {errors.email} error = {errors.email ? true: false}
                    value = {this.state.email} onChange= {this.handleChange} fullWidth/>


                    <TextField id = 'password' name='password' type ='password' 
                    label = "password" className = {classes.textField}
                    value = {this.state.password} 
                    helperText = {errors.password} error = {errors.password ? true: false}
                    onChange= {this.handleChange} fullWidth/>

                    <TextField id = 'confirmPassword' name='confirmPassword' type ='password' 
                    label = "confirmPassword" className = {classes.textField}
                    value = {this.state.confirmPassword} 
                    helperText = {errors.confirmPassword} error = {errors.password ? true: false}
                    onChange= {this.handleChange} fullWidth/>

                    <TextField id = 'handle' name='handle' type ='text' 
                    label = "Handle" className = {classes.textField}
                    value = {this.state.handle} 
                    helperText = {errors.handle} error = {errors.handle ? true: false}
                    onChange= {this.handleChange} fullWidth/>
                    {errors.general && (
                        <Typography variant = "body2" className = {classes.customError}>
                            {errors.general}
                        </Typography>
                    )}
                    <Button type= 'submit' variant = 'contained' 
                    color ="primary" className ={classes.button} disabled = {loading}> Signup
                    {loading && (<CircularProgress  size = {30} className = {classes.progress} />)}
                    </Button>
                    <br/>
                    <small>Alreadyhave an account ? login <Link to ='/login'>here </Link></small>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

signup.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(signup)
