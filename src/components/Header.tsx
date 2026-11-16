import React, { useEffect, useRef, useState } from 'react';
import { PageId, SERVICE_PAGES } from '../types';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId, hash?: string) => void;
  servicesMenuOpenSignal: number;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  servicesMenuOpenSignal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (servicesMenuOpenSignal > 0) {
      setServicesDropdownOpen(true);
      if (window.innerWidth < 1024) {
        setMobileMenuOpen(true);
      }
    }
  }, [servicesMenuOpenSignal]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectPage = (page: PageId, hash?: string) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(page, hash);
  };

  const handleHashScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-black/95 backdrop-blur-md border-b border-brandBorder sticky top-0 z-50 transition-all duration-300">
      {/* Top Info Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleSelectPage('wheels-and-custom-painting');
          }}
          className="flex items-center gap-2 group"
        >
          <div className="text-2xl md:text-3xl font-oswald font-bold tracking-wider italic transition-transform duration-300 group-hover:scale-105">
            <span className="text-white">CALIPERS</span>
            <span className="text-brandRed text-3xl md:text-4xl">R</span>
            <span className="text-white">US</span>
          </div>
        </a>

        {/* Mobile Call & Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:7039621179"
            className="bg-brandRed text-white px-3 py-1.5 text-xs font-oswald tracking-wider rounded-sm"
          >
            <i className="fa-solid fa-phone mr-1"></i> CALL
          </a>
          <button
            id="mobile-menu-btn"
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-white p-2 border border-brandBorder rounded-sm focus:outline-none"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>

        {/* Desktop Top Badges & CTA */}
        <div className="hidden lg:flex items-center gap-8 text-xs">
          <a
            href="/financing"
            onClick={(e) => {
              e.preventDefault();
              handleSelectPage('financing');
            }}
            className="flex items-center gap-2.5 hover:text-brandRed transition"
          >
            <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white">
              <i className="fa-solid fa-check"></i>
            </div>
            <div>
              <p className="font-bold uppercase tracking-wider text-white">Financing</p>
              <p className="text-gray-400">Available</p>
            </div>
          </a>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white">
              <i className="fa-solid fa-car"></i>
            </div>
            <div>
              <p className="font-bold uppercase tracking-wider text-white">Rental Vehicles</p>
              <p className="text-gray-400">Available</p>
            </div>
          </div>

          <a
            href="tel:7039621179"
            className="flex items-center gap-2.5 hover:text-brandRed transition"
          >
            <i className="fa-solid fa-phone text-brandRed text-lg animate-pulse"></i>
            <span className="font-bold text-sm tracking-wide">(703) 962-1179</span>
          </a>

          <a
            href="#estimate"
            onClick={(e) => handleHashScroll(e, '#estimate')}
            className="btn-shine bg-brandRed hover:bg-red-700 text-white font-oswald font-semibold tracking-wider px-5 py-2.5 text-sm transition"
          >
            GET A QUOTE <i className="fa-solid fa-chevron-right text-xs ml-1"></i>
          </a>
        </div>
      </div>

      {/* Main Nav Links (Responsive Desktop + Collapsible Mobile) */}
      <nav
        id="main-nav"
        className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block border-t border-brandBorder bg-[#0D0D0D]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-end gap-4 lg:gap-8 py-4 lg:py-3 text-xs font-oswald tracking-widest text-gray-300">
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectPage('wheels-and-custom-painting');
                }}
                className="block hover:text-white transition"
              >
                HOME
              </a>
            </li>

            <li
              ref={dropdownRef}
              className="relative group"
              onMouseEnter={() => {
                if (window.innerWidth >= 1024) setServicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024) setServicesDropdownOpen(false);
              }}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                className={`flex items-center tracking-widest uppercase cursor-pointer focus:outline-none transition ${
                  activePage !== 'financing'
                    ? 'text-brandRed font-semibold'
                    : 'hover:text-white'
                }`}
              >
                SERVICES <i className="fa-solid fa-caret-down ml-1"></i>
              </button>

              <div
                className={`${
                  servicesDropdownOpen ? 'block' : 'hidden'
                } lg:absolute lg:right-0 lg:top-full lg:pt-2 z-50 lg:min-w-[290px]`}
              >
                <ul className="mt-2 lg:mt-0 bg-[#141414] border border-brandBorder rounded-sm shadow-2xl py-2 divide-y divide-brandBorder/60">
                  {SERVICE_PAGES.map((page) => {
                    const isActive = activePage === page.id;
                    return (
                      <li key={page.id}>
                        <a
                          href={page.path}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSelectPage(page.id);
                          }}
                          className={`block px-4 py-2.5 text-xs tracking-wider transition ${
                            isActive
                              ? 'text-brandRed bg-black/60 font-semibold'
                              : 'text-gray-300 hover:text-white hover:bg-black/40'
                          }`}
                        >
                          {page.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            <li>
              <a
                href="#gallery"
                onClick={(e) => handleHashScroll(e, '#gallery')}
                className="block hover:text-white transition"
              >
                GALLERY
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={(e) => handleHashScroll(e, '#gallery')}
                className="block hover:text-white transition"
              >
                CLIENT PICKUP MOMENTS
              </a>
            </li>
            <li>
              <a
                href="/financing"
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectPage('financing');
                }}
                className={`block transition ${
                  activePage === 'financing'
                    ? 'text-brandRed font-semibold'
                    : 'hover:text-white'
                }`}
              >
                FINANCING
              </a>
            </li>
            <li>
              <a
                href="#estimate"
                onClick={(e) => handleHashScroll(e, '#estimate')}
                className="block hover:text-white transition"
              >
                RENTALS
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleHashScroll(e, '#contact')}
                className="block hover:text-white transition"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
