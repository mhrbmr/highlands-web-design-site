import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import Link from "@material-ui/core/Link"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import NewContactForm from './NewContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'
import useStyles from "./HomeUseStyles"

import "../styles/new-home.css"

export default function NewHome() {
  const classes = useStyles()
  const [pageState, setPageState] = useState("why-us")
  const contactClick = () => {
    setPageState("contact") 
    window.scrollTo(0,document.body.scrollHeight / 3)
  }
  const whyUsClick = () => {
    setPageState("why-us")
    window.scrollTo(0,0)
  }
  const pricingClick = () => {
    setPageState("pricing")
    window.scrollTo(0,0)
  }

  return (
    <div className="main-div">
      <CssBaseline />
      <Container  maxWidth="sm" component="main" className={classes.heroContent} className="title-wrapper">
        <div className="main-title">
          Highlands Web Design
          {/* This font doesnt have any more bold */}
        </div>

        <div className="main-sub-title">
          High-quality, affordable websites to take your company to the next
          level.
        </div>
      </Container>

      <Container>
        <div className="buttons-wrapper">
          <Button
            color="primary"
            className={classes.linkButton}
            onClick={whyUsClick}
            variant="contained"
          >
            Why Us?
          </Button>

          <Button
            color="primary"
            className={classes.linkButton}
            onClick={pricingClick}
            variant="contained"
          >
            Pricing
          </Button>

          <Button
            color="primary"
            className={classes.linkButton}
            onClick={() => contactClick()}
            variant="contained"
          >
            Contact
          </Button>
        </div>

        <div className="centered-content">
          {pageState === "why-us" && (
            <div className="new-home-grid1" id="why-us">
              <div className="panel-text">
                <span className="panel-text-title">
                  Why Us?
                </span><br/>
                We take care of design, coding, hosting, and mobile browser
                optimization. Contact us today for a free consultation.
              </div>
              <div className="side-section">
                <FontAwesomeIcon className="font-awesome panel-icon" icon={faLaptopCode}/>
              </div>
            </div>
          )}

          {pageState === "pricing" && (
            <div className="new-home-grid1" id="pricing">
              <div className="panel-text">
                <span className="panel-text-title">
                  Affordable Web Design
                </span><br/>
                We offer financing options such as low monthly payments to get your site up and running without hurting your wallet!
              </div>
              <div className="side-section">
                <FontAwesomeIcon className="font-awesome panel-icon" icon={faMoneyCheckAlt}/>
              </div>
            </div>
          )}

          {pageState === "contact" && (
            <div className="form-wrapper">
              <NewContactForm/>
            </div>
          )}
        </div>
      </Container>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box textAlign="center">
          <div>
            {"Copyright © "}
            <Link color="inherit" href="https://highlandswebdesign.com/">
              highlandswebdesign6@gmail.com
            </Link>
            {" 2019 | (310) 562-7707 | Portfolio of work upon request."}
          </div>
        </Box>
      </Container>
    </div>
  )
}