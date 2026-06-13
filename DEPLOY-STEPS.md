# Launch your blog on GitHub Pages + your domain (manual, browser-only)

No software to install. ~15 minutes, plus DNS wait time.
Wherever you see **YOURDOMAIN**, use your real domain (e.g. `priyamwrites.com`).

---

## Step 1 — Create a GitHub account
1. Go to https://github.com and click **Sign up** (skip if you already have an account).
2. Verify your email.

## Step 2 — Create a new repository
1. Click the **+** in the top-right → **New repository**.
2. **Repository name:** `blog` (any name is fine).
3. Set it to **Public** (required for free GitHub Pages).
4. Do **not** add a README/.gitignore (you already have files).
5. Click **Create repository**.

## Step 3 — Upload your site files
1. On the new empty repo page, click the link **"uploading an existing file"**
   (or go to **Add file → Upload files**).
2. Open your `blog website` folder on your computer.
3. Select **everything inside it** — `index.html`, all the other `.html` files,
   `robots.txt`, `sitemap.xml`, and the **`assets`** and **`essays`** folders —
   and drag them into the browser window.
   - Tip: drag the *contents* of the folder, not the folder itself, so `index.html`
     lands at the top level of the repo.
   - The `assets` and `essays` folders must keep their names and structure.
4. Wait for all files to finish uploading (you'll see them listed).
5. Scroll down and click **Commit changes**.

## Step 4 — Turn on GitHub Pages
1. In the repo, click **Settings** (top menu) → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. **Branch:** select `main`, folder `/ (root)`, then click **Save**.
4. Wait 1–2 minutes. A green box appears with your live URL:
   `https://YOURUSERNAME.github.io/blog/` — click it to confirm the site works.

> If images/styles look broken at this `.github.io/blog/` URL, don't worry — that's just
> the subfolder path. It resolves correctly once your custom domain is attached (Step 5).

## Step 5 — Connect your custom domain
1. Still in **Settings → Pages**, find **Custom domain**.
2. Type your domain exactly:
   - Apex domain: `YOURDOMAIN.com`
   - or subdomain: `blog.YOURDOMAIN.com`
3. Click **Save**. GitHub automatically creates a `CNAME` file in your repo for you.

## Step 6 — Point your domain's DNS (at your registrar)
Log in wherever you bought the domain (GoDaddy, Namecheap, Cloudflare, Google Domains, etc.)
and open its **DNS settings**. Add records based on which kind of domain you used:

### A) Apex domain (`YOURDOMAIN.com`)
Add these four **A records** (Host/Name = `@`), pointing to GitHub's IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
(Optional but recommended) also add a **CNAME** record so `www` works:
```
Host: www   →   Value: YOURUSERNAME.github.io
```

### B) Subdomain (`blog.YOURDOMAIN.com`)
Add a single **CNAME** record:
```
Host: blog   →   Value: YOURUSERNAME.github.io
```

Save the DNS changes. They can take anywhere from a few minutes to a few hours to spread.

## Step 7 — Enable HTTPS (the padlock)
1. Back in **Settings → Pages**, wait until the **"Enforce HTTPS"** checkbox is no longer
   greyed out (this can take 15 min – 24 h while GitHub issues your certificate).
2. Tick **Enforce HTTPS**. Done — your site is live at `https://YOURDOMAIN.com`.

---

## After launch — updating the site
To add an essay or edit anything later: open the repo, click the file (or **Add file → Upload files**),
make the change, and **Commit**. GitHub Pages republishes automatically within a minute.

Two quick edits worth doing once you're live:
- In `robots.txt` and `sitemap.xml`, replace `YOURDOMAIN.com` with your real domain.
- See `README.md` for how to add new essays via `assets/js/data.js`.

## If something looks off
- **Blank page / 404:** make sure `index.html` is at the *top level* of the repo, not inside a subfolder.
- **No styles:** confirm the `assets` folder uploaded with its `css` and `js` subfolders intact.
- **Domain not working yet:** DNS just needs more time; recheck in a few hours.
