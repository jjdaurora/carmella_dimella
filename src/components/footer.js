import React from 'react';
import Link from 'gatsby-link'
import { Row } from 'reactstrap';

const footerStyle = {
    position: "absolute",
    width: "100%",
    height: "60px",
    lineHeight: "60px",
    backgroundColor: "black",
    color: "white"
}

const Footer = () => {
    return (
        <div style={footerStyle}>
            <h5>Carmella DiMella</h5>
        </div>
    )
}

export default Footer