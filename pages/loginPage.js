import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/loginPage.module.scss";
import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";
import { login } from "../controllers/loginController";

export default function LoginPage() {
  const [error, setError] = useState();
  const onUserIdChange = (event) => {
    setError(null);
    console.log(event.target.value);
  };
  const onPasswordChange = (event) => {
    setError(null);
    console.log(event.target.value);
  };
  const loginClick = () => {
    // TODO: Gather user id, password values
    setError(null);
    login("test", "password")
      .then((data) => {})
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className={styles.loginPage}>
      <img className={styles.logo} src="/images/logo.png" />
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <form noValidate autoComplete="off">
        <TextField required id="outlined-basic" placeholder="user name" variant="outlined" onChange={onUserIdChange} />
        <TextField required id="filled-password-input" type="password" variant="outlined" onChange={onPasswordChange} />
        <div className={styles.rememberMeLogin}>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                size="small"
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            }
            label="Remember Me"
          />

          <Button variant="contained" color="primary" onClick={loginClick}>
            Login
          </Button>
        </div>
      </form>
      <div className={styles.errorMessage}>{error}</div>
    </div>
  );
}
