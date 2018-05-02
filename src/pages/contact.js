import React from 'react'


const contactBackground = {
    backgroundImage: "url(static/img/Contact_Carmella_Dimella.png)",
    display: 'flex',
    justifyContent: 'flexEnd',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
    zIndex: "2",
    color: "white"
}

const ContactPage = () => {
        return (
            <div style={contactBackground}>
            <p>
              <textarea name="message" placeholder="Say Something..."></textarea>
            </p>
            
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <p>
            <label>
                Your Name: <input type="text" name="name" />
                </label>   
            </p>

            <p>
            <label>
                Your Email: <input type="email" name="email" />
            </label>
            </p>


            <p>
            <button type="submit">Send</button>
            </p>

             </form>
            </div>

    )
  }

export default ContactPage