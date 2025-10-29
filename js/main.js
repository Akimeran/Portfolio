// Navigation active link
(function () {
  const page = document.body.dataset.page;
  document.querySelectorAll(".nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href && href.includes(page)) a.classList.add("active");
    if (page === "home" && href === "index.html") a.classList.add("active");
  });
})();

// Contact form validation & display
(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const output = document.getElementById("output");

  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    const contact = form.contact.value;

    // Basic validations
    const errors = [];
    if (!name) errors.push("Please enter your full name.");
    if (!email || !isEmail(email))
      errors.push("Please enter a valid email address.");
    if (!message || message.length < 10)
      errors.push("Message must be at least 10 characters.");

    if (errors.length) {
      alert(errors.join("\n"));
      return;
    }

    // Display data on page
    output.innerHTML = `
      <h3>Submitted Data</h3>
      <table>
        <tbody>
          <tr><th style="text-align:left; padding-right:1rem;">Name</th><td>${name}</td></tr>
          <tr><th style="text-align:left; padding-right:1rem;">Email</th><td>${email}</td></tr>
          <tr><th style="text-align:left; padding-right:1rem;">Subject</th><td>${
            subject || "-"
          }</td></tr>
          <tr><th style="text-align:left; padding-right:1rem;">Preferred Contact</th><td>${contact}</td></tr>
          <tr><th style="text-align:left; padding-right:1rem;">Message</th><td>${message.replace(
            /</g,
            "&lt;"
          )}</td></tr>
        </tbody>
      </table>
    `;

    // Optional: reset form after display
    // form.reset();
  });
})();

// Hamburger menu toggle
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-wrap");
  if (!toggle || !nav) return; // only run if elements exist

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    // Optional: toggle aria-expanded for accessibility
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
  });
})();
