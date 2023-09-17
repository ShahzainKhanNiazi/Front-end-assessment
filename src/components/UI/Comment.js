import React, { useState } from 'react'
import Reply from './Reply';


const Comment = ( {comment, onRemove, onLike, onReply, removeReply, currentUser} ) => {
    const [isLiked, setIsLiked] = useState(false);
    const [addReply, setAddReply] = useState(false);
    const [replyText, setReplyText] = useState("");

    const canRemoveComment = currentUser === comment.user.id;
  const canRemoveReply = (reply) => currentUser === reply?.user?.id;


    const handleReplySubmit = () => {
        onReply(comment.id, replyText);
        setReplyText('');
      };


    return (
    <div className='flex w-full gap-3 p-3 bg-white'>
        {/* image */}
        <div className='rounded-full w-9 h-9'>
            <img 
            src={comment.user.profilePic}
            alt="user profile"
            className='object-cover w-full rounded-full'
            />
        </div>
        {/*name and comment text */}
        <div className='flex flex-col flex-1 gap-1 text-sm'>
            <span className='font-medium'> {comment.user.name} </span>
            <p className='font-light'>{comment.comment}</p>
            <div className='flex items-center gap-4 font-light'>
                {
                    !isLiked ?
                        <img src='/images/unlike.svg' alt="unlike" className='' onClick={() => {setIsLiked(true); onLike(comment.id, isLiked)}}/>
                    
                     :
                        <img src='/images/like.svg' alt="like" className='' onClick={() => {setIsLiked(false); onLike(comment.id, isLiked)}}/>
                     
                }
                <span className='flex items-center gap-1 cursor-pointer'>
                {comment.likeCount}
                    </span>
                .
                {canRemoveComment ?
                <span className='font-medium capitalize cursor-pointer text-danger-main' onClick={() => onRemove(comment.id)}>remove</span>
                :
                <span className='font-medium capitalize cursor-pointer text-focused' onClick={() => setAddReply(true)}>reply</span>}
                

            </div>

            {(comment.replies?.length > 0) && (
                comment.replies?.map((reply, index) => {
                    return (
                        <Reply canRemoveReply={canRemoveReply(reply)} reply={reply}  removeReply={()  => {removeReply(comment.id, reply.id)} } />
                    
                    )                  
                    
                })
            )}

            

            {/* comment box */}
            {
                addReply && (
                    <div className='w-full p-3 bg-white'>
                <div className='flex items-center p-3'>
                <textarea className='w-full font-light resize-none focus:outline-none' onChange={(e) => {setReplyText(e.target.value)}} placeholder='Write your reply' value={replyText}/>
                <span onClick={handleReplySubmit}>
                    <img src="/images/send.svg" alt="send icon" className=''/>
                </span>

                </div>
                

            </div>
                )
            }

        </div>

    </div>
  )
}

export default Comment