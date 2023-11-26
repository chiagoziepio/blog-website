

const Newpost = ({postTitle,setPostTitle, postBody, setPostBody, handleSubmit}) => {
  return (
    <div className="newpost">
      <h2>New post</h2>
      <form className="newpost-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          required
          value={postTitle}
          onChange={(e)=> setPostTitle(e.target.value)}
          placeholder="post title"
        />
        <textarea 
          cols="30" 
          rows="10"
          value={postBody}
          onChange={(e)=> setPostBody(e.target.value)}
          placeholder="write your post"
          ></textarea>
          <button type="submit" onClick={()=>handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default Newpost