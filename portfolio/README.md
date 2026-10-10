# Trushti Patel Portfolio

This is a portfolio website for Trushti Patel, hosted on Cloudflare Pages. Its contact form uses a Cloudflare Pages Function to send messages through MailerSend.

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
- Cloudflare Pages Functions for the contact form
- MailerSend for contact-form email delivery
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
├── functions/
│   └── api/
│       └── contact.js
├── assets/
│   └── icons/
│       └── favicon.svg
├── resume/
│   └── Trushti_Resume.pdf
├── README.md
├── SECURITY.md
├── .gitignore
└── .nojekyll
```

## 4. How to run locally

Create a `.dev.vars` file in the project folder with your MailerSend settings:

```bash
MAILERSEND_API_KEY=your_mailersend_api_key
CONTACT_TO_EMAIL=your_email@example.com
MAILERSEND_FROM_EMAIL=your_verified_sender@trushti.space
```

Start the local Cloudflare Pages development server:

```bash
npx wrangler pages dev .
```

Open the local URL printed by Wrangler. `.dev.vars` is ignored by Git; never publish your MailerSend API key.

## 5. Deploy to Cloudflare Pages

1. Push this project to a GitHub repository.
2. In Cloudflare, open **Workers & Pages** and create a Pages project connected to that repository.
3. Set the project root directory to `portfolio` if the portfolio is inside a parent repository folder; otherwise leave it as `/`.
4. Leave the build command empty and set the build output directory to `.`.
5. Deploy the project. Cloudflare Pages detects the `functions` directory and publishes `/api/contact`.
6. In the Pages project settings, add these bindings under **Settings → Variables and Secrets**:
   - `MAILERSEND_API_KEY` — a secret containing your MailerSend API key
   - `CONTACT_TO_EMAIL` — the inbox that should receive contact messages
   - `MAILERSEND_FROM_EMAIL` — a sender address verified with MailerSend
7. Redeploy after adding or changing the bindings.

The contact form runs in Cloudflare's JavaScript/Workers runtime, not a standalone Node.js server. No API key belongs in the browser code.

### If the contact form fails

1. Open the site, press **F12** (or right-click → **Inspect**), and select **Network**. Submit the contact form and select the `/api/contact` request. Note its HTTP status and response.
2. In Cloudflare, open **Workers & Pages → your Pages project → Deployments**. Confirm the latest production deployment succeeded and its source includes `functions/api/contact.js`. If the repository has `portfolio` as a subfolder, the Pages project root must be `portfolio`.
3. Open the Pages project’s **Functions/Logs** view and inspect the request at the same time you submit the form.
4. If the response says email service is not configured, add `MAILERSEND_API_KEY`, `CONTACT_TO_EMAIL`, and `MAILERSEND_FROM_EMAIL` to the **Production** environment, then redeploy.
5. If the response says email could not be sent, check the Function logs and the MailerSend account. Make sure the sender address/domain in `MAILERSEND_FROM_EMAIL` is verified with MailerSend and its required DNS records have been added.

When asking for help, share only the request's status code and the relevant error text from Cloudflare logs. Do not share API keys, passwords, or `.env`/`.dev.vars` contents.

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

- The contact form runs in a Cloudflare Pages Function.
- No secrets or credentials should be added to the frontend.
- This is meant for defensive, authorized, and professional use only.
