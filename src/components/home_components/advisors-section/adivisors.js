import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import "./advisors.css";
import profileImage1 from "../../../images/profile/pic137917.jpg";
import profileImage2 from "../../../images/profile/pic678559.jpg";
import profileImage3 from "../../../images/profile/pic59718.jpg";
import profileImage4 from "../../../images/profile/pic173309.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "450px",
    borderRadius: "10px",
  },
  media: {},
  expand: {},
  expandOpen: {
    transform: "rotate(180deg)",
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "10px",
    marginBottom: "8px",
  },
}));

export default function Advisors() {
  const [value, setValue] = React.useState(2);

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  var Profile;

  Profile = [
    {
      review_no: "1.3k Review",
      online_state: "online",
      profile_img: profileImage1,
      Title: "Truth and Light",
      Subtitle: "Expertise: Spirituality",
      text:
        "TRUTH WITH TIME *DEEP ANALYSIS* I will be able to make the sense of connection to...",
      Dollar: "$8.49",
    },
    {
      review_no: "15.76k Review",
      online_state: "online",
      profile_img: profileImage2,
      Title: "Love Stefans Psychic Soul",
      Subtitle: "Expertise: Spirituality",
      text:
        "NEED ANSWERS.? Allow me to help.Got so much going on in your life your not sure what to think...",
      Dollar: "$8.49",
    },
    {
      review_no: "27.42k Review",
      online_state: "online",
      profile_img: profileImage3,
      Title: "Best Psychic Readings",
      Subtitle: "Expertise: Spirituality",
      text:
        "I will help you in all your queries. Spirituality gives the individual autonomy over his or her...",
      Dollar: "$8.49",
    },
    {
      review_no: "16.77k Review",
      online_state: "online",
      profile_img: profileImage4,
      Title: "Powerful Visions",
      Subtitle: "Expertise: Psychic Readings",
      text: "The Best Connection Infinite Wisdom & Knowledge.",
      Dollar: "$8.49",
    },
  ];

  var allCards;

  allCards = Profile.map((hereCard) => {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
          <div className="Card_rambow_gradient">
            <Grid container>
              <Grid item xs={9} style={{ display: "flex" }}>
                <Rating
                  name="read-only"
                  value={value}
                  readOnly
                  className="RatingStar"
                />
                <Typography variant="caption" className="typographyReview_No ">
                  {hereCard.review_no}
                </Typography>
              </Grid>

              <Grid item xs={3} style={{ display: "flex" }}>
                <FiberManualRecord className="Icon-online-state" />
                <Typography
                  variant="caption"
                  className="typography-Online-State"
                >
                  {hereCard.online_state}
                </Typography>
              </Grid>
            </Grid>
            <Avatar
              alt="Remy Sharp"
              src={hereCard.profile_img}
              className={classes.large}
            />
            <Typography
              variant="subtitle1"
              align="center"
              style={{ fontWeight: "bold" }}
            >
              {hereCard.Title}
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              style={{ color: "#FFFFFF" }}
            >
              {hereCard.Subtitle}
            </Typography>
          </div>
          <CardContent>
            <Typography
              variant="body2"
              component="p"
              style={{ height: "50px" }}
            >
              {hereCard.text}
            </Typography>
          </CardContent>
          <div className="rate-banner-image">
            <Typography variant="h5" align="center" className="Rate_charges">
              {hereCard.Dollar}
            </Typography>
          </div>
          <Button variant="outlined" color="primary" className="Live_Chat_btn">
            Live Chat
          </Button>
        </Card>
      </Grid>
    );
  });
  return (
    <div>
      <Grid container justify="space-evenly">
        <Grid container item xs={10}>
          {allCards}
        </Grid>
      </Grid>
    </div>
  );
}
