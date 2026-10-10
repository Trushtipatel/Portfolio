# Security Considerations for a Public Portfolio

This portfolio is a public website hosted on Cloudflare Pages. Its contact form runs in a Cloudflare Pages Function.

## Important rules

- Do not publish API keys, passwords, tokens, or private credentials.
- Do not include internal network details, internal IP ranges, or security environment secrets.
- Do not expose personal data beyond what you intentionally share in the portfolio.
- Keep the site focused only on professional experience, projects, and public information.

## Basic security guidance

### 1. Use only public information

Keep the content limited to details that are already shared in your public professional profile or resume.

### 2. Avoid sensitive data in the frontend

Frontend code can be inspected by anyone. Never put secrets, private access tokens, admin credentials, or authentication keys into HTML, CSS, JavaScript, or configuration files.

### 3. Check links carefully

Only use public links or placeholders. Avoid linking to private systems, internal dashboards, or sensitive infrastructure.

### 4. Keep portfolio content professional

Your portfolio is public and may be reviewed by recruiters, hiring teams, and cybersecurity professionals. The content should be accurate, concise, and professional.

### 5. Review before publishing

Before deploying to Cloudflare Pages or connecting a custom domain, check:

- all links are valid
- there are no broken image paths
- the resume file path exists
- the site works locally
- there are no secrets or private references

## Security testing note

Security testing should always be done in an authorized and ethical manner. This portfolio and security lab are for learning and defensive practice only.

Examples of safe learning include:

- exploring public documentation
- studying web security concepts
- reviewing safe lab setups
- learning about security monitoring and testing tools in controlled environments

Do not test or scan systems that you do not own or are not explicitly authorized to test.

## Defensive mindset

This portfolio reflects a defensive and professional cybersecurity approach. It is a place to document learning, practice, and career growth without exposing private or sensitive information.
