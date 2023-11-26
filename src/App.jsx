import { useState, useEffect } from 'react'
import Home from './Home';
import About from './About';
import Newpost from './Newpost';
import PostPage from './PostPage';
import Missing from './Missing';
import Layout from './Layout';
import {Routes,Route, useNavigate} from 'react-router-dom'

function App() {
  const [posts, setPosts] = useState([
    { id:1,
      title:"1st post",
      datetime: "29th October 2023, Sunday 11:20",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi aut, eum vel commodi ab, molestias sapiente deserunt fugiat qui corporis voluptatem excepturi illo, expedita possimus sint distinctio eaque quas. Harum laboriosam repudiandae facilis eveniet nam sapiente odio, officia excepturi!"
      
    },
    {id:2,
      title:"2nd post",
      datetime: "28th October 2023, Sunday 11:20",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi aut, eum vel commodi ab, molestias sapiente deserunt fugiat qui corporis voluptatem excepturi illo, expedita possimus sint distinctio eaque quas. Harum laboriosam repudiandae facilis eveniet nam sapiente odio, officia excepturi!"
      
    },
    {id:3,
      title:"3rd post",
      datetime: "30th October 2023, Sunday 11:20",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi aut, eum vel commodi ab, molestias sapiente deserunt fugiat qui corporis voluptatem excepturi illo, expedita possimus sint distinctio eaque quas. Harum laboriosam repudiandae facilis eveniet nam sapiente odio, officia excepturi!"
      
    },
    {id:4,
      title:"4th post",
      datetime: "29th October 2023, Sunday 11:20",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi aut, eum vel commodi ab, molestias sapiente deserunt fugiat qui corporis voluptatem excepturi illo, expedita possimus sint distinctio eaque quas. Harum laboriosam repudiandae facilis eveniet nam sapiente odio, officia excepturi!"
      
    }
  ])
  const [search, setSearch] = useState("")
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  useEffect(()=>{

  },[posts])
  const navigate = useNavigate();

  const handleDelete = (id)=>{
    const Delpost = posts.filter(post => post.id !== id);
    setPosts(Delpost);
    navigate("/");
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1: 1;
    const datetime = '25th November 2023: 11:15am';
    const newpost = {id ,datetime, title: postTitle, body:postBody }
    const newPostlist = [...posts,newpost]
    setPosts(newPostlist);
    setPostBody("")
    setPostTitle("")
    navigate("/")
  }
  return (
    < Routes>
      <Route path='/' element={<Layout
        search={search}
        setSearch={setSearch}
      />} >
        <Route index element = {<Home 
          posts={posts}
        />}/>
        <Route path='post'>
          <Route index element= {<Newpost 
          postTitle ={postTitle}
          setPostTitle = {setPostTitle}
          postBody ={postBody}
          setPostBody = {setPostBody}
          handleSubmit= {handleSubmit}
          />} />
          <Route path='/post/:id' element={<PostPage
            posts={posts}
            handleDelete={handleDelete}
          />}/>
        </Route>
        <Route path='about' element ={<About />}/>
        <Route path='*'element = {<Missing />}/>
      </Route>
    
    </Routes>
  )
}

export default App
