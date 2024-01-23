import { notFound } from "next/navigation";
import { NextResponse } from "next/server";
import Ticket from "@/app/models/ticket";

export async function GET() {
    try {
        const tickets = await Ticket.find();

        if (!tickets) {
            notFound();
        }

        return NextResponse.json({
            message: true,
            tickets,
        });
    } catch (error) {
        return NextResponse.json({
            message: "Error:", error
        })
    }
}


export async function POST(request: Request) {
    try {
        const body = await request.json()
        const ticketData = body;

        await Ticket.create(ticketData);
        return Response.json({ success: true, message: "Ticket Created Successfully" });
    } catch (error) {
        return Response.json({ success: false, message: `Error` });
    }
}


