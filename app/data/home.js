// Remote Stitch images are kept as-is. To self-host later, replace cdn(...) with '/images/xyz.jpg'.
const cdn = (path) => `https://lh3.googleusercontent.com/${path}`;

const kineticImage = cdn(
  'aida-public/AB6AXuACsmJAIDYBJRgsS7Atb1ljsRCP6JSlcnAk1cAHMjOosbN0W1YytxI5ZRXLbjAZwr-5xoMM1nHZS2ZxNdekq4v6ctBHg24fCvhU_22opXWozU4j9_0njgIIWx_slMxQqOv5C0_D7m5k1DyHWWOU605OfPVgcflwjC3CPW-G1Wz3o91i3jA5uvTnrAzhFea-0pbPwzxUZ3dHKVVoolF_KmRCX3Xn39COp0qIjVP0FujNcJGmGdGH1T2c',
);

export const brand = {
  name: 'VANTA',
  tagline: 'Built for your everyday.',
  logo: cdn(
    'aida/AEtjO1XGUEAAoaisuO1A1NcmxrLOQ39UMovlYtz_4yAHuFhL2pPxZsMaOp1UYGc2gjMMHqPHBjZ0G28YDocQx7-PgYgBhDGf5hr5OFA_VqBerwMV2KY5Xif-OrMiNgqj4QiHyBfwdQRjYk0SCM7EPHNxxzdQTCN3fAJCEwswMqPEbj5axsQf7MvfzC5U3nCUYoZhzYbLTOOwCNtB5LZ5N4I_e9HMzzMAglDnyh2XyINntqTu_1rnzNOHIWLlyQ',
  ),
};

export const navLinks = [
  // { label: 'Shop', to: '/shop' },
  // { label: 'New Arrivals', to: '/new-arrivals' },
  { label: 'Men', to: '/men' },
  { label: 'Women', to: '/women' },
  { label: 'Accessories', to: '/accessories' },
];

export const heroImage = cdn(
  'aida-public/AB6AXuAVX_AhwuqJJ5C0W92KC1i1g7-M3SXzhlL03FwWPy5jXr46GAfctYE3v2yJeAE9Ec5XM0pcoQ2SRqY2IUFMm8S6Oxd6U7XGzU4x7K_8zzcmJic-lRg4BmEvV-Pi2k_xCERAukKXa21JGy6UkRvj3zMttZUWVj2YEQfQ7XQkABhu8Qu4HLPZJm71r2QDv_ttGMZeT-T90LEuiA2adTr_jdUmkCmIgGkpHocLt5Rf-i2-nLMIaZMkFiJr',
);

export const announcements = [
  'COMPLIMENTARY WORLDWIDE ARCHIVAL SHIPPING ON ORDERS OVER $250',
  'CRAFTED IN PORTUGAL & JAPAN',
  'LIMITED PRODUCTION RUNS (NO MASS REPRINTS)',
  'DESIGNED FOR ERGONOMIC MOVEMENT',
];

