import React from 'react'
import PriorityDisplay from './PriorityDisplay'
import Delete from './Delete'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './StatusDisplay'
import Link from 'next/link'


export default function TicketTile({ ticket }: { ticket: any }) {

    const formattedDate = new Date(ticket?.createdAt).toLocaleDateString();
    const formattedTime = new Date(ticket?.createdAt).toLocaleTimeString();

    return (
        <section className='dark:bg-slate-700 mb-2 px-2 py-2 flex flex-col rounded-lg hover:bg-slate-700/70'>
            <div className='mb-2 flex justify-between items-center'>
                <div className='w-4/12'>
                    <PriorityDisplay priority={ticket?.priority} />
                </div>
                <div className='w-1/12'>
                    <Delete ticketId={ticket._id} />
                </div>
            </div>
            <Link href={`/tickets/${ticket._id}`} style={{ display: "contents" }} className='cursor-pointer'>
                <h2 className='mb-2 text-white border-b-2 border-b-slate-800 rounded-lg'>{ticket?.title}</h2>
                <p className='mb-2 text-white/90 whitespace-pre-wrap'>{ticket?.description}</p>
                <div className='flex items-center'>
                    <div className=''>
                        <p className='my-1 dark:text-slate-500 font-bold'>{formattedDate.toString()} - {formattedTime.toString()}</p>
                        <ProgressDisplay progress={ticket?.progress} />
                    </div>
                    <div className='ml-auto mt-auto'>
                        <StatusDisplay status={ticket?.status} />
                    </div>
                </div>
            </Link>
        </section>
    )
}
