import React from 'react';
import { PageId, SITE_IMAGES } from '../types';

interface PageProps {
  onNavigate: (page: PageId, hash?: string) => void;
  onOpenServicesMenu: () => void;
}

export const RimRepairPage: React.FC<PageProps> = ({
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
                RIM REPAIR &amp; REFINISHING
              </h1>

              <p className="font-oswald text-xl sm:text-2xl text-brandRed font-semibold tracking-wide">
                PRECISION RESTORATION. SMOOTH RIDE.
              </p>

              <p className="text-gray-300 text-sm sm:text-base max-w-lg leading-relaxed">
                Restore damaged, curbed, or bent alloy wheels back to factory balance and showroom condition without the high cost of full OEM wheel replacement.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#estimate"
                  onClick={(e) => scrollTo(e, '#estimate')}
                  className="btn-shine bg-brandRed hover:bg-red-700 text-white font-oswald font-semibold tracking-wider px-6 py-3.5 text-sm transition transform hover:-translate-y-0.5 shadow-lg shadow-brandRed/20"
                >
                  REQUEST AN ESTIMATE
                </a>
                <a
                  href="tel:7039621179"
                  className="border border-white/30 hover:border-white hover:bg-white/5 text-white font-oswald font-semibold tracking-wider px-6 py-3.5 text-sm transition transform hover:-translate-y-0.5"
                >
                  CALL OUR TEAM
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6" data-aos="fade-left" data-aos-duration="900">
              <div className="relative rounded-sm overflow-hidden border border-brandBorder shadow-2xl group">
                <img
                  src={SITE_IMAGES.rimRefinishing}
                  alt="Precision Alloy Rim Restoration and Machining"
                  className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border-l-2 border-brandRed px-3 py-1.5 text-xs font-oswald tracking-wider text-gray-200">
                  CURB RASH REMOVAL &amp; STRUCTURAL STRAIGHTENING
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
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">CURB RASH &amp; SCUFF REPAIR</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Seamless sanding, reshaping, and color-matched refinishing.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-8" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">BENT RIM STRAIGHTENING</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Eliminate steering wheel vibrations and restore true roundness.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-8" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">OEM FINISH MATCHING</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Factory silver, hyper-silver, machined face, or custom colors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMMON RIM DAMAGES WE FIX ================= */}
      <section className="py-16 bg-brandDark border-b border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4" data-aos="fade-up">
            <div>
              <span className="text-brandRed font-oswald text-xs tracking-widest font-semibold">
                DIAGNOSTICS &amp; RESTORATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mt-1">
                COMMON RIM DAMAGES WE FIX
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md">
              Potholes, tight curbs, and road debris happen. Our technicians evaluate safety and structural integrity before every restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Damage 1 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-circle-notch"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">CURB RASH &amp; GOUGES</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Deep scrapes and edge abrasions along the outer lip are filled, reshaped, and blended invisibly.
              </p>
            </div>

            {/* Damage 2 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-compass-drafting"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">BENT &amp; WARPED BARRELS</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Precision hydraulic straightening corrects pothole bends that cause highway vibration or slow air leaks.
              </p>
            </div>

            {/* Damage 3 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-droplet-slash"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">CORROSION &amp; PEELING</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Oxidation, brake-dust pitting, and flaking clear coat are stripped back and sealed with fresh protective finishes.
              </p>
            </div>

            {/* Damage 4 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">CRACK &amp; SAFETY CHECKS</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Thorough structural inspection for hairline barrel cracks and bead-seat integrity to keep your vehicle road-safe.
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
            Save up to 70% compared to buying brand-new factory replacement wheels—with fast turnaround and OEM-quality finish matching.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Service Details */}
            <div className="lg:col-span-7 space-y-10">
              {/* Block 1 */}
              <div data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-4">
                  WHAT WE CAN HELP WITH
                </h2>
                <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Single-wheel spot repair or full 4-wheel complete restoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Precision inner and outer rim straightening &amp; runout testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Curb rash reshaping, alloy welding prep, and smooth priming</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>OEM paint color matching, gloss/satin clear coats, and full color changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Tire remounting, bead sealing, and road-force wheel balancing</span>
                  </li>
                </ul>
              </div>

              {/* Block 2 */}
              <div data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-3">
                  PLAN YOUR VISIT
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Clear photos of the damaged wheel—including a wide shot of the full rim and a close-up of the scuff or bend—allow us to give you an accurate preliminary quote. Severe structural cracks or spoke fractures require an in-person safety evaluation.
                </p>
              </div>

              {/* Block 3 */}
              <div data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-3">
                  START WITH YOUR VEHICLE
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  Share your vehicle&apos;s year, make, and model, how many wheels need attention, and whether you want to match your factory finish or upgrade to a new custom color. Our team in Springfield, VA will walk you through options and scheduling.
                </p>
                <p className="text-gray-400 text-sm">
                  Request an estimate online or call{' '}
                  <a href="tel:7039621179" className="text-white font-semibold hover:text-brandRed transition">
                    (703) 962-1179
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Right Column: Image + Sticky CTA Box */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28" data-aos="fade-left">
              <div className="rounded-sm overflow-hidden border border-brandBorder group">
                <img
                  src={SITE_IMAGES.customWheels}
                  alt="Restored Performance Alloy Wheel"
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Action Card */}
              <div id="estimate" className="bg-brandCard border border-brandBorder p-6 sm:p-8 rounded-sm shadow-xl">
                <h3 className="text-2xl font-bold text-white tracking-wide mb-2">
                  LET&apos;S PLAN YOUR NEXT STEP
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Send us your vehicle info and photos of the damaged rim(s). We will assess the repair scope and provide a clear estimate.
                </p>

                <div className="space-y-3">
                  <a
                    href="#contact"
                    onClick={(e) => scrollTo(e, '#contact')}
                    className="btn-shine block w-full bg-brandRed hover:bg-red-700 text-center text-white font-oswald font-semibold tracking-wider py-3.5 text-sm transition"
                  >
                    REQUEST AN ESTIMATE
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

      {/* ================= RECENT RESTORATION WORK ================= */}
      <section id="gallery" className="py-16 bg-brandDark border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4" data-aos="fade-up">
            <div>
              <span className="text-brandRed font-oswald text-xs tracking-widest font-semibold">RESULTS</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mt-1">
                RECENT RIM RESTORATIONS
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
                src={SITE_IMAGES.rimRefinishing}
                alt="Curb Rash Restoration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">CURB RASH REPAIR</span>
                <h3 className="text-lg font-bold text-white">GLOSS BLACK LIP RESTORATION</h3>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div
              className="relative overflow-hidden rounded-sm border border-brandBorder group h-72"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src={SITE_IMAGES.customWheels}
                alt="OEM Alloy Refinishing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">FULL REFINISHING</span>
                <h3 className="text-lg font-bold text-white">SATIN PERFORMANCE WHEEL SET</h3>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div
              className="relative overflow-hidden rounded-sm border border-brandBorder group h-72"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img
                src={SITE_IMAGES.caliperPainting}
                alt="Rim Straightening and Balance"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">STRAIGHTEN + PAINT</span>
                <h3 className="text-lg font-bold text-white">COMPLETE WHEEL &amp; BRAKE OVERHAUL</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= YOUR VISIT, STEP BY STEP ================= */}
      <section className="py-14 bg-[#0D0D0D] border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-8" data-aos="fade-up">
            YOUR VISIT, STEP BY STEP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 01 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/50 p-6 sm:p-8 rounded-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="font-oswald text-3xl font-bold text-brandRed block mb-3">01</span>
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">SEND DAMAGE PHOTOS</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Share your vehicle details and clear photos of the scuffs, bends, or finish wear.
              </p>
            </div>

            {/* Step 02 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/50 p-6 sm:p-8 rounded-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="font-oswald text-3xl font-bold text-brandRed block mb-3">02</span>
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">REVIEW REPAIR SCOPE</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Confirm straightening or refinishing requirements, turnaround time, and pricing.
              </p>
            </div>

            {/* Step 03 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/50 p-6 sm:p-8 rounded-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="font-oswald text-3xl font-bold text-brandRed block mb-3">03</span>
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">DROP OFF &amp; DRIVE SMOOTH</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Bring your vehicle in (or arrange a rental) and drive away on balanced, like-new rims.
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
                    Explore all the automotive styling, repair, and protection services we offer.
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
                <i className="fa-solid fa-file-signature text-white text-3xl mt-1"></i>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">REQUEST FOR ESTIMATE</h3>
                  <p className="text-white/90 text-xs mt-1 leading-relaxed">
                    Fill out our quick form with your wheel details and get a custom repair quote.
                  </p>
                </div>
              </div>
              <a
                href="#estimate"
                onClick={(e) => scrollTo(e, '#estimate')}
                className="btn-shine block w-full bg-white hover:bg-gray-100 text-center text-brandRed font-oswald font-bold tracking-wider py-2.5 text-xs transition"
              >
                REQUEST ESTIMATE
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
                  <h3 className="text-lg font-bold text-white tracking-wide">CALL NOW</h3>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Speak with our team for fast answers and same-week appointment availability.
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
