import { useState, useEffect } from 'react'
import Home from './Home';
import About from './About';
import Newpost from './Newpost';
import PostPage from './PostPage';
import Missing from './Missing';
import Layout from './Layout';
import {Routes,Route, useNavigate} from 'react-router-dom'
import api from './api/posts'
import {format} from 'date-fns'



function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [searchOutcome, setSearchOutcome] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetechPosts = async ()=>{
     try{
      const response = await api.get('/posts');
     
      if(response && response.data) setPosts(response.data)
     }catch(err){
      if(err.response){
          console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.header);
      }else{
        console.log(`Error:${err.message}`);
      }
      
     }

    }
    fetechPosts();
  },[])

  useEffect(()=>{
    const searchResult= posts.filter(post=>((post.body).toLowerCase()).includes(search.toLowerCase()) ||((post.title).toLowerCase()).includes(search.toLowerCase())  )
    setSearchOutcome(searchResult.reverse())
  },[posts, search])

 

  const handleDelete = (id)=>{
    const Delpost = posts.filter(post => post.id !== id);
    setPosts(Delpost);
    navigate("/");
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1: 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newpost = {id , title: postTitle,datetime, body:postBody }
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
          posts={searchOutcome}
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
