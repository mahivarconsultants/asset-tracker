import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Head from "next/head";
import Image from "next/image";
import Login from "../components/login";
import styles from "../styles/Home.module.css";

export default function LoginPage() {
  return (
    <div className="Login">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <form noValidate autoComplete="off">  
          <TextField required id="outlined-basic" placeholder="user name" variant="outlined" />
          <br/>
          <TextField required id="filled-password-input" type="password" variant="outlined" />
        </form>        
        <br/>
        <FormControlLabel
            control={<Checkbox
              defaultChecked
              size="small"
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              />}
            label="Remember Me"
          />
          <br />
      <Button variant="contained" color="primary">Login</Button>
    </div>
  );
}
