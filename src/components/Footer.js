import React from "react";
import "./Footer.css";


class Footer extends React.Component {
	render() {
		return (
			<div className="footer" id="footer">
					<h2>Get in touch!</h2>
				<div className="social-media-icons">
					<a href="https://github.com/Joaouva">
						<img
							className="social-icon"
							src="../../images/GitHub_footer.png"
							alt="My Github"
						/>
					</a>
					<a href="https://www.linkedin.com/in/joaouva/">
						<img
							className="social-icon"
							src="../../images/linkedin_footer.png"
							alt="My Linkedin"
						/>
					</a>
					<a href="mailto: joaouva@gmail.com">
						<img
							className="social-icon"
							src="../../images/email_footer.png"
							alt="My email"
						/>
					</a>
				</div>
				<h4>
					Made with <span>❤️</span>
				</h4>
				<h3>Copyright © 2021 João Uva</h3>
			</div>
		);
	}
}

export default Footer;
