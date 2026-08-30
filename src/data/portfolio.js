export const navigation = [
  { label: 'Work', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export const resumeUrl = 'https://drive.google.com/file/d/1eLkgPOdq5bQ_mqkrJpe6_UF1pZ3lvT2L/view?usp=sharing'

export const projects = [
  {
    number: '01',
    name: 'Commbitz',
    eyebrow: 'eSIM commerce / Global connectivity',
    summary: 'A fast, search-friendly eSIM buying experience that takes customers from browsing to activation without friction.',
    proof: 'Chosen as a trusted eSIM provider by Air India and featured on its official site.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    note: 'I built the browsing, purchase, and activation flows, using SSR and SSG for speed and discoverability while partnering closely with a backend developer on API integration.',
    href: 'https://commbitz.com/',
    theme: 'commbitz',
  },
  {
    number: '02',
    name: 'Foni',
    eyebrow: 'Mobility / Real-time platform',
    summary: 'A responsive ride-sharing platform connecting riders and drivers from first booking through live trip tracking.',
    proof: 'Live conversation built into the ride flow with Socket.io.',
    stack: ['Next.js', 'TypeScript', 'Socket.io'],
    note: 'I designed and developed the responsive booking and tracking flows, with real-time in-app chat that keeps coordination inside the product.',
    href: 'https://www.ride-foni.com/',
    theme: 'foni',
  },
  {
    number: '03',
    name: 'Splashark',
    eyebrow: 'Social commerce / Video',
    summary: 'A social and e-commerce product combining discovery, conversation, live video, and shopping in one connected experience.',
    proof: 'Feed, short-form video, commerce, chat, and calling—built as one system.',
    stack: ['Next.js', 'TypeScript', 'Socket.io', 'Agora'],
    note: 'I built Instagram-style feeds, Reels-style video, profiles and product listings alongside real-time chat and Agora-powered video calling.',
    href: 'https://splashark.io/',
    theme: 'splashark',
  },
]

export const experience = [
  {
    dates: 'Sep 2025 — Present',
    role: 'MERN Stack Developer',
    company: 'Suffescom Solutions',
    location: 'Chandigarh',
    points: [
      'Develop and maintain production React.js and Next.js applications serving thousands of daily users.',
      'Reduced page load times by 30% through code splitting, lazy loading, and image optimization.',
      'Migrated legacy pages to Next.js SSR/SSG, raising Lighthouse SEO scores from 70 to 95+.',
    ],
  },
  {
    dates: 'Feb 2024 — Sep 2025',
    role: 'Front-End Developer',
    company: 'Code Brew Labs',
    location: 'Chandigarh',
    points: [
      'Delivered 8+ React.js and Next.js client websites end-to-end, from wireframe to deployment.',
      'Built e-commerce and booking admin systems that cut manual admin work by 40%.',
      'Led five interns through code reviews while keeping deliverables on schedule.',
    ],
  },
  {
    dates: 'Aug 2023 — Jan 2024',
    role: 'Front-End Developer · Intern',
    company: 'Code Brew Labs',
    location: 'Chandigarh',
    points: ['Built responsive React.js and Next.js interface components under senior guidance.'],
  },
  {
    dates: 'Apr 2022 — Apr 2023',
    role: 'Associate Software Engineer · Intern',
    company: 'MAQ Software',
    location: 'Chandigarh',
    points: [
      'Redesigned key screens of a React loan-lending app to reduce user drop-off.',
      'Built an internal Next.js assignment tool that is still used by the organization.',
      'Created analytics dashboards that surfaced loan-application drop-off points.',
    ],
  },
]

export const skills = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { category: 'Frontend', items: ['React.js', 'Next.js', 'Redux', 'RTK Query', 'Zustand', 'Tailwind CSS', 'Material UI', 'Bootstrap'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API Design'] },
  { category: 'Real-time & tools', items: ['Socket.io', 'Firebase', 'Agora', 'Git', 'Bitbucket', 'Cursor AI', 'Codex'] },
  { category: 'Practice', items: ['SSR / SSG', 'Responsive Design', 'Performance Optimization', 'MERN Stack'] },
]

export const certifications = [
  {
    name: 'Namaste React',
    href: 'https://namastedev.com/ramanmalhotra508/certificates/namaste-react',
  },
  {
    name: 'Namaste Node',
    href: 'https://namastedev.com/ramanmalhotra508/certificates/namaste-node',
  },
]
