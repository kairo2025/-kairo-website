import React from "react";

export default function KairoHomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Kairo Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold">KAIRO INVESTMENT (PVT) LTD</h1>
          </div>
          <nav className="space-x-6">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About Us</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#apply" className="hover:underline">Apply Now</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Kairo Investment</h2>
        <p className="text-lg">Your Financial Partner – Trusted, Transparent, and Reliable</p>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-6 bg-white max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        <p className="mb-4">Kairo Investment (PVT) LTD is a licensed private financial service provider in Sri Lanka, offering trusted and personalized financial solutions for individuals and small businesses.</p>
        <p className="mb-4">Our Vision: To be the most trusted and customer-focused financial partner in Sri Lanka.</p>
        <p className="mb-4">Our Mission: To provide fast and affordable financial services, ensure transparency, and support economic growth through ethical practices.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="text-xl font-bold mb-2">Short-term Loans</h4>
            <p>Fast personal loans with flexible repayment options for your urgent needs.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="text-xl font-bold mb-2">Business Loans</h4>
            <p>Capital support for small and medium businesses with easy approval.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="text-xl font-bold mb-2">Vehicle Insurance Loans</h4>
            <p>Special 6-month loans to help pay your vehicle insurance premium on time.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="text-xl font-bold mb-2">Bookkeeping & Accounting</h4>
            <p>Affordable and accurate bookkeeping services for businesses of any size.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="text-xl font-bold mb-2">Business Consulting</h4>
            <p>Expert advice to improve your business operations and growth.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="text-xl font-bold mb-2">Technology Solutions</h4>
            <p>Customized software, websites, and digital tools to streamline your business.</p>
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section id="apply" className="py-16 px-6 bg-white max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6">Apply for a Loan</h3>
        <form className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Full Name" className="border p-3 rounded" />
          <input type="text" placeholder="NIC Number" className="border p-3 rounded" />
          <input type="text" placeholder="Mobile Number" className="border p-3 rounded" />
          <input type="email" placeholder="Email Address" className="border p-3 rounded" />
          <textarea placeholder="Home Address" className="border p-3 rounded"></textarea>
          <input type="text" placeholder="Requested Loan Amount (Rs.)" className="border p-3 rounded" />
          <input type="text" placeholder="Purpose of the Loan" className="border p-3 rounded" />
          <button className="bg-blue-700 text-white p-3 rounded mt-4 hover:bg-blue-800">Submit Application</button>
        </form>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-100 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
        <p className="mb-2">Office Address: No. 136/1A, Mabulgoda, Pannipitiya, Sri Lanka</p>
        <p className="mb-2">Phone: +94 XX XXX XXXX</p>
        <p className="mb-4">Email: kairoinvestment@outlook.com</p>
        <form className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Full Name" className="border p-3 rounded" />
          <input type="email" placeholder="Email Address" className="border p-3 rounded" />
          <input type="text" placeholder="Mobile Number" className="border p-3 rounded" />
          <textarea placeholder="Your Message" className="border p-3 rounded"></textarea>
          <button className="bg-blue-700 text-white p-3 rounded hover:bg-blue-800">Send Message</button>
        </form>
      </section>
    </div>
  );
}
