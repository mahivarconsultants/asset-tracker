import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styles from "../styles/loginPage.module.scss";
import Typography from "@material-ui/core/Typography";
import { login } from "../controllers/loginController";

export default function LoginPage() {
  const [error, setError] = useState();
  const [state, setState] = useState({ userId: "", password: "" });
  const { userId, password } = state;
  const onUserIdChange = ({ target: { value: userId } }) => {
    setError(null);
    console.log(userId);
    setState({ userId, password });
  };
  const onPasswordChange = ({ target: { value: password } }) => {
    setError(null);
    console.log(password);
    setState({ userId, password });
  };
  const loginClick = () => {
    // TODO: Gather user id, password values and send to login controller
    setError(null);
    login(userId, password)
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
        <TextField
          required
          id="outlined-basic"
          placeholder="Enter user id"
          variant="outlined"
          onChange={onUserIdChange}
          value={userId}
        />
        <TextField
          required
          id="filled-password-input"
          type="password"
          variant="outlined"
          placeholder="Enter password"
          onChange={onPasswordChange}
          value={password}
        />
        <div className={styles.rememberMeLogin}>
          <FormControlLabel control={<Checkbox defaultChecked color="primary" />} label="Remember Me" />

          <Button variant="contained" color="primary" onClick={loginClick}>
            Login
          </Button>
        </div>
      </form>
      <div className={styles.errorMessage}>{error}</div>
    </div>
  );
}
