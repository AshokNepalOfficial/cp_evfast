'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight, ArrowRight, CheckCircle, Zap, BarChart3, Leaf, Shield, Wifi, Cpu,
  Search, Ruler, Wrench, Rocket, Car, Bus, Battery, TrendingUp, DollarSign, Gauge,
  Clock, Users, Globe
} from 'lucide-react';

const solutions = [
  {
    id: 'ev-networks',
    title: 'EV Fast Charging Networks',
    subtitle: 'Complete Infrastructure Solutions',
    description: 'Build and operate scalable fast charging networks with intelligent management and real-time monitoring.',
    image: '/images/success-2.png',
    features: [
      'Network of 20-500+ stations',
      'Real-time monitoring dashboard',
      'AI-powered load balancing',
      'Multi-payment integration',
      'Remote diagnostics & support',
      'Revenue optimization tools',
    ],
    benefits: [
      { title: 'Faster Deployment', desc: 'Deploy faster with turnkey solutions', icon: Rocket },
      { title: '40% Cost Reduction', desc: 'Reduce operational costs by 40%', icon: DollarSign },
      { title: '99.9% Uptime SLA', desc: 'Maximize uptime with guaranteed reliability', icon: Gauge },
      { title: 'Scalable Infrastructure', desc: 'Scale from 5 to 500+ stations', icon: TrendingUp },
      { title: 'Predictive Maintenance', desc: 'Predictive maintenance reduces downtime', icon: Clock },
    ],
    caseStudy: 'Urban Fast Charging Network - 150+ stations across 5 cities',
  },
  {
    id: 'solar-storage',
    title: 'Solar + Storage + Charging',
    subtitle: 'Renewable Energy Integration',
    description: 'Combine solar generation, battery storage, and fast charging in one optimized ecosystem.',
    image: '/images/success1.jpeg',
    features: [
      '100% renewable energy potential',
      'Advanced battery storage systems',
      'Grid interaction capabilities',
      'Energy management system included',
      'Weather-adaptive charging',
      'Peak shaving optimization',
    ],
    benefits: [
      { title: 'Zero Grid Dependency', desc: 'Eliminate 100% of grid dependency', icon: Zap },
      { title: '70% Energy Cost Savings', desc: 'Reduce energy costs by 70%', icon: DollarSign },
      { title: 'Green Certification', desc: 'Green charging certification available', icon: Leaf },
      { title: 'Grid Services Revenue', desc: 'Revenue from grid services', icon: TrendingUp },
      { title: 'Future-Ready', desc: 'Future-proof infrastructure', icon: Rocket },
    ],
    caseStudy: 'Green Campus Initiative - 50kWh solar + 100kWh storage + charging',
  },
];

const implementationSteps = [
  {
    step: 1,
    title: 'Site Assessment',
    description: 'Comprehensive analysis of location, power infrastructure, and requirements',
    duration: '1-2 weeks',
    icon: Search,
  },
  {
    step: 2,
    title: 'Design & Planning',
    description: 'Custom design for optimal performance, capacity, and cost efficiency',
    duration: '2-4 weeks',
    icon: Ruler,
  },
  {
    step: 3,
    title: 'Installation',
    description: 'Professional installation by certified technicians with minimal disruption',
    duration: '4-8 weeks',
    icon: Wrench,
  },
  {
    step: 4,
    title: 'Testing & Commissioning',
    description: 'Rigorous testing, certification, and staff training',
    duration: '1-2 weeks',
    icon: CheckCircle,
  },
  {
    step: 5,
    title: 'Launch & Support',
    description: '24/7 monitoring, maintenance, and continuous optimization',
    duration: 'Ongoing',
    icon: Rocket,
  },
];

