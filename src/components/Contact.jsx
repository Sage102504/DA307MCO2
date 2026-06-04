export default function Contact() {
  return (
    <section id="contact" className="contact-us">
      <h2>Contact Us</h2>

      <form className="form">

        <input type="text" placeholder="Full Name" required />

        <input type="email" placeholder="Email Address" required />

        <input type="tel" placeholder="Phone Number" />

        {/* SUBJECT */}
        <select>
          <option value="">Select Subject</option>
          <option value="inquiry">General Inquiry</option>
          <option value="reservation">Table Reservation</option>
          <option value="feedback">Feedback</option>
          <option value="event">Catering / Events</option>
        </select>

        {/* OPTIONAL DATE */}
        <input type="date" />

        {/* MESSAGE */}
        <textarea placeholder="Your Message..." rows="5"></textarea>

        <button className="btn">Send Message</button>
      </form>
    </section>
  );
}