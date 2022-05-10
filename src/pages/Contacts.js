import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contacts() {
  const [send, setSend] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0s5fqij",
        "template_gqglhhp",
        form.current,
        "5EqUQWma98WcSjhz_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form className="form" onSubmit={sendEmail} ref={form}>
      <h1>Contact Me</h1>
      <input
        type="text"
        placeholder="Your Name"
        name="name"
        className="input"
      />
      <input
        type="email"
        placeholder="Your Email"
        name="email"
        className="email"
      />
      <textarea
        placeholder="Write Massage"
        name="message"
        className="comments"
      />
      <button type="submit" className="form-btn">
        Send message
      </button>
      <div>{send && <p>Message is sent successfully</p>}</div>
    </form>
  );
}
