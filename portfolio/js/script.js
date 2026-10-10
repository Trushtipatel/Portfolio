const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const status = document.querySelector("#contact-status");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = Object.fromEntries(new FormData(contactForm).entries());
    const subject = `Portfolio contact from ${fields.name}`;
    const body = `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`;

    status.textContent = "Opening your email app...";
    window.location.href =
      `mailto:pateltrushtiv@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}