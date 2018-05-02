import React from 'react'
import Link from 'gatsby-link'
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';


const marginTop = {
  marginTop: "2%"
}

const landingPageImage = {
  backgroundImage: 'url(static/img/test.png)',
  display: 'flex',
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  height: '60vh',
  width: '100%',
  color: 'white'
}

const videoWrapper = {
  padding: "56% 0 0 0",
  position: "relative"
}

const iFrameStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%"
};


const IndexPage = (props) => {
  return (
    <div style={marginTop}>
      <Jumbotron fluid style={landingPageImage}>
        <Container fluid>
        <h1 className="display=3">Carmella DiMella</h1>
          <p className="lead">Vintage-inspired & ethically constructed</p>
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
        <p>Carmella DiMella is named after my great-grandmother who made wedding dresses in Italy. This tradition of dressmaking was handed down through the generations and has been my passion since the age of 8.</p>

        <p>Carmella DiMella is named after my great-grandmother who made wedding dresses in Italy. This tradition of dressmaking was handed down through the generations and has been my passion since the age of 8.</p>

       <p> For any questions about ordering a dress or wear to buy, please email me at carmelladimella@gmail.com</p>

      </Col>
    </Row>
    </div> 
  )
};

export default IndexPage
