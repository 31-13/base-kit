import React from "react";
import Image from "next/image";

// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";

//Styles
import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

const useStyles = makeStyles(styles);
export default function Index(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        // leftLinks={<HeaderLinks />}
        brand="Boomers Corner"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("Documentation/assets/img/old.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Index Page</h1>
              <h4>
                Healthy-TXT™ provides physician-designed health programs
                directly to where people are today, on their mobile devices.
                Targeted health messages on treatment regimens, post and chronic
                care, healthy lifestyle, and prevention are delivered via text
                messaging, mobile voice app, email, video, or website.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <WorkSection />
        </div>
      </div>
    </>
  );
}
