# Essays by Smita — your personal publishing platform

A fast, SEO-friendly static website for essays, with a digital garden, journal, book notes,
case studies, quotes, portfolio, and newsletter. Built with plain HTML, CSS, and JavaScript —
**no build step, no framework, no Node required.** You launch it by uploading the folder.

---

## What's inside

```
blog website/
├── index.html          ← Home (hero, featured, latest, topics, favorites, daily quote, newsletter, search)
├── essays.html         ← Essay Library (grid/list, categories, search, sort)
├── garden.html         ← Digital Garden (unfinished thoughts)
├── journal.html        ← Journal (reflections, reviews)
├── book-notes.html     ← Book Notes (summary, lessons, quote, rating)
├── case-studies.html   ← Case Studies (company/startup breakdowns)
├── quotes.html         ← Quotes wall + generator
├── portfolio.html      ← Portfolio + dashboard stats
├── about.html          ← About + timeline
├── contact.html        ← Contact form
├── newsletter.html     ← Newsletter signup
├── essays/
│   └── the-discipline-of-attention.html   ← Sample full essay (reading experience)
└── assets/
    ├── css/style.css   ← All styling + light/dark themes
    └── js/
        ├── data.js     ← YOUR CONTENT lives here (essays, quotes, books, notes…)
        └── main.js     ← Shared behavior (nav, theme, search, reader tools)
```

## Features included
- Light / dark mode (remembers your choice)
- Reading experience: progress bar, table of contents, reading-time, 6 fonts, adjustable text size,
  text-to-speech ("audio version"), bookmark / save-for-later, share-a-quote
- Search, category filters, sorting (newest / most viewed / most liked / longest)
- Daily rotating quote + a quote generator
- Responsive mobile menu
- Newsletter & contact forms (demo — see "Going live" below)

---

## How to add a new essay

1. **Write the essay page.** Copy `essays/the-discipline-of-attention.html`, rename it
   (e.g. `essays/my-new-essay.html`), and replace the title, meta description, and the text inside
   `<div class="essay-body">…</div>`. Keep the `<h2>` headings — the table of contents builds itself from them.

2. **List it on the site.** Open `assets/js/data.js` and add an entry to the top of the `ESSAYS` array:

   ```js
   {
     title: "My New Essay",
     slug: "my-new-essay",
     url: "essays/my-new-essay.html",
     category: "Philosophy",          // must match a name in TOPICS
     tags: ["focus", "ideas"],
     date: "2026-06-20",              // YYYY-MM-DD
     readMins: 8,
     views: 0, likes: 0,
     featured: true,                  // optional — shows in the Featured slot
     excerpt: "One or two sentences that hook the reader."
   },
   ```

That's it — the homepage, library, search, and portfolio update automatically.

Quotes, books, garden notes, journal entries, and case studies all work the same way: edit the
matching array (`QUOTES`, `BOOKS`, `GARDEN`, `JOURNAL`, `CASES`) in `data.js`.

---

## Make it yours
- **Name/branding:** the brand says "Essays." — change it in `assets/js/main.js` (search `class="brand"`).
- **Your name & intro:** edit the `SITE` object at the top of `data.js`.
- **Your photo:** the round "P" avatar is CSS. To use a real photo, replace
  `<div class="avatar">P</div>` in `index.html` / `about.html` with
  `<img class="avatar" src="assets/img/me.jpg" alt="Priyam">` and drop your image in `assets/img/`.
- **Colors:** all colors are CSS variables at the top of `assets/css/style.css` (`--accent` = dark green, `--gold` = gold, `--bg` = cream).

---

## Launch on your domain

This is a static site, so any static host works. Pick one:

### Option A — Netlify (easiest, free)
1. Go to app.netlify.com → "Add new site" → "Deploy manually".
2. Drag this entire `blog website` folder onto the page.
3. In Site settings → Domain management → "Add a custom domain", enter your domain.
4. Update your domain's DNS (at your registrar) to point to Netlify as they instruct.
   HTTPS is automatic.

### Option B — Cloudflare Pages / Vercel
Same idea: create a project, upload the folder (or connect a Git repo), add your custom domain,
follow the DNS instructions.

### Option C — GitHub Pages
1. Create a GitHub repo, upload these files.
2. Settings → Pages → deploy from `main` / root.
3. Add a file named `CNAME` containing your domain, and set the DNS records GitHub shows you.

### Option D — Traditional web host (cPanel / FTP)
Upload everything in this folder into your `public_html` (or web root) directory. Done.

> Whichever you choose: keep the folder structure intact (the `assets/` and `essays/` folders
> must stay alongside the HTML files).

---

## Going live with forms & newsletter
The signup and contact forms are demo-only (they show a confirmation but don't store anything).
To collect real subscribers/messages, point them at a provider:
- **Newsletter:** Substack, Buttondown, ConvertKit, or Mailchimp — replace the `<form>` with their embed code.
- **Contact form:** Formspree or Netlify Forms — add their `action`/attributes to the `<form>`.

---

## A note on SEO
Each essay is a real, separate HTML page with its own `<title>` and description, so search engines
can index them well. For best results, add an essay's URL to `sitemap.xml` when you publish it.
