import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    return(
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="navbar-logo">
                    <h1>DAVRON</h1>
                </div>
                <div className="navbar-links">
                    <Link
                        activeClass="active"
                        className="navbar-link"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >Home</Link>
                    <Link
                        activeClass="active"
                        className="navbar-link"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-190}
                        duration={1000}
                    >About</Link>
                    <Link
                        activeClass="active"
                        className="navbar-link"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={-190}
                        duration={1000}
                    >Recent works</Link>
                    <Link
                        activeClass="active"
                        className="navbar-link"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-190}
                        duration={1000}
                    >Contact</Link>
                    <Link
                        activeClass="active"
                        className="navbar-link-button"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-190}
                        duration={1000}
                    >Let's talk</Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;