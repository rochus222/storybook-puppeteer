import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FormControl from "@material-ui/core/FormControl";
import CardMedia from "@material-ui/core/CardMedia";

import Logo from "../assets/logo.png";

const validateCredentials = (user, password) => {
    const validationErrors = [];
    if (!user.length) {
      validationErrors.push("userError");
    }
    if (!password.length) {
      validationErrors.push("passwordError");
    }
    return validationErrors;
  };

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const logIn = () => {
    const validationErrors = validateCredentials(user, password);
    if (!validationErrors.length) {
      setErrors([]);
      console.log("User logged in!");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Card variant="outlined" style={{ width: "300px" }}>
      <CardMedia
        image={Logo}
        title="BlackWork Inc."
        style={{ height: "50px", marginTop: "50px" }}
      />
      <CardContent>
        <FormControl fullWidth variant="filled" style={{ marginBottom: "8px" }}>
          <TextField
            required
            id="login"
            label="User name"
            defaultValue="admin"
            value={user}
            onChange={({ target }) => setUser(target.value)}
            error={errors.includes("userError")}
            helperText={
              errors.includes("userError")
                ? "Please provide user name"
                : undefined
            }
          />
        </FormControl>
        <FormControl fullWidth variant="filled">
          <TextField
            required
            id="password"
            type="password"
            label="Password"
            defaultValue="admin"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            error={errors.includes("passwordError")}
            helperText={
              errors.includes("passwordError")
                ? "Please provide password"
                : undefined
            }
          />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button className="submit-button" color="primary" onClick={logIn}>
          Log me in!
        </Button>
      </CardActions>
    </Card>
  );
};

export default Login;
