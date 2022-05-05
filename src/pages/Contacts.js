import React from "react";

export default function Contacts() {
  return (
    <form className="form">
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
        name="comments"
        className="comments"
      />
      <button className="form-btn">Send message</button>
    </form>
  );
}
