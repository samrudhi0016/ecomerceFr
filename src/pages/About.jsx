import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          We are a passionate team dedicated to providing the best service for our users.
        </p>
      </section>

      {/* Information Section */}
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-6">
          Our mission is to provide the highest quality products and services to our customers. We believe in innovation, reliability, and creating meaningful connections with our clients.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-inside list-disc text-lg text-gray-600 space-y-3">
          <li>Integrity: We uphold the highest standards of integrity in all of our actions.</li>
          <li>Excellence: We strive for excellence in everything we do.</li>
          <li>Customer-Centric: We put the needs of our customers first and foremost.</li>
          <li>Innovation: We embrace change and continuously innovate to improve our offerings.</li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-lg text-gray-600">CEO & Founder</p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-lg text-gray-600">CTO</p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Emily Davis</h3>
            <p className="text-lg text-gray-600">Marketing Director</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;