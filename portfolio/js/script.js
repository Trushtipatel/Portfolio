const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const status = document.querySelector("#contact-status");
  const submitButton = document.querySelector("#contact-submit");
  const endpoint = "https://formsubmit.co/ajax/pateltrushtiv@gmail.com";

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "Sending your message...";
    submitButton.disabled = true;

    const fields = Object.fromEntries(new FormData(contactForm).entries());

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          message: fields.message,
          _replyto: fields.email,
          _subject: "New message from trushti.space",
          _template: "table",
          _captcha: "false",
          _honey: fields._honey || ""
        })
      });

      const responseText = await response.text();
      let result;

      try {
        result = JSON.parse(responseText);
      } catch {
        status.textContent =
          `The contact service returned an unexpected response (HTTP ${response.status}). ` +
          "Please email pateltrushtiv@gmail.com directly.";
        return;
      }

      const succeeded = result.success === true || result.success === "true";

      if (!response.ok || !succeeded) {
        status.textContent =
          result.message || result.error || "Your message could not be sent.";
        return;
      }

      contactForm.reset();
      status.textContent = "Thanks! Your message has been sent.";
    } catch {
      status.textContent =
        "Could not reach the contact service. Check your connection and try again.";
    } finally {
      submitButton.disabled = false;
    }
  });
}