const companies = [
  { name: 'Urban Fleet Services', icon: Car, stations: 45, country: 'Singapore' },
  { name: 'Green Energy Corp', icon: Leaf, stations: 120, country: 'Japan' },
  { name: 'City Transit Authority', icon: Bus, stations: 85, country: 'South Korea' },
  { name: 'E-Mobility Solutions', icon: Battery, stations: 200, country: 'China' },
];

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState('ev-networks');
  const activeSolution = solutions.find(s => s.id === activeTab);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        * { font-family: 'Inter', sans-serif; }
        .accent-bar { display: inline-block; width: 40px; height: 4px; background: linear-gradient(90deg, #00d966 0%, #33ff99 100%); border-radius: 2px; }

        @keyframes slideInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: slideInUp 0.6s ease-out forwards; }
      `}</style>

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/solution.png"
          alt="Solutions"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase">
            SOLUTIONS
          </h1>
        </div>
      </section>

      {/* Solution Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            {solutions.map(sol => (
              <button
                key={sol.id}
                onClick={() => setActiveTab(sol.id)}
                className={`group px-6 py-4 rounded-xl border-2 font-semibold text-base transition-all duration-300 text-left ${
                  activeTab === sol.id
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg scale-105'
                    : 'bg-white text-gray-900 border-gray-200 hover:border-emerald-400'
                }`}
              >
                <div className="text-sm">{sol.title}</div>
                <div className="text-xs opacity-70 mt-1">{sol.subtitle}</div>
              </button>
            ))}
          </div>

          {activeSolution && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden h-96 bg-gradient-to-br from-emerald-600 to-green-500 shadow-2xl">
                <Image
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  fill
                  className="object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{activeSolution.title}</h2>
                <p className="text-xl text-gray-700 mb-8">{activeSolution.description}</p>
                <div className="mb-10">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeSolution.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-600 mt-1 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link 
                  href="/contact-us" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all group text-sm"
                >
                  Request Consultation <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REDESIGNED BENEFITS SECTION
      ═══════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Why Choose Us
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Key Benefits</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover the advantages of partnering with EV Fast Charging for your infrastructure needs.
            </p>
          </div>

          {activeSolution && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeSolution.benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Process
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Implementation Timeline</h2>
            <p className="text-lg text-gray-600 mt-4">From concept to launch in 12-16 weeks</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-green-500" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {implementationSteps.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-4 border-emerald-600 rounded-full flex items-center justify-center hidden md:flex">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="mt-8 p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200 text-center">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Step {item.step}</h3>
                      <h4 className="font-bold text-gray-900 mb-3">{item.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                      <div className="inline-block px-3 py-1 bg-emerald-600/20 text-emerald-700 rounded-full text-xs font-semibold">
                        {item.duration}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Success Stories
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Trusted by Global Leaders</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map((company, idx) => {
              const IconComponent = company.icon;
              return (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{company.name}</h3>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-2xl font-bold text-emerald-600">{company.stations}</p>
                      <p className="text-sm text-gray-600">Stations</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">{company.country}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Technical Capabilities</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'High Power', desc: 'Up to 400kW charging capacity per station' },
              { icon: BarChart3, title: 'Analytics', desc: 'Real-time monitoring and performance metrics' },
              { icon: Leaf, title: 'Eco-Friendly', desc: '100% renewable energy compatible systems' },
              { icon: Shield, title: 'Security', desc: 'Military-grade encryption and protection' },
              { icon: Wifi, title: 'Connected', desc: '5G, WiFi, LTE connectivity options' },
              { icon: Cpu, title: 'AI-Powered', desc: 'Machine learning for optimization' },
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
                <item.icon size={32} className="text-emerald-600 mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Deploy?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Get in touch with our solutions team to discuss your EV charging infrastructure needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="px-5 py-2.5 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2 group text-sm"
            >
              Schedule Consultation <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
            <Link 
              href="/products" 
              className="px-5 py-2.5 bg-white/20 border border-white text-white font-semibold rounded-lg hover:bg-white/30 transition-all text-sm"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}