document.addEventListener("DOMContentLoaded", () => {
  // Update footer year.
  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  // Interactive VAPT workflow details.
  const workflowSteps = document.querySelectorAll(".workflow-step");
  const workflowDetail = document.querySelector(".workflow-detail");

  const workflowContent = [
    {
      title: "Reconnaissance",
      description:
        "Information gathering and initial review of the target scope, exposed assets, and attack surface.",
    },
    {
      title: "Attack Surface Discovery",
      description:
        "Identification of exposed domains, subdomains, services, ports, and technologies that may be reachable externally.",
    },
    {
      title: "Port & Service Enumeration",
      description:
        "Review of ports, services, and protocol exposure to understand what is available on the target environment.",
    },
    {
      title: "Technology Identification",
      description:
        "Detection of technologies and software components that may influence attack surface exposure and security posture.",
    },
    {
      title: "Web Application Testing",
      description:
        "Assessment of application behavior, input handling, authentication flows, and security-related weaknesses.",
    },
    {
      title: "Vulnerability Validation",
      description:
        "Confirmation of identified issues and validation of their impact based on the observed system behavior.",
    },
    {
      title: "Risk Assessment",
      description:
        "Evaluation of impact, likelihood, exposure, and remediation priorities based on the verified findings.",
    },
    {
      title: "Reporting & Remediation",
      description:
        "Documentation of findings with evidence, risk context, and recommendations for addressing the identified issues.",
    },
    {
      title: "Retesting",
      description:
        "Confirmation that remediation actions have addressed the reported issues and that the risk has been reduced.",
    },
  ];

  const updateWorkflowDetail = (index) => {
    if (!workflowDetail) {
      return;
    }

    const current = workflowContent[index];
    workflowDetail.innerHTML = `
      <h3>${current.title}</h3>
      <p>${current.description}</p>
    `;
  };

  workflowSteps.forEach((button) => {
    button.addEventListener("click", () => {
      workflowSteps.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      updateWorkflowDetail(Number(button.dataset.step));
    });
  });

  // Project modal controls.
  const modalButtons = document.querySelectorAll(".project-button");
  modalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.project;
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
      }
    });
  });

  const closeButtons = document.querySelectorAll("[data-close]");
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.close;
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(".modal.active").forEach((modal) => {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
      });
    }
  });
});
