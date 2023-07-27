import React from "react";
import "./Footer.css";
import Contact from "./Contact";

class Footer extends React.Component {
	year = new Date().getFullYear();

	render() {
		return (
			<div className="footer-component">
				<div className="footer" id="footer">
					<div className="contact-form-div">
						<Contact />
					</div>
					<div className="icons">
						<a href="https://github.com/Joaouva">
							<img
								className="icon"
								src="../../images/GitHub_footer.png"
								alt="My Github"
							/>
						</a>
						<a href="https://www.linkedin.com/in/joaouva/">
							<img
								className="icon"
								src="../../images/linkedin_footer.png"
								alt="My Linkedin"
							/>
						</a>
						<a href="mailto: joaouva@gmail.com">
							<img
								className="icon"
								src="../../images/email_footer.png"
								alt="My email"
							/>
						</a>
					</div>
					<h4>
						Made with <span>❤️</span>
					</h4>
					<h3>Copyright © {this.year} João Uva</h3>
				</div>
			</div>
		);
	}
}

export default Footer;
