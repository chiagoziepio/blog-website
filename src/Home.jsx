import Feed from "./Feed"

const Home = ({posts}) => {
  return (
    <main className="home">
     
      {posts.length ? (
        <Feed 
          posts={posts}
        />
      ):(
      <p style={{
        color:"black",
        fontSize:"40PX",
        marginLeft:"40%",
        marginTop:"150px"
      }}>No post to display</p>
      )}
    </main>
  )
}

export default Home