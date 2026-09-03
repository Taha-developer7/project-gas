import { NextResponse } from 'next/server';
import { cylinderSizes, type OrderInput } from '@/types/order';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<OrderInput>;
    const validPhone = typeof body.phone === 'string' && /^[+\d][\d\s()-]{7,}$/.test(body.phone);
    const validSize = typeof body.cylinderSize === 'string' && cylinderSizes.includes(body.cylinderSize as OrderInput['cylinderSize']);
    if (!body.name?.trim() || !validPhone || !validSize || !body.message?.trim()) {
      return NextResponse.json({ error: 'Please provide a valid name, phone, cylinder size and message.' }, { status: 400 });
    }
    // Replace this boundary with a repository/database call when persistence is connected.
    return NextResponse.json({ success: true, message: 'Order received.' }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Unable to process your order.' }, { status: 400 });
  }
}
