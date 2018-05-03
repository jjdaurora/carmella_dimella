import React from 'react';
import Link from 'gatsby-link'
import { Row } from 'reactstrap';

const footerStyle = {
    position: "absolute",
    width: "100%",
    lineHeight: "60px",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "10px"

}

const footerBranding = {
    backgroundImage: "url(static/img/Carmella_DiMella_Logo_Inverse.png)",
    backgroundSize: "cover",
    width: "200px",
    height: "50px",
    margin: "5px"
}

const footerSocialMediaIcons = {
    display: "flex",
    flexDirection: "row",
    justifyItems: "spaceBetween",
    margin: "-1%",
    fontSize: ".75em"
}

const socialMediaIconPadding = {
    padding: "0 2px 0 2px"
}

const pathPrefix =
        process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

const Footer = () => {
    return (
        <div style={footerStyle}>
            <h6>Find Carmella DiMella</h6>
            <div style={footerSocialMediaIcons}>
                <span style={socialMediaIconPadding}><a href="#">Twitter</a></span>
                <span style={socialMediaIconPadding}><a href="#">Pinterest</a></span>
                <span style={socialMediaIconPadding}><a href="#">Instagram</a></span>
            </div>
            <div style={footerBranding}></div>
            <h6>Carmella DiMella &copy; 2018</h6>     
        </div>

    )
}

export default Footer