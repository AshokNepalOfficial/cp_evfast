'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Phone, Mail, MapPin, Clock, ChevronUp, Zap, User, MessageSquare, Smartphone, Globe, Building2 } from 'lucide-react';

const ContactPage = () => {
  // Sample location data
  const locations = [
    {
      id: 1,
      name: 'Kathmandu EV Hub',
      address: 'Bijuli Bazar, Anamnagar, Kathmandu, Nepal',
      chargers: 12,
      chargerTypes: ['DC Fast (150kW)', 'AC (22kW)'],
      image: '/images/evbuilding.png',
    },
    {
      id: 2,
      name: 'Shenzhen Headquarters',
      address: 'Langkou Industrial Zone, Longhua New District, Shenzhen, China',
      chargers: 24,
      chargerTypes: ['DC Ultra-Fast (350kW)', 'DC Fast (120kW)'],
      image: '/images/bg1.png',
    },
    {
      id: 3,
      name: 'Tokyo Demonstration Center',
      address: '1-21-36 Ibaraki, Koga, Matsunami, Japan',
      chargers: 8,
      chargerTypes: ['DC Fast (90kW)', 'AC (11kW)'],
      image: '/images/bg2.jpeg',
    },
  ];

  return (
    <>
      <Head>
        <title>Contact Us | EV Fast Charging – Get a Free Quote</title>
        <meta name="description" content="Contact EV Fast Charging for EV charging solutions, product inquiries, and partnership opportunities. Get a free quote and expert advice." />
        <meta name="keywords" content="contact EV charger supplier, EV charging stations quote, fast charging solutions, EV infrastructure inquiry" />
        <meta property="og:title" content="Contact EV Fast Charging | Free Quote" />
        <meta property="og:description" content="Reach out to our team for personalized EV charging solutions and fast response." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact EV Fast Charging" />
        <meta name="twitter:description" content="Get in touch for EV charging products and support." />
      </Head>

      <div className="min-h-screen bg-white font-sans text-gray-800">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[350px] lg:h-[450px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/evbuilding.png"
            alt="EV Fast Charging Building"
            fill
            className="object-cover brightness-50"
          />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase">
              Contact Us
            </h1>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-16">
            {/* LEFT SIDE - REDESIGNED CARD */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-5">
                <h2 className="text-xl font-bold text-white">Get in Touch</h2>
                <p className="text-emerald-100 text-sm mt-1">We're here to help you with your EV charging needs</p>
              </div>

              <div className="p-6 space-y-8">
                {/* Contact Info Section */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Phone size={14} className="text-emerald-500" /> Contact Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-50 p-2 rounded-lg">
                        <Phone className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Phone / WhatsApp</p>
                        <p className="text-sm text-gray-600">+01 590 9095 (Office)</p>
                        <p className="text-sm text-gray-600">+977 9851315997 / +977 9843176778</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-50 p-2 rounded-lg">
                        <Mail className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Email</p>
                        <p className="text-sm text-gray-600">sarbottamtradingconcern@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-50 p-2 rounded-lg">
                        <Clock className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Opening Hours</p>
                        <p className="text-sm text-gray-600">Sunday – Friday: 10:00 AM – 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Locations Section */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Building2 size={14} className="text-emerald-500" /> Office Locations
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-50 p-2 rounded-lg">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">China (Head Office)</p>
                        <p className="text-sm text-gray-600">Langkou Industrial Zone, Longhua New District, Shenzhen, China</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-50 p-2 rounded-lg">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Japan (Contact Office)</p>
                        <p className="text-sm text-gray-600">1-21-36 Ibaraki, Koga, Matsunami, Japan</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-50 p-2 rounded-lg">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Nepal (Main Office)</p>
                        <p className="text-sm text-gray-600">Bijuli Bazar, Anamnagar, Kathmandu, Nepal</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-emerald-500"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    Connect With Us
                  </h3>
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-50 p-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-emerald-600"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Facebook</p>
                      <a
                        href="https://www.facebook.com/profile.php?id=61578002056697"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-emerald-600 hover:underline"
                      >
                        EV Fast Charging
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - REDESIGNED FORM */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Get a Free Quote</h2>
                <p className="text-sm text-gray-500 mt-2">We offer free samples and a Rs 300 discount for new customers over Rs 10,000.</p>
              </div>

              <form
                action="https://formspree.io/f/mykoyzan"
                method="POST"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        id="name"
                        type="text"
                        name="Name"
                        placeholder="Your name"
                        className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      <span className="text-red-500">*</span> Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        name="Email"
                        placeholder="your@email.com"
                        required
                        className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  <div className="col-span-1">
                    <label htmlFor="mobile-code" className="block text-sm font-medium text-gray-700 mb-1">Code</label>
                    <select
                      id="mobile-code"
                      name="MobileCode"
                      className="w-full border border-gray-200 rounded-lg p-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="">Code</option>
                      <option value="+977">+977 (NP)</option>
                      <option value="+86">+86 (CN)</option>
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+91">+91 (IN)</option>
                    </select>
                  </div>
                  <div className="col-span-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="Mobile"
                        placeholder="Your mobile number"
                        className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="text-red-500">*</span> WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      id="whatsapp"
                      type="text"
                      name="Whatsapp"
                      placeholder="WhatsApp number with country code"
                      required
                      className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="text-red-500">*</span> Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea
                      id="message"
                      name="Message"
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      required
                      className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Globe className="w-4 h-4" />
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16 w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56525.02637220172!2d85.26254213125002!3d27.692138500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bb43552929%3A0x82ee508848304db7!2sPrabhu%20Bank%20Limited!5e0!3m2!1sen!2snp!4v1777181448404!5m2!1sen!2snp"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Office Location Map"
            ></iframe>
          </div>

          {/* Our Locations Section */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
                Our Locations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                EV Charging Stations Worldwide
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Visit our operational charging hubs and experience the future of EV infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {location.chargers}+ Chargers
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {location.name}
                    </h3>
                    <div className="flex items-start gap-2 text-gray-500 text-sm mb-3">
                      <MapPin size={14} className="shrink-0 mt-0.5 text-emerald-500" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {location.chargerTypes.map((type, idx) => (
                        <span key={idx} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">
                          {type}
                        </span>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-xs text-gray-500">Operational 24/7</span>
                      <div className="flex items-center gap-1 text-emerald-600 text-xs font-medium">
                        <span>View on map</span>
                        <ChevronUp className="w-3 h-3 rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========== REDESIGNED BOTTOM CONTACT INFO GRID ========== */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
                Quick Contacts
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Reach Us Anytime</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Email Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 text-center transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-sm text-gray-600 break-words">evfast2024@gmail.com</p>
                <p className="text-xs text-gray-400 mt-2">Response within 24h</p>
              </div>

              {/* Mobile Phone Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 text-center transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Mobile Phone</h3>
                <p className="text-sm text-gray-600">+977 9843176778</p>
                <p className="text-sm text-gray-600">+977 985115997</p>
              </div>

              {/* Office Tel Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 text-center transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Office Tel</h3>
                <p className="text-sm text-gray-600">+977 1-5909095</p>
                <p className="text-xs text-gray-400 mt-2">Sunday–Friday, 10AM–5PM</p>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 text-center transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-emerald-600"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 13.5c1.5 1 4 1 5.5 0" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                <p className="text-sm text-gray-600">+977 9843176778</p>
                <p className="text-sm text-gray-600">+977 9851315997</p>
              </div>
            </div>

            {/* Location Address as separate row with icon */}
            <div className="mt-8 bg-emerald-50 rounded-xl border border-emerald-100 p-5 text-center">
              <div className="flex items-center justify-center gap-2 text-emerald-600 mb-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Main Office Address</span>
              </div>
              <p className="text-gray-700 text-sm">
                Bijuli bazar Town, Kathmandu District, Kathmandu City, Bagmati Province, Nepal
              </p>
            </div>
          </div>

          {/* ========== REDESIGNED RELATED SEARCH SECTION ========== */}
          <div className="mt-12 py-8 border-t border-gray-100">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Related Searches</h3>
              <div className="flex flex-wrap gap-2">
                {['ev charger', 'ev charging stations', 'solar battery storage', 'power transformers', 'voltage switchgears'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 transition cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Floating Action Buttons */}
        <div className="fixed right-4 bottom-20 flex flex-col space-y-2">
          <a
            href="https://www.facebook.com/profile.php?id=61578002056697"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 p-2 text-white rounded hover:bg-emerald-700 transition"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-emerald-600 p-2 text-white rounded hover:bg-emerald-700 transition"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactPage;