export type NavLink = {
  label: string
  href: string
}

export type StatItem = {
  value: string
  label: string
}

export type CategoryItem = {
  title: string
  image: string
}

export type StoryItem = {
  eyebrow: string
  title: string
  description: string
  icon: string
}

export type ProductItem = {
  title: string
  description: string
  price: string
  image: string
  tag: string
}

export type SocialItem = {
  handle: string
  image: string
}

export type TestimonialItem = {
  quote: string
  author: string
}

export type FooterColumn = {
  title: string
  links: NavLink[]
}

export const navigation: NavLink[] = [
  { label: 'Catalog', href: '#catalog' },
  { label: 'Collections', href: '#collections' },
  { label: 'Materials', href: '#materials' },
  { label: 'Reviews', href: '#reviews' },
]

export const heroStats: StatItem[] = [
  { value: '4.8', label: 'average rating from verified buyers' },
  { value: '12k', label: 'homes styled with our modular pieces' },
  { value: '48h', label: 'design response time for new ideas' },
]

export const categories: CategoryItem[] = [
  { title: 'Home Office', image: '/image6.png' },
  { title: 'Bedroom', image: '/image7.png' },
  { title: 'Living Room', image: '/image8.png' },
  { title: 'Dining Room', image: '/image9.png' },
]

export const storyCards: StoryItem[] = [
  {
    eyebrow: 'Design',
    title: 'Furniture with personality',
    description:
      'We build quiet statement pieces that shape the room without making it feel crowded.',
    icon: '/o-oqs-jw0.svg',
  },
  {
    eyebrow: 'Made',
    title: 'Thoughtfully produced in Spain',
    description:
      'Small-batch production keeps the details sharp and lets us stay close to the craft.',
    icon: '/gf-p-9-zp-tif0.svg',
  },
  {
    eyebrow: 'Footprint',
    title: 'Better materials, lower waste',
    description:
      'Durable wood, smart packaging, and modular design help every piece last much longer.',
    icon: '/y-mn-h-kp-tif0.svg',
  },
]

export const products: ProductItem[] = [
  {
    title: 'Cloe Modular Storage',
    description:
      'Expandable shelving system for books, audio, decor, and everything in between.',
    price: '$1,176',
    image: '/image38.png',
    tag: 'Best for flexible storage',
  },
  {
    title: 'Alada Folding Desk',
    description:
      'Slim wall-mounted desk that folds away cleanly when your workday is done.',
    price: '$534',
    image: '/image39.png',
    tag: 'Small-space favorite',
  },
  {
    title: 'Pelican Shelf',
    description:
      'Minimal shelf with hidden hooks for entryways, bedrooms, and calm daily routines.',
    price: '$89',
    image: '/image40.png',
    tag: 'Easy entryway upgrade',
  },
]

export const socialGallery: SocialItem[] = [
  { handle: '@dgarci', image: '/image21.png' },
  { handle: '@paula.rl', image: '/image22.png' },
  { handle: '@linda.m.karlsen', image: '/image24.png' },
  { handle: '@martagtarrio_', image: '/image25.png' },
]

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'The pieces feel premium without screaming for attention. The storage details are especially smart.',
    author: 'M. Chalabi, United States',
  },
  {
    quote:
      'Beautiful design, simple delivery process, and the materials look even better in real life.',
    author: 'R. Meijer, Netherlands',
  },
  {
    quote:
      'Exactly the kind of modular furniture we wanted: clean lines, durable finish, and real function.',
    author: 'R. Aoun, United Kingdom',
  },
]

export const footerColumns: FooterColumn[] = [
  {
    title: 'Shop',
    links: [
      { label: 'New arrivals', href: '#catalog' },
      { label: 'Best sellers', href: '#collections' },
      { label: 'Storage systems', href: '#catalog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#materials' },
      { label: 'Design process', href: '#materials' },
      { label: 'Sustainability', href: '#materials' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Shipping', href: '#footer' },
      { label: 'Returns', href: '#footer' },
      { label: 'Contact', href: '#footer' },
    ],
  },
]

export const socialLinks: NavLink[] = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
  { label: 'Behance', href: 'https://behance.net' },
]
