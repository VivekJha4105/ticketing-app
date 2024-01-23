
'use client'

import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Delete({ ticketId }: { ticketId: string }) {

    const router = useRouter()

    const handleClick = async (ticketId: string) => {
        console.log('Here')
        const res = await fetch(`http://localhost:3000/api/tickets/${ticketId}`, {
            method: "DELETE",
        });
        console.log(res, "res in delete server")

        if (res.ok) {
            router.refresh();
        }
    }

    return (
        <div className='w-10/12 ml-auto p-1 hover:bg-slate-800 rounded-sm' onClick={() => handleClick(ticketId)}>
            <FontAwesomeIcon
                icon={faX}
                className='text-red-400 cursor-pointer hover:text-red-600 transition-all'
            />
        </div>
    )
}
