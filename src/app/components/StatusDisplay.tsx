import React from 'react'

export default function StatusDisplay({ status }: { status: string }) {

    console.log(status)

    const getColor = (status: string) => {
        status = status.toLowerCase();

        if (status == "not-started") {
            return 'bg-red-300';
        }
        else if (status == "started") {
            return 'bg-orange-500';
        }
        else if (status == "half-done") {
            return 'bg-yellow-300';
        }
        else if (status == "done") {
            return 'bg-green-300';
        }
    }

    return (
        <div>
            <span className={`p-1 text-sm dark:text-slate-800 ${getColor(status)} border-black rounded-full font-bold`} >
                {status}
            </span>
        </div>
    )
}
