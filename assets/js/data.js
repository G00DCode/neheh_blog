/* =========================================================
   Content data — edit this file to add your own essays,
   quotes, books, notes, etc. No build step required.
   ========================================================= */

window.SITE = {
  author: "Smita",
  tagline: "Essays on thinking, business, and the examined life.",
  intro: "I write long-form essays at the intersection of philosophy, psychology, and business — and keep a public notebook of the ideas I'm still working out.",
  email: "goodychauhan@gmail.com",
};

/* Topics / categories with colors */
window.TOPICS = [
  { name: "Philosophy",      slug: "philosophy",      count: 8 },
  { name: "Psychology",      slug: "psychology",      count: 6 },
  { name: "Business",        slug: "business",        count: 7 },
  { name: "Society",         slug: "society",         count: 4 },
  { name: "Technology",      slug: "technology",      count: 5 },
  { name: "Personal Growth", slug: "personal-growth", count: 9 },
  { name: "Relationships",   slug: "relationships",   count: 3 },
  { name: "Case Studies",    slug: "case-studies",    count: 5 },
  { name: "Book Reviews",    slug: "book-reviews",    count: 6 },
];

/* Essays. `url` points to a full static HTML page (good for SEO).
   The sample essay lives at essays/the-discipline-of-attention.html */
window.ESSAYS = [
  {
    title: "The Discipline of Attention",
    slug: "the-discipline-of-attention",
    url: "essays/the-discipline-of-attention.html",
    category: "Philosophy",
    tags: ["focus", "stoicism", "habits"],
    date: "2026-06-02",
    readMins: 9,
    views: 4120, likes: 318,
    featured: true,
    excerpt: "Attention is the rarest and purest form of generosity. What we choose to notice quietly becomes the shape of our lives.",
  },
  {
    title: "Why Good Companies Stop Listening",
    slug: "why-good-companies-stop-listening",
    url: "essays/the-discipline-of-attention.html",
    category: "Business",
    tags: ["strategy", "innovation", "culture"],
    date: "2026-05-21",
    readMins: 12,
    views: 3890, likes: 290,
    excerpt: "Disruption is rarely a failure of intelligence. It is a failure of attention — success teaches organizations to stop hearing the quiet signals.",
  },
  {
    title: "The Quiet Mathematics of Habit",
    slug: "the-quiet-mathematics-of-habit",
    url: "essays/the-discipline-of-attention.html",
    category: "Personal Growth",
    tags: ["habits", "compounding", "discipline"],
    date: "2026-05-08",
    readMins: 7,
    views: 5210, likes: 471,
    excerpt: "Small actions don't add up. They compound. The arithmetic of a life is exponential, and most of us misread the early returns.",
  },
  {
    title: "On Being Misunderstood",
    slug: "on-being-misunderstood",
    url: "essays/the-discipline-of-attention.html",
    category: "Psychology",
    tags: ["identity", "communication"],
    date: "2026-04-27",
    readMins: 8,
    views: 2980, likes: 233,
    excerpt: "To be understood is a kind of luck. To keep speaking anyway, without that luck, is a kind of courage.",
  },
  {
    title: "The Startup as a Moral Object",
    slug: "the-startup-as-a-moral-object",
    url: "essays/the-discipline-of-attention.html",
    category: "Business",
    tags: ["ethics", "startups", "ambition"],
    date: "2026-04-10",
    readMins: 14,
    views: 3340, likes: 261,
    excerpt: "Every company encodes a theory of how people should live. We just rarely admit that we are building philosophy with a balance sheet.",
  },
  {
    title: "Boredom Is a Door",
    slug: "boredom-is-a-door",
    url: "essays/the-discipline-of-attention.html",
    category: "Society",
    tags: ["technology", "creativity", "attention"],
    date: "2026-03-29",
    readMins: 6,
    views: 6120, likes: 588,
    excerpt: "We have engineered boredom out of existence and wonder why our imaginations feel thinner. The empty hour was never empty.",
  },
  {
    title: "What the Market Cannot Price",
    slug: "what-the-market-cannot-price",
    url: "essays/the-discipline-of-attention.html",
    category: "Technology",
    tags: ["economics", "value", "society"],
    date: "2026-03-12",
    readMins: 11,
    views: 2450, likes: 190,
    excerpt: "Price is a confident number wrapped around an uncertain thing. The most important goods in a life never make it onto the ledger.",
  },
  {
    title: "Friendship in the Age of Optimization",
    slug: "friendship-in-the-age-of-optimization",
    url: "essays/the-discipline-of-attention.html",
    category: "Relationships",
    tags: ["friendship", "time", "modern life"],
    date: "2026-02-24",
    readMins: 9,
    views: 4780, likes: 402,
    excerpt: "You cannot make a friendship more efficient without making it less of a friendship. Some things are supposed to waste your time.",
  },
];

