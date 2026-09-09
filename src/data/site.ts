export const site = {
  name: 'Sparkle & Shine Commercial / Residential Cleaning LLC',
  shortName: 'Sparkle & Shine Cleaning',
  tagline: 'A Clean Space Brings About a Clearer Mind.',
  phone: '1-800-701-4951',
  phoneHref: 'tel:+18007014951',
  smsHref: 'sms:+18007014951',
  // TODO: swap for the business address email once created (e.g. via Cloudflare Email Routing)
  email: '',
  url: 'https://www.sparkleshinecommercialcleaning.com',
  serviceArea: 'Central Florida',
  cities: ['Orlando', 'Kissimmee', 'Sanford', 'Winter Park', 'Altamonte Springs', 'Lake Mary', 'Clermont', 'Apopka'],
  counties: ['Orange County', 'Seminole County', 'Osceola County', 'Lake County'],
  hours: 'Mon–Sat, 8:00 AM – 6:00 PM',
  web3formsKey: '4e4fbf60-1681-4f73-b55e-774046565d82',
} as const;

export const nav = [
  { label: 'Commercial', href: '/commercial-cleaning' },
  { label: 'Residential', href: '/residential-cleaning' },
] as const;
