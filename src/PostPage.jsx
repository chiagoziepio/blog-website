import { useParams, Link } from "react-router-dom"

const PostPage = ({posts, handleDelete}) => {
  const {id} = useParams();
  const post =  posts.find(dpost => (dpost.id).toString() === id)
  return (
    <div className="postpage">
      <article>
        {post &&
        <>
          <h2 className="title">{post.title}</h2>
          <p className="datetime">{post.datetime}</p>
          <p className="body">{post.body}</p>
          <button className="delete" onClick={()=> handleDelete(post.id)}>Delete post</button>
        </>
      }
      {!post &&
        <>
        <h2>The post doesnt exist</h2>
        <p>
          <Link to={"/"}>return to our home page</Link>
        </p>
        </>
      }
      </article>
      
    </div>
  )
}

export default PostPage