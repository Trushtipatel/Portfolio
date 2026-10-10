const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const status = document.querySelector("#contact-status");
  const submitButton = document.querySelector("#contact-submit");

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "Sending your message...";
    submitButton.disabled = true;

    const fields = Object.fromEntries(new FormData(contactForm).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields)
      });
      const responseText = await response.text();
      let result;

      try {
        result = JSON.parse(responseText);
      } catch {
        status.textContent =
          `The contact service returned an unexpected response (HTTP ${response.status}). ` +
          "Check the Cloudflare Pages deployment and Functions logs.";
        return;
      }

      if (!response.ok || !result.success) {
        status.textContent = result.error || "Your message could not be sent.";
        return;
      }

      contactForm.reset();
      status.textContent = "Thanks! Your message has been sent.";
    } catch {
      status.textContent =
        "Could not reach the contact service. Check your connection and the Cloudflare Pages deployment.";
    } finally {
      submitButton.disabled = false;
    }
  });
}
