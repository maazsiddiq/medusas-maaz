import React from "react";
import {
  Grid,
  Card,
  Typography,
  TextField,
  Checkbox,
  Button,
} from "@material-ui/core";
import "./sign-up.css";

export default function SignUp() {
  return (
    <div>
      <Grid container justify="center">
        <Grid xs={3}>
          <Card>
            <Typography variant="h4" className="green_gradient">
              Sign Up
            </Typography>
            <form style={{ padding: "30px" }}>
              <TextField
                id="outlined-basic"
                placeholder="Email Address"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="outlined-basic"
                placeholder="Password"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="outlined-basic"
                placeholder="Screen Name (Optional)"
                fullWidth
                variant="outlined"
              />
              <Checkbox
                defaultChecked
                color="primary"
                size="small"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <Typography variant="subtitle2">
                I want to receive special offers, coupons and tips via email.
              </Typography>
              <Checkbox
                defaultChecked
                color="primary"
                size="small"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <Typography variant="subtitle2">
                I have read and agree to the Kasamba member terms and
                conditions.
              </Typography>
              <Button fullWidth className="green_gradient_button">
                Log In
              </Button>
            </form>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
