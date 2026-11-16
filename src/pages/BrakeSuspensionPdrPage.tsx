import React from 'react';
import { PageId, SITE_IMAGES } from '../types';

interface PageProps {
  onNavigate: (page: PageId, hash?: string) => void;
  onOpenServicesMenu: () => void;
}

export const BrakeSuspensionPdrPage: React.FC<PageProps> = ({
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

              <h1 className="text-3xl sm:text-5xl md:text-[54px] font-bold tracking-tight text-white leading-[1.08]">
                BRAKES, ROTORS, SUSPENSION &amp; DENT REPAIR
              </h1>

              <p className="font-oswald text-lg sm:text-2xl text-brandRed font-semibold tracking-wide">
                STOPPING POWER. RIDE PRECISION. FLAWLESS BODYWORK.
              </p>

              <p className="text-gray-300 text-sm sm:text-base max-w-lg leading-relaxed">
                From high-performance brake and rotor replacements to precision suspension tuning and Paintless Dent Repair (PDR), we keep your vehicle safe, balanced, and looking factory-fresh.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#estimate"
                  onClick={(e) => scrollTo(e, '#estimate')}
                  className="btn-shine bg-brandRed hover:bg-red-700 text-center text-white font-oswald font-semibold tracking-wider px-6 py-3.5 text-sm transition transform hover:-translate-y-0.5 shadow-lg shadow-brandRed/20"
                >
                  REQUEST AN ESTIMATE
                </a>
                <a
                  href="tel:7039621179"
                  className="border border-white/30 hover:border-white hover:bg-white/5 text-center text-white font-oswald font-semibold tracking-wider px-6 py-3.5 text-sm transition transform hover:-translate-y-0.5"
                >
                  CALL OUR TEAM
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6" data-aos="fade-left" data-aos-duration="900">
              <div className="relative rounded-sm overflow-hidden border border-brandBorder shadow-2xl group">
                <img
                  src={SITE_IMAGES.caliperPainting}
                  alt="Performance Brake Rotor and Suspension Mechanical Service"
                  className="w-full h-[280px] sm:h-[380px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border-l-2 border-brandRed px-3 py-1.5 text-xs font-oswald tracking-wider text-gray-200">
                  OEM &amp; PERFORMANCE BRAKE, SUSPENSION &amp; PDR SPECIALISTS
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
            <div className="pt-4 md:pt-0 md:px-4 first:pt-0 first:pl-0" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">BRAKE &amp; ROTOR PRECISION</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                OEM &amp; drilled/slotted rotors, ceramic pads, and fluid flushes.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-8" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">SUSPENSION &amp; HANDLING</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Shocks, struts, control arms, and lowering spring installations.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-8" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">PAINTLESS DENT REPAIR</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Remove door dings and hail dents while preserving factory paint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICE BREAKDOWN (4 CARDS) ================= */}
      <section className="py-16 bg-brandDark border-b border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4" data-aos="fade-up">
            <div>
              <span className="text-brandRed font-oswald text-xs tracking-widest font-semibold">
                MECHANICAL &amp; BODY CARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mt-1">
                COMPLETE UNDERCARRIAGE &amp; EXTERIOR SOLUTIONS
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md">
              Combine routine mechanical replacements with aesthetic upgrades—such as pairing new rotors with custom painted calipers in one visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Brake & Rotor Service */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-compact-disc"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">BRAKE &amp; ROTOR SERVICE</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Eliminate squeaking, brake pedal pulsation, and stopping fade with precision OEM or performance rotor and pad replacements.
              </p>
            </div>

            {/* Card 2: Suspension Repair & Upgrades */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-gears"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">SUSPENSION SERVICE</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Worn struts, shocks, ball joints, and bushings replaced to restore smooth ride comfort, tire wear life, and cornering stability.
              </p>
            </div>

            {/* Card 3: Paintless Dent Repair (PDR) */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-hammer"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">PAINTLESS DENT REPAIR</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Specialized PDR rods and precision lighting massage out parking lot dings, creases, and hail dents with zero body filler or repainting.
              </p>
            </div>

            {/* Card 4: Performance Stance & Caliper Pairing */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-gauge-high"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">COILOVERS &amp; STANCE</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Upgrade your vehicle&apos;s handling and wheel-arch gap with lowering springs, coilover kits, and custom caliper painting.
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
            Whether your vehicle needs essential brake and suspension maintenance or seamless dent removal, our technicians deliver dealership-level precision without the hassle.
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
                    <span>Front &amp; rear brake pad and rotor replacement (OEM, drilled &amp; slotted)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Brake caliper servicing, hardware lubrication, and system bleeding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Shock absorbers, struts, control arms, sway bar links, and suspension upgrades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Paintless Dent Repair (PDR) for door dings, minor creases, and hail damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Multi-point brake, suspension, and exterior panel condition inspection</span>
                  </li>
                </ul>
              </div>

              {/* Block 2 */}
              <div data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-3">
                  PLAN YOUR VISIT
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  For Paintless Dent Repair, sending angled photos showing the reflection across the dent helps us confirm if the original paint is intact for PDR. For brake and suspension concerns, let us know any noises, vibrations, or warning lights you have noticed.
                </p>
              </div>

              {/* Block 3 */}
              <div data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-3">
                  START WITH YOUR VEHICLE
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  Share your vehicle&apos;s year, make, model, and trim (or VIN for exact brake/suspension part matching), along with the services you need. Our team in Springfield, VA will prepare an itemized parts-and-labor estimate and coordinate your appointment.
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
                  alt="Brake Rotor and Caliper Assembly Close-up"
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Action Card */}
              <div id="estimate" className="bg-brandCard border border-brandBorder p-6 sm:p-8 rounded-sm shadow-xl">
                <h3 className="text-2xl font-bold text-white tracking-wide mb-2">
                  LET&apos;S PLAN YOUR NEXT STEP
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Share your vehicle details, brake/suspension symptoms, or dent photos. We will review everything and provide a clear estimate.
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

      {/* ================= RECENT SERVICE & RESTORATION SHOWCASE ================= */}
      <section id="gallery" className="py-16 bg-brandDark border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4" data-aos="fade-up">
            <div>
              <span className="text-brandRed font-oswald text-xs tracking-widest font-semibold">IN THE SHOP</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mt-1">
                PRECISION WORKMANSHIP
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
            {/* Item 1 */}
            <div
              className="relative overflow-hidden rounded-sm border border-brandBorder group h-72"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img
                src={SITE_IMAGES.caliperPainting}
                alt="Drilled Brake Rotors and Calipers"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">BRAKES &amp; ROTORS</span>
                <h3 className="text-lg font-bold text-white">PERFORMANCE ROTOR &amp; PAD UPGRADE</h3>
              </div>
            </div>

            {/* Item 2 */}
            <div
              className="relative overflow-hidden rounded-sm border border-brandBorder group h-72"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src={SITE_IMAGES.rimRefinishing}
                alt="Suspension Stance & Alignment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">SUSPENSION TUNING</span>
                <h3 className="text-lg font-bold text-white">STRUT, COILOVER &amp; CHASSIS CARE</h3>
              </div>
            </div>

            {/* Item 3 */}
            <div
              className="relative overflow-hidden rounded-sm border border-brandBorder group h-72"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img
                src={SITE_IMAGES.ceramicBlackBmw}
                alt="Paintless Dent Repair Flawless Panel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">PAINTLESS DENT REPAIR</span>
                <h3 className="text-lg font-bold text-white">ORIGINAL FACTORY PAINT PRESERVED</h3>
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
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">SHARE VEHICLE &amp; ISSUE DETAILS</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Send your vehicle info, brake/suspension symptoms, or clear photos of any dents you want removed.
              </p>
            </div>

            {/* Step 02 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/50 p-6 sm:p-8 rounded-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="font-oswald text-3xl font-bold text-brandRed block mb-3">02</span>
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">REVIEW PARTS &amp; ESTIMATE</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Approve OEM or performance part options, PDR scope, turnaround time, and transparent pricing.
              </p>
            </div>

            {/* Step 03 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/50 p-6 sm:p-8 rounded-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="font-oswald text-3xl font-bold text-brandRed block mb-3">03</span>
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">BOOK &amp; DRIVE WITH CONFIDENCE</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Schedule your drop-off (with rental options available) and pick up your vehicle ready for the road.
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
                    Explore all mechanical, styling, and protective services we offer for your vehicle.
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
                    Fill out our quick form with your vehicle details and we&apos;ll get back to you with a quote.
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
                    Speak directly with our Springfield team for fast answers and appointment availability.
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