/* Digital garden — unfinished thoughts */
window.GARDEN = [
  { title: "Note: Taste is compressed judgment", status: "Seedling", date: "2026-06-09", body: "Taste might just be thousands of micro-judgments compressed until they feel like instinct. Which means taste is trainable — it just takes an unfashionable amount of repetition." },
  { title: "Question: What is the opposite of ambition?", status: "Budding", date: "2026-06-01", body: "Not laziness. Maybe contentment? But contentment can coexist with ambition. Still working this out." },
  { title: "Observation: The best readers re-read", status: "Evergreen", date: "2026-05-18", body: "Almost everyone I admire has a small canon they return to yearly, not a large pile they consume once." },
  { title: "Idea: A 'cost of meetings' counter", status: "Seedling", date: "2026-05-05", body: "What if calendars showed the salaried cost of every meeting in real time? Would behavior change?" },
  { title: "Learning: Writing reveals confusion", status: "Budding", date: "2026-04-22", body: "I never know how muddled my thinking is until I try to write a clean paragraph about it." },
  { title: "Quote I'm sitting with", status: "Evergreen", date: "2026-04-09", body: "'The unexamined life is not worth living.' — but the over-examined life isn't lived at all. The balance is the whole art." },
];

/* Journal */
window.JOURNAL = [
  { title: "Weekly Reflection — Week 23", date: "2026-06-08", body: "Spent the week learning that shipping something imperfect teaches more than polishing something private. The blog is proof." },
  { title: "Monthly Review — May", date: "2026-06-01", body: "Published three essays, read two books, and finally understood why I procrastinate on the work that matters most: it threatens my self-image." },
  { title: "Lesson: Slow is smooth", date: "2026-05-15", body: "Rushed a decision this week and paid for it twice. The old aviation line keeps proving true — slow is smooth, and smooth is fast." },
];

/* Book notes */
window.BOOKS = [
  { title: "Meditations", author: "Marcus Aurelius", rating: 5, date: "2026-05-30",
    summary: "A Roman emperor's private notes to himself on duty, mortality, and equanimity.",
    lessons: ["You control your judgments, not events.", "Memento mori sharpens priorities.", "The obstacle is the path."],
    quote: "You have power over your mind — not outside events. Realize this, and you will find strength." },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", rating: 4, date: "2026-05-12",
    summary: "How two systems of thought — fast intuition and slow reasoning — shape (and mislead) our judgment.",
    lessons: ["We're overconfident in stories.", "Anchoring distorts numbers.", "Loss aversion warps risk."],
    quote: "Nothing in life is as important as you think it is while you are thinking about it." },
  { title: "Zero to One", author: "Peter Thiel", rating: 4, date: "2026-04-18",
    summary: "A contrarian's case for building monopolies of the genuinely new rather than competing in the known.",
    lessons: ["Competition is for losers.", "Find secrets others ignore.", "Start small, then monopolize."],
    quote: "The most contrarian thing of all is not to oppose the crowd but to think for yourself." },
];

/* Case studies */
window.CASES = [
  { title: "Kodak: Inventing the Future It Refused to Sell", category: "Business Failure", date: "2026-05-25",
    excerpt: "Kodak built the first digital camera in 1975 and buried it. A study in how incentives can blind even brilliant teams." },
  { title: "Netflix's Two Bets", category: "Company Analysis", date: "2026-05-02",
    excerpt: "How a DVD-by-mail company cannibalized itself twice — first into streaming, then into original content." },
  { title: "The Theranos Reality Distortion", category: "Startup Breakdown", date: "2026-04-14",
    excerpt: "What happens when narrative outruns engineering, and why smart boards still got fooled." },
];

/* Quotes wall (your collection) */
window.QUOTES = [
  { text: "We suffer more in imagination than in reality.", author: "Seneca" },
  { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
  { text: "What we plant in the soil of contemplation, we shall reap in the harvest of action.", author: "Meister Eckhart" },
  { text: "Attention is the rarest and purest form of generosity.", author: "Simone Weil" },
  { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
  { text: "The cave you fear to enter holds the treasure you seek.", author: "Joseph Campbell" },
  { text: "Discipline is choosing between what you want now and what you want most.", author: "Augusta F. Kantra" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { text: "Read not to contradict, nor to believe, but to weigh and consider.", author: "Francis Bacon" },
];

/* Daily rotating quotes (front page) */
window.DAILY_QUOTES = [
  { text: "The unexamined life is not worth living.", author: "Socrates" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act but a habit.", author: "Will Durant" },
  { text: "It is not that we have a short time to live, but that we waste a lot of it.", author: "Seneca" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
  { text: "Whatever you can do, or dream you can, begin it. Boldness has genius in it.", author: "Goethe" },
  { text: "The price of anything is the amount of life you exchange for it.", author: "Henry David Thoreau" },
];
