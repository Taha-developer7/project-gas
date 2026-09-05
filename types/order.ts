export const cylinderSizes = ['5 KG', '10 KG', '12.5 KG'] as const;
export type CylinderSize = (typeof cylinderSizes)[number];
export type OrderInput = { name: string; phone: string; cylinderSize: CylinderSize; message: string };
