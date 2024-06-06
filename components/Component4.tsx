import { error } from 'console';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const Component4 = () => {
    const [data, setData] = useState<Post | null>(null);
    const [postId, setPostId] = useState(1);

    useEffect(() => {
        // Data fetch from external source
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json()) // Get response from database and convert to JSON
            .then(data => setData(data)) // Set the data
            .catch((error) => {
                console.log(error); // Log the error
            });
    }, [postId]);

    return (
        <div className='flex flex-col gap-3'>
            <div className='w-[500px] bg-slate-200 rounded-lg p-10 shadow-lg border-black/25'>

                {/* {data?(<></>):(<></>)} */}
                {data?( <h1 className='font-bold text-xl border border-gray-300 border-b-2'>{data?.title}</h1>):(<>Loading...</>)}
               
                <h2>{data?.body}</h2>
            </div>
            <div className='flex justify-between'>
                <Button className={cn('',{'invisible':postId===1})} onClick={() => { if (postId > 1) setPostId(postId - 1); }}>Previous</Button>
                <Button onClick={() => setPostId(postId + 1)}>Next</Button>
            </div>
        </div>
    );
};

export default Component4;
