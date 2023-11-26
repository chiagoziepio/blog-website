import { Link } from "react-router-dom"

const Missing = () => {
  return (
    <div className="missing">
        <h2>page might not exist</h2>
        <p>Reload to confirm</p>
       <p>
        <Link to = '/'>return to our homepage</Link>
       </p>


    </div>
  )
}

export default Missing