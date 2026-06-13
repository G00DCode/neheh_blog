/* =========================================================
   Shared site behavior: nav/footer, theme, search,
   daily quote, listings, reader experience.
   ========================================================= */

/* ---------- Theme ---------- */
(function initTheme() {
  var saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  else if (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.setAttribute("data-theme", "dark");
})();
function toggleTheme() {
  var cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  var next = cur === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

/* ---------- Icons (inline SVG) ---------- */
var ICON = {
  sun: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/></svg>',
  moon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"/></svg>',
  search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>',
  menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  shuffle: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>',
  type: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7V5h16v2M9 19h6M12 5v14"/></svg>',
  speaker: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 010 7M19 5a9 9 0 010 14"/></svg>',
  top: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
};

/* ---------- Nav + Footer ---------- */
var NAV = [
  ["Home", "index.html"],
  ["Essays", "essays.html"],
  ["Garden", "garden.html"],
  ["Journal", "journal.html"],
  ["Book Notes", "book-notes.html"],
  ["Case Studies", "case-studies.html"],
  ["Quotes", "quotes.html"],
  ["Portfolio", "portfolio.html"],
  ["About", "about.html"],
];

function buildHeader(base) {
  base = base || "";
  var path = location.pathname.split("/").pop() || "index.html";
  var links = NAV.map(function (n) {
    var active = n[1] === path ? " class=\"active\"" : "";
    return '<a href="' + base + n[1] + '"' + active + ">" + n[0] + "</a>";
  }).join("");
  var header =
    '<header class="site-header"><div class="container nav">' +
    '<a class="brand" href="' + base + 'index.html">Essays<span>.</span></a>' +
    '<nav class="nav-links" id="navLinks">' + links + "</nav>" +
    '<div class="nav-tools">' +
    '<button class="icon-btn" id="themeBtn" aria-label="Toggle theme">' + ICON.moon + "</button>" +
    '<button class="icon-btn nav-toggle" id="navToggle" aria-label="Menu">' + ICON.menu + "</button>" +
    "</div></div></header>";
  document.body.insertAdjacentHTML("afterbegin", header);
  var tb = document.getElementById("themeBtn");
  tb.addEventListener("click", function () { toggleTheme(); refreshThemeIcon(); });
  refreshThemeIcon();
  document.getElementById("navToggle").addEventListener("click", function () {
    document.getElementById("navLinks").classList.toggle("open");
  });
}
function refreshThemeIcon() {
  var dark = document.documentElement.getAttribute("data-theme") === "dark";
  var b = document.getElementById("themeBtn");
  if (b) b.innerHTML = dark ? ICON.sun : ICON.moon;
}

function buildFooter(base) {
  base = base || "";
  var col1 = NAV.slice(1, 5).map(function (n) { return '<a href="' + base + n[1] + '">' + n[0] + "</a>"; }).join("");
  var col2 = NAV.slice(5).map(function (n) { return '<a href="' + base + n[1] + '">' + n[0] + "</a>"; }).join("");
  var f =
    '<footer class="site-footer"><div class="container"><div class="footer-grid">' +
    "<div><a class=\"brand\" href=\"" + base + "index.html\">Essays<span>.</span></a>" +
    '<p class="muted" style="margin-top:12px;max-width:34ch">' + (window.SITE ? window.SITE.tagline : "") + "</p></div>" +
    "<div><h4>Read</h4>" + col1 + "</div>" +
    "<div><h4>More</h4>" + col2 + "</div>" +
    '<div><h4>Subscribe</h4><a href="' + base + 'newsletter.html">Newsletter</a><a href="' + base + 'contact.html">Contact</a><a href="mailto:' + (window.SITE ? window.SITE.email : "") + '">Email</a></div>' +
    "</div><div class=\"footer-bottom\"><span>© " + new Date().getFullYear() + " " + (window.SITE ? window.SITE.author : "") + ". All rights reserved.</span>" +
    "<span>Made with care for slow reading.</span></div></div></footer>";
  document.body.insertAdjacentHTML("beforeend", f);
}

/* ---------- Helpers ---------- */
function fmtDate(s) {
  var d = new Date(s + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function essayCard(e, base) {
  base = base || "";
  return (
    '<article class="card fade-in">' +
    '<div class="tag-row"><span class="pill">' + e.category + "</span></div>" +
    '<h3><a href="' + base + e.url + '">' + e.title + "</a></h3>" +
    '<p class="excerpt">' + e.excerpt + "</p>" +
    '<div class="meta"><span>' + fmtDate(e.date) + "</span>" +
    "<span>· " + e.readMins + " min read</span>" +
    "<span>· " + e.views.toLocaleString() + " views</span></div>" +
    "</article>"
  );
}

/* ---------- Daily quote ---------- */
function renderDailyQuote(id) {
  var el = document.getElementById(id);
  if (!el || !window.DAILY_QUOTES) return;
  var day = Math.floor(Date.now() / 86400000);
  var q = window.DAILY_QUOTES[day % window.DAILY_QUOTES.length];
  el.innerHTML = "<blockquote>" + q.text + "<cite>— " + q.author + "</cite></blockquote>";
}

/* ---------- Topics ---------- */
function renderTopics(id, base) {
  var el = document.getElementById(id);
  if (!el || !window.TOPICS) return;
  el.innerHTML = window.TOPICS.map(function (t) {
    return '<a class="topic-chip" href="' + (base || "") + 'essays.html?cat=' + t.slug + '"><span class="dot"></span>' + t.name + " <small>(" + t.count + ")</small></a>";
  }).join("");
}

/* ---------- Home listings ---------- */
function renderHome(base) {
  base = base || "";
  var essays = window.ESSAYS || [];
  var featured = essays.find(function (e) { return e.featured; }) || essays[0];
  var fEl = document.getElementById("featured");
  if (fEl && featured) {
    fEl.innerHTML =
      '<div class="img"></div><div class="body"><span class="eyebrow">Featured Essay</span>' +
      '<h2><a href="' + base + featured.url + '">' + featured.title + "</a></h2>" +
      '<p>' + featured.excerpt + "</p>" +
      '<div class="meta" style="margin-bottom:18px;color:var(--text-mute);font-size:.85rem">' + fmtDate(featured.date) + " · " + featured.readMins + " min read</div>" +
      '<a class="btn btn-primary" href="' + base + featured.url + '">Read the essay</a></div>';
  }
  var latest = document.getElementById("latest");
  if (latest) latest.innerHTML = essays.slice(0, 3).map(function (e) { return essayCard(e, base); }).join("");

  var popular = document.getElementById("popular");
  if (popular) {
    var byViews = essays.slice().sort(function (a, b) { return b.views - a.views; }).slice(0, 3);
    popular.innerHTML = byViews.map(function (e) { return essayCard(e, base); }).join("");
  }
}

/* ---------- Library ---------- */
var libState = { cat: "all", sort: "newest", q: "", view: "grid" };
function renderLibrary() {
  var grid = document.getElementById("libGrid");
  if (!grid) return;
  var list = (window.ESSAYS || []).slice();
  var params = new URLSearchParams(location.search);
  if (params.get("cat")) libState.cat = params.get("cat");

  if (libState.cat !== "all")
    list = list.filter(function (e) { return slugify(e.category) === libState.cat; });
  if (libState.q) {
    var q = libState.q.toLowerCase();
    list = list.filter(function (e) {
      return (e.title + " " + e.excerpt + " " + e.tags.join(" ") + " " + e.category).toLowerCase().indexOf(q) > -1;
    });
  }
  list.sort(function (a, b) {
    if (libState.sort === "newest") return new Date(b.date) - new Date(a.date);
    if (libState.sort === "views") return b.views - a.views;
    if (libState.sort === "likes") return b.likes - a.likes;
    if (libState.sort === "longest") return b.readMins - a.readMins;
    return 0;
  });

  grid.className = "grid " + (libState.view === "grid" ? "grid-3" : "list-view");
  grid.innerHTML = list.length
    ? list.map(function (e) { return essayCard(e); }).join("")
    : '<p class="muted">No essays match your filters yet.</p>';
  var count = document.getElementById("libCount");
  if (count) count.textContent = list.length + " essay" + (list.length === 1 ? "" : "s");
}
function slugify(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }

function initLibrary() {
  // category chips
  var chips = document.getElementById("catChips");
  if (chips) {
    var all = '<button class="chip active" data-cat="all">All</button>';
    chips.innerHTML = all + (window.TOPICS || []).map(function (t) {
      return '<button class="chip" data-cat="' + t.slug + '">' + t.name + "</button>";
    }).join("");
    chips.addEventListener("click", function (e) {
      if (e.target.classList.contains("chip")) {
        libState.cat = e.target.getAttribute("data-cat");
        chips.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
        e.target.classList.add("active");
        renderLibrary();
      }
    });
  }
  var search = document.getElementById("libSearch");
  if (search) search.addEventListener("input", function () { libState.q = this.value; renderLibrary(); });
  var sort = document.getElementById("libSort");
  if (sort) sort.addEventListener("change", function () { libState.sort = this.value; renderLibrary(); });
  var vt = document.getElementById("viewToggle");
  if (vt) vt.addEventListener("click", function (e) {
    if (e.target.dataset.view) {
      libState.view = e.target.dataset.view;
      vt.querySelectorAll("button").forEach(function (b) { b.classList.remove("active"); });
      e.target.classList.add("active");
      renderLibrary();
    }
  });
  // sync active chip with ?cat=
  var params = new URLSearchParams(location.search);
  if (params.get("cat") && chips) {
    chips.querySelectorAll(".chip").forEach(function (c) {
      c.classList.toggle("active", c.getAttribute("data-cat") === params.get("cat"));
    });
  }
  renderLibrary();
}

/* ---------- Home search ---------- */
function initHomeSearch() {
  var input = document.getElementById("homeSearch");
  var out = document.getElementById("homeSearchResults");
  if (!input) return;
  input.addEventListener("input", function () {
    var q = this.value.toLowerCase().trim();
    if (!q) { out.innerHTML = ""; return; }
    var hits = (window.ESSAYS || []).filter(function (e) {
      return (e.title + " " + e.excerpt + " " + e.tags.join(" ")).toLowerCase().indexOf(q) > -1;
    }).slice(0, 4);
    out.innerHTML = hits.length
      ? '<div class="grid grid-3">' + hits.map(function (e) { return essayCard(e); }).join("") + "</div>"
      : '<p class="muted">No matches — try “habit”, “business”, or “attention”.</p>';
  });
}

/* ---------- Random essay ---------- */
function randomEssay(base) {
  var e = window.ESSAYS[Math.floor(Math.random() * window.ESSAYS.length)];
  location.href = (base || "") + e.url;
}

/* ---------- Newsletter form ---------- */
function initForms() {
  document.querySelectorAll("form.subscribe-form, form.contact-form").forEach(function (f) {
    f.addEventListener("submit", function (ev) {
      ev.preventDefault();
      toast(f.classList.contains("contact-form") ? "Thanks — your message was noted (demo)." : "You're on the list! (demo — connect a provider to go live)");
      f.reset();
    });
  });
}

/* ---------- Toast ---------- */
function toast(msg) {
  var t = document.createElement("div");
  t.className = "toast"; t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(function () { t.classList.add("show"); });
  setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 300); }, 2600);
}

/* ---------- Reader experience ---------- */
function initReader() {
  var body = document.querySelector(".essay-body");
  if (!body) return;

  // progress bar
  var bar = document.createElement("div");
  bar.className = "read-progress";
  document.body.appendChild(bar);
  window.addEventListener("scroll", function () {
    var h = document.documentElement;
    var pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = Math.min(100, Math.max(0, pct)) + "%";
  });

  // build TOC from h2s
  var toc = document.getElementById("toc");
  if (toc) {
    var hs = body.querySelectorAll("h2");
    if (hs.length) {
      var items = "";
      hs.forEach(function (h, i) {
        var id = "sec-" + i; h.id = id;
        items += '<li><a href="#' + id + '">' + h.textContent + "</a></li>";
      });
      toc.innerHTML = "<h4>Contents</h4><ol>" + items + "</ol>";
    } else { toc.style.display = "none"; }
  }

  // share-quote on blockquotes
  body.querySelectorAll("blockquote").forEach(function (bq) {
    var s = document.createElement("span");
    s.className = "share-quote"; s.textContent = "↗ Share this quote";
    s.addEventListener("click", function () {
      var text = bq.textContent.replace("↗ Share this quote", "").trim();
      if (navigator.share) navigator.share({ text: '"' + text + '"' }).catch(function(){});
      else { navigator.clipboard.writeText('"' + text + '"'); toast("Quote copied to clipboard"); }
    });
    bq.appendChild(s);
  });

  // floating tools
  var tools = document.createElement("div");
  tools.className = "reader-tools";
  tools.innerHTML =
    '<button class="icon-btn" id="rdType" title="Reading settings">' + ICON.type + "</button>" +
    '<button class="icon-btn" id="rdSpeak" title="Listen (text to speech)">' + ICON.speaker + "</button>" +
    '<button class="icon-btn" id="rdTop" title="Back to top">' + ICON.top + "</button>";
  document.body.appendChild(tools);

  var panel = document.createElement("div");
  panel.className = "reader-panel";
  panel.innerHTML =
    "<label>Font</label><div class=\"row\" id=\"fontRow\">" +
    fontBtn("font-serif", "Merriweather", true) +
    fontBtn("font-playfair", "Playfair") +
    fontBtn("font-garamond", "Garamond") +
    fontBtn("font-baskerville", "Baskerville") +
    fontBtn("font-crimson", "Crimson") +
    fontBtn("font-sans", "Inter") +
    "</div><label>Text size</label><div class=\"row\">" +
    '<button class="mini" data-size="-1">A−</button>' +
    '<button class="mini" data-size="1">A+</button></div>' +
    "<label>Bookmark</label><div class=\"row\">" +
    '<button class="mini" id="bmBtn">☆ Save for later</button></div>';
  document.body.appendChild(panel);

  document.getElementById("rdType").addEventListener("click", function () { panel.classList.toggle("open"); });
  document.getElementById("rdTop").addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  // text to speech
  var speaking = false;
  document.getElementById("rdSpeak").addEventListener("click", function () {
    if (!("speechSynthesis" in window)) { toast("Audio not supported in this browser"); return; }
    if (speaking) { speechSynthesis.cancel(); speaking = false; toast("Stopped"); return; }
    var u = new SpeechSynthesisUtterance(body.textContent);
    u.rate = 0.97; u.onend = function () { speaking = false; };
    speechSynthesis.speak(u); speaking = true; toast("Reading aloud…");
  });

  // fonts
  panel.querySelector("#fontRow").addEventListener("click", function (e) {
    if (e.target.dataset.font) {
      document.querySelector(".reader").className = "reader " + e.target.dataset.font;
      panel.querySelectorAll("#fontRow .mini").forEach(function (m) { m.classList.remove("active"); });
      e.target.classList.add("active");
      localStorage.setItem("readerFont", e.target.dataset.font);
    }
  });
  // size
  var size = parseFloat(localStorage.getItem("readerSize") || "1.18");
  document.documentElement.style.setProperty("--reader-size", size + "rem");
  panel.querySelectorAll("[data-size]").forEach(function (b) {
    b.addEventListener("click", function () {
      size = Math.min(1.6, Math.max(0.95, size + parseFloat(this.dataset.size) * 0.06));
      document.documentElement.style.setProperty("--reader-size", size + "rem");
      localStorage.setItem("readerSize", size);
    });
  });
  // restore font
  var savedFont = localStorage.getItem("readerFont");
  if (savedFont) {
    document.querySelector(".reader").className = "reader " + savedFont;
    var fb = panel.querySelector('[data-font="' + savedFont + '"]');
    if (fb) { panel.querySelectorAll("#fontRow .mini").forEach(function (m){m.classList.remove("active");}); fb.classList.add("active"); }
  }
  // bookmark
  var slug = location.pathname.split("/").pop();
  var bm = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  var bmBtn = document.getElementById("bmBtn");
  function syncBm() { bmBtn.textContent = bm.indexOf(slug) > -1 ? "★ Saved" : "☆ Save for later"; }
  syncBm();
  bmBtn.addEventListener("click", function () {
    var i = bm.indexOf(slug);
    if (i > -1) { bm.splice(i, 1); toast("Removed bookmark"); } else { bm.push(slug); toast("Saved for later"); }
    localStorage.setItem("bookmarks", JSON.stringify(bm)); syncBm();
  });
}
function fontBtn(cls, label, active) {
  return '<button class="mini' + (active ? " active" : "") + '" data-font="' + cls + '">' + label + "</button>";
}

/* ---------- Generic list renderers ---------- */
function renderGarden(id) {
  var el = document.getElementById(id); if (!el) return;
  el.innerHTML = (window.GARDEN || []).map(function (n) {
    return '<div class="note fade-in"><div class="status">' + n.status + " · " + fmtDate(n.date) + "</div><h3 style=\"margin:.4rem 0\">" + n.title + "</h3><p>" + n.body + "</p></div>";
  }).join("");
}
function renderJournal(id) {
  var el = document.getElementById(id); if (!el) return;
  el.innerHTML = (window.JOURNAL || []).map(function (j) {
    return '<article class="card fade-in"><div class="tag-row"><span class="pill gold">' + fmtDate(j.date) + "</span></div><h3>" + j.title + "</h3><p class=\"excerpt\">" + j.body + "</p></article>";
  }).join("");
}
function renderBooks(id) {
  var el = document.getElementById(id); if (!el) return;
  el.innerHTML = (window.BOOKS || []).map(function (b) {
    var stars = "★★★★★☆☆☆☆☆".slice(5 - b.rating, 10 - b.rating);
    var lessons = b.lessons.map(function (l) { return "<li>" + l + "</li>"; }).join("");
    return '<article class="card fade-in"><div class="book-card"><div class="book-cover">' + b.title.charAt(0) +
      '</div><div><h3 style="margin-bottom:2px">' + b.title + "</h3><p class=\"muted\" style=\"margin:0 0 6px\">" + b.author + ' · <span class="rating">' + stars + "</span></p>" +
      "<p>" + b.summary + "</p><strong style=\"font-size:.85rem\">Key lessons</strong><ul style=\"margin:.3rem 0 .6rem;padding-left:1.1rem;color:var(--text-soft)\">" + lessons + "</ul>" +
      '<blockquote style="border-left:3px solid var(--gold);margin:0;padding:.2rem 1rem;font-style:italic;color:var(--text-soft)">' + b.quote + "</blockquote></div></div></article>";
  }).join("");
}
function renderCases(id) {
  var el = document.getElementById(id); if (!el) return;
  el.innerHTML = (window.CASES || []).map(function (c) {
    return '<article class="card fade-in"><div class="tag-row"><span class="pill">' + c.category + "</span></div><h3>" + c.title + "</h3><p class=\"excerpt\">" + c.excerpt + "</p><div class=\"meta\"><span>" + fmtDate(c.date) + "</span></div></article>";
  }).join("");
}
function renderQuotesWall(id) {
  var el = document.getElementById(id); if (!el) return;
  el.innerHTML = (window.QUOTES || []).map(function (q) {
    return '<div class="quote-card fade-in"><p>“' + q.text + '”</p><cite>— ' + q.author + "</cite></div>";
  }).join("");
}
function randomQuoteBanner(id) {
  var el = document.getElementById(id); if (!el || !window.QUOTES) return;
  function pick() {
    var q = window.QUOTES[Math.floor(Math.random() * window.QUOTES.length)];
    el.innerHTML = "<blockquote>" + q.text + "<cite>— " + q.author + "</cite></blockquote>";
  }
  pick();
  el.style.cursor = "pointer";
  el.title = "Click for another";
  el.addEventListener("click", pick);
}
