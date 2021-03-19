import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import Button from "@material-ui/core/Button";

import '../styles/contact-form.css'

export default function ContactForm() {

  const [opacityState, setOpacityState] = useState(0)

  function sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm('service_c9nle13', 'template_m19hh5k', e.target, 'user_iXIvTFHP0ddpdvpHB3Zjg')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      });
    document.getElementById("form").reset()
    setOpacityState(1)
    setTimeout(() => setOpacityState(0), 3500)
  }

  return (
    <div style={{ width: "100%" }}>

      <div className="success" style={{
        opacity: opacityState,
      }}>
        Email sent!
      </div>

      <form className="contact-form" id="form" onSubmit={sendEmail} style={{ width: "100%" }}>
        <input type="hidden" name="contact_number" />
        <label className="form-label" id="scrollTo">Name</label>
        <input type="text" name="user_name" className="form-input" required/>
        <label className="form-label">Email</label>
        <input type="email" name="user_email" className="form-input" required/>
        <label className="form-label">Message</label>
        <textarea name="message" className="form-input form-text-area" required/>
        {/* <input type="submit" value="Send" className="form-submit"/> */}
        <Button
          color="primary"
          variant="contained"
          type="submit"
          className="form-button"
        >
          Send Email
        </Button>
      </form>
    </div>
  );
}