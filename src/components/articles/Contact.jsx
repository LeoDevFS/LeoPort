import React from 'react'

function Contact() {
  return (
    <article className="contact">
    <header>
      <h2 className="h2 article-title">Contact</h2>
    </header>
    <section className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>
      <form>
        <div className="input-wrapper">
          <input
            type="text"
            className="form-input"
            placeholder="Full name"
            required
          />
          <input
            type="email"
            className="form-input"
            placeholder="Email address"
            required
          />
        </div>
        <input
          type="text"
          className="form-input"
          placeholder="Subject"
          required
        />
        <textarea
          className="form-input"
          placeholder="Your Message"
          required
        ></textarea>
        <button className="form-btn" type="submit">
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
  )
}

export default Contact