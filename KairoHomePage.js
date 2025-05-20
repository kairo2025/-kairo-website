import React from "react";

export default function KairoHomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Kairo logo" className="h-10 w-10" />
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
    </div>
  );
}
