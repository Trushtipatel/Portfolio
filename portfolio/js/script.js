document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // Interactive VAPT workflow.
  const workflowSteps = [
    {
      title: "Reconnaissance",
      description: "Information gathering and initial review of the target scope, exposed assets, and attack surface."
    },
    {
      title: "Attack Surface Discovery",
      description: "Identify domains, subdomains, IP addresses, exposed services, and externally accessible assets within the authorized scope."
    },
    {
      title: "Port & Service Enumeration",
      description: "Enumerate reachable ports and services to understand what is exposed and which services require further review."
    },
    {
      title: "Technology Identification",
      description: "Identify web servers, frameworks, platforms, and other technologies to guide security testing."
    },
    {
      title: "Web Application Testing",
      description: "Assess application behavior, input handling, authentication, authorization, sessions, and common web security risks."
    },
    {
      title: "Vulnerability Validation",
      description: "Safely validate potential findings, remove false positives, and collect clear evidence without exceeding the authorized scope."
    },
    {
      title: "Risk Assessment",
      description: "Evaluate likelihood, impact, and severity to help prioritize the findings that matter most."
    },
    {
      title: "Reporting & Remediation",
      description: "Document findings, evidence, impact, and practical remediation recommendations in a clear report."
    },
    {
      title: "Retesting",
      description: "Retest remediated findings to confirm fixes and identify any remaining exposure."
    }
  ];

  const workflowButtons = document.querySelectorAll(".workflow-step");
  const workflowDetail = document.querySelector(".workflow-detail");

  workflowButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const stepIndex = Number(button.dataset.step);
      const step = workflowSteps[stepIndex];
      if (!step || !workflowDetail) return;

      workflowButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      const heading = workflowDetail.querySelector("h3");
      const paragraph = workflowDetail.querySelector("p");
      if (heading) heading.textContent = step.title;
      if (paragraph) paragraph.textContent = step.description;
    });
  });

  // Project detail modals.
  const openModal = (modal) => {
    if (!modal) return;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    const closeButton = modal.querySelector(".modal-close");
    if (closeButton) closeButton.focus();
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".modal.active")) {
      document.body.classList.remove("modal-open");
    }
  };

  document.querySelectorAll(".project-button[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      openModal(document.getElementById(button.dataset.project));
    });
  });

  document.querySelectorAll("[data-close]").forEach((button) => {
    button.addEventListener("click", () => {
      closeModal(document.getElementById(button.dataset.close));
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(".modal.active").forEach(closeModal);
    }
  });

  // Contact form: sends the message to the Vercel serverless endpoint.
  const contactForm = document.getElementById("contact-form");
  const contactStatus = document.getElementById("contact-status");
  const contactSubmit = document.getElementById("contact-submit");

  if (contactForm && contactStatus && contactSubmit) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!contactForm.reportValidity()) return;

      const formData = new FormData(contactForm);
      const getTrimmedValue = (key) => {
        const value = formData.get(key);
        return typeof value === "string" ? value.trim() : "";
      };

      const data = {
        name: getTrimmedValue("name"),
        email: getTrimmedValue("email"),
        message: getTrimmedValue("message"),
        website: getTrimmedValue("website")
      };

      if (!data.name || !data.email || !data.message) {
        contactStatus.textContent = "Please complete all fields before sending.";
        return;
      }

      contactSubmit.disabled = true;
      contactSubmit.setAttribute("aria-busy", "true");
      contactStatus.textContent = "Sending message...";

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        let result = {};
        try {
          result = await response.json();
        } catch (_) {
          // Keep the generic error message if the server did not return JSON.
        }

        if (!response.ok || !result.success) {
          throw new Error(result.error || "Unable to send your message.");
        }

        contactStatus.textContent = "Thank you! Your message has been sent.";
        contactForm.reset();
      } catch (error) {
        console.error("Contact form error:", error);
        contactStatus.textContent = "Message could not be sent. Please try again later or email pateltrushtiv@gmail.com.";
      } finally {
        contactSubmit.disabled = false;
        contactSubmit.removeAttribute("aria-busy");
      }
    });
  }
});