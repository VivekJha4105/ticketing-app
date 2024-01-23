import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function PriorityDisplay({ priority }: { priority: any; }) {
    return (
        <div className='flex justify-start align-baseline gap-1'>
            <FontAwesomeIcon icon={faFire} className={`${priority > 0 ? 'text-red-500' : 'text-slate-600'}`} />
            <FontAwesomeIcon icon={faFire} className={`${priority > 1 ? 'text-red-500' : 'text-slate-600'}`} />
            <FontAwesomeIcon icon={faFire} className={`${priority > 2 ? 'text-red-500' : 'text-slate-600'}`} />
            <FontAwesomeIcon icon={faFire} className={`${priority > 3 ? 'text-red-500' : 'text-slate-600'}`} />
            <FontAwesomeIcon icon={faFire} className={`${priority > 4 ? 'text-red-500' : 'text-slate-600'}`} />
        </div>
    )
}
