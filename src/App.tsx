/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useAosReveal } from './hooks/useAosReveal';
import { BrakeSuspensionPdrPage } from './pages/BrakeSuspensionPdrPage';
import { DealershipServicesPage } from './pages/DealershipServicesPage';
import { FinancingPage } from './pages/FinancingPage';
import { PaintlessDentRepairPage } from './pages/PaintlessDentRepairPage';
import { RimRepairPage } from './pages/RimRepairPage';
import { WheelsAndCustomPaintingPage } from './pages/WheelsAndCustomPaintingPage';
import { ALL_PAGES, PageId } from './types';

function resolvePageFromPath(pathname: string): PageId {
  const normalized = pathname.replace(/\.html$/i, '').replace(/\/+$/, '') || '/';
  const matched = ALL_PAGES.find((page) => page.path === normalized);
  return matched ? matched.id : 'wheels-and-custom-painting';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(() =>
    resolvePageFromPath(window.location.pathname)
  );
  const [servicesMenuOpenSignal, setServicesMenuOpenSignal] = useState(0);

  useAosReveal(activePage);

  useEffect(() => {
    const pageMeta = ALL_PAGES.find((p) => p.id === activePage);
    if (pageMeta) {
      document.title = pageMeta.title;
    }
  }, [activePage]);

  useEffect(() => {
    const handlePopState = () => {
      setActivePage(resolvePageFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback((page: PageId, hash?: string) => {
    const targetMeta = ALL_PAGES.find((p) => p.id === page);
    const nextPath = targetMeta ? targetMeta.path : '/';
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath + (hash || ''));
    }
    setActivePage(page);

    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  const handleOpenServicesMenu = useCallback(() => {
    setServicesMenuOpenSignal((prev) => prev + 1);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white">
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        servicesMenuOpenSignal={servicesMenuOpenSignal}
      />

      <main className="flex-1">
        {activePage === 'wheels-and-custom-painting' && (
          <WheelsAndCustomPaintingPage
            onNavigate={handleNavigate}
            onOpenServicesMenu={handleOpenServicesMenu}
          />
        )}
        {activePage === 'rim-repair' && (
          <RimRepairPage
            onNavigate={handleNavigate}
            onOpenServicesMenu={handleOpenServicesMenu}
          />
        )}
        {activePage === 'brake-suspension-pdr' && (
          <BrakeSuspensionPdrPage
            onNavigate={handleNavigate}
            onOpenServicesMenu={handleOpenServicesMenu}
          />
        )}
        {activePage === 'paintless-dent-repair' && (
          <PaintlessDentRepairPage
            onNavigate={handleNavigate}
            onOpenServicesMenu={handleOpenServicesMenu}
          />
        )}
        {activePage === 'dealership-services' && (
          <DealershipServicesPage
            onNavigate={handleNavigate}
            onOpenServicesMenu={handleOpenServicesMenu}
          />
        )}
        {activePage === 'financing' && (
          <FinancingPage
            onNavigate={handleNavigate}
            onOpenServicesMenu={handleOpenServicesMenu}
          />
        )}
      </main>

      <Footer
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenServicesMenu={handleOpenServicesMenu}
      />
    </div>
  );
}
