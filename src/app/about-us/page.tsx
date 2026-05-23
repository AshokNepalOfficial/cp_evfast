'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import {
  Award, Globe, Users, Building2, ArrowRight, Target, Eye,
  Sparkles, Shield, Leaf, Clock, Rocket, Zap, FileText, Crown,
  Brain, ClipboardList, Lock, CheckCircle, Wifi, Phone, Mail, MapPin
} from 'lucide-react';

const milestones = [
  { year: '2015', title: 'Founded', desc: 'EV Fast Charging established with vision to revolutionize EV infrastructure', icon: Rocket },
  { year: '2017', title: 'First Station', desc: 'Deployed first ultra-fast DC charging station in Asia-Pacific', icon: Zap },
  { year: '2019', title: 'Global Expansion', desc: 'Reached 20+ countries across multiple continents', icon: Globe },
  { year: '2021', title: '180+ Patents', desc: 'Achieved 180+ intellectual property certifications worldwide', icon: FileText },
  { year: '2023', title: 'Market Leader', desc: 'Recognized as industry leader in fast charging technology', icon: Crown },
  { year: '2024', title: 'AI Innovation', desc: 'Launched AI-powered charging management platform', icon: Brain },
];

const teamMembers = [
  { 
    name: 'Dr. Chen Wei', 
    role: 'CEO & Founder', 
    image: '/images/team-1.jpg', 
    bio: '20+ years in power electronics & EV infrastructure',
    expertise: 'Power Systems, Strategy'
  },
  { 
    name: 'Sarah Johnson', 
    role: 'CTO', 
    image: '/images/team-2.jpg', 
    bio: 'Pioneered fast charging standards globally',
    expertise: 'Technology, Engineering'
  },
  { 
    name: 'Rajesh Kumar', 
    role: 'VP Operations', 
    image: '/images/team-3.jpg', 
    bio: 'Built global supply chain for 500+ installations',
    expertise: 'Operations, Logistics'
  },
  { 
    name: 'Emily Zhang', 
    role: 'Head of R&D', 
    image: '/images/team-4.jpg', 
    bio: 'Ph.D. in electrical engineering, 50+ patents',
    expertise: 'Innovation, Research'
  },
];

const certifications = [
  { name: 'ISO 9001:2015', category: 'Quality', icon: ClipboardList },
  { name: 'ISO 14001:2015', category: 'Environment', icon: Globe },
  { name: 'IEC 61851-1', category: 'Safety', icon: Shield },
  { name: 'ISO/IEC 27001', category: 'Security', icon: Lock },
  { name: 'UL 2202', category: 'Standards', icon: CheckCircle },
  { name: 'CB Certification', category: 'International', icon: Wifi },
];

const values = [
  { title: 'Innovation', desc: 'Constantly pushing boundaries of charging technology and efficiency', icon: Sparkles },
  { title: 'Sustainability', desc: 'Committed to reducing carbon footprint and enabling green mobility', icon: Leaf },
  { title: 'Reliability', desc: '99.9% uptime guarantee with 24/7 customer support globally', icon: Shield },
  { title: 'Excellence', desc: 'Uncompromising quality in every product and service we deliver', icon: Award },
];

const stats = [
  { value: '50+', label: 'Expert Engineers', icon: Users },
  { value: '500+', label: 'Active Installations', icon: Building2 },
  { value: '20+', label: 'Countries Served', icon: Globe },
  { value: '9+', label: 'Years Experience', icon: Clock },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | EV Fast Charging – Leading EV Infrastructure Provider</title>
        <meta name="description" content="EV Fast Charging is a global leader in EV charging infrastructure. Learn about our mission, values, milestones, and leadership team driving sustainable mobility." />
        <meta name="keywords" content="EV charging company, fast charging infrastructure, EV technology, sustainable mobility, EV Fast Charging about" />
        <meta property="og:title" content="About EV Fast Charging" />
        <meta property="og:description" content="Discover our journey, core values, and the team behind world-class EV charging solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About EV Fast Charging" />
        <meta name="twitter:description" content="Learn about our mission to accelerate sustainable EV transportation globally." />
      </Head>

      {/* Hero */}
      <section className="relative mt-[64px] lg:mt-[80px] h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/evcharge.png"
          alt="EV Fast Charging Infrastructure"
          fill
          className="object-cover object-[center_35%] brightness-50"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase">
            About Us
          </h1>
        </div>
      </section>

      {/* Mission & Vision - Two Cards Side by Side */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-emerald-50/30 rounded-2xl border border-emerald-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To accelerate the global transition to sustainable EV transportation by delivering world-class charging infrastructure that is intelligent, reliable, and accessible.
              </p>
            </div>
            {/* Vision Card */}
            <div className="bg-emerald-50/30 rounded-2xl border border-emerald-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                A future where charging electric vehicles is as simple as traditional refueling, powered by renewable energy and managed by AI-driven networks.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-full mb-3">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                <p className="text-sm text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Our Values
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">What We Stand For</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Principles that drive our culture and guide every decision.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones - Card Grid (no timeline) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Our Journey
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Milestones & Achievements</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Key moments that shaped EV Fast Charging into a global leader.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-emerald-600 font-bold text-sm mb-1">Year {item.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Leadership
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Meet Our Leaders</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Experienced professionals driving innovation in EV charging technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-64 bg-gradient-to-br from-emerald-600 to-green-600 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                  <p className="text-sm font-semibold text-emerald-600 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.bio}</p>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500"><strong>Expertise:</strong> {member.expertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Quality & Trust
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Certifications & Standards</h2>
            <p className="text-gray-600 mt-4">Globally recognized for safety, quality, and environmental responsibility.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => {
              const IconComponent = cert.icon;
              return (
                <div key={idx} className="flex items-center gap-4 p-5 bg-emerald-50/30 rounded-xl border border-emerald-100 hover:shadow-md transition">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Interested in partnering with EV Fast Charging? Get in touch with our team.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-all group text-sm"
          >
            Contact Us <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}