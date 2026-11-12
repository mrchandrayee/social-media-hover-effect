const socialLinks = document.querySelectorAll(".social-link");
const socialName = document.querySelector("#socialName");

socialLinks.forEach(link => {
  const showName = () => { socialName.textContent = link.dataset.name; };
  const resetName = () => { socialName.textContent = "social"; };
  link.addEventListener("mouseenter", showName);
  link.addEventListener("focus", showName);
  link.addEventListener("mouseleave", resetName);
  link.addEventListener("blur", resetName);

  // Demo links stay on this page rather than navigating away.
  link.addEventListener("click", event => {
    event.preventDefault();
    showName();
  });
});
