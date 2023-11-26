import { Link } from "react-router-dom"



const Nav = ({search, setSearch}) => {
  return (
    <nav className="nav">
      <form className="form" onSubmit={(e)=> e.preventDefault}>
        <input 
          type="text"
          placeholder="search posts"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
        />
      </form>
      <ul className="Nav_ul">
        <li>
          <Link to= "/" className="link">Home</Link>
        </li>
        <li>
          <Link to= "post" className="link">Post</Link>
        </li>
        <li>
          <Link to= "about" className="link">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav