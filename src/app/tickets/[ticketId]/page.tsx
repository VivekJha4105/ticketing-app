
import React from 'react'

type Props = {
    params: { ticketId: string },
}

export default function Ticket({ params: { ticketId } }: Props) {
    return (
        <div>{ticketId}</div>
    )
}
