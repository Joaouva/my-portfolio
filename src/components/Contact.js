import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));


export default function Contact() {
	const classes = useStyles();

 const notify = () =>
		toast(`Message Sent!`, {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	

	return (
		<Container>
			<h2>Get in touch!</h2>
			<hr className="tilte-line"></hr>
			<form name="contact" method="POST" data-netlify="true" action="/">
				<input type="hidden" name="form-name" value="contact" />
				<div className="Contact-form">
					<div className="col-xs-12">
						<div className="styled-input wide">
							<input type="text" name="name" required />
							<label>Name</label>
						</div>
					</div>
					<div className="col-xs-12">
						<div className="styled-input wide">
							<input type="text" name="email" required />
							<label>Email</label>
						</div>
					</div>
					<div className="col-xs-12">
						<div className="styled-input wide">
							<textarea name="message" required></textarea>
							<label>Message</label>
						</div>
					</div>
					<div className="col-xs-12">
						<Button
							variant="contained"
							color="default"
							size="large"
							type="submit"
							className={classes.button}
							id="submit-button"
							onClick={notify}
						>
							Send
						</Button>
						<ToastContainer />
					</div>
				</div>
			</form>
		</Container>
	);
}
