import React, { useState } from 'react'


const Reply = ({replies}) => {
    const [isLiked, setIsLiked] = useState(false);
    


    return (
    <div className='w-full flex gap-3 bg-white p-3'>
        {/* image */}
        <div className='rounded-full w-9 h-9'>
            <img 
            src='/images/user1.png'
            alt="user profile"
            className='rounded-full w-full object-cover'
            />
        </div>
        {/*name and comment text */}
        <div className='flex-1 flex flex-col gap-1 text-sm'>
            <span className='font-medium'>Maria</span>
            <p className='font-light'>I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?</p>
            <div className='flex items-center gap-4 font-light'>
                {
                    !isLiked ?
                    <span className='flex items-center gap-1 cursor-pointer' onClick={() => setIsLiked(true)}>
                        <img src='/images/unlike.svg' alt="unlike" className=''/>
                        0
                    </span>
                     :
                     <span className='flex items-center gap-1 cursor-pointer'onClick={() => setIsLiked(false)}>
                        <img src='/images/like.svg' alt="like" className=''/>
                        1
                    </span>
                }
                .
                <span className='capitalize text-danger-main font-medium cursor-pointer' onClick={() => ""}>remove</span>

            </div>
        </div>

    </div>
  )
}

export default Reply;