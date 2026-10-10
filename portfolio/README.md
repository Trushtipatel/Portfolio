# Trushti Patel Portfolio

This is a portfolio website for Trushti Patel, hosted on Cloudflare Pages. Its contact form opens the visitor's email app with a prefilled message, so there is no backend, API key, or third-party service to manage.

## 1. Project overview

This portfolio is designed for:

- recruiters looking for cybersecurity talent
- cybersecurity professionals reviewing technical background
- technical interviewers checking security knowledge and work experience

The site contains information from the provided resume only, without adding invented certifications, tools, or projects.

## 2. Technologies used

- HTML5
- CSS3
- Vanilla JavaScript
- Cloudflare Pages for hosting
- SVG favicon placeholder
- PDF resume placeholder

## 3. Folder structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── icons/
│       └── favicon.svg
├── resume/
│   └── Trushti_Resume.pdf
├── _headers
├── README.md
├── SECURITY.md
├── .gitignore
└── .nojekyll
```

## 4. How to run locally

Serve the folder with any static server, or use Wrangler:

```bash
npx wrangler pages dev .
```

Open the local URL printed by Wrangler. No environment variables or secrets are required; the contact form opens the visitor's email app.

## 5. Deploy to Cloudflare Pages

1. Push this project to a GitHub repository.
2. In Cloudflare, open **Workers & Pages** and create a Pages project connected to that repository.
3. Set the project root directory to `portfolio` if the portfolio is inside a parent repository folder; otherwise leave it as `/`.
4. Leave the build command empty and set the build output directory to `.`.
5. Deploy the project.

No bindings, environment variables, or secrets are needed. The contact form opens the visitor's email client with a prefilled message addressed to `pateltrushtiv@gmail.com`.

### If the contact form fails

1. Open the site, press **F12** (or right-click → **Inspect**), and open the **Console**. Submit the form; it should open your email app with everything prefilled.
2. If nothing opens, check that your browser allows `mailto:` links (blocked by Chrome extensions, email-only browsers, or Preview apps).
3. If your email app shows the message in **Drafts** or asks you to confirm, send it from there — that behaviour is set by your email app, not this site.
4. In Cloudflare, open **Workers & Pages → your Pages project → Deployments** and confirm the latest deployment succeeded.

## 6. Connect `trushti.space` from Spaceship

1. Add `trushti.space` as a custom domain in your Cloudflare Pages project.
2. Add the domain to Cloudflare if prompted, then copy the Cloudflare nameservers assigned to it.
3. In Spaceship, open the domain's nameserver settings and replace the current nameservers with the two Cloudflare nameservers.
4. Wait for DNS activation, then return to Cloudflare Pages and confirm the custom domain is active. Add `www.trushti.space` there too if you want the `www` address.
5. Enable or confirm HTTPS in Cloudflare.

## 7. How to update the portfolio

To update the site:

1. Edit the HTML, CSS, or JavaScript files.
2. Save the changes.
3. Commit them:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Cloudflare Pages will publish the newest version automatically after a short delay.

## Beginner-friendly networking explanation

### GitHub repository
A GitHub repository is just a project storage space. It stores your files online and tracks version history.

### Cloudflare Pages
Cloudflare Pages hosts the HTML and CSS for this site.

### DNS
DNS is the system that translates human-readable names like `example.com` into IP addresses used by computers.

### Domain
A domain is the name you buy, such as `example.com` or `yourname.com`.

### Public IP
A public IP is the address assigned to a machine connected to the internet. Web servers typically use a public IP so other computers can reach them.

### Web server
A web server is software or hardware that listens for web requests and sends files back to the client. In this project, Cloudflare Pages serves the website.

This is a beginner-friendly way to think about it:

- domain = website name
- DNS = phonebook for names
- public IP = internet address
- web server = service that responds to requests
- Cloudflare Pages = hosted website
- GitHub repository = where the code is stored

## Notes

- The contact form opens the visitor's email client addressed to `pateltrushtiv@gmail.com`.
- No secrets or credentials should be added to the frontend.
- This is meant for defensive, authorized, and professional use only.
