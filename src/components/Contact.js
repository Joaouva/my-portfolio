import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container"
import "./Contact.css";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));


export default function Contact() {
	const classes = useStyles();

	const [success, setSuccess] = useState(false);

	useEffect(() => {
		if (window.location.search.includes("success=true")) {
			setSuccess(true);
		}
	}, []);
	
	return (
		<Container>
			<h2>Get in touch!</h2>
			{success && (
				<p style={{ color: "green" }}>Thanks for your message! </p>
			)}
			<hr className="tilte-line"></hr>
			<form
				name="contact"
				method="POST"
				data-netlify="true"
				action="?success=true"
			>
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
						>
							Send
						</Button>
					</div>
				</div>
			</form>
		</Container>
	);
}
