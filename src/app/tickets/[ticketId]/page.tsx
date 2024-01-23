
import React from 'react'
import Ticket from '../../models/ticket'
import TicketForm from '@/app/components/TicketForm';

type Props = {
    params: { ticketId: string },
}

export default async function TicketPage({ params: { ticketId } }: Props) {

    const getTicketById = async (ticketId: string) => {

        const res = await fetch(`http://localhost:3000/api/tickets/${ticketId}`, {
            cache: 'no-cache'
        });

        if (!res.ok) {
            throw new Error("Ticket doesn't exists.");
        }

        return res.json();
    }

    let { ticket } = await getTicketById(ticketId);

    return (
        <div><TicketForm ticket={ticket} /></div>
    )
}
