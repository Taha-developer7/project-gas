export const cylinderSizes = ['2 KG', '5 KG', '11.8 KG', '15 KG', '45 KG'] as const;
export type CylinderSize = (typeof cylinderSizes)[number];
export type OrderInput = { name: string; phone: string; cylinderSize: CylinderSize; message: string };
