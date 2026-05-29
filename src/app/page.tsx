'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield, Zap, Cpu, TrendingUp, ChevronRight, ArrowRight, CheckCircle,
  Globe, Award, Users, Building2, ChevronLeft, Mail, Sun, Car,
  Battery, Plug, Leaf
} from 'lucide-react';

const stats = [
  { value: '180+', label: 'Patent & IP Certifications', icon: Award },
  { value: '20+', label: 'Global Markets Served', icon: Globe },
  { value: '50+', label: 'Expert Engineers', icon: Users },
  { value: '500+', label: 'Fast Charging Installations', icon: Building2 },
];

const allProducts = [
  {
    id: 'ev-p12-2',
    title: 'Ev Home 32A GBT EV Charger 7kW Level 2 EV Charging Wallbox',
    image: `/images/products/p106.jpg`,
    link: '/products',
    category: 'EV Charging Stations',
  },
  {
    id: 'ev-p12-6',
    title: 'Solar EV Wallbox 7kW to 22kW Type 2 OCPP1.6 TUV CE Certificate',
    image: `/images/products/p110.jpg`,
    link: '/products',
    category: 'EV Charging Stations',
  },
  {
    id: 'ev-p13-8',
    title: 'AC Electric Vehicle Charger 7kW to 22kW',
    image: `/images/products/p122.jpg`,
    link: '/products',
    category: 'EV Charging Stations',
  },
  {
    id: 'ev-p6-5',
    title: 'GBT DC Fast Charger Advertising Screen EV Charger — Commercial OCPP1.6',
    image: `/images/products/p46.jpg`,
    link: '/products',
    category: 'EV Charging Stations',
  },
];

const advantages = [
  {
    icon: Shield,
    title: 'Military-Grade Safety',
    desc: '36-point safety protection system with intelligent load management.',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Intelligence',
    desc: 'Supports CCS, GB/T, and CHAdeMo. Smart scheduling and adaptive profiles.',
  },
  {
    icon: Zap,
    title: 'Smart Cloud Operations',
    desc: 'Real-time IoT monitoring, predictive maintenance, zero downtime.',
  },
  {
    icon: TrendingUp,
    title: 'Maximum Efficiency',
    desc: 'Fast-slow hybrid mode, modular architecture, future-proof power upgrades.',
  },
];

const applicationTabs = [
  {
    key: 'ev',
    label: 'EV Fast Charging Networks',
    icon: Car,
    image: '/images/evbuilding.png',
    title: 'Complete EV Fast Charging Solutions',
    desc: 'We deliver turnkey EV fast charging infrastructure with site assessment, design, installation, and ongoing support. Our solutions integrate seamlessly with existing power infrastructure.',
    href: '/solutions/ev-charging-networks',
  },
  {
    key: 'pv',
    label: 'Solar + Storage + Charging',
    icon: Sun,
    image: '/images/app2.png',
    title: 'Renewable Energy Charging Ecosystems',
    desc: 'Combine solar generation, battery storage, and fast charging in one optimized system. Maximize renewable utilization, reduce grid dependency, and deliver 100% green EV charging.',
    href: '/solutions/solar-storage-charging',
  },
];

const successCases = [
  {
    title: 'Solar-Powered Fast Charging Network',
    image: '/images/success1.jpeg',
    href: '/case-studies/solar-network',
    location: 'Asia-Pacific Region',
  },
  {
    title: 'Urban Fast Charging Infrastructure',
    image: '/images/success-2.png',
    href: '/case-studies/urban-charging',
    location: 'Multi-City Deployment',
  },
];

const heroSlides = [
  {
    landscape: '/images/bg2.jpeg',
    portrait: '/images/mobile/product-showcase.png',
  },
  {
    landscape: '/images/bg3.png',
    portrait: '/images/mobile/Picture5.png',
  },
  {
    landscape: '/images/bg4.jpeg',
    portrait: '/images/mobile/Picture9.png',
  },
  {
    landscape: '/images/bg5.png',
    portrait: '/images/mobile/Picture12.png',

  },
  {
    landscape: '/images/bg1.png',
    portrait: '/images/mobile/Picture10.png',
  },
];

