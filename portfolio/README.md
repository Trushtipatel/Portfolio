# Trushti Patel Portfolio

This project is a static personal portfolio website for Trushti Patel, a cybersecurity professional focused on VAPT, Attack Surface Management, networking, SOC, and security testing.

## 1. Project overview

This portfolio is designed for:

- recruiters looking for cybersecurity talent
- cybersecurity professionals reviewing technical background
- technical interviewers checking security knowledge and work experience

The website is intentionally static and suitable for GitHub Pages hosting. It contains information from the provided resume only, without adding invented certifications, tools, or projects.

## 2. Technologies used

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages for static hosting
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
│   ├── images/
│   └── icons/
│       └── favicon.svg
├── resume/
│   └── Trushti-Patel-Resume.pdf
├── README.md
├── SECURITY.md
├── .gitignore
└── .nojekyll
```

## 4. How to run locally

From the terminal:

```bash
cd portfolio
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also open the `index.html` file directly in a browser, but serving it through a local web server is better because it behaves more like a real website.

## 5. How to upload to GitHub

1. Create a GitHub account if you do not already have one.
2. Sign in to GitHub.
3. Click the green "New repository" button.
4. Choose a repository name such as `trushti-portfolio`.
5. Select "Public" for a simple GitHub Pages setup.
6. Do not initialize the repository with a README if you already have one locally, or you can use your local files and push them to the repository.
7. Open a terminal in the project folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Replace the placeholder values with your actual username and repository name.

## 6. How to enable GitHub Pages

After pushing your project to GitHub:

1. Open your repository on GitHub.
2. Click the "Settings" tab.
3. Open "Pages" in the left sidebar.
4. Under "Source", choose the branch you want to publish, usually `main`.
5. Select the root folder `/` or `/docs` if your site is inside a docs folder.
6. Save the settings.
7. GitHub will provide a live URL for your portfolio.

Your site will usually be available at:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
```

## 7. How to connect a custom domain

If you want to use a custom domain:

1. Buy a domain from a registrar.
2. In your domain provider settings, create DNS records.
3. Point the domain to GitHub Pages using the values GitHub provides.
4. Add the custom domain in the GitHub Pages settings.
5. Enable HTTPS when GitHub shows it as available.

Typical examples include:

- A record to GitHub Pages IPs
- CNAME record for `www` pointing to your GitHub Pages URL

GitHub Pages will usually give you the exact records to use.

## 8. How to update the portfolio

To update the site:

1. Edit the HTML, CSS, or JavaScript files.
2. Save the changes.
3. Commit them:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

GitHub Pages will publish the newest version automatically after a short delay.

## Beginner-friendly networking explanation

### GitHub repository
A GitHub repository is just a project storage space. It stores your files online and tracks version history.

### GitHub Pages
GitHub Pages is a static hosting service from GitHub. It serves your HTML, CSS, JavaScript, and other static files to the public.

### DNS
DNS is the system that translates human-readable names like `example.com` into IP addresses used by computers.

### Domain
A domain is the name you buy, such as `example.com` or `yourname.com`.

### Public IP
A public IP is the address assigned to a machine connected to the internet. Web servers typically use a public IP so other computers can reach them.

### Web server
A web server is software or hardware that listens for web requests and sends files back to the client. In this project, GitHub Pages acts as the web server for the static site.

This is a beginner-friendly way to think about it:

- domain = website name
- DNS = phonebook for names
- public IP = internet address
- web server = service that responds to requests
- GitHub Pages = hosted static website service
- GitHub repository = where the code is stored

## Notes

- This portfolio is static and does not use a backend.
- No secrets or credentials should be added to the frontend.
- This is meant for defensive, authorized, and professional use only.
