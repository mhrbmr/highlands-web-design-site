import React from 'react'
import emailjs from 'emailjs-com'
import Button from "@material-ui/core/Button";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import '../styles/contact-form.css'

toast.configure() 

export default function ContactForm() {

  function notify() {
    toast("Your email has been sent successfully!")
  }

  async function sendEmail(e) {
    e.preventDefault()
    await emailjs.sendForm('service_c9nle13', 'template_m19hh5k', e.target, 'user_iXIvTFHP0ddpdvpHB3Zjg')
      .then((result) => {
        notify()
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      });
      document.getElementById("form").reset()
  }

  return (
    <div style={{ width: "100%" }}>
      <form className="contact-form" id="form" onSubmit={sendEmail} style={{ width: "100%" }}>
        <input type="hidden" name="contact_number" />
        <label className="form-label">Name</label>
        <input type="text" name="user_name" className="form-input" required/>
        <label className="form-label">Email</label>
        <input type="email" name="user_email" className="form-input" required/>
        <label className="form-label">Message</label>
        <textarea name="message" className="form-input form-text-area" required/>
        {/* <input type="submit" value="Send" className="form-submit"/> */}
        <Button
          color="secondary"
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

// import React, {useState} from 'react'
// import emailjs from 'emailjs-com'
// import {Typography} from '@material-ui/core'

// import '../styles/contact-form.scss'

// const styles = {
//   a: {
//     color: "red",
//     fontSize: "1rem"
//   },
//   mailContainer: {
//     display: "flex",
//     justifyContent: "center"
//   }
// }

// export default function ContactForm() {

//   const [formStep, formStepper] = useState(1)

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//     <div >
//       <Typography component="h1" variant="h5" align="center">
//         Send us an email:
//       </Typography>
//       <div style={styles.mailContainer}>
//         {/* <a href="mailto:contact.us.highlandswebdesign@gmail.com"style={styles.a}>contact.us.highlandswebdesign@gmail.com</a> */}
//         <form className="contact-form" onSubmit={sendEmail}>
//           {
//             formStep === 1 && (
//               <div className="contact-form-inner-wrapper">
//                 <label>Name</label>
//                 <div>
//                   <input type="text" name="from_name" />
//                   <button onClick={() => formStepper(2)}>Next</button>
//                 </div>
//               </div>
//             )
//           }

//           {
//             formStep === 2 && (
//               <div className="contact-form-inner-wrapper">
//                 <label>Email</label>
//                 <div>
//                   <button onClick={() => formStepper(1)}>Back</button>
//                   <input type="email" name="from_email" />
//                   <button onClick={() => formStepper(3)}>Next</button>
//                 </div>
//               </div>
//             )
//           }

//           {
//             formStep === 3 && (
//               <div className="contact-form-inner-wrapper">
//                 <label>Subject</label>
//                 <div>
//                   <button onClick={() => formStepper(2)}>Back</button>
//                   <input type="text" name="subject" />
//                   <button onClick={() => formStepper(4)}>Next</button>
//                 </div>
//               </div>
//             )
//           }

//           {
//             formStep === 4 && (
//               <div className="contact-form-inner-wrapper">
//                 <label>Message</label>
//                 <div>
//                   <button onClick={() => formStepper(3)}>Back</button>
//                   <textarea name="html_message" />
//                   <input type="submit" value="Send" />
//                 </div>
//               </div>
//             )
//           }
//         </form>
//       </div>
//     </div>
//   );
// }

// import React, { Component } from 'react'
// import * as emailjs from 'emailjs-com'
// import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
// import "../styles/contact-form.scss"

// class ContactForm extends Component {
//   state = {
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   }
// handleSubmit(e) {
//     e.preventDefault()
//     const { name, email, subject, message } = this.state
//     let templateParams = {
//       from_name: email,
//       // to_name: '<YOUR_EMAIL_ID>',
//       subject: subject,
//       message_html: message,
//      }
//      emailjs.send(
//       'gmail',
//       'template_top-level-form-wrapper',
//        templateParams,
//       'user_zTtYQZEhcFOIsiUKK8gwl'
//      )
//      this.resetForm()
//  }
// resetForm() {
//     this.setState({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     })
//   }
// handleChange = (param, e) => {
//     this.setState({ [param]: e.target.value })
//   }
// render() {
//     return (
//       <>
//         <div className="top-level-form-wrapper">
//           <h1 className="p-heading1">Get in Touch</h1>
//           <Form onSubmit={this.handleSubmit.bind(this)}  className="contact-form">
//             <FormGroup controlId="formBasicEmail" className="contact-form-group">
//               <Label className="text-muted">Email address</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={this.state.email}
//                 className="text-primary flex-input"
//                 onChange={this.handleChange.bind(this, 'email')}
//                 placeholder="Enter email"
//               />
//             </FormGroup>
// <FormGroup controlId="formBasicName" className="contact-form-group">
//               <Label className="text-muted">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={this.state.name}
//                 className="text-primary flex-input"
//                 onChange={this.handleChange.bind(this, 'name')}
//                 placeholder="Name"
//               />
//             </FormGroup>
// <FormGroup controlId="formBasicSubject" className="contact-form-group">
//               <Label className="text-muted">Subject</Label>
//               <Input
//                 type="text"
//                 name="subject"
//                 className="text-primary flex-input"
//                 value={this.state.subject}
//                 onChange={this.handleChange.bind(this, 'subject')}
//                 placeholder="Subject"
//               />
//             </FormGroup>
// <FormGroup controlId="formBasicMessage" className="contact-form-group">
//               <Label className="text-muted">Message</Label>
//               <Input
//                 type="textarea"
//                 name="message"
//                 className="text-primary flex-input"
//                 value={this.state.message}
//                 onChange={this.handleChange.bind(this, 'message')}
//               />
//             </FormGroup>
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </div>
//       </>
//     )
//   }
// }
// export default ContactForm