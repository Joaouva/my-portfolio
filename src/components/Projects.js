import React from "react";
import "./Projects.css";

class Projects extends React.Component {
	render() {
		return (
			<div className="projects-component">
				<div className="projects-main-div">
					<h1 className="title" id="projects">
						Projects
					</h1>
					<hr className="tilte-line"></hr>
					<div className="projects-content-div">
						<div className="project-item">
							<div className="label-project">
								<h2>Bookish</h2>
							</div>
							<div className="container-project">
								<div className="img-container-project">
									<img
										src="../../images/bookish.png"
										alt=""
									/>
								</div>
								<ul className="project-more">
									<li>
										<a href="https://lebookish.herokuapp.com/">
											<button
												type="button"
												className="btn btn-danger"
											>
												Live
											</button>
										</a>
									</li>
									<li>
										<a href="https://github.com/Joaouva/bookini-client">
											<button
												type="button"
												className="btn btn-dark"
											>
												Code
											</button>
										</a>
									</li>
								</ul>
								<div className="user-info">
									<h2>Bookish</h2>
									<span>
										Our loved app with a curated selection
										of books
									</span>
								</div>
							</div>
						</div>
						<div className="project-item">
							<div className="label-project">
								<h2>KinderGarden</h2>
							</div>
							<div className="container-project">
								<div className="img-container-project">
									<img src="../../images/kinderGarden.png" alt="" />
								</div>
								<ul className="project-more">
									<li>
										<a href="https://joaouva.github.io/schools/">
											<button
												type="button"
												className="btn btn-danger"
											>
												Live
											</button>
										</a>
									</li>
									<li>
										<a href="https://github.com/Joaouva/schools">
											<button
												type="button"
												className="btn btn-dark"
											>
												Code
											</button>
										</a>
									</li>
								</ul>
								<div className="user-info">
									<h2>Kinder Garden</h2>
									<span>
										Was searching a new school for my daughter, why not making an app?
									</span>
								</div>
							</div>
						</div>
						<div className="project-item">
							<div className="label-project">
								<h2>Spacehack</h2>
							</div>
							<div className="container-project">
								<div className="img-container-project">
									<img
										src="../../images/spacehack.png"
										alt=""
									/>
								</div>
								<ul className="project-more">
									<li>
										<a href="https://spacehack.netlify.app/">
											<button
												type="button"
												className="btn btn-danger"
											>
												Live
											</button>
										</a>
									</li>
									<li>
										<a href="https://github.com/Joaouva/Game-Space-Creatures">
											<button
												type="button"
												className="btn btn-dark"
											>
												Code
											</button>
										</a>
									</li>
								</ul>
								<div className="user-info">
									<h2>Spacehack</h2>
									<span>
										My first creation, it has a special
										place in my heart ❤️
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
