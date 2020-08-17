import React from "react";
import { Grid, Card, Typography } from "@material-ui/core";
import one from "../../../images/psychic_logo.svg";
import two from "../../../images/love_logo.svg";
import three from "../../../images/horoscope.svg";
import four from "../../../images/2love_logo.svg";
import "./featured.css";

export default function Featured() {
  var content;

  content = [
    { NameFeatured: "Our Top Psychics", ImgFeatured: one },
    { NameFeatured: "Love Forecast 2020", ImgFeatured: two },
    { NameFeatured: "Horoscope", ImgFeatured: three },
    { NameFeatured: "Love Compatibility", ImgFeatured: four },
  ];

  var FeaturedCards;
  FeaturedCards = content.map((hereContent) => {
    return (
      <Grid item xs={6} md={3}>
        <Card className="Featured_rambow_gradient">
          <img src={hereContent.ImgFeatured} height="250px"></img>
          <Typography>{hereContent.NameFeatured}</Typography>
        </Card>
      </Grid>
    );
  });

  return (
    <div>
      <Grid container justify="space-evenly">
        <Grid container item xs={10}>
          {FeaturedCards}
        </Grid>
      </Grid>
    </div>
  );
}
