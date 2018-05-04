import React from 'react'
import '../layouts/index.scss'

const comingSoonWrapper = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginTop: "10%",
};

const BlogPage = () => {
    return (
        <div style={comingSoonWrapper}>
            <h2>COMING SOON.</h2>
            <p>Carmella DiMella's blog is not ready at this time.</p>
        </div>
    )
}

export default BlogPage;
