import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='py-4 dark:bg-slate-600 flex flex-col sm:flex-row items-center sm:justify-between'>
            <div className='sm:ml-4'>
                <ul className='flex flex-col sm:flex-row gap-4'>
                    <li className='text-xl text-slate-400 font-bold  hover:scale-105 transition-all' >
                        <Link href={"/"} className='hover:text-white transition-all'>Dashboard</Link>
                    </li>
                    <li className='text-xl text-slate-400 font-bold hover:scale-105 transition-all'>
                        <Link href={"/tickets"} className='hover:text-white transition-all'>Tickets</Link>
                    </li>
                </ul>
            </div>
            <div className='sm:mr-4'>
                <ul>
                    <li className='text-xl text-slate-400 font-bold hover:scale-105 transition-all'>
                        <Link href={"/tickets"} className='hover:text-white transition-all'>User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
