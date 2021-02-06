import React from "react";
import Typewriter from "typewriter-effect";
import "./Header.css";


class Header extends React.Component {

	render() {
        return (
			<div className="header-component">
				<div className="header-section">
					<div className="avatar">
						<img src="../../images/JU.jpg" alt="Avatar" />
					</div>
					<section className="typewriter-section">
						<div className="typewriter">
							<div></div>
							<Typewriter
								options={{
									autoStart: true,
									loop: true,
									delay: 100,
								}}
								onInit={(typewriter) => {
									typewriter
										.typeString("<h1> Hi, I'm João.</h1>")
										.callFunction(() => {
										})
										.pauseFor(200)
										.deleteChars(13)
										.typeString(
											"<h1>I'm a Web Developer.</h1>"
										)
										.pauseFor(200)
										.deleteChars(20)
										.typeString("<h1>I'm creative.</h1>")
										.pauseFor(200)
										.deleteChars(13)
										.typeString(
											"<h1>I love to Develop.</h1>"
										)
										.callFunction(() => {
										})
										.start();
								}}
							/>
						</div>
					</section>
					<div className="header-text-div">
						<h2>Welcome!</h2>
						<h3>Scroll down to know more about me</h3>
					</div>
					<div className="scrolldown-wrapper">
						<div className="scrolldown">
							<svg height="30" width="10">
								<circle
									className="scrolldown-p1"
									cx="5"
									cy="15"
									r="2"
								/>
								<circle
									className="scrolldown-p2"
									cx="5"
									cy="15"
									r="2"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;