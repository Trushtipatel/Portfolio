# Trushti Patel Portfolio

This is a portfolio website for Trushti Patel, hosted on Cloudflare Pages. Its contact form sends messages straight to Gmail using FormSubmit, so there is no backend, API key, or build step to manage.

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
- FormSubmit for contact-form email delivery
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

Open the local URL printed by Wrangler. No environment variables or secrets are required; the contact form posts directly to FormSubmit.

## 5. Deploy to Cloudflare Pages

1. Push this project to a GitHub repository.
2. In Cloudflare, open **Workers & Pages** and create a Pages project connected to that repository.
3. Set the project root directory to `portfolio` if the portfolio is inside a parent repository folder; otherwise leave it as `/`.
4. Leave the build command empty and set the build output directory to `.`.
5. Deploy the project.

No bindings, environment variables, or secrets are needed. The contact form talks to FormSubmit directly from the browser.

### Activate the contact form (one time)

The first time the form is submitted, FormSubmit emails a confirmation link to `pateltrushtiv@gmail.com`. Open it and click the link, then submit the form once more. After that, every submission arrives in that Gmail inbox.

### If the contact form fails

1. **Activate FormSubmit.** The first submission sends a one-time confirmation email to `pateltrushtiv@gmail.com`. Open it and click the activation link, then submit the form again. Until it is activated, no messages are delivered.
2. Open the site, press **F12** (or right-click → **Inspect**), and select **Network**. Submit the form and select the `formsubmit.co` request. A successful response looks like `{"success":"true", ...}`.
3. If the browser console shows a Content-Security-Policy or CORS error, make sure `portfolio/_headers` still lists `https://formsubmit.co` in `connect-src`.
4. Check the Gmail **Spam** folder; the first FormSubmit message is sometimes filtered.
5. In Cloudflare, open **Workers & Pages → your Pages project → Deployments** and confirm the latest deployment succeeded.

Free FormSubmit submissions are rate-limited and include basic spam filtering. Share only the request's status code and error text when asking for help; never share private credentials.

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
Cloudflare Pages hosts the HTML, CSS, JavaScript, and the contact-form Function for this site.

### DNS
DNS is the system that translates human-readable names like `example.com` into IP addresses used by computers.

### Domain
A domain is the name you buy, such as `example.com` or `yourname.com`.

### Public IP
A public IP is the address assigned to a machine connected to the internet. Web servers typically use a public IP so other computers can reach them.

### Web server
A web server is software or hardware that listens for web requests and sends files back to the client. In this project, Cloudflare Pages serves the website and contact-form Function.

This is a beginner-friendly way to think about it:

- domain = website name
- DNS = phonebook for names
- public IP = internet address
- web server = service that responds to requests
- Cloudflare Pages = hosted website and contact-form Function
- GitHub repository = where the code is stored

## Notes

- The contact form posts to FormSubmit and delivers messages to Gmail.
- No secrets or credentials should be added to the frontend.
- This is meant for defensive, authorized, and professional use only.