// badgeStyle: 'solid' = black badge, 'soft' = light grey badge
export const newArrivals = [
  {
    id: 'kinetic-01-low',
    name: 'KINETIC-01 LOW',
    price: 340,
    category: 'FOOTWEAR / ARCHITECTURAL',
    badge: 'Flagship',
    badgeStyle: 'solid',
    image: kineticImage,
    imageFit: 'contain',
    alt: 'VANTA Kinetic-01 Low sneaker in chalk white and slate grey',
    colors: [
      { name: 'Matte Chalk', hex: '#f4f2eb' },
      { name: 'Concrete Grey', hex: '#7a7876' },
      { name: 'Deep Onyx', hex: '#1c1b1b' },
    ],
  },
  {
    id: 'structural-hoodie',
    name: 'STRUCTURAL HOODIE',
    price: 220,
    category: 'HEAVYWEIGHT TERRY',
    badge: '650 GSM',
    badgeStyle: 'soft',
    image: cdn(
      'aida-public/AB6AXuBPaAP_nc_ExoK0b7qvuRvD1sv9d01yOBUSSHk6qzyaGjJdyFSkJxq3u6cCOWFt9QKeXgtFbUXRV8Riq857UGBS2z6fYn83aJSTrvsKTudGno3UVyjr9Zm3yaE488UcdWXm5wl3WdJpR8nXsNWKmq2Ndfs8VIZXS2wndY9k2RC-6aofoKDliLTiCbtQUpycjcZISGe-ewXWXPhJMMP4O-68UmDZ3IGV2QEnGD_0s3bEvODx3s7eqrN6',
    ),
    imageFit: 'cover',
    alt: 'Oversized heavyweight hoodie in washed charcoal black',
    colors: [
      { name: 'Washed Black', hex: '#2a2a29' },
      { name: 'Mineral Stone', hex: '#d4d1c9' },
    ],
  },
  {
    id: 'modular-bomber',
    name: 'MODULAR BOMBER',
    price: 480,
    category: 'OUTERWEAR / TECH-NYLON',
    badge: 'Waterproof',
    badgeStyle: 'soft',
    image: cdn(
      'aida-public/AB6AXuA_X-Ei_FUEQolwUW2liAtPNBIbS18g0CYD4JiMse4zcozz2xuGPHwYWsM_DMQZLoTCWPiwfgMJZsbZf67apGgIf0FmYKV7VbIYCVuAHFDKSTarA8j8iovRCdO_thLNfm655SJqqyZ7BPvfP1x4GkW42CNypFPEA9vMCpyalRur8RCDKYQaDNMpM4-V4n_oZIpUFR3ppvQzRQue14p37-KtNFcs37hV1btpF6LliQL-4zjnay4QHo3K',
    ),
    imageFit: 'cover',
    alt: 'Technical modular bomber jacket in raven black nylon',
    colors: [
      { name: 'Pitch Black', hex: '#121212' },
      { name: 'Olive Tint', hex: '#4c504a' },
    ],
  },
  {
    id: 'wide-drape-trouser',
    name: 'WIDE DRAPE TROUSER',
    price: 290,
    category: 'BOTTOMS / WOOL-POLY',
    badge: 'Tailored Fit',
    badgeStyle: 'soft',
    image: cdn(
      'aida-public/AB6AXuDpZulRt6gxzi9PFUJ6HUe_nSXBDBGQG33kk2w9Tz8AXB59c1GZ7NAmslOwWqIt_wjnGFtvlXGNbTBd7NuvtNRDppaz03K4iRGVtuOei9I0V18s6o0JQqzIC-yCWkuZizUkR9TdWCLnTHIIEBBfinXNbr9bCskpPpsDrfJOQ9VlC6g0yNPMpDw4112f6O2p_hu7oBaCbL4F0wt9aN_v1A_B3qLMquolfFcUjOdXPxoU9OQKmve1obqs',
    ),
    imageFit: 'cover',
    alt: 'Wide-leg pleated drape trousers in charcoal wool blend',
    colors: [
      { name: 'Charcoal', hex: '#3a3a3c' },
      { name: 'Bone White', hex: '#ece9e2' },
    ],
  },
];

export const categories = [
  {
    id: 'sneakers',
    code: 'CAT 01',
    name: 'SNEAKERS',
    count: '18 ITEMS',
    description: 'Kinetic tooling, geometric midsoles, and sculptured form.',
    to: '/men',
    image: cdn(
      'aida-public/AB6AXuD2QAKx46XQfLnqIKf6eS7i3Er0p_t9D4uJxGOZx6VwYdLtcrY4L7RTODRdo-7DNFGkUlG82-gcUUOn1IFHxRp-4WaWtYdrj71ZmrO0M3dlyGu2y7KjYtKeLXBmdwI50EKZCebETJrsQHK5FWs9R4Dw8jOk4uXCXiDzAGcqKyIjGtz4zmEXEpDn9EUgBJ0a39ocUQNwHcNXNP8AgDlyy2sAqMZqyYfeoiBw0DWlxjMx-4U_WL_31XWQ',
    ),
    alt: 'Technical sneaker resting on raw travertine marble',
  },
  {
    id: 'apparel',
    code: 'CAT 02',
    name: 'APPAREL',
    count: '42 ITEMS',
    description:
      'Architectural tailoring, Japanese heavyweight cottons & outerwear.',
    to: '/men',
    image: cdn(
      'aida-public/AB6AXuCF9HkS6InNAsfp-mk66fqbAaaoHRPzwiNtQJy0kLVOYAZqnnzU1pbyT0eeDymYv-jG-djFsKO7_jIT0VQfhdXExuBrdHEaS95iPnPOhTrzw_k8qaX4uJen39T_CrkxdQ1KX1ZLz2Q6KeWO0lbN5RCqKS4qGb2fuZahQ5d03sabcSTm12TNxAe66Ws0aaK8p5lExkkt4_-SayQu3gvAsbfii4QaYm0CrYyKnKTiHXPvY_DKcK7kZ6XN',
    ),
    alt: 'Model in oversized technical layers in a concrete hallway',
  },
  {
    id: 'accessories',
    code: 'CAT 03',
    name: 'ACCESSORIES',
    count: '15 ITEMS',
    description:
      'Utilitarian carry goods, full-grain leather, and cast hardware.',
    to: '/accessories',
    image: cdn(
      'aida-public/AB6AXuA2gNZuNm40kx8D5g_4IheYaGEU9Hes5lFrWJhoFSTx0gYIHnIHlzHQgMzv0O6YRq23LwDp2nP09QZG1D7nDe9q81g1VCw7VD9WU-TFfYUSN4n5Sk7_d3D5nL_VgcJC_KXB6SWtxAKlxlXz_QEBrZ7HTmkEOfPt46dpuCVpOmgRRrAMbkb3Q1zqE0-V_UAl-fh4AjBzQGk-_MsE4x0r7PGjQ8ptTmGV4Mhc8AuCuZHsuYkN45Lk-FSa',
    ),
    alt: 'Minimalist leather crossbody bag on pale stone',
  },
];

