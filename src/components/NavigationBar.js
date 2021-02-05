import React from "react";
import "./NavigationBar.css"
import { Link } from "react-scroll";
import { elastic as Menu } from 'react-burger-menu';


export default class NavigationBar extends React.Component {
	showSettings(event) {
		event.preventDefault();
	}

	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
		};
	}

	handleStateChange(state) {
		this.setState({ menuOpen: state.isOpen });
	}

	closeMenu() {
		this.setState({ menuOpen: false });
	}

	toggleMenu() {
		this.setState((state) => ({ menuOpen: !state.menuOpen }));
	}

	render() {
		// NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
		return (
			<Menu
				right
				isOpen={this.state.menuOpen}
				onStateChange={(state) => this.handleStateChange(state)}
			>
				<Link
					activeClass="active"
					to="profile"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					onClick={() => this.closeMenu()}
					className="menu-item"
				>
					About
				</Link>

				<Link
					activeClass="active"
					to="projects"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					onClick={() => this.closeMenu()}
					className="menu-item"
				>
					Projects
				</Link>

				<Link
					activeClass="active"
					to="footer"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					onClick={() => this.closeMenu()}
					className="menu-item"
				>
					Contacts
				</Link>

				<div className="icons-navbar">
					<p> Get in Touch</p>
					<a href="https://github.com/Joaouva">
						<img
							className="icon-nav"
							src="../../images/GitHub.png"
							alt="Github"
						/>
					</a>
					<a href="https://www.linkedin.com/in/joaouva/">
						<img
							className="icon-nav"
							src="../../images/linkedin.png"
							alt="Linkedin"
						/>
					</a>
					<a href="mailto: joaouva@gmail.com">
						<img
							className="icon-nav"
							src="../../images/email.png"
							alt="email"
						/>
					</a>
				</div>
			</Menu>
		);
	}
}