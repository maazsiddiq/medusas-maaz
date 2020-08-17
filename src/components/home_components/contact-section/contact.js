import React from "react";
import { Grid, Typography, CardMedia } from "@material-ui/core";
import { PhoneInTalk } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import psychs from "../../../images/psychic.jpg";
import "./contact.css";

export default function Contact() {
  return (
    <div>
      <Grid container justify="center">
        <Grid container className="callbanner">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" className="callbanner-h4">
              Lorem Ipsum Dolor Sit Amet
            </Typography>
          </Grid>

          <Grid container xs={6}>
            <Grid item>
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim
                ad minim veniam
              </Typography>
            </Grid>
          </Grid>

          <Grid container xs={6}>
            <Grid item style={{ display: "flex" }}>
              <PhoneInTalk fontSize="large" style={{ marginRight: "20px" }} />
              <Typography>833-Medusas 833-633-8727 Call Us Anytime</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container xs={12} md={10}>
          <Grid item md={6} style={{ padding: "30px" }}>
            <Typography variant="h4" className="aboutUs">
              About Us
            </Typography>
            <Typography variant="h6">
              Your journey to a brighter future starts with Medusa Psychics.
              We're all searching for the right path for us and for the key to a
              better life. With the right guidance, you can find it. Since 1999,
              Medusa Psychics’s psychics have guided over 3 million people in
              their paths to true love and happiness, career success and
              self-empowerment. Through psychic readings, tarot readings,
              astrology readings and more with top psychic advisors, we are here
              to help you get the guidance you need and the answers you’re
              looking for in life.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <img src={psychs} width="100%" height="100%" />
          </Grid>
        </Grid>

        <Grid container xs={12} md={10}>
          <Grid item md={6} className="contact_rambow_gradient">
            <Typography variant="h4" className="becomePsychic" align="center">
              Become A Psychic
            </Typography>
            <div
              style={{
                padding: "35px",
                paddingBottom: "70px",
              }}
            >
              <Typography
                variant="subtitle1"
                component="li"
                className="becomePsychic-li"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim
                ad minim veniam
              </Typography>
              <Typography
                variant="body1"
                component="li"
                className="becomePsychic-li"
              >
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography
                variant="body1"
                component="li"
                className="becomePsychic-li"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim
                ad minim veniam
              </Typography>
              <Typography
                variant="body1"
                component="li"
                className="becomePsychic-li"
              >
                Lorem ipsum dolor sit amet
              </Typography>
            </div>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h4">Register Now</Typography>
            <form>
              <TextField
                id="outlined-basic"
                placeholder="Name"
                fullWidth
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                placeholder="Email Address"
                fullWidth
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                placeholder="Mobile Number"
                fullWidth
                variant="outlined"
              />
            </form>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
