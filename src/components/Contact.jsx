import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    // Use the fetch API to submit the form
    const response = await fetch('https://formspree.io/f/mleqjnry', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      form.reset(); // Clear the form fields after successful submission
    } else {
      setStatus('Failed to send the message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
          method="POST"
          action="https://formspree.io/f/mleqjnry"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              className="resize-none w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 h-40"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Send Message
          </button>

          {/* Display status message */}
          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;


// Additional Notes:
// Spam Prevention: You can add Google reCAPTCHA or similar spam protection if needed.
// Email Customization: You can configure how emails are sent from the Formspree dashboard.





