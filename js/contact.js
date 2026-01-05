// Lightweight client-side mailto fallback for contact form
(function () {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("contact-feedback");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim() || "Website Contact";
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      feedback.style.display = "block";
      feedback.textContent = "Please fill in name, email and message.";
      feedback.style.color = "#FFCCCB";
      return;
    }

    // Compose mailto body (no recipient set - update to your email)
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
    const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open user's email client
    window.location.href = mailto;

    feedback.style.display = "block";
    feedback.textContent = "Opening your email client to send the message...";
    feedback.style.color = "#9aa4bf";
  });
})();
