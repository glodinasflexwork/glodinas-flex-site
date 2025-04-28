// pages/industries/logistics.js

import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '../../components/Breadcrumb';

export default function Logistics() {
  return (
    <>
      <Head>
        <title>Logistics Jobs & Staffing - Glodinas Flex Work B.V.</title>
        <meta
          name="description"
          content="Efficient logistics staffing services across the Netherlands. Find warehouse jobs or hire experienced workers with Glodinas Flex Work B.V."
        />
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/images/industries/logistics-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black/40 absolute inset-0 z-0" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-bold mb-3">Logistics Staffing Solutions</h1>
          <p className="text-lg">Efficient staffing for warehouses, distribution, and transportation</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <Breadcrumb currentPage="Logistics" />
      </div>

      {/* Info Section with Detail Image */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Logistics Jobs & Staffing Solutions</h2>
            <p className="text-lg mb-6">
              Glodinas Flex Work B.V. provides specialized logistics staffing across the Netherlands. From warehouse operators and forklift drivers to logistics coordinators, we ensure you get the right people exactly when you need them.
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li>Flexible short-term and long-term staffing options</li>
              <li>Certified workers with relevant warehouse experience</li>
              <li>Assistance with housing, transport, and Dutch registration</li>
              <li>Multilingual communication support</li>
            </ul>
          </div>
          <div>
            <img src="/images/industries/logistics-detail.jpg" alt="Logistics Work" className="rounded shadow-md w-full h-auto object-cover" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Looking for Work or Staff in Logistics?</h2>
          <p className="mb-6">Join us or hire your next warehouse, distribution, or transport staff today.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/register">
              <a className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow">
                I'm Looking for Work
              </a>
            </Link>
            <Link href="/contact">
              <a className="bg-white text-orange-600 border border-orange-500 font-semibold px-6 py-3 rounded shadow">
                I Need Workers
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
