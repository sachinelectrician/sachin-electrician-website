export const business = {
  name: 'Sachin Electrician Services',
  shortName: 'Sachin Electrician',
  owner: 'Sachin Nimbekar',
  city: 'Nagpur',
  state: 'Maharashtra',
  country: 'India',
  websiteUrl: 'https://sachinelectricianservices.in/',
  phone: '+918788008362',
  whatsapp: '+919049238361',
  googleProfile1:
    'https://www.google.com/maps/place/Sachin+Electrician+And+Pulumbering+all+Service/@21.1035437,79.0137684,774m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bd495eae5fc9be1:0x75784c545636773a!8m2!3d21.1035437!4d79.0137684!16s%2Fg%2F11s8h2dy14',
  googleProfile2:
    'https://www.google.com/maps/place/Sachin+Electrician+Services/data=!4m2!3m1!1s0x0:0x4062ec0f66fd3589?sa=X&ved=1t:2428&ictx=111',
} as const

export const businessImages = {
  hero: '/images/sachin-hero.webp',
  heroImageAlt: 'Professional electrician working on an electrical panel in Nagpur',
  about: '/images/sachin-about.webp',
  aboutImageAlt: 'Sachin Nimbekar, local electrician in Nagpur',
  gallery: [
    { image: '/images/sachin-house-wiring.webp', title: 'House Wiring', category: 'Electrical Wiring', alt: 'Sachin Nimbekar working on electrical wiring', objectPosition: 'center center' },
    { image: '/images/sachin-switchboard-installation.webp', title: 'Switchboard Installation', category: 'Electrical Installation', alt: 'Sachin Nimbekar working on a residential switchboard', objectPosition: 'center center' },
    { image: '/images/sachin-mcb-db-installation.webp', title: 'MCB / DB Installation', category: 'Electrical Panel Work', alt: 'Sachin Nimbekar working on an MCB distribution board', objectPosition: 'center center' },
    { image: '/images/sachin-light-installation.webp', title: 'Light Installation', category: 'Lighting', alt: 'Sachin Nimbekar installing a ceiling light', objectPosition: 'center center' },
    { image: '/images/sachin-fan-installation.webp', title: 'Fan Installation', category: 'Fan Installation', alt: 'Sachin Nimbekar working on a ceiling fan installation', objectPosition: 'center center' },
    { image: '/images/sachin-electrical-testing.webp', title: 'Electrical Testing & Repair', category: 'Electrical Testing', alt: 'Sachin Nimbekar testing an electrical distribution board', objectPosition: 'center center' },
  ],
} as const

export const businessReviews: Array<{
  rating: number
  text: string
  author: string
  source: string
}> = []

export const serviceAreas = [
  {
    group: 'East Nagpur',
    areas: ['Pardi', 'Kalamna', 'Wardhaman Nagar', 'Nandanvan', 'Sakkardara', 'Lakadganj'],
  },
  {
    group: 'Central Nagpur',
    areas: ['Itwari', 'Gandhibagh', 'Mahal', 'Sitabuldi', 'Ganeshpeth', 'Dhantoli', 'Ramdaspeth'],
  },
  {
    group: 'South Nagpur',
    areas: ['Ajni', 'Pratap Nagar', 'Bajaj Nagar', 'Laxmi Nagar', 'Manish Nagar', 'Khamla'],
  },
  {
    group: 'West Nagpur',
    areas: ['Trimurti Nagar', 'Jaitala', 'Wadi', 'Hingna Road', 'Hingna'],
  },
] as const

export const phoneHref = business.phone ? `tel:${business.phone}` : ''

export function whatsappHref(service = '', location = '') {
  if (!business.whatsapp) return ''
  const message = `Hello Sachin, I need an electrician in Nagpur. I need help with ${service || '[service]'}. My location is ${location || '[location]'}.`
  return `https://wa.me/${business.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
}
