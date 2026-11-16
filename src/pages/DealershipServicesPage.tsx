import React from 'react';
import { PageId, SITE_IMAGES } from '../types';

interface PageProps {
  onNavigate: (page: PageId, hash?: string) => void;
  onOpenServicesMenu: () => void;
}

export const DealershipServicesPage: React.FC<PageProps> = ({
  onNavigate,
  onOpenServicesMenu,
}) => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-black border-b border-brandBorder overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brandRed/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4" data-aos="fade-right" data-aos-duration="800">
              <nav className="text-xs text-gray-400 tracking-wide">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('wheels-and-custom-painting');
                  }}
                  className="hover:text-white transition"
                >
                  Home
                </a>{' '}
                <span className="mx-1.5">/</span>{' '}
                <button
                  type="button"
                  onClick={onOpenServicesMenu}
                  className="text-gray-300 hover:text-white transition cursor-pointer"
                >
                  Services
                </button>
              </nav>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
                DEALERSHIP SERVICES
              </h1>

              <p className="font-oswald text-xl sm:text-2xl text-brandRed font-semibold tracking-wide">
                PRIORITY TURNAROUND. SHOWROOM-READY INVENTORY.
              </p>

              <p className="text-gray-300 text-sm sm:text-base max-w-lg leading-relaxed">
                Partner with Calipers R Us for reliable B2B automotive styling, wheel reconditioning, caliper painting, and paint protection—helping dealerships boost front-end gross and move inventory faster.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#estimate"
                  onClick={(e) => scrollTo(e, '#estimate')}
                  className="btn-shine bg-brandRed hover:bg-red-700 text-white font-oswald font-semibold tracking-wider px-6 py-3.5 text-sm transition transform hover:-translate-y-0.5 shadow-lg shadow-brandRed/20"
                >
                  OPEN A DEALER ACCOUNT
                </a>
                <a
                  href="tel:7039621179"
                  className="border border-white/30 hover:border-white hover:bg-white/5 text-white font-oswald font-semibold tracking-wider px-6 py-3.5 text-sm transition transform hover:-translate-y-0.5"
                >
                  CALL FLEET DESK
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6" data-aos="fade-left" data-aos-duration="900">
              <div className="relative rounded-sm overflow-hidden border border-brandBorder shadow-2xl group">
                <img
                  src={SITE_IMAGES.rentalVehicle}
                  alt="Luxury Showroom Vehicle Prepared for Dealership Delivery"
                  className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border-l-2 border-brandRed px-3 py-1.5 text-xs font-oswald tracking-wider text-gray-200">
                  DEDICATED B2B SCHEDULING &amp; VOLUME PRICING
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3-COLUMN FEATURE HIGHLIGHTS ================= */}
      <section className="bg-[#0F0F0F] border-b border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-brandBorder">
            <div className="pt-4 md:pt-0 md:px-4 first:pl-0" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">PRIORITY DEALER LANES</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Fast, predictable turnaround times to keep sold units on schedule.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-8" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">WHOLESALE &amp; VOLUME RATES</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Competitive B2B tier pricing for recurring dealership accounts.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-8" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">ONE-STOP UPFITTING</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Calipers, wheels, blackouts, PPF, and ceramic coating under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DEALERSHIP SOLUTIONS & PACKAGES ================= */}
      <section className="py-16 bg-brandDark border-b border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4" data-aos="fade-up">
            <div>
              <span className="text-brandRed font-oswald text-xs tracking-widest font-semibold">B2B SOLUTIONS</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mt-1">
                DEALERSHIP STYLING &amp; RECONDITIONING
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md">
              Whether pre-loading showroom units with high-margin appearance packages or fulfilling F&amp;I due-bills, we deliver factory-level consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Package 1 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-tags"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">FRONT-LINE UPGRADES</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Custom painted brake calipers, blacked-out wheels, and chrome deletes that differentiate standard trims on your lot.
              </p>
            </div>

            {/* Package 2 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-file-invoice-dollar"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">F&amp;I / WE-OWE FULFILLMENT</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Seamless execution of buyer-requested PPF, window tint, and ceramic coating sold at the finance desk.
              </p>
            </div>

            {/* Package 3 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-wrench"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">PRE-OWNED RECONDITIONING</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Fast curb-rash removal, bent rim straightening, and alloy refinishing to get trade-ins retail-ready quickly.
              </p>
            </div>

            {/* Package 4 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-truck-fast"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">FLEET &amp; COMMERCIAL WRAPS</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Branded graphics, commercial lettering, and protective film for commercial vans, trucks, and courtesy loaners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN DETAILS & STICKY CTA CARD ================= */}
      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-gray-300 text-sm sm:text-base mb-10 border-l-2 border-brandRed pl-4"
            data-aos="fade-right"
          >
            Trusted by franchise and independent dealerships across Northern Virginia for precision workmanship, clear communication, and on-time delivery.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Service Details */}
            <div className="lg:col-span-7 space-y-10">
              {/* Block 1 */}
              <div data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-4">
                  WHAT WE PROVIDE FOR DEALERS
                </h2>
                <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Dedicated single point of contact for service advisors &amp; inventory managers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Custom brake caliper painting &amp; wheel blackout packages for showroom builds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Wholesale rim repair, curb rash removal, and OEM finish restoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Paint Protection Film (PPF), ceramic coating, and chrome delete services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Streamlined PO billing, itemized invoicing, and multi-vehicle batch scheduling</span>
                  </li>
                </ul>
              </div>

              {/* Block 2 */}
              <div data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-3">
                  BUILT FOR DEALERSHIP WORKFLOWS
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  We understand that every day a vehicle sits off the lot impacts holding costs and customer satisfaction. Our shop is structured to handle multi-service packages simultaneously—combining wheel painting, caliper styling, and exterior blackouts in a single streamlined visit.
                </p>
              </div>

              {/* Block 3 */}
              <div data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-3">
                  START A DEALERSHIP PARTNERSHIP
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  Tell us about your dealership group, monthly volume, and the primary services your sales or service department needs. Our B2B team in Springfield, VA will put together a tailored rate sheet and turnaround schedule.
                </p>
                <p className="text-gray-400 text-sm">
                  Request a dealer rate sheet online or call{' '}
                  <a href="tel:7039621179" className="text-white font-semibold hover:text-brandRed transition">
                    (703) 962-1179
                  </a>{' '}
                  to speak with our commercial manager.
                </p>
              </div>
            </div>

            {/* Right Column: Image + Sticky CTA Box */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28" data-aos="fade-left">
              <div className="rounded-sm overflow-hidden border border-brandBorder group">
                <img
                  src={SITE_IMAGES.caliperPainting}
                  alt="Dealership Custom Wheel and Caliper Upgrade Package"
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Action Card */}
              <div id="estimate" className="bg-brandCard border border-brandBorder p-6 sm:p-8 rounded-sm shadow-xl">
                <h3 className="text-2xl font-bold text-white tracking-wide mb-2">
                  SET UP YOUR DEALER ACCOUNT
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Share your dealership name, contact info, and service needs. We will send over B2B pricing and priority scheduling details.
                </p>

                <div className="space-y-3">
                  <a
                    href="#contact"
                    onClick={(e) => scrollTo(e, '#contact')}
                    className="btn-shine block w-full bg-brandRed hover:bg-red-700 text-center text-white font-oswald font-semibold tracking-wider py-3.5 text-sm transition"
                  >
                    REQUEST DEALER PRICING
                  </a>
                  <a
                    href="tel:7039621179"
                    className="block w-full bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-brandBorder text-center text-white font-oswald font-semibold tracking-wider py-3.5 text-sm transition"
                  >
                    (703) 962-1179
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DEALERSHIP SHOWCASE GALLERY ================= */}
      <section id="gallery" className="py-16 bg-brandDark border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4" data-aos="fade-up">
            <div>
              <span className="text-brandRed font-oswald text-xs tracking-widest font-semibold">DEALER BUILDS</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mt-1">
                SHOWROOM-READY INVENTORY PACKAGES
              </h2>
            </div>
            <a
              href="#gallery"
              onClick={(e) => scrollTo(e, '#gallery')}
              className="text-xs font-oswald tracking-wider text-gray-300 hover:text-brandRed transition"
            >
              VIEW FULL GALLERY <i className="fa-solid fa-arrow-right ml-1"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div
              className="relative overflow-hidden rounded-sm border border-brandBorder group h-72"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img
                src={SITE_IMAGES.customWheels}
                alt="Showroom Sport Package"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">APPEARANCE PACKAGE</span>
                <h3 className="text-lg font-bold text-white">GLOSS WHEELS + RED CALIPERS</h3>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div
              className="relative overflow-hidden rounded-sm border border-brandBorder group h-72"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src={SITE_IMAGES.ceramicBlackBmw}
                alt="Blackout Trim & PPF"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">STEALTH EDITION</span>
                <h3 className="text-lg font-bold text-white">CHROME DELETE &amp; SATIN TRIM</h3>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div
              className="relative overflow-hidden rounded-sm border border-brandBorder group h-72"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img
                src={SITE_IMAGES.rimRefinishing}
                alt="CPO Wheel Reconditioning"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">CPO RECONDITIONING</span>
                <h3 className="text-lg font-bold text-white">4-WHEEL OEM RESTORATION</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= YOUR VISIT, STEP BY STEP ================= */}
      <section className="py-14 bg-[#0D0D0D] border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-8" data-aos="fade-up">
            PARTNER ONBOARDING, STEP BY STEP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 01 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/50 p-6 sm:p-8 rounded-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="font-oswald text-3xl font-bold text-brandRed block mb-3">01</span>
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">CONNECT WITH OUR FLEET DESK</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Share your dealership details, expected monthly volume, and key styling or reconditioning needs.
              </p>
            </div>

            {/* Step 02 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/50 p-6 sm:p-8 rounded-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="font-oswald text-3xl font-bold text-brandRed block mb-3">02</span>
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">LOCK IN B2B PRICING &amp; SLA</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Review wholesale tier rates, turnaround commitments, and PO billing terms tailored to your store.
              </p>
            </div>

            {/* Step 03 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/50 p-6 sm:p-8 rounded-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="font-oswald text-3xl font-bold text-brandRed block mb-3">03</span>
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">DISPATCH &amp; DELIVER FAST</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Schedule single units or batch drop-offs with priority lane processing and showroom-ready quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3-CARD BOTTOM CTA BANNER ================= */}
      <section className="py-12 bg-[#0D0D0D] border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Dark */}
            <div
              className="bg-brandCard border border-brandBorder p-6 flex flex-col justify-between rounded-sm transition-transform duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-start gap-4 mb-6">
                <i className="fa-solid fa-list-check text-white text-3xl mt-1"></i>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">VIEW ALL SERVICES</h3>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Explore all styling, reconditioning, and protection packages available for dealer inventory.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onOpenServicesMenu();
                }}
                className="block w-full bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-brandBorder text-center text-white font-oswald font-semibold tracking-wider py-2.5 text-xs transition cursor-pointer"
              >
                VIEW ALL SERVICES
              </button>
            </div>

            {/* Card 2: Highlighted Red */}
            <div
              className="bg-brandRed p-6 flex flex-col justify-between rounded-sm shadow-lg shadow-brandRed/20 transition-transform duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-start gap-4 mb-6">
                <i className="fa-solid fa-handshake text-white text-3xl mt-1"></i>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">DEALER ACCOUNT INQUIRY</h3>
                  <p className="text-white/90 text-xs mt-1 leading-relaxed">
                    Submit your dealership info and get wholesale rates and priority scheduling options.
                  </p>
                </div>
              </div>
              <a
                href="#estimate"
                onClick={(e) => scrollTo(e, '#estimate')}
                className="btn-shine block w-full bg-white hover:bg-gray-100 text-center text-brandRed font-oswald font-bold tracking-wider py-2.5 text-xs transition"
              >
                REQUEST DEALER RATES
              </a>
            </div>

            {/* Card 3: Dark */}
            <div
              className="bg-brandCard border border-brandBorder p-6 flex flex-col justify-between rounded-sm transition-transform duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-start gap-4 mb-6">
                <i className="fa-solid fa-phone-volume text-white text-3xl mt-1"></i>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">CALL FLEET DESK</h3>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Speak directly with our commercial team for immediate turnaround availability.
                  </p>
                </div>
              </div>
              <a
                href="tel:7039621179"
                className="block w-full bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-brandBorder text-center text-white font-oswald font-semibold tracking-wider py-2.5 text-xs transition"
              >
                (703) 962-1179
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
