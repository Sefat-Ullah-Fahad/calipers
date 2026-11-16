export type PageId =
  | 'wheels-and-custom-painting'
  | 'rim-repair'
  | 'brake-suspension-pdr'
  | 'paintless-dent-repair'
  | 'dealership-services'
  | 'financing';

export interface ServicePageInfo {
  id: PageId;
  path: string;
  label: string;
  shortLabel: string;
  title: string;
}

export const SERVICE_PAGES: ServicePageInfo[] = [
  {
    id: 'wheels-and-custom-painting',
    path: '/wheels-and-custom-painting',
    label: 'Wheels & Custom Painting',
    shortLabel: 'Wheels & Custom Painting',
    title: 'Wheels & Custom Painting | Calipers R Us',
  },
  {
    id: 'rim-repair',
    path: '/rim-repair',
    label: 'Rim Repair & Refinishing',
    shortLabel: 'Rim Repair & Refinishing',
    title: 'Rim Repair & Refinishing | Calipers R Us',
  },
  {
    id: 'brake-suspension-pdr',
    path: '/brake-suspension-pdr',
    label: 'Brakes, Rotors, Suspension & PDR',
    shortLabel: 'Brakes, Rotors, Suspension & PDR',
    title: 'Brake, Rotor, Suspension & Paintless Dent Repair | Calipers R Us',
  },
  {
    id: 'paintless-dent-repair',
    path: '/paintless-dent-repair',
    label: 'Paintless Dent Repair (PDR)',
    shortLabel: 'Paintless Dent Repair',
    title: 'Paintless Dent Repair (PDR) | Calipers R Us',
  },
  {
    id: 'dealership-services',
    path: '/dealership-services',
    label: 'Dealership Services',
    shortLabel: 'Dealership Services',
    title: 'Dealership Services & B2B Programs | Calipers R Us',
  },
];

export const ALL_PAGES: ServicePageInfo[] = [
  ...SERVICE_PAGES,
  {
    id: 'financing',
    path: '/financing',
    label: 'Financing',
    shortLabel: 'Financing',
    title: 'Flexible Service Financing | Calipers R Us',
  },
];

export const SITE_IMAGES = {
  customWheels:
    'https://calipers.sumanpatwary.com/wp-content/uploads/cru-generated/2026-10-13/cru-service-custom-wheels-v1.webp',
  rimRefinishing:
    'https://calipers.sumanpatwary.com/wp-content/uploads/cru-generated/2026-10-13/cru-service-rim-refinishing-v1.webp',
  caliperPainting:
    'https://calipers.sumanpatwary.com/wp-content/uploads/cru-generated/2026-10-13/cru-service-caliper-painting-v1.webp',
  ceramicBlackBmw:
    'https://calipers.sumanpatwary.com/wp-content/uploads/cru-generated/2026-10-13/cru-ceramic-hero-black-bmw-v2.webp',
  rentalVehicle:
    'https://calipers.sumanpatwary.com/wp-content/uploads/cru-generated/2026-10-13/cru-service-rental-v1.webp',
  starlightHeadliner:
    'https://calipers.sumanpatwary.com/wp-content/uploads/cru-generated/2026-10-13/cru-service-starlight-headliner-v1.webp',
} as const;
