import React from 'react';
import { PageId, SITE_IMAGES } from '../types';

interface PageProps {
  onNavigate: (page: PageId, hash?: string) => void;
  onOpenServicesMenu: () => void;
}

export const FinancingPage: React.FC<PageProps> = ({
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
                <span className="text-gray-300">Financing</span>
              </nav>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
                FLEXIBLE SERVICE FINANCING
              </h1>

              <p className="font-oswald text-xl sm:text-2xl text-brandRed font-semibold tracking-wide">
                UPGRADE TODAY. PAY OVER TIME.
              </p>

              <p className="text-gray-300 text-sm sm:text-base max-w-lg leading-relaxed">
                Don&apos;t put off essential repairs or custom styling upgrades. Take advantage of convenient, straightforward financing options for custom wheel painting, rim restoration, brake &amp; suspension work, and dent repair.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#estimate"
                  onClick={(e) => scrollTo(e, '#estimate')}
                  className="btn-shine bg-brandRed hover:bg-red-700 text-center text-white font-oswald font-semibold tracking-wider px-6 py-3.5 text-sm transition transform hover:-translate-y-0.5 shadow-lg shadow-brandRed/20"
                >
                  EXPLORE FINANCING OPTIONS
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
                  src={SITE_IMAGES.ceramicBlackBmw}
                  alt="Custom Styled Vehicle Eligible for Flexible Financing"
                  className="w-full h-[280px] sm:h-[380px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border-l-2 border-brandRed px-3 py-1.5 text-xs font-oswald tracking-wider text-gray-200">
                  FLEXIBLE PAYMENT PLANS • FAST APPROVAL PROCESS
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
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">FAST APPLICATION</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Quick, hassle-free review with straightforward payment options.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-8" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">ALL SERVICES ELIGIBLE</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Apply financing to caliper painting, wheels, rim repair, brakes, and PDR.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-8" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-brandRed font-bold text-base tracking-wider mb-1">TRANSPARENT TERMS</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Clear monthly payment breakdowns with zero hidden surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINANCING BENEFITS (4 CARDS) ================= */}
      <section className="py-16 bg-brandDark border-b border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4" data-aos="fade-up">
            <div>
              <span className="text-brandRed font-oswald text-xs tracking-widest font-semibold">PAYMENT OPTIONS</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mt-1">
                FINANCING BUILT AROUND YOUR BUILD
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md">
              Whether you are handling urgent brake and wheel repairs or completing a full custom styling package, split your total into manageable payments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">QUICK &amp; EASY APPROVAL</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Simple application steps designed to provide fast decisions so your vehicle gets into the shop without delay.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">BUNDLE MULTIPLE SERVICES</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Combine custom caliper painting, wheel refinishing, brake rotors, and dent removal under one convenient payment plan.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">FLEXIBLE MONTHLY PLANS</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Choose repayment timelines structured to keep monthly payments predictable and aligned with your budget.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/60 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1.5 group"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-11 h-11 rounded-sm bg-brandRed/10 border border-brandRed/30 flex items-center justify-center text-brandRed text-lg mb-5 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-2">CLEAR UPFRONT TERMS</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Review your itemized shop estimate and exact payment schedule upfront before committing to any work.
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
            Available for custom automotive styling packages as well as unexpected rim, brake, suspension, and dent repairs.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Service Details */}
            <div className="lg:col-span-7 space-y-10">
              {/* Block 1 */}
              <div data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-4">
                  WHAT CAN BE FINANCED
                </h2>
                <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Custom brake caliper painting and full wheel color changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Curb rash restoration, bent rim straightening, and alloy refinishing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Performance brake pads, drilled/slotted rotors, and suspension service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Paintless Dent Repair (PDR), ceramic coating, and Paint Protection Film (PPF)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brandRed mt-1.5 text-xs">
                      <i className="fa-solid fa-square"></i>
                    </span>
                    <span>Complete multi-service transformation packages in a single visit</span>
                  </li>
                </ul>
              </div>

              {/* Block 2 */}
              <div data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-3">
                  HOW FINANCING WORKS WITH YOUR ESTIMATE
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  First, our specialists review your vehicle and prepare a transparent, itemized estimate covering all requested services. Once you confirm the project scope, we walk you through available financing options so you can select a payment plan that fits your schedule and budget.
                </p>
              </div>

              {/* Block 3 */}
              <div data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-3">
                  START WITH YOUR VEHICLE
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  Share your vehicle&apos;s year, make, and model along with the services you&apos;d like to include. Our Springfield, VA team will put together your quote and guide you through the financing options available for your visit.
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
                  src={SITE_IMAGES.rentalVehicle}
                  alt="Financing Available for Auto Styling and Repairs"
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Action Card */}
              <div id="estimate" className="bg-brandCard border border-brandBorder p-6 sm:p-8 rounded-sm shadow-xl">
                <h3 className="text-2xl font-bold text-white tracking-wide mb-2">
                  LET&apos;S PLAN YOUR PAYMENT
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Tell us which services you need and ask about our flexible financing options. We will prepare your quote and walk you through the next steps.
                </p>

                <div className="space-y-3">
                  <a
                    href="#contact"
                    onClick={(e) => scrollTo(e, '#contact')}
                    className="btn-shine block w-full bg-brandRed hover:bg-red-700 text-center text-white font-oswald font-semibold tracking-wider py-3.5 text-sm transition"
                  >
                    REQUEST FINANCING INFO
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

      {/* ================= POPULAR FINANCED PACKAGES ================= */}
      <section id="gallery" className="py-16 bg-brandDark border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4" data-aos="fade-up">
            <div>
              <span className="text-brandRed font-oswald text-xs tracking-widest font-semibold">ELIGIBLE UPGRADES</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mt-1">
                POPULAR FINANCED PACKAGES
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
                src={SITE_IMAGES.caliperPainting}
                alt="Custom Caliper and Rotor Package"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">BRAKES + CALIPERS</span>
                <h3 className="text-lg font-bold text-white">CUSTOM CALIPER &amp; ROTOR PACKAGE</h3>
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
                alt="Custom Wheel Painting Build"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">WHEELS + FINISH</span>
                <h3 className="text-lg font-bold text-white">GLOSS BLACK WHEEL &amp; ACCENT BUILD</h3>
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
                alt="Rim Restoration and Refinishing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brandRed font-oswald text-xs tracking-wider">REPAIR + RESTORE</span>
                <h3 className="text-lg font-bold text-white">4-WHEEL RESTORATION &amp; STRAIGHTENING</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= YOUR VISIT, STEP BY STEP ================= */}
      <section className="py-14 bg-[#0D0D0D] border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-8" data-aos="fade-up">
            FINANCING, STEP BY STEP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 01 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/50 p-6 sm:p-8 rounded-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="font-oswald text-3xl font-bold text-brandRed block mb-3">01</span>
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">REQUEST YOUR ESTIMATE</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Share your vehicle details and the styling or repair services you want so we can prepare a transparent total.
              </p>
            </div>

            {/* Step 02 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/50 p-6 sm:p-8 rounded-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="font-oswald text-3xl font-bold text-brandRed block mb-3">02</span>
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">CHOOSE YOUR PAYMENT PLAN</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Review available financing terms with our team and select the monthly schedule that fits your budget.
              </p>
            </div>

            {/* Step 03 */}
            <div
              className="bg-brandCard border border-brandBorder hover:border-brandRed/50 p-6 sm:p-8 rounded-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="font-oswald text-3xl font-bold text-brandRed block mb-3">03</span>
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">BOOK &amp; DRIVE TODAY</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Confirm your appointment (with rental vehicles available) and enjoy your finished vehicle right away.
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
                    Explore all automotive styling, repair, and protection services eligible for financing.
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
                    Send your vehicle details and ask our team about financing options for your project.
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
                    Speak directly with our Springfield team about financing and appointment availability.
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
