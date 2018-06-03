import React from 'react'
import Link from 'gatsby-link'
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { Grid } from 'react-bootstrap'
import PropTypes from 'prop-types';
import Img from "gatsby-image"


const marginTop = {
  marginTop: "2%"
}

const landingPageImage = {
  backgroundImage: 'url(static/img/Carmella-Dimella-Welcome-Image.jpg)',
  display: 'flex',
  backgroundSize: 'cover',
  backgroundPosition: '25% 50%',
  opacity: .8,
  height: '60vh',
  width: '100%',
  color: 'white'
}

const videoWrapper = {
  padding: "56% 0 0 0",
  position: "relative",
  marginBottom: "20px"
}

const iFrameStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%"
};

const backgroundOpacity = {
   backgroundColor: "rgba(0, 0, 0, 0.1)",
   padding: "5px"
}

const contentWrapper = {
  fontSize: '1.2em',
  marginTop: "2%"
}

const headerShadow = {
   textShadow: "black 1px 0 10px"
}

const IndexPage = (props) => {
  return (
    <div style={marginTop}>
      <Jumbotron fluid style={landingPageImage}>
        <Container>
        <div style={headerShadow}>
        <h1 className="display=3">Carmella DiMella</h1>
          <p className="lead">Vintage-inspired & ethically constructed</p>
        </div>
        </Container>
      </Jumbotron>
   <Row>
    <Col xs="12" md="6">
        <div style={videoWrapper}>
          <iframe src="https://player.vimeo.com/video/266575416?autoplay=1&loop=1&title=0&byline=0&portrait=0" style={iFrameStyle} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Col>
      <Col xs="12" md="6">
      <div style={contentWrapper}>
        <p>Carmella DiMella is named after my great-grandmother who made wedding dresses in Italy. This tradition of dressmaking was handed down through the generations and has been my passion since the age of 8.</p>

        <p>My hope is that when a woman puts on a Carmella DiMella dress she feels comfortable, attractive and that she has a garment that will last a long time. Whenever possible I put pockets into the skirt of the dress, consider bra placement and do my best to use machine washable fabrics. I hope that these dresses end up being a staple of your closet and favorites of all time.</p>

       <p> For any questions about ordering a dress or wear to buy, please <a href="mailto:carmelladimella@gmail.com">email me.</a></p>

       <p className="signature-font"> - Kerri Jamison</p>
       </div>
      </Col>
    </Row>
    </div> 
  )
};

export default IndexPage
