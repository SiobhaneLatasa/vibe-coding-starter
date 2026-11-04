const toggleButton = document.querySelector("#projects-toggle");
const projectsSection = document.querySelector("#projects");
const buttonLabel = toggleButton.querySelector(".button-label");
const buttonIcon = toggleButton.querySelector(".button-icon");

toggleButton.addEventListener("click", () => {
	const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

	projectsSection.hidden = isExpanded;
	toggleButton.setAttribute("aria-expanded", String(!isExpanded));
	buttonLabel.textContent = isExpanded ? "Découvrir mes projets" : "Masquer mes projets";
	buttonIcon.textContent = isExpanded ? "+" : "−";
});