export const featuredProduct = {
  id: 'kinetic-01',
  name: 'VANTA KINETIC-01',
  price: 340,
  image: kineticImage,
  alt: 'VANTA KINETIC-01 sneaker levitating over a travertine plinth',
  spec: 'SERIES SPECIFICATION: S-01-V4',
  rating: '(4.9/5 from 184 reviews)',
  description:
    'Engineered from Italian off-white calfskin and technical ballistic mesh, anchored by an angular dual-density EVA sole prototyped in Tokyo. Balanced between avant-garde structural art and daily ergonomic resilience.',
  tags: ['FLAGSHIP TOOLING // EDITION 01', 'WEIGHT: 430G (SZ 10)'],
  facts: [
    { label: 'Sole Architecture', value: 'Dual-Density EVA' },
    { label: 'Vamp Material', value: 'Calfskin & Mesh' },
    { label: 'Origin', value: 'Porto / Tokyo' },
  ],
  bullets: [
    'Sculptural faceted geometric sole chassis for shock distribution',
    'Hand-stitched reinforced toe cap and padded ergonomic tongue',
    'High-traction segmented rubber outsole pods for wet grip',
  ],
  colorways: [
    {
      name: 'Chalk White',
      label: 'Chalk White / Concrete Slate',
      hex: '#f4f2eb',
      dark: false,
    },
    {
      name: 'Carbon Slate',
      label: 'Carbon Slate / Obsidian',
      hex: '#4a4a48',
      dark: true,
    },
    {
      name: 'Raw Clay',
      label: 'Raw Clay / Desert Mineral',
      hex: '#c5bcb1',
      dark: false,
    },
  ],
  sizes: [
    { label: 'US 7' },
    { label: 'US 8' },
    { label: 'US 9' },
    { label: 'US 10' },
    { label: 'US 11', lowStock: true },
    { label: 'US 12' },
    { label: 'US 13', soldOut: true },
  ],
  defaultSize: 'US 10',
  lowStockNote: '● US 11: Only 3 pairs remaining in archive inventory',
};

export const manifestoPillars = [
  'Pure Ergonomics',
  'Traceable Mills',
  'Monochrome Discipline',
  'Lifelong Repair',
];

export const trendingFilters = ['All', 'Footwear', 'Jackets', 'Heavy Knits'];

export const trending = [
  {
    id: 'kinetic-02-runner',
    name: 'KINETIC-02 RUNNER',
    price: 360,
    category: 'FOOTWEAR',
    colorway: 'Off-Black & Slate',
    badge: 'RESTOCK',
    badgeStyle: 'solid',
    image: cdn(
      'aida-public/AB6AXuBDkIkgLaOCWL14fEI71kDth74mYn7By0OSeFAETr2-OSsfhiH3aTsuowa2C73gFtDt2dsKnS1TbiWHv8tMgfnRfJgSJfOv810zkMAwm3CJi_-hb-jP-ZUqYt57CwjxTca1pN5eV4l_ujLsr5E2XNOUenBBbkHj8rHlwhDYehIfcQvUyoZ8uf4pHNH9SwAeLYEiuTipSCVM9NDXO8FPGSgJ51atEh1crB2HCTAmv8xTYeMnYxymY6RR',
    ),
    imageFit: 'cover',
    alt: 'VANTA Kinetic 02 runner in dark graphite knit',
  },
  {
    id: 'double-layer-boxy-tee',
    name: 'DOUBLE-LAYER BOXY TEE',
    price: 110,
    category: 'TOPS',
    colorway: 'Chalk White',
    badge: '300 GSM',
    badgeStyle: 'soft',
    image: cdn(
      'aida-public/AB6AXuBkZJx7XNPtdc2YCrc9AMJwhTac8V2tbh7ljRWE31xEfQG6Ty93Ydnq8_LrSoV2C-vt8G4WDlOoTlcOCf6E4-hvOku23Q1Mol6_Rz1Y9xOgeh59wAEubqCXAxctpKRkGQgu8jThcES03rew79S1IzP3pVHs0IqhKjGLpwyK95LFtq00tfATzsy_RM9ZuEVkVXMxeArE6duhCHA5j4z9TaBc_degi9Phg0rQBNEHzPbo1jmOqmidgSG6',
    ),
    imageFit: 'cover',
    alt: 'Heavyweight double-layer boxy tee in chalk white',
  },
  {
    id: 'articulated-shell',
    name: 'ARTICULATED SHELL',
    price: 520,
    category: 'OUTERWEAR',
    colorway: 'Raven Black',
    badge: '3-LAYER SHELL',
    badgeStyle: 'solid',
    image: cdn(
      'aida-public/AB6AXuCjdZCZ5pHRuStHf5iThm4EEMfYzRQmlgsw3pMfytTUr2frwextpbsbkTIZT5FgQtFxs3Itm7_bg9BMG4Frdk7FBBmbB3mray8bzw3Bj3JhuXSrkZ2ZBIKrcJ4siaDaf5qM8XlduWJDLkeZ8PlekjpgIhuO4Rsjy05cSFm6msphjx8Lv35_dm3YqFqQUsUDk38DQowyBsmNvAWrJJiLv2jBvJEAptleE0H9QELaT_PTpUH7EwYkD3j0',
    ),
    imageFit: 'cover',
    alt: 'Articulated technical shell jacket in raven black',
  },
  {
    id: 'sling-pouch',
    name: 'SLING POUCH 0.5L',
    price: 185,
    category: 'LEATHER GOODS',
    colorway: 'Raw Matte Leather',
    badge: 'FULL GRAIN',
    badgeStyle: 'soft',
    image: cdn(
      'aida-public/AB6AXuDekdSjluYLeW8auGm2GF3mKEsPE9RS9Kd3SflhbCjxErd_vm3PjRpjkDYCMuUn1XNkF33ptlbgzi5kw2hFRUiY3nurzF0gADvnzLtYcS08cvrzOAcOOpTQL9c5hoL9EK38RhXYjr6Lv4rYPUqwFzTcAjkFQRsLQqAF63DF7MnV_cTBwi7tepoi-MBBHuWiY_0mFgjOlLNGJE0zLuHBQjKJ0-eJGfyCq1ClWSyXMWgPTjXZdaZACkU-',
    ),
    imageFit: 'cover',
    alt: 'Leather mini sling pouch on a stone pedestal',
  },
];

export const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Footwear', to: '/shop' },
      { label: 'Outerwear', to: '/shop' },
      { label: 'Tops', to: '/shop' },
      { label: 'Bottoms', to: '/shop' },
      { label: 'Objects', to: '/accessories' },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { label: 'Order Status', to: '/customer-care' },
      { label: 'Shipping & Returns', to: '/customer-care' },
      { label: 'Size Guide', to: '/customer-care' },
      { label: 'Contact', to: '/customer-care' },
      { label: 'Sustainability', to: '/customer-care' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Philosophy', to: '/about' },
      { label: 'Lookbooks', to: '/about' },
      { label: 'Archive', to: '/about' },
      { label: 'Careers', to: '/about' },
    ],
  },
  {
    title: 'Network',
    links: [
      { label: 'Instagram', to: '#' },
      { label: 'TikTok', to: '#' },
      { label: 'Spotify', to: '#' },
      { label: 'X', to: '#' },
    ],
  },
];

export const legalLinks = [
  { label: 'Privacy Policy', to: '#' },
  { label: 'Terms of Service', to: '#' },
  { label: 'Accessibility', to: '#' },
];
