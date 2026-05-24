import { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <main className="contact">
      <div className="page-header">
        <div className="page-tag">Get in touch</div>
        <h1 className="page-title">Contact</h1>
      </div>

      <div className="contact-layout">
        <div className="contact-form-box">
          <h2 className="form-heading">Send a Message</h2>
          <p className="form-sub">Have something to say? Drop me a message!</p>

          {sent && (
            <div className="form-success">
              ✓ Message sent! (This is a demo — no data is actually submitted.)
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="e.g. abc@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input form-textarea"
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                rows={5}
              />
            </div>
            <button className="form-submit" type="submit">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
