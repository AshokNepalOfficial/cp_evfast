'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { ArrowRight, Calendar } from 'lucide-react';

type Article = {
  date: string;
  title: string;
  desc: string;
  readTime: string;
  image: string;
  tag: string;
};

const articles: Article[] = [
  {
    date: 'March 2025',
    title: 'Global EV Charging Infrastructure Investment Hits Record Highs',
    desc: 'As EV adoption accelerates worldwide, governments and private investors are committing unprecedented capital to charging infrastructure development across North America, Europe, and Asia-Pacific.',
    readTime: '4 min read',
    image: '/images/industry-1.png',
    tag: 'Infrastructure',
  },
  {
    date: 'February 2025',
    title: 'OCPP 2.0.1 Adoption Grows Among Commercial Charging Operators',
    desc: 'The latest Open Charge Point Protocol standard offers improved security, interoperability, and remote management. Many operators are upgrading their fleets to stay compliant with new regulations.',
    readTime: '3 min read',
    image: '/images/industry-2.png',
    tag: 'Technology',
  },
  {
    date: 'January 2025',
    title: 'DC Fast Charging: Why 150kW+ Is Becoming the New Standard',
    desc: 'Battery technology improvements and driver expectations are driving demand for faster DC charging speeds. We explore the technical and economic case for deploying high-power infrastructure.',
    readTime: '5 min read',
    image: '/images/1.jpg',
    tag: 'Technology',
  },
  {
    date: 'December 2024',
    title: 'Solar + EV Charging: The Business Case for Integrated Solutions',
    desc: 'Combining photovoltaic generation with EV charging stations is proving financially attractive for commercial property owners, with payback periods shortening as component costs fall.',
    readTime: '6 min read',
    image: '/images/4.jpg',
    tag: 'Business',
  },
  {
    date: 'November 2024',
    title: 'CCS vs CHAdeMO vs GB/T: Understanding Global Charging Standards',
    desc: 'A practical guide to the major DC fast charging connector standards used around the world, and what operators need to know when specifying multi-standard charging equipment.',
    readTime: '5 min read',
    image: '/images/2.jpg',
    tag: 'Education',
  },
  {
    date: 'October 2024',
    title: 'Smart Grid Integration: How EV Chargers Are Becoming Grid Assets',
    desc: 'Vehicle-to-grid (V2G) and demand response capabilities are transforming EV chargers from simple loads into active participants in smart grid management.',
    readTime: '4 min read',
    image: '/images/3.jpg',
    tag: 'Technology',
  },
];

export default function IndustryInformationPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>EV Industry Information | Charging Infrastructure Trends & Technology</title>
        <meta name="description" content="Expert insights on EV charging infrastructure, industry standards, and emerging technologies. Stay informed with our latest industry articles." />
        <meta name="keywords" content="EV industry, charging infrastructure, OCPP 2.0.1, DC fast charging, solar EV charging, CCS, CHAdeMO, GB/T, smart grid, V2G" />
        <meta property="og:title" content="EV Industry Information | EV Fast Charging" />
        <meta property="og:description" content="Latest insights and trends in EV charging infrastructure, technology standards, and smart grid integration." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EV Industry Information | EV Fast Charging" />
        <meta name="twitter:description" content="Stay up to date with the latest EV industry news and technology advancements." />
      </Head>

      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/news.png"
          alt="EV Industry News"
          fill
          className="object-contain brightness-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase">
            Industry Information
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* NAV */}
          <div className="flex gap-4 mb-10 border-b border-gray-100 pb-4 overflow-x-auto">
            <Link href="/news" className="text-gray-500 hover:text-gray-800 text-sm">
              All News
            </Link>
            <Link href="/news/industry-information" className="text-emerald-600 font-semibold text-sm border-b-2 border-emerald-600 pb-4 -mb-4">
              Industry Information
            </Link>
            <Link href="/news/Ev-group-news" className="text-gray-500 hover:text-gray-800 text-sm">
              EV Group News
            </Link>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
            {articles.map((article, index) => {
              const isOpen = expandedIndex === index;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-100 overflow-hidden hover:border-emerald-400 shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
                >
                  {/* IMAGE */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-bold text-emerald-600 bg-white/90 px-3 py-1 rounded-full uppercase">
                        {article.tag}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Calendar size={12} />
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-3 text-sm">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-xs mb-4 flex-grow">
                      {isOpen ? article.desc : article.desc.slice(0, 90) + '...'}
                    </p>

                    {/* BUTTON */}
                    <button
                      onClick={() => setExpandedIndex(isOpen ? null : index)}
                      className="flex items-center gap-2 text-emerald-600 text-xs font-semibold"
                    >
                      {isOpen ? 'Read Less' : 'Read More'}
                      <ArrowRight
                        size={12}
                        className={isOpen ? 'rotate-90 transition' : 'transition'}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}