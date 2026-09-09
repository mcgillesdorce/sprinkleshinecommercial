export const site = {
  name: 'Sparkle & Shine Commercial / Residential Cleaning LLC',
  shortName: 'Sparkle & Shine Cleaning',
  tagline: 'A Clean Space Brings About a Clearer Mind.',
  phone: '888-404-8146',
  phoneHref: 'tel:+18884048146',
  smsHref: 'sms:+18884048146',
  // TODO: swap for the business address email once created (e.g. via Cloudflare Email Routing)
  email: '',
  url: 'https://www.sparkleshinecommercialcleaning.com',
  serviceArea: 'Central Florida',
  cities: ['Orlando', 'Kissimmee', 'Sanford', 'Winter Park', 'Altamonte Springs', 'Lake Mary', 'Clermont', 'Apopka'],
  counties: ['Orange County', 'Seminole County', 'Osceola County', 'Lake County'],
  hours: 'Mon–Sat, 8:00 AM – 6:00 PM',
  // TODO: replace with real Web3Forms access key from web3forms.com
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
} as const;

export const nav = [
  { label: 'Commercial', href: '/commercial-cleaning' },
  { label: 'Residential', href: '/residential-cleaning' },
] as const;
