import React from "react";
import "./AboutMe.css";
import ScrollTop from "./ScrollTop";



class AboutMe extends React.Component {

		render() {
		return (
			<div className="about-component">
				<h1 className="title" id="profile">
					Profile
				</h1>
				<hr className="tilte-line"></hr>
				<div className="about-main-div">
					<div className="about-text">
						<h4 className="skills-title">About Me</h4>
						<p>
							After a decade working on sales and management roles<span> </span>
							<span style={{ color: "var(--highlightTextColor" }}>I decided to switch my career and pursue my long
							lost love: develop things for the web and became a
							Web Developer</span>...and look at me now with my own
							website!<br></br>Graduated @ Ironhack, I'm now a
							proud Web Developer <span> </span>
							<span style={{ color: "var(--highlightTextColor" }}>
								currently working at Studio Graphene and helping making awesome things. 
							</span>
							<span> </span>I like to fix the little details and
							build optimized web apps that work on any device
							with new features that can amaze everyone. I
							especially love to work in a team and develop great
							things together. It's always better to celebrate
							success with others!
						</p>
					</div>
					<div className="about-photo">
						<img src="../../images/AboutMe.png" alt="me" />
						<h4>Hello there!</h4>
						<p>I'm João and I'm a Web Developer based in Lisbon.</p>
					</div>
					<div className="about-details">
						<h4 className="skills-title">Skills</h4>
						<hr className="tilte-line"></hr>
						<div className="tech-stack-div">
							<div className="sub-title-tech-stack">
								<h4>Tech Stack</h4>
								<hr className="sub-title-hr"></hr>
							</div>
							<div className="container">
								<div className="card">
									<div className="face face1">
										<div className="content">
											<div className="icon">
												<img
													className="card-image"
													src="../../images/js.png"
													alt="me"
												/>
											</div>
										</div>
									</div>
									<div className="face face2">
										<div className="content">
											<h3>Javascript</h3>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="face face1">
										<div className="content">
											<div className="icon">
												<img
													className="card-image"
													src="../../images/react.png"
													alt="me"
												/>
											</div>
										</div>
									</div>
									<div className="face face2">
										<div className="content">
											<h3>React</h3>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="face face1">
										<div className="content">
											<div className="icon">
												<h2 className="ts-logo">TS</h2>
											</div>
										</div>
									</div>
									<div className="face face2">
										<div className="content">
											<h3>Typescript</h3>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="face face1">
										<div className="content">
											<div className="icon">
												<img
													className="card-image"
													src="../../images/node.png"
													alt="me"
												/>
											</div>
										</div>
									</div>
									<div className="face face2">
										<div className="content">
											<h3>Node.js</h3>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="face face1">
										<div className="content">
											<div className="icon">
												<img
													className="card-image"
													src="../../images/mongo.png"
													alt="me"
												/>
											</div>
										</div>
									</div>
									<div className="face face2">
										<div className="content">
											<h3>MongoDB</h3>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="face face1">
										<div className="content">
											<div className="icon">
												<img
													className="card-image"
													src="../../images/html.png"
													alt="me"
												/>
											</div>
										</div>
									</div>
									<div className="face face2">
										<div className="content">
											<h3>HTML</h3>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="face face1">
										<div className="content">
											<div className="icon">
												<img
													className="card-image"
													src="../../images/css.png"
													alt="me"
												/>
											</div>
										</div>
									</div>
									<div className="face face2">
										<div className="content">
											<h3>CSS</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="tech-stack-div">
							<div>
								<h4>Other Skills</h4>
								<hr className="sub-title-hr"></hr>
							</div>
							<div className="container">
								<div className="card">
									<div className="face face1">
										<div className="content">
											<div className="icon">
												<img
													className="card-image"
													src="../../images/agile.png"
													alt="me"
												/>
											</div>
										</div>
									</div>
									<div className="face face2">
										<div className="content">
											<h3>Agile & Scrum</h3>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="face face1">
										<div className="content">
											<div className="icon">
												<img
													className="card-image"
													src="../../images/command.png"
													alt="me"
												/>
											</div>
										</div>
									</div>
									<div className="face face2">
										<div className="content">
											<h3>Command Line</h3>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="face face1">
										<div className="content">
											<div className="icon">
												<img
													className="card-image"
													src="../../images/GitHub.png"
													alt="me"
												/>
											</div>
										</div>
									</div>
									<div className="face face2">
										<div className="content">
											<h3>GitHub</h3>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="face face1">
										<div className="content">
											<div className="icon">
												<img
													className="card-image"
													src="../../images/teamwork.png"
													alt="me"
												/>
											</div>
										</div>
									</div>
									<div className="face face2">
										<div className="content">
											<h3>Team Work</h3>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="face face1">
										<div className="content">
											<div className="icon">
												<img
													className="card-image"
													src="../../images/responsive.png"
													alt="me"
												/>
											</div>
										</div>
									</div>
									<div className="face face2">
										<div className="content">
											<h3>Responsive Design</h3>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="face face1">
										<div className="content">
											<div className="icon">
												<img
													className="card-image"
													src="../../images/bootstrap.png"
													alt="me"
												/>
											</div>
										</div>
									</div>
									<div className="face face2">
										<div className="content">
											<h3>Bootstrap</h3>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="face face1">
										<div className="content">
											<div className="icon">
												<img
													className="card-image"
													src="../../images/photoshop.png"
													alt="me"
												/>
											</div>
										</div>
									</div>
									<div className="face face2">
										<div className="content">
											<h3>Photoshop</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ScrollTop />
			</div>
		);
	}
}

export default AboutMe;
