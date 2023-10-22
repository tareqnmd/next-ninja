import { NextResponse } from 'next/server';

// export const dynamic = 'force-dynamic';

export async function GET() {
	const res = await fetch('http://localhost:3301/tickets', {
		next: {
			revalidate: 0,
		},
	});

	const tickets = await res.json();

	return NextResponse.json(tickets, {
		status: 200,
	});
}

export async function POST(request: any) {
	const ticket = await request.json();

	const res = await fetch('http://localhost:3301 /tickets', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(ticket),
	});

	const newTicket = await res.json();

	return NextResponse.json(newTicket, {
		status: 201,
	});
}
