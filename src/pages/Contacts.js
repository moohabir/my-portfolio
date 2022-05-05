import React from "react";

export default function Contacts() {
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Your Name"
        name="name"
        value=""
        className="input"
      />
      <input
        type="email"
        placeholder="Your Email"
        name="email"
        value=""
        className="email"
      />
      <textarea
        placeholder="Write Massage"
        name="comments"
        value=""
        className="comments"
      />
      <button>Send message</button>
    </form>
  );
}
