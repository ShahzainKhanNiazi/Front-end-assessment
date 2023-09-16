import React, { useEffect, useState } from 'react'
import Comment from '../UI/Comment'

const Comments = () => {
    const userId = "03";
    const [users, setUsers] = [ {name: 'Maria', profilePic : '/images/user1.png'}, 
    {name: 'Alex Benjamin', profilePic : '/images/user2.png'},
    {name: 'Tania', profilePic : '/images/user3.png'}
]
const [comments, setComments] = useState([ {
    id:  1,
    user: {
        id: 1,
        name: "Maria",
        profilePic: "/images/user1.png",
    },
    comment: "I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?",
    likeCount: 0,
    replies: [{id: 1,
        userId: "",
        reply: ""
    }],
},{
    id:  2,
    user: {
        id: 2,
        name: "Alex Benjamin",
        profilePic: "/images/user2.png",
    },
    comment: "Home sweet home! I’m glad you are back. It’s been two year and miss the football matches we have together. A lot has been changed since you left. Let’s meet at the ground tomorrow evening? ",
    likeCount: 0,
    replies: [{id: 1,
        userId: "",
        reply: ""
    }],
},
{
    id:  3,
    user: {
        id: 3,
        name: "Tania",
        profilePic: "/images/user3.png",
    },
    comment: "Hey bud, welcome back to home. It’s so long to see you back again. Would love to hear the travelling stories of yours. Your or my place?",
    likeCount: 0,
    replies: [{id: 1,
        userId: "",
        reply: ""
    }],
}
 ])
const [commentText, setCommentText] = useState("")

const addComment = (text) => {
    const newComment = {
      id: comments.length + 1,
      comment: commentText,
      user: {
        id: 4,
        name: "john doe",
        profilePic: "/images/user4.png",
    },
      likeCount: 0,
      replies: [],
    };
    setComments([...comments, newComment]);
  };

const removeComment = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  const handleLike = (commentId, liked) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likeCount: liked ? comment.likeCount - 1 : comment.likeCount + 1,
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const addReply = (commentId, replyText, user) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, { text: replyText, user: user  }],
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div className='flex justify-center w-full min-h-screen bg-background-color'>
        {/* content */}
        <div className='flex flex-col w-1/2 gap-3 mx-auto py-9'>
            <h3 className='text-xl font-bold'>Comments</h3>

            {/* comments */}
            <div className=''>
                {
                    comments.map((comment, index) => (
                        <Comment key={comment.id} comment={comment}   onRemove={removeComment}
                        onLike={handleLike} onReply={addReply}/> 

                    ))
                }
                

            </div>

            {/* comment box */}
            <div className='w-full p-3 bg-white'>
                <div className='flex items-center p-3'>
                <textarea className='w-full resize-none focus:outline-none' placeholder='Write your comment' onChange={(e) => setCommentText(e.target.value)}/>
                <button className='' onClick={addComment}>
                    <img src="/images/send.svg" alt="send icon" className=''/>
                </button>

                </div>
                

            </div>

        </div>
    </div>
  )
}

export default Comments