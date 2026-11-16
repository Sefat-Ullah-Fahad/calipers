import React from 'react';
import { PageId } from '../types';

interface FooterProps {
  activePage: PageId;
  onNavigate: (page: PageId, hash?: string) => void;
  onOpenServicesMenu: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  activePage,
  onNavigate,
  onOpenServicesMenu,
}) => {
  const brandDescriptionByPage: Record<PageId, string> = {
    'wheels-and-custom-painting':
      'Your destination for auto body styling, wheel refinishing, and custom upgrades. One stop. Every service. Exceptional results.',
    'rim-repair':
      'Your destination for auto body styling, wheel repair, and custom upgrades. One stop. Every service. Exceptional results.',
    'brake-suspension-pdr':
      'Your destination for brake & suspension care, paintless dent repair, and custom automotive styling. One stop. Every service.',
    'paintless-dent-repair':
      'Your destination for paintless dent repair, automotive styling, and protective finishes. One stop. Every service.',
    'dealership-services':
      'Your destination for auto body styling, dealership upfitting, and custom upgrades. One stop. Every service. Exceptional results.',
    financing:
      'Your destination for auto body styling, flexible service financing, and custom upgrades. One stop. Every service. Exceptional results.',
  };

  const hoursText =
    activePage === 'dealership-services'
      ? 'Please call our team for current shop hours and priority dealer scheduling.'
      : 'Please call our team for current shop hours and appointment availability.';

  const handleHashScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-black border-t border-brandBorder pt-14 pb-8 text-xs text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brandBorder">
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="text-2xl font-oswald font-bold tracking-wider italic">
              <span className="text-white">CALIPERS</span>
              <span className="text-brandRed text-3xl">R</span>
              <span className="text-white">US</span>
            </div>
            <p className="leading-relaxed text-gray-400">{brandDescriptionByPage[activePage]}</p>
            <div className="flex items-center gap-4 text-white text-base pt-2">
              <a href="#contact" onClick={(e) => handleHashScroll(e, '#contact')} className="hover:text-brandRed transition transform hover:scale-110">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#contact" onClick={(e) => handleHashScroll(e, '#contact')} className="hover:text-brandRed transition transform hover:scale-110">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#contact" onClick={(e) => handleHashScroll(e, '#contact')} className="hover:text-brandRed transition transform hover:scale-110">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#contact" onClick={(e) => handleHashScroll(e, '#contact')} className="hover:text-brandRed transition transform hover:scale-110">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold tracking-wider text-sm mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('wheels-and-custom-painting');
                  }}
                  className="hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    onOpenServicesMenu();
                  }}
                  className="hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleHashScroll(e, '#gallery')} className="hover:text-white transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleHashScroll(e, '#gallery')} className="hover:text-white transition">
                  Client Pickup Moments
                </a>
              </li>
              <li>
                <a
                  href="/financing"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('financing');
                  }}
                  className={
                    activePage === 'financing'
                      ? 'text-brandRed font-medium'
                      : 'hover:text-white transition'
                  }
                >
                  Financing
                </a>
              </li>
              <li>
                <a href="#estimate" onClick={(e) => handleHashScroll(e, '#estimate')} className="hover:text-white transition">
                  Rentals
                </a>
              </li>
              {activePage === 'wheels-and-custom-painting' && (
                <li>
                  <a href="#faq" onClick={(e) => handleHashScroll(e, '#faq')} className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
              )}
              <li>
                <a href="#contact" onClick={(e) => handleHashScroll(e, '#contact')} className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-bold tracking-wider text-sm mb-4">OUR SERVICES</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/wheels-and-custom-painting"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('wheels-and-custom-painting');
                  }}
                  className={
                    activePage === 'wheels-and-custom-painting'
                      ? 'text-brandRed font-medium'
                      : 'hover:text-white transition'
                  }
                >
                  Wheels &amp; Custom Painting
                </a>
              </li>
              <li>
                <a
                  href="/rim-repair"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('rim-repair');
                  }}
                  className={
                    activePage === 'rim-repair'
                      ? 'text-brandRed font-medium'
                      : 'hover:text-white transition'
                  }
                >
                  Rim Repair &amp; Refinishing
                </a>
              </li>
              <li>
                <a
                  href="/brake-suspension-pdr"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('brake-suspension-pdr');
                  }}
                  className={
                    activePage === 'brake-suspension-pdr'
                      ? 'text-brandRed font-medium'
                      : 'hover:text-white transition'
                  }
                >
                  Brakes, Rotors, Suspension &amp; PDR
                </a>
              </li>
              <li>
                <a
                  href="/paintless-dent-repair"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('paintless-dent-repair');
                  }}
                  className={
                    activePage === 'paintless-dent-repair'
                      ? 'text-brandRed font-medium'
                      : 'hover:text-white transition'
                  }
                >
                  Paintless Dent Repair (PDR)
                </a>
              </li>
              <li>
                <a
                  href="/dealership-services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('dealership-services');
                  }}
                  className={
                    activePage === 'dealership-services'
                      ? 'text-brandRed font-medium'
                      : 'hover:text-white transition'
                  }
                >
                  Dealership Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-bold tracking-wider text-sm mb-4">CONTACT US</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-location-dot text-brandRed mt-1"></i>
                <span>
                  7542 Angus Ct, Unit K-1
                  <br />
                  Springfield, VA 22153
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-phone text-brandRed"></i>
                <a href="tel:7039621179" className="hover:text-white transition">
                  (703) 962-1179
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-envelope text-brandRed"></i>
                <a href="mailto:info@calipersrus.com" className="hover:text-white transition">
                  info@calipersrus.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-globe text-brandRed"></i>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('wheels-and-custom-painting');
                  }}
                  className="hover:text-white transition"
                >
                  calipersrus.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold tracking-wider text-sm mb-4">HOURS</h4>
            <p className="leading-relaxed">{hoursText}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500">
          <p>&copy; 2026 Calipers R Us. All rights reserved.</p>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onOpenServicesMenu();
            }}
            className="hover:text-white transition"
          >
            All Services
          </a>
        </div>
      </div>
    </footer>
  );
};
