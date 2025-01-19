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
const github_output = document.getElementById("github_output");

generate_button.addEventListener("click", (event) => {
	event.preventDefault();
	// Assign default element variables into an array:
	let default_elements = [heading_text_default, subheading_text_default, form_container];

	// Dynamically hide default element items by looping through an array:
	for (let index = 0; index < default_elements.length; index++) {
		element_item = default_elements[index];
		element_item.style.display = "none";
	}
	output_container.style.display = "block"; // Set output container to be displayed.
});
