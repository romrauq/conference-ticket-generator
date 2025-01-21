const heading_text_default = document.getElementById("default-heading-text");
const subheading_text_default = document.getElementById("default-subheading-text");
const form_container = document.getElementById("form-container");
const name_input = document.getElementById("fullname-input");
const email_input = document.getElementById("email-input");
const github_input = document.getElementById("github-input");
const image_size_text = document.getElementById("image-size-text");
const upload_alert = document.getElementById("upload-alert");
const name_alert = document.getElementById("name-alert");
const email_alert = document.getElementById("email-alert");
const github_alert = document.getElementById("github-alert");
const generate_button = document.getElementById("generate-button");
const output_container = document.getElementById("output-container");
const name_output = document.getElementById("name-output");
const email_output = document.getElementById("email-output");
const user_image = document.getElementById("user-image");
const github_output = document.getElementById("github-output");
const name_output_ticket = document.getElementById("name-output-ticket");

generate_button.addEventListener("click", (event) => {
	event.preventDefault();
	let name_valid = false;
	let email_valid = false;
	let github_valid = false;

	// Assign default element variables into an array:
	let default_elements = [heading_text_default, subheading_text_default, form_container];

	// Function to validate email
	function validateEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	// Check if the name input field has been filled:
	if (name_input.value != "") {
		name_input.style.border = "1px solid hsl(252, 6%, 83%)";
		name_alert.style.display = "none";
		name_valid = true;
	} else {
		name_input.style.border = "1px solid hsl(7, 71%, 60%)";
		name_alert.style.display = "block";
		name_valid = false;
	}
	const email_value = email_input.value.trim();

	// Check if valid email has been provided in the input field:
	if (validateEmail(email_value)) {
		email_input.style.border = "1px solid hsl(252, 6%, 83%)";
		email_alert.style.display = "none";
		email_valid = true;
	} else {
		email_input.style.border = "1px solid hsl(7, 71%, 60%)";
		email_alert.style.display = "block";
		email_valid = false;
	}

	// Check if the github username input field has been filled:
	if (github_input.value != "") {
		github_input.style.border = "1px solid hsl(252, 6%, 83%)";
		github_alert.style.display = "none";
		github_valid = true;
	} else {
		github_input.style.border = "1px solid hsl(7, 71%, 60%)";
		github_alert.style.display = "block";
		github_valid = false;
	}

	if (name_valid && email_valid && github_valid) {
		// Dynamically hide default element items by looping through an array:
		for (let index = 0; index < default_elements.length; index++) {
			element_item = default_elements[index];
			element_item.style.display = "none";
		}
		// Set output container to be displayed:
		output_container.style.display = "flex";
		name_output.innerHTML = name_input.value;
		name_output_ticket.innerHTML = name_input.value;
		email_output.innerHTML = email_input.value;
		github_output.innerHTML = github_input.value;
	}

	console.log(name_input.value);
});
