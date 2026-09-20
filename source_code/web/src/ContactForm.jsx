import { useState } from "react";
import axios from "axios";
import { IconPhone, IconMessage } from "./Icons";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/1c27b98d418b38b000c4e4c3cdfcf2d7";

const ContactForm = ({ phone }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const prefilText = "Hello, I'm interested in your services!";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot: real visitors never fill this hidden field, so pretend success
    // and skip the network call if something did.
    if (honey) {
      setStatus("success");
      return;
    }

    setStatus("loading");

    axios
      .post(
        FORM_ENDPOINT,
        {
          name,
          phone: phoneNumber,
          address,
          message,
          _subject: `New quote request from ${name}`,
          _template: "table",
          _captcha: "false",
        },
        { headers: { Accept: "application/json" } }
      )
      .then(() => setStatus("success"))
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  };

  if (status === "loading") {
    return (
      <div className="form-status">
        <div className="spinner" />
        <p>Sending your message...</p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="form-status">
        <h3>Thanks, {name.split(" ")[0] || "there"}!</h3>
        <p>Your message has been sent. We'll be in touch soon.</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="form-status">
        <h3>Something went wrong</h3>
        <p>
          Please try again, or reach out directly at{" "}
          <a href={`tel:${phone}`}>{phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="_honey"
        value={honey}
        onChange={(e) => setHoney(e.target.value)}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
      />

      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Smith"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          pattern="[0-9]{10}"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="5551234567"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="123 Main St, Town, NJ"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="message">Project details</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Brief description of the work you'd like done"
          rows={4}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
        Send Message
      </button>

      <div
        style={{
          display: "flex",
          gap: 10,
          marginTop: 16,
          justifyContent: "center",
        }}
      >
        <a className="btn btn-sm" style={{ background: "var(--cream-deep)", color: "var(--ink)" }} href={`tel:${phone}`}>
          <IconPhone className="icon" style={{ width: 16, height: 16 }} />
          Call
        </a>
        <a
          className="btn btn-sm"
          style={{ background: "var(--cream-deep)", color: "var(--ink)" }}
          href={`sms:${phone}?body=${encodeURIComponent(prefilText)}`}
        >
          <IconMessage className="icon" style={{ width: 16, height: 16 }} />
          Text
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
