import Ticket from "@/app/models/ticket";
import { NextResponse } from "next/server";

type Params = {
    params: { ticketId: string };
}

export async function DELETE(request: Request, { params: { ticketId } }: Params) {
    try {
        await Ticket.findByIdAndDelete(ticketId);
        // console.log('here', ticketId);
        return NextResponse.json({ success: true, message: `Ticket with Id: ${ticketId} is deleted.` });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error: ", error });
    }
}

export async function GET(request: Request, { params: { ticketId } }: Params) {
    try {
        const ticket = await Ticket.findById(ticketId);
        return NextResponse.json({ success: true, ticket });
    }
    catch (error) {
        return NextResponse.json({ success: false, message: "Error: ", error });
    }
}

export async function PUT(request: Request, { params: { ticketId } }: Params) {
    try {
        const body = await request.json();
        const ticket = await Ticket.findByIdAndUpdate(ticketId, body, { new: true });

        return NextResponse.json({ success: true, ticket });
    }
    catch (error) {
        return NextResponse.json({ success: false, message: "Error: ", error });
    }
}