import logo from '../Assets/AR - logo.svg'

const Navbar = () => {
    return (  
    <nav className="navbar">
        <img src={logo} className="nav-logo" alt="logo"/>
        <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#qhse">QHSE</a>
        <a href="#news">News</a>
        <a href="#career">Career</a>
        <a href="#contact">Contact Us</a>
        </div>
    </nav>);
}
 
export default Navbar;