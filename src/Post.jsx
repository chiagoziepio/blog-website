import React from 'react'
import { Link } from 'react-router-dom'


const Post = ({post}) => {
  return (
    <article>
        <Link to={`post/${post.id}`}                       className='article_link'>
            <h2 className='title'>{post.title}</h2>
            <p className="datetime">{post.datetime}</p>
        
        </Link>
        <div>
            <p className="body">
                {(post.body).length <= 30 ? post.body : `${(post.body).slice(0,25)}...`
                }
                </p>
        </div>
    </article>
  )
}

export default Post