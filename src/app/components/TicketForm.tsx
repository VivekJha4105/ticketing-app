
"use client"

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

//** useState() hook functinality is only working with interface type casting.
//** Setting a type in types.d.ts file in root directory is not working for the useState() hook */

interface FormData {
    title: string;
    description: string;
    priority: number;
    progress: number;
    status: string;
    category: string;
}

export default function TicketForm({ ticket = undefined }: any) {

    const router = useRouter();

    const [updateData, setUpdateData] = useState<FormData>({
        title: ticket?.title,
        description: ticket?.description,
        priority: ticket?.priority,
        progress: ticket?.progress,
        status: ticket?.status,
        category: ticket?.category,
    });

    const [formData, setFormData] = useState<FormData>({
        title: "",
        description: "",
        priority: 0,
        progress: 0,
        status: "Not-Started",
        category: "Hardware Problem",
    });


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let ticketId = ticket?._id;
        const method = ticket?._id ? "PUT" : "POST";
        const url = ticket?._id ? `/api/tickets/${ticketId}` : "/api/tickets";
        const body = ticket?._id ? updateData : formData;

        const res = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            throw new Error("Failed to create or update Ticket.");
        }

        router.refresh();
        router.push("/");
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        if (ticket?._id) {
            setUpdateData({
                ...updateData,
                [e.target.name]: e.target.value,
            })
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    }

    return (
        <div className='py-4 flex justify-center'>
            <form
                className='w-full sm:w-10/12 md:w-8/12 lg:w-6/12 p-4 bg-slate-600'
                onSubmit={handleSubmit}
                method={ticket?._id ? "PUT" : "POST"}
            >
                <h1 className='font-bold text-center'>{ticket?._id ? "Enter Updated Data" : "Create Your Ticket"}</h1>
                <label className=''>Title</label>
                <input
                    className='w-full'
                    id='title'
                    type='text'
                    name='title'
                    value={ticket?._id ? updateData.title : formData.title}
                    required={true}
                    onChange={handleChange}
                />

                <label className=''>Description</label>
                <textarea
                    className='w-full'
                    id='description'
                    name='description'
                    value={ticket?._id ? updateData.description : formData.description}
                    required={true}
                    onChange={handleChange}
                />

                <label className='mt-2'>Category</label>
                <select
                    id="category"
                    className='block'
                    name='category'
                    value={ticket?._id ? updateData.category : formData.category}
                    onChange={handleChange}
                >
                    <option value="Hardware Problem">Hardware Problem</option>
                    <option value="Software Problem">Software Problem</option>
                    <option value="Project Problem">Project</option>
                </select>

                <label>Priority</label>
                <div className=''>
                    <input
                        type='radio'
                        id='priority-1'
                        name='priority'
                        value={1}
                        checked={ticket?._id ? updateData.priority == 1 : formData.priority == 1}
                        onChange={handleChange} />
                    <label
                        className='inline text-xl mr-4 ml-1'>
                        1
                    </label>
                    <input
                        type='radio'
                        id='priority-2'
                        name='priority'
                        value={2}
                        checked={ticket?._id ? updateData.priority == 2 : formData.priority == 2}
                        onChange={handleChange}
                    />
                    <label
                        className='inline text-xl mr-4 ml-1'>2</label>
                    <input
                        type='radio'
                        id='priority-3'
                        name='priority'
                        value={3}
                        checked={ticket?._id ? updateData.priority == 3 : formData.priority == 3}
                        onChange={handleChange}
                    />
                    <label
                        className='inline text-xl mr-4 ml-1'>
                        3
                    </label>
                    <input
                        type='radio'
                        id='priority-4'
                        name='priority'
                        value={4}
                        checked={ticket?._id ? updateData.priority == 4 : formData.priority == 4}
                        onChange={handleChange}
                    />
                    <label className='inline text-xl mr-4 ml-1'>
                        4
                    </label>
                </div>

                <label>Progress</label>
                <input
                    id='progress'
                    className='block w-full'
                    type='range'
                    min="0"
                    max="100"
                    name='progress'
                    value={ticket?._id ? updateData.progress : formData.progress}
                    required={true}
                    onChange={handleChange}
                />

                <label className='mt-1'>Status</label>
                <select id='status' className='block' name='status' value={ticket?._id ? updateData.status : formData.status} onChange={handleChange}>
                    <option value='Not-Started'>Not Started</option>
                    <option value='Started'>Started</option>
                    <option value='Half-Done'>Half Done</option>
                    <option value='Done'>Done</option>
                </select>

                <button
                    type='submit'
                    className='block p-2 mx-auto text-xl font-bold bg-slate-700 text-slate-300 hover:text-slate-400 hover:bg-slate-900 rounded-lg transition-all'
                >
                    {ticket?._id ? "Update Ticket" : "Create Ticket"}
                </button>

            </form>
        </div>
    )
}
