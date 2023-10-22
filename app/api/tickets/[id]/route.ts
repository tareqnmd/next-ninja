import { NextResponse } from 'next/server';

export async function GET(_: any, { params }: any) {
	const id = params.id;

	const res = await fetch(`http://localhost:3301/tickets/${id}`);
	const ticket = await res.json();

	if (!res.ok) {
		return NextResponse.json(
			{ error: 'Cannot find ticket' },
			{
				status: 404,
			}
		);
	}

	return NextResponse.json(ticket, {
		status: 200,
	});
}
