import React from "react";

export default function Contacts() {
  return (
    <form>
      <input type="text" placeholder="Your Name" name="name" value="" />
      <input type="email" placeholder="Your Email" name="email" value="" />
      <input type="text" placeholder="Write Massage" name="msg" value="" />
      <button>Send message</button>
    </form>
  );
}
