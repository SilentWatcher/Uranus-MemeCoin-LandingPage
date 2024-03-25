import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/Navbar.css";
import Logo from  '../../assets/Hero_section/logo.png'
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <div className="lgog_box">
                <img loading='lazy' src={Logo} alt="logopng" />
                <h3 className="goldman_regular logo">
                    URANUS
                </h3>
            </div>
			<nav ref={navRef}>
				<a href="#home">Home</a>
				<a href="#about">About</a>
				<a href="#roadmap">Roadmap</a>
				<a href="/#">White Paper</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;