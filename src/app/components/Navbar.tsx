import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='py-4 dark:bg-slate-600 flex flex-col sm:flex-row items-center sm:justify-between drop-shadow-lg'>
            <div className='sm:ml-4'>
                <ul className='flex flex-col sm:flex-row gap-4'>
                    <li className='nav--item' >
                        <Link href={"/"} className='hover:text-white transition-all'>Dashboard</Link>
                    </li>
                    <li className='nav--item'>
                        <Link href={"/tickets"} className='hover:text-white transition-all'>Ticket</Link>
                    </li>
                </ul>
            </div>
            <div className='sm:mr-4'>
                <ul>
                    <li className='nav--item'>
                        <Link href={"/tickets"} className='hover:text-white transition-all'>User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
