import { CheckCircle, Shield, Settings, Microscope, Award, FileCheck, Gauge, Wrench, Cpu, Leaf, Zap, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const qcStages = [
  {
    icon: Settings,
    stage: '01',
    title: 'Incoming Material Inspection',
    desc: 'All raw materials and components are inspected against specification upon arrival. Only approved materials enter production.',
    checks: ['Dimensional verification', 'Material certification review', 'Visual and cosmetic inspection', 'Sample electrical testing'],
  },
  {
    icon: Wrench,
    stage: '02',
    title: 'In-Process Quality Control',
    desc: 'Continuous monitoring at every stage of the manufacturing process ensures defects are caught before they propagate.',
    checks: ['PCB assembly inspection (AOI)', 'Weld and assembly verification', 'Torque and fastener checks', 'In-process electrical tests'],
  },
  {
    icon: Gauge,
    stage: '03',
    title: 'Safety & Performance Testing',
    desc: 'Every unit undergoes comprehensive safety and performance tests before leaving the production line.',
    checks: ['Hi-pot (dielectric strength) test', 'Insulation resistance test', 'Output power and efficiency test', 'Protection function verification'],
  },
  {
    icon: Award,
    stage: '04',
    title: 'Final Inspection & Aging Test',
    desc: 'Products are run under load for extended periods to identify any early-life failures before shipment.',
    checks: ['72-hour aging burn-in test', 'Full functional check', 'Communication protocol test', 'Packaging and labeling review'],
  },
];

const certs = [
  { name: 'ISO 9001:2015', category: 'Quality Management', icon: Shield },
  { name: 'CE Marking', category: 'European Conformity', icon: FileCheck },
  { name: 'GB/T National Standards', category: 'Chinese Standards', icon: Award },
  { name: 'IP54 / IP65', category: 'Weatherproofing', icon: Shield },
  { name: 'TÜV Safety', category: 'International Safety', icon: CheckCircle },
  { name: 'OCPP 1.6J', category: 'Communication Protocol', icon: Cpu },
  { name: 'CQC Certification', category: 'China Quality', icon: Leaf },
  { name: '180+ IP Certificates', category: 'Intellectual Property', icon: Zap },
];

export default function QCSystemPage() {
  return (
    <>
      <Head>
        <title>Quality Control System | EV Fast Charging – Manufacturing Excellence</title>
        <meta name="description" content="EV Fast Charging's rigorous 4-stage quality control process ensures every charging station meets global safety and performance standards. ISO, CE, TÜV certified." />
        <meta name="keywords" content="quality control, EV charger manufacturing, ISO 9001, CE certification, TÜV safety, OCPP compliance, QC process" />
        <meta property="og:title" content="Quality Control System | EV Fast Charging" />
        <meta property="og:description" content="Discover our 4‑stage quality gate process and international certifications that guarantee reliable EV charging infrastructure." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="QC System – EV Fast Charging" />
        <meta name="twitter:description" content="Manufacturing quality and safety at every step." />
      </Head>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Syne', sans-serif; font-weight: 700; letter-spacing: -0.02em; }
        .accent-bar { display: inline-block; width: 40px; height: 4px; background: linear-gradient(90deg, #00d966 0%, #33ff99 100%); border-radius: 2px; margin: 12px 0; }
      `}</style>

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/evcharge.png"
          alt="Quality Control at EV Fast Charging"
          fill
          className="object-cover object-[center_35%] brightness-50"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase">
            Quality Control System
          </h1>
        </div>
      </section>

      {/* QC Stages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Quality Assurance
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Our QC Process</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A four‑stage quality gate ensures every unit shipped is safe, reliable, and compliant with global standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {qcStages.map(({ icon: Icon, stage, title, desc, checks }) => (
              <div
                key={title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-600 mb-0.5">STAGE {stage}</p>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-emerald-600 transition-colors">
                      {title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {checks.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Global Recognition
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Certifications & Standards</h2>
            <p className="text-gray-600 mt-4">Our products meet rigorous international safety, quality, and interoperability standards.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certs.map((cert, idx) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all duration-300 flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm group-hover:text-emerald-600 transition-colors">
                      {cert.name}
                    </p>
                    <p className="text-xs text-gray-500">{cert.category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - optional but consistent with other pages */}
      <section className="py-12 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on Quality</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Experience the reliability of EV Fast Charging products – certified, tested, and trusted worldwide.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-all group text-sm"
          >
            Request More Info
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}