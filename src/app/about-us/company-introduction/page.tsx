'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { Factory, FlaskConical, Gauge, MonitorSmartphone, Building2, Car, ArrowRight, CheckCircle, Shield, Sparkles } from 'lucide-react';

export default function CompanyIntroductionPage() {
  return (
    <>
      <Head>
        <title>Company Introduction | EV Fast Charging – Smart EV Charging Solutions</title>
        <meta name="description" content="EV Fast Charging is a high-tech enterprise specializing in R&D, manufacturing, and deployment of intelligent EV charging stations. Discover our capabilities and quality commitment." />
        <meta name="keywords" content="EV charging company, charging station manufacturer, R&D capabilities, quality inspection, EV infrastructure" />
        <meta property="og:title" content="Company Introduction – EV Fast Charging" />
        <meta property="og:description" content="Leading provider of smart EV charging solutions with cutting-edge R&D and rigorous quality control." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Company Introduction | EV Fast Charging" />
        <meta name="twitter:description" content="Innovative EV charging technology from a trusted global partner." />
      </Head>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .accent-bar { display: inline-block; width: 40px; height: 4px; background: linear-gradient(90deg, #00d966 0%, #33ff99 100%); border-radius: 2px; }
      `}</style>

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/evcharge.png"
          alt="EV Fast Charging Company Introduction"
          fill
          className="object-cover object-[center_35%] brightness-50"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase">
            Company Introduction
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/evbuilding.png"
                alt="EV Fast Charging Factory"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-5">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                EV Fast Charging is a leading high-tech enterprise dedicated to the research, development,
                and manufacturing of EV charging solutions. With a focus on innovation and sustainability,
                we provide high-quality charging infrastructure for global markets.
              </p>
              <Link
                href="/about-us/qc-system"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition group text-sm"
              >
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Capabilities */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Innovation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Cutting‑edge R&D Capabilities
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Driving industrial innovation through advanced power conversion, smart grid integration, and intuitive software interfaces.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: FlaskConical, title: 'Power Electronics', desc: 'Advanced converter topologies for high efficiency' },
              { icon: Gauge, title: 'Smart Grid Integration', desc: 'V2G, demand response, and load balancing' },
              { icon: MonitorSmartphone, title: 'User‑Friendly Software', desc: 'Intuitive apps and cloud management' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/rd-teams.png"
              alt="R&D Team at work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quality Inspection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Quality Assurance
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Rigorous Quality Inspection
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Every product undergoes strict testing to meet international safety and reliability standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/quality-test.png"
                alt="Quality Control Testing"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              {[
                'Incoming material inspection',
                'In‑process quality control (AOI, electrical tests)',
                'Hi‑pot & insulation resistance tests',
                '72‑hour aging burn‑in test',
                'Communication protocol verification',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
              <Link
                href="/about-us/qc-system"
                className="inline-flex items-center gap-2 mt-4 text-emerald-600 font-semibold text-sm group"
              >
                View full QC process <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* User-Friendly Interface */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              User Experience
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Intuitive Operation Interface
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Designed for ease of use – responsive touchscreens, real‑time data, and simple payment integration.
            </p>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200">
            <Image
              src="/images/ui-screen.png"
              alt="Touch Screen Interface"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Apply to Multiple Applications
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our charging solutions are tailored for diverse environments – from fleets to public parking.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'One‑stop Service Electric Vehicle Charging Station',
                image: '/images/station-1.png',
                icon: Building2,
              },
              {
                title: 'Electric Car Charging Parking Lot',
                image: '/images/parking.png',
                icon: Car,
              },
            ].map((item, idx) => (
              <div key={idx} className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600/80 backdrop-blur-sm p-2 rounded-lg">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Quote / CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <blockquote className="text-xl md:text-2xl font-medium italic leading-relaxed">
            “Choose EV Fast Charging, you will get intelligent and fast EV charging solutions
            to achieve cost-saving and efficient operation both for your business and home charging.”
          </blockquote>
          <div className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition group text-sm"
            >
              Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}