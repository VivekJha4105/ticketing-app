import React from 'react'

export default function ProgressDisplay({ progress }: { progress: number; }) {

    return (
        <div className='w-full bg-white/85 rounded-lg'>
            <div className={`p-1 bg-blue-500 rounded-lg`} style={{ width: `${progress}%` }}>
            </div>
        </div>
    )
}