const relatedSearches = [
  { label: 'EV fast charger', href: '/search/ev-fast-charger', icon: Zap },
  { label: 'Fast charging stations', href: '/search/fast-charging-stations', icon: Plug },
  { label: 'Solar charging systems', href: '/search/solar-charging', icon: Sun },
  { label: 'Battery storage', href: '/search/battery-storage', icon: Battery },
  { label: 'Green mobility', href: '/search/green-mobility', icon: Leaf },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState('ev');
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    const normalizedIndex = (index % heroSlides.length + heroSlides.length) % heroSlides.length;
    if (normalizedIndex === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(normalizedIndex);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating, currentSlide]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const activeApp = applicationTabs.find((t) => t.key === activeTab);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .accent-bar { width: 40px; height: 4px; background: linear-gradient(90deg, #00d966 0%, #33ff99 100%); border-radius: 2px; margin: 12px 0; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: slideIn 0.6s ease-out forwards; }
      `}</style>
      {/* Hero Slider - full remaining height after navbar */}
      <section className="relative w-full bg-white overflow-hidden">
        <div className="relative md:mt-[80px] max-md:mt-[64px] w-full max-md:h-[calc(100dvh-64px)] md:h-[calc(100dvh-80px)]">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 flex transition-transform duration-700 ease-in-out will-change-transform"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {heroSlides.map((slide, i) => (
                <div key={i} className="relative min-w-full h-full flex-shrink-0">
                  <Image
                    src={isMobile ? slide.portrait : slide.landscape}
                    alt="EV Fast Charging"
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    className="object-stretch"
                  />
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`transition-all duration-300 rounded-full ${i === currentSlide
                      ? 'w-8 h-1.5 bg-emerald-600 shadow-lg'
                      : 'w-2 h-1.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-6 right-6 z-30 text-gray-500 text-sm font-mono bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm">
              {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">About Us</span>
              <div className="accent-bar" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Leading Tomorrow's Mobility</h2>
              <p className="text-gray-700 leading-relaxed mb-6">EV Fast Charging is a pioneer in next-generation electric vehicle charging infrastructure. We design, manufacture, and deploy intelligent charging solutions that power sustainable transportation globally.</p>
              <p className="text-gray-600 leading-relaxed">Our comprehensive product suite includes <strong>fast charging stations</strong>, <strong>renewable energy storage systems</strong>, <strong>grid management solutions</strong>, and <strong>industrial charging networks</strong>.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="group p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-gray-200 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
                  <p className="text-sm text-gray-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">Our Products</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Smart EV Products</h2>
              <p className="text-gray-600 mt-3 max-w-lg">High-performance EV chargers and smart energy solutions built for the future.</p>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition">
              All Products <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <Link key={product.id} href={product.link} className="group">
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-square bg-slate-100">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold text-emerald-600 mb-1">{product.category}</p>
                    <h3 className="font-bold text-sm text-slate-800 line-clamp-2 group-hover:text-emerald-600 transition">{product.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-300 mb-3 px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-400/30">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Industry-Leading Advantages</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mt-4">Advanced technology meets reliability. Built for the future of mobility.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition text-sm">
              GET SOLUTIONS <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Complete Charging Ecosystems</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {applicationTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={`flex items-center gap-2 px-5 py-3 rounded-lg border font-semibold text-sm transition-all ${activeTab === tab.key ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-400 hover:bg-emerald-50'}`}>
                  <Icon size={16} /> {tab.label}
                </button>
              );
            })}
          </div>
          {activeApp && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden h-96 shadow-xl">
                <Image src={activeApp.image} alt={activeApp.title} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{activeApp.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{activeApp.desc}</p>
                <Link href={activeApp.href} className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition text-sm">
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Real-World Impact</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {successCases.map((c, i) => (
              <Link key={i} href={c.href} className="group relative rounded-2xl overflow-hidden aspect-video hover:shadow-xl transition-all">
                <Image src={c.image} alt={c.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-emerald-300 text-sm font-semibold mb-1">{c.location}</p>
                  <h3 className="text-white text-xl font-bold">{c.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Searches */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Explore More</p>
          <div className="flex flex-wrap gap-3">
            {relatedSearches.map(({ label, href, icon: Icon }) => (
              <Link key={label} href={href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm font-medium transition">
                <Icon size={14} /> {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Stay Updated</h2>
          <p className="text-white/90 mb-6">Get the latest on EV charging innovation and industry insights.</p>
          {subscribed ? (
            <div className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur rounded-lg py-3 px-4">
              <CheckCircle size={20} /> Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubscribed(true); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full pl-10 pr-4 py-2.5 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-emerald-300" />
              </div>
              <button type="submit" className="px-5 py-2.5 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition text-sm">Subscribe</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}