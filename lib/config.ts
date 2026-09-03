export const company = {
  name: 'AL-SHAHERYAR ENTERPRISES',
  descriptor: 'LPG Gas Cylinder Refill & Doorstep Delivery',
  phoneDisplay: '+92 324 2899822',
  phoneHref: 'tel:+923242899822',
  whatsapp: '923242899822',
  otherBusinessName: 'Electronics Business',
  otherBusinessUrl: '/electronics-business',
};

export const cylinderConfig = {
  modelPath: '/gas_cylinder.glb',
  targetHeight: 2.7,
  rotation: [0, 0, 0] as [number, number, number],
  verticalOffset: -0.05,
};

export const products = [
  { size: '2 KG', detail: 'Compact refill for everyday essentials', scale: 0.52 },
  { size: '5 KG', detail: 'Easy to handle, made for smaller homes', scale: 0.68 },
  { size: '11.8 KG', detail: 'The dependable household standard', scale: 0.86 },
  { size: '15 KG', detail: 'More capacity for busy kitchens', scale: 1 },
  { size: '45 KG', detail: 'High-volume supply for commercial use', scale: 1.24 },
] as const;

export const services = [
  ['01', 'LPG Cylinder Refill', 'Accurate refills, handled with care.'],
  ['02', 'Doorstep Delivery', 'Reliable delivery to your home or business.'],
  ['03', 'Pure Wazan Guarantee', 'Pay for the quantity you actually receive.'],
  ['04', 'Safety & Leakage Testing', 'Every cylinder gets a careful safety check.'],
  ['05', '24/7 Customer Support', 'A responsive team when you need us.'],
  ['06', 'Minimum 2 KG Refill', 'Flexible quantities for changing needs.'],
] as const;

export const whatsappUrl = (message: string) => `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
