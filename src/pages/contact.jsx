/**
 * Contact page
 * 
 * Create the contact page
 * 
 * create the route for it /contact
 * 
 * create the navbar item
 * 
 * test
 */
import "./contact.css"


function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out!</p>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;