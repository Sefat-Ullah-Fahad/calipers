import React from 'react';
import { PageId, SITE_IMAGES } from '../types';

interface PageProps {
  onNavigate: (page: PageId, hash?: string) => void;
  onOpenServicesMenu: () => void;
}

export const WheelsAndCustomPaintingPage: React.FC<PageProps> = ({
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
        {/* Subtle Radial Glow */}
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
                WHEELS &amp; CUSTOM PAINTING
              </h1>

              <p className="font-oswald text-xl sm:text-2xl text-brandRed font-semibold tracking-wide">
                CUSTOM COLOR. DISTINCTIVE WHEELS.
              </p>

              <p className="text-gray-300 text-sm sm:text-base max-w-lg leading-relaxed">
                Elevate your vehicle’s road presence with factory-grade custom wheel painting, durable heat-resistant clear coats, and bespoke color matching engineered to last.
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
                  src={SITE_IMAGES.customWheels}
                  alt="Custom Painted Black Wheel with Red Brake Caliper"
                  className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border-l-2 border-brandRed px-3 py-1.5 text-xs font-oswald tracking-wider text-gray-200">
                  GLOSS BLACK FINISH + RED CALIPER ACCENT
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
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">BESPOKE COLOR OPTIONS</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                OEM paint codes, metallic flakes, satin black, or custom shades.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-8" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">PREPARED SURFACES</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Multi-stage sanding, priming, and curing for rock-solid durability.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-8" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">A COMPLETE LOOK</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Pair custom wheels with caliper painting and blackout trim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW SECTION: POPULAR WHEEL FINISHES ================= */}
      <section className="py-16 bg-brandDark border-b border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4" data-aos="fade-up">
            <div>
              <span className="text-brandRed font-oswald text-xs tracking-widest font-semibold">FINISH OPTIONS</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mt-1">
                SIGNATURE WHEEL FINISHES
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md">
              Every wheel set is sprayed in a controlled booth environment using high-build primers and UV-resistant automotive clear coats.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Finish 1 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-black via-zinc-800 to-zinc-500 border border-white/20 mb-5 shadow-inner group-hover:scale-110 transition-transform"></div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">PIANO GLOSS BLACK</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Deep, mirror-like black finish that creates high contrast against brightly painted brake calipers.
              </p>
            </div>

            {/* Finish 2 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-zinc-900 via-zinc-700 to-zinc-600 border border-white/20 mb-5 group-hover:scale-110 transition-transform"></div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">SATIN &amp; MATTE STEALTH</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Smooth, low-sheen modern finish that highlights sharp spoke geometry and hides light brake dust.
              </p>
            </div>

            {/* Finish 3 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-900 via-yellow-700 to-amber-400 border border-white/20 mb-5 group-hover:scale-110 transition-transform"></div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">SATIN BRONZE &amp; GOLD</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Motorsport-inspired metallic bronze and champagne gold tones tailored for performance &amp; luxury builds.
              </p>
            </div>

            {/* Finish 4 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-slate-800 via-slate-500 to-gray-300 border border-white/20 mb-5 group-hover:scale-110 transition-transform"></div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">GUNMETAL &amp; OEM MATCH</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Factory-matched anthracite, hyper silver, or custom two-tone accents matched directly to your body paint.
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
            Build a wheel finish that works seamlessly with your paint, exterior trim, and brake caliper color.
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
                    <span>Full-face and inner-barrel custom rim painting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Gloss, satin, matte, and tinted clear coat consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Thorough wheel surface preparation &amp; minor rash smoothing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Center cap color-matching and lug hardware styling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Finish condition and pre-installation fitment review</span>
                  </li>
                </ul>
              </div>

              {/* Block 2 */}
              <div data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-3">
                  PLAN YOUR VISIT
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Cosmetic finish work and structural wheel repairs are different services. Sending clear photos helps our specialists assess the existing surface; heavily bent or cracked wheels may require an in-person inspection first.
                </p>
              </div>

              {/* Block 3 */}
              <div data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-3">
                  START WITH YOUR VEHICLE
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  Share the year, make, and model, wheel diameter, the areas you want us to review, and clear photos where helpful. Our team in Springfield, VA will discuss suitable color options, cure times, and the next step.
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
                  src={SITE_IMAGES.rimRefinishing}
                  alt="Gloss Black Performance Rim Close-up"
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Action Card */}
              <div id="estimate" className="bg-brandCard border border-brandBorder p-6 sm:p-8 rounded-sm shadow-xl">
                <h3 className="text-2xl font-bold text-white tracking-wide mb-2">
                  LET&apos;S PLAN YOUR NEXT STEP
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Share your vehicle details and the wheel finish you have in mind. We will review your setup and discuss the best options with you.
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

      {/* ================= NEW SECTION: RECENT WHEEL TRANSFORMATIONS ================= */}
      <section id="gallery" className="py-16 bg-brandDark border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4" data-aos="fade-up">
            <div>
              <span className="text-brandRed font-oswald text-xs tracking-widest font-semibold">PORTFOLIO</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mt-1">
                RECENT WHEEL TRANSFORMATIONS
              </h2>
            </div>
            <a
              href="#gallery"
              onClick={(e) => scrollTo(e, '#gallery')}
              className="text-xs font-oswald tracking-wider text-gray-300 hover:text-brandRed transition"
            >
              EXPLORE FULL GALLERY <i className="fa-solid fa-arrow-right ml-1"></i>
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
                alt="Satin Black Sports Wheel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">SATIN BLACK</span>
                <h3 className="text-lg font-bold text-white">MULTI-SPOKE PERFORMANCE SET</h3>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div
              className="relative overflow-hidden rounded-sm border border-brandBorder group h-72"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src={SITE_IMAGES.rimRefinishing}
                alt="Gloss Gunmetal Wheel Finish"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">GLOSS ANTHRACITE</span>
                <h3 className="text-lg font-bold text-white">FACTORY ALLOY REFINISHING</h3>
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
                alt="Custom Wheel and Caliper Package"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">WHEEL + CALIPER COMBO</span>
                <h3 className="text-lg font-bold text-white">FULL BRAKE &amp; RIM PACKAGE</h3>
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
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">TELL US YOUR GOALS</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Share your vehicle details, wheel photos, and preferred color or gloss level.
              </p>
            </div>

            {/* Step 02 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/50 p-6 sm:p-8 rounded-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="font-oswald text-3xl font-bold text-brandRed block mb-3">02</span>
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">REVIEW YOUR OPTIONS</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Discuss the scope, surface prep suitability, and transparent estimate with our team.
              </p>
            </div>

            {/* Step 03 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/50 p-6 sm:p-8 rounded-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="font-oswald text-3xl font-bold text-brandRed block mb-3">03</span>
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">PLAN YOUR VISIT</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Confirm drop-off arrangements, rental vehicle availability, and timeline before coming in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE FAQ SECTION ================= */}
      <section id="faq" className="py-14 bg-brandDark border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Intro */}
            <div className="lg:col-span-5" data-aos="fade-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-3">
                HAVE A QUESTION?
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                Pricing, scheduling, and suitability depend on the vehicle, wheel size, and current rim condition. Check common questions here or visit our full FAQ page.
              </p>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="inline-block border border-white/30 hover:border-white hover:bg-white/5 text-white font-oswald font-semibold tracking-wider px-6 py-2.5 text-xs sm:text-sm transition"
              >
                VIEW QUESTIONS &amp; ANSWERS
              </a>
            </div>

            {/* Right Accordion */}
            <div className="lg:col-span-7 space-y-3" data-aos="fade-left"></div>
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
                    Explore all the automotive styling and protection services we offer for your vehicle.
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
                    Fill out our quick form and we&apos;ll get back to you with a custom estimate.
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
                    Speak with our team for fast answers and appointment scheduling.
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
