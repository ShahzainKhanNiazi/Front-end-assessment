import React, { useState } from 'react'


const Reply = ({reply, canRemoveReply, removeReply}) => {
    const [isLiked, setIsLiked] = useState(false);
    


    return (
    <div className='flex w-full gap-3 p-3 bg-white'>
        {/* image */}
        <div className='rounded-full w-9 h-9'>
            <img 
            src={reply.user.profilePic}
            alt="user profile"
            className='object-cover w-full rounded-full'
            />
        </div>
        {/*name and comment text */}
        <div className='flex flex-col flex-1 gap-1 text-sm'>
            <span className='font-medium'>{reply.user.name}</span>
            <p className='font-light'>{reply.text}</p>
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
                {canRemoveReply && <span className='font-medium capitalize cursor-pointer text-danger-main' onClick={removeReply}>remove</span>}

            </div>
        </div>

    </div>
  )
}

export default Reply;