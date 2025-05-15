import { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">Contact Us</h2>
      <div className="max-w-md mx-auto">
        {submitted ? (
          <p className="text-center text-green-500">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" className="w-full p-2 rounded bg-gray-200 text-gray-900" required/>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="w-full p-2 rounded bg-gray-200 text-gray-900" required/>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <input type="text" id="message" className="w-full p-2 rounded bg-gray-200 text-gray-900" rows="4" required/>
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;