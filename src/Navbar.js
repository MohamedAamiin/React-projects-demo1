import { Link  } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
   <h1>Hargaysa Blog</h1>
       <div className="links">
    <Link to="/">Home</Link>
    <Link to="/Login">New Blog</Link>
       </div>
    </nav>
  )
}

export default Navbar
