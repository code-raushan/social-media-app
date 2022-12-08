import React from 'react'
import './Post.css'

const Post = (props) => {
    const post=props.post;
  return (
    <div className='post'>
        <div className='title'>
            <h1>{post.title}</h1>
        </div>
        <div className='body'>
            <p>{post.description}</p>
        </div>
        <div className='footer'>
            <p>@{post.username}</p>
        </div>
    </div>
  )
}

export default Post