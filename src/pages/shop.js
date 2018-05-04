import React from 'react'
import '../layouts/index.scss'

const comingSoonWrapper = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginTop: "10%",
};


const ShopPage = () => {
    return (
        <div style={comingSoonWrapper}>
            <h2>COMING SOON.</h2>
            <p>Carmella DiMella's storefront is not ready at this time.</p>
        </div>
    )
}

export default ShopPage;
