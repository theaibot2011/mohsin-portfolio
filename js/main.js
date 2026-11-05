/* =========================================================================
   Muhammad Mohsin · Portfolio script
   -------------------------------------------------------------------------
   PART A: YOUR CONTENT  ← edit text, links and projects here
   PART B: ICONS          (inline SVGs, no image files needed)
   PART C: RENDERING      (turns the data into HTML)
   PART D: INTERACTIONS   (animations, navbar, form, easter egg)
   No frameworks, no build step. Just open index.html.
   ========================================================================= */

/* =========================================================================
   PART A · YOUR CONTENT
   ========================================================================= */

const PROFILE = {
  name: "Muhammad Mohsin",
  shortName: "Mohsin",
  // Words the hero headline cycles through
  roles: ["Builder.", "Editor.", "Gamer.", "Problem Solver."],
  heroLine: "I'm a self-taught teen who turns ideas into real apps, edits, and tools, and then actually ships them.",
  email: "mmsoomro67@gmail.com",
};

const CONTACT = {
  // TODO: create a free form at https://formspree.io and replace YOUR_FORM_ID.
  // While it still says YOUR_FORM_ID, the form opens the visitor's email app instead.
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// About me paragraphs (first person). Use <strong> to highlight words.
const ABOUT = [
  "Hey, I'm Mohsin. I'm a student at Bravian International School and College in Bahria Town, Karachi, currently preparing for my O Levels.",
  "Nobody handed me a course. I taught myself Python, HTML and PowerShell and learned video editing in DaVinci Resolve by building things and breaking them until they worked. When I run into a problem, my first thought is usually: <em>\"I could just build that.\"</em>",
  "I don't build random stuff. I find real problems around me and build tools to fix them. A damaged monitor led to MonitorTest, people using my laptop without asking led to Login Snaps, and contest prep led to Graphite, my own scientific calculator.",
  "I've also built a party game my friends wanted, I'm working on making the Japanese-only head unit in my Nissan Dayz actually usable, and I even tried running a data recovery startup. It failed, and I learned more from that than from anything that worked. Outside of code I'm into gaming, cars, and making content.",
];

const FACTS = [
  { icon: "🎓", label: "Bravian International School and College", sub: "O Levels candidate" },
  { icon: "📍", label: "Bahria Town, Karachi", sub: "Based in" },
  { icon: "🧠", label: "100% self-taught", sub: "Docs, YouTube & trial-and-error" },
  { icon: "🚀", label: "Open to opportunities", sub: "Exchanges · internships · competitions" },
];

// "How I Build" section: the line, the 3-step process, and the real examples.
// Each example's "project" must match a project title below so clicking it opens that story.
const HOW_I_BUILD = {
  line: "I don't build random stuff. I find real problems around me and build tools to fix them.",
  steps: [
    { title: "Spot a real problem", text: "Something risky, annoying or broken in my own life, not a random idea from a tutorial." },
    { title: "Build the tool",      text: "Pick the simplest tech that actually fixes it: a website, a script, or a web app." },
    { title: "Use it, then ship it", text: "I use it myself first, then put it out for anyone with the same problem." },
  ],
  examples: [
    { project: "MonitorTest", problem: "Getting sold a bad screen",            fix: "A browser-based display tester" },
    { project: "Login Snaps", problem: "People using my laptop without asking", fix: "A webcam photo on every login" },
    { project: "Graphite",    problem: "No good calculator for contest prep",  fix: "My own scientific calculator" },
  ],
};

const STATS = [
  { value: 8,  suffix: "",  label: "Projects built & in progress" },
  { value: 3,  suffix: "",  label: "Languages self-taught" },
  { value: 30, suffix: "",  label: "Day editing challenge" },
  { value: 1,  suffix: "",  label: "Goal: build the future" },
];

/*
  PROJECTS
  - status: "live" | "content" | "wip" | "ended" | "private"
  - visual: which built-in mockup to draw ("monitor", "loginsnaps", "graphite", "imposter", "video", "bryteback", "shorts", "headunit")
  - subtitle: optional small line under the title
  - note: optional label shown above the buttons (e.g. where it runs)
  - aiTool: optional badge showing the AI tool used to build it
  - image: optional real screenshot { src, width, height, alt } used instead of the drawn mockup
  - story: optional { kicker, problem, solution, result } shown as a Problem → Solution → Result layout
    (story.long is the full version shown in the "Read the story" popup)
  - links: set live to null for a disabled "coming soon" button (add hideLive: true to hide it completely);
    set code to null to hide the Code button, or "TODO" for a greyed-out placeholder
  - featured: true makes the card full-width on desktop
*/
const PROJECTS = [
  {
    title: "MonitorTest",
    hook: "A real problem I faced, so I built the tool to fix it.",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    status: "live", statusLabel: "Live",
    visual: "monitor",
    accent: "#22d3ee",
    featured: true,
    story: {
      problem: "Buying or repairing a screen in a huge market is risky. It's easy to get ripped off or sold a bad display, and you can't tell without testing it.",
      solution: "A website that tests any display for dead pixels, color problems, backlight bleed and more, right in the browser.",
      result: "Anyone can check a monitor themselves before paying for it. It's live and free.",
      long: [
        "My monitor got damaged, and my relative had to get it repaired. That's when I realised how risky buying or repairing a screen is in a huge market. It's easy to get ripped off or sold a bad display, and you can't tell just by looking at it. You have to test it.",
        "So I built <strong>MonitorTest</strong>: a website that runs full-screen tests for dead and stuck pixels, color accuracy, backlight bleed, gradients and response time. Open it on any screen in the shop, run through the tests, and you know exactly what you're paying for.",
        "It's live on Netlify, it's free, and it works on any device with a browser. A real problem I faced, so I built the tool to fix it.",
      ],
    },
    links: {
      live: "https://monitortesting.netlify.app",
      code: "https://github.com/theaibot2011/monitor-testing",
    },
  },
  {
    title: "Login Snaps",
    subtitle: "Automated login camera",
    hook: "Who used my laptop? Now I know.",
    tags: ["PowerShell", "Windows Task Scheduler", "Automation", "Security"],
    status: "private", statusLabel: "Private project · runs on my own laptop",
    visual: "loginsnaps",
    accent: "#a3e635",
    story: {
      problem: "I keep my laptop out in the open, so anyone could use it without me knowing.",
      solution: "A PowerShell automation, triggered by Windows Task Scheduler, that takes a webcam photo every time someone logs in.",
      result: "Every login leaves a timestamped photo, so I can see exactly who used my laptop.",
      long: [
        "I keep my laptop out in the open at home, so people could use it without asking, and I'd never know.",
        "So I wrote <strong>Login Snaps</strong>: a PowerShell script hooked into <strong>Windows Task Scheduler</strong>. Every time someone logs in, the task fires, the script quietly grabs a photo from the webcam and saves it with a timestamp.",
        "Now every login leaves evidence. If someone uses my laptop, I can see exactly who it was and when. It's a private project: I built it for myself and it runs only on my own laptop.",
      ],
    },
    links: {
      live: null,                                                  // private project: no live demo
      hideLive: true,                                              // don't show a Live button at all
      code: null,                                                  // private project: no public code
    },
  },
  {
    title: "Graphite",
    subtitle: "Scientific Calculator",
    hook: "The calculator I needed for contest prep, so I built it.",
    tags: ["HTML", "CSS", "JavaScript", "Built with Claude Code"],
    status: "live", statusLabel: "Live · v1.1.1",
    visual: "graphite",
    // Real screenshots: the card shows the three themes side by side
    image: { src: "assets/projects/graphite-card.webp", width: 1280, height: 800, alt: "Graphite Scientific calculator in its Titanium, Graphite and Midnight themes" },
    accent: "#94a3b8",
    aiTool: "Built with Claude Code",
    story: {
      problem: "I was learning logarithms for math contests and couldn't find a good scientific calculator online that worked the way I needed.",
      solution: "Graphite: an offline scientific calculator app for Windows with log, ln, powers, roots, trig, calculus and more, laid out like the exam calculators I practise on.",
      result: "A tool I actually use for contest prep, released with a proper installer that anyone on Windows can download.",
      long: [
        "I was learning logarithms to prepare for math contests, and every online calculator I tried was either cluttered, full of ads, or didn't handle things like log bases the way I needed.",
        "So I built <strong>Graphite Scientific</strong>, an offline calculator app for Windows modelled on the fx-991ES workflow I use in exams: natural math display, log with any base, ln, powers, roots, trig, integrals and derivatives, plus history, constants, unit conversion and a built-in guide. It has three themes (Graphite, Titanium and Midnight). I built it with HTML, CSS and JavaScript, using Claude Code as my AI pair-programmer.",
        "Now it's the tool I actually use to practise and check my work for contest prep. It's on version 1.1.1, ships as a real installer with versioned releases, and anyone on Windows 10 or 11 can download it from GitHub.",
      ],
      // Screenshots shown in the story popup (loaded only when the popup opens)
      gallery: [
        { src: "assets/projects/graphite-theme-graphite.webp", width: 1280, height: 720, alt: "Graphite theme with the settings panel open" },
        { src: "assets/projects/graphite-theme-midnight.webp", width: 1280, height: 720, alt: "Midnight theme with gold keys" },
        { src: "assets/projects/graphite-theme-titanium.webp", width: 601, height: 824, alt: "Titanium theme in a compact window" },
      ],
    },
    links: {
      live: "https://github.com/theaibot2011/scientific-calculator/releases/latest",
      liveLabel: "Download",
      code: "https://github.com/theaibot2011/scientific-calculator",
    },
  },
  {
    title: "Imposter",
    hook: "Find the liar. One secret word, one player who doesn't know it.",
    description: "A party game web app. Everyone gets the secret word except the imposter, and the group has to work out who's bluffing. Play local by passing one phone around, or play online where everyone joins on their own device.",
    tags: ["Lovable", "Supabase", "Realtime", "Multiplayer"],
    status: "live", statusLabel: "Live",
    visual: "imposter",
    accent: "#8b5cf6",
    aiTool: "Built with Lovable",
    links: {
      live: "https://moimposter.lovable.app",
      code: null,                                                  // built with Lovable, no public repo
    },
  },
  {
    title: "30-Day Editing Challenge",
    hook: "A new edit every day for 30 days.",
    description: "Thirty days of cutting, color grading, sound design and motion work in DaVinci Resolve. Every day I picked one new technique and shipped a finished edit. More in the Editing section below.",
    tags: ["DaVinci Resolve", "Color grading", "Sound design"],
    status: "content", statusLabel: "Completed",
    visual: "video",
    accent: "#a855f7",
    links: {
      live: "#editing",
      liveLabel: "See the challenge",
      code: null,                                                  // editing project, no code
    },
  },
  {
    title: "BryteBack",
    subtitle: "Data recovery startup",
    hook: "My first startup. It failed, and it taught me the most.",
    description: "A sector-level data recovery service for deleted files, corrupted drives and formatted partitions, serving Bahria Town, Karachi. I built the website, set up WhatsApp-first support with drop-off and pickup, and tried to win local customers. It didn't take off, but it taught me how hard (and how fun) running a real business is.",
    tags: ["Lovable", "Startup", "Data recovery", "Lessons learned"],
    status: "ended", statusLabel: "Shut down · Lessons learned",
    visual: "bryteback",
    accent: "#2dd4bf",
    aiTool: "Built with Lovable",
    links: {
      live: "https://bryteback.lovable.app",
      liveLabel: "See the site",
      code: null,                                                  // built with Lovable, no public repo
    },
  },
  {
    title: "YouTube Shorts",
    hook: "Learning what makes people stop scrolling.",
    description: "My short-form channel experiment, covering gaming and tech. I tested hooks, pacing and formats and studied the analytics. It never really took off, but it taught me a lot about editing for retention.",
    tags: ["Content", "Short-form", "Analytics"],
    status: "content", statusLabel: "Experiment",
    visual: "shorts",
    accent: "#ef4444",
    links: {
      live: "https://youtube.com/@zenosocial12",
      liveLabel: "Watch",
      code: null,                                                  // content project, no code
    },
  },
  {
    title: "Car Head Unit Rebuild",
    hook: "Making a Japan-only system speak my language.",
    description: "My Nissan Dayz came with a Japanese-only multimedia system. I'm designing a way to rebuild it into something usable, with an English interface, modern media and navigation. Still in the planning and research stage.",
    tags: ["Hardware", "Embedded", "UI design", "Research"],
    status: "wip", statusLabel: "In Progress / Concept",
    visual: "headunit",
    accent: "#fbbf24",
    featured: true,
    links: {
      live: null,                                                  // TODO: add a link once there's a demo
      liveLabel: "Coming soon",
      code: null,                                                  // TODO: add a repo once you start building
    },
  },
];

/*
  CHALLENGE: what I practised during the 30-day editing challenge.
  Edit these to match what you actually worked on.
  Optional: if you ever want to show a video, paste its YouTube ID into youtubeId
  (for youtube.com/watch?v=abc123XYZ the ID is "abc123XYZ") and a play button appears.
*/
const VIDEOS = [
  { day: "Days 1–5",   icon: "✂️", title: "Cutting & pacing",        note: "Clean cuts, J/L cuts, rhythm",          youtubeId: "", poster: "linear-gradient(135deg,#1e1b4b,#7c3aed,#22d3ee)" },
  { day: "Days 6–10",  icon: "🎨", title: "Color grading",           note: "Nodes, LUTs, matching shots",           youtubeId: "", poster: "linear-gradient(135deg,#7c2d12,#f97316,#fde047)" },
  { day: "Days 11–15", icon: "🎧", title: "Sound design",            note: "SFX, music, Fairlight basics",          youtubeId: "", poster: "linear-gradient(135deg,#052e16,#16a34a,#a3e635)" },
  { day: "Days 16–20", icon: "⚡", title: "Speed ramps & beat sync", note: "Timing edits to music",                 youtubeId: "", poster: "linear-gradient(135deg,#0c0a09,#be185d,#f472b6)" },
  { day: "Days 21–25", icon: "✨", title: "Titles & motion",         note: "Fusion, keyframes, text animation",     youtubeId: "", poster: "linear-gradient(135deg,#082f49,#0284c7,#a5f3fc)" },
  { day: "Days 26–30", icon: "🏁", title: "Putting it together",     note: "Full edits using everything I learned", youtubeId: "", poster: "linear-gradient(135deg,#3b0764,#a855f7,#f0abfc)" },
];

// Skills: level is 0-100 (how confident you feel). color is the glow color.
const SKILLS = [
  { name: "Python",          icon: "python",     level: 75, color: "#facc15", note: "scripts & tools" },
  { name: "HTML / CSS / JS", icon: "html",       level: 80, color: "#f97316", note: "websites" },
  { name: "PowerShell",      icon: "powershell", level: 65, color: "#38bdf8", note: "automation" },
  { name: "DaVinci Resolve", icon: "davinci",    level: 85, color: "#a855f7", note: "editing & color" },
  { name: "Supabase",        icon: "supabase",   level: 55, color: "#34d399", note: "realtime backend" },
  { name: "Git / GitHub",    icon: "git",        level: 60, color: "#f472b6", note: "version control" },
];

// Journey timeline
const TIMELINE = [
  { when: "The beginning",   title: "Started editing videos", icon: "🎬", color: "#a855f7", text: "Opened DaVinci Resolve for the first time and got hooked on making clips look and feel cinematic." },
  { when: "Leveling up",     title: "Taught myself Python & HTML", icon: "🐍", color: "#facc15", text: "Moved from editing to code. Wrote my first scripts, built my first web pages, and picked up PowerShell to automate my PC." },
  { when: "First ship",      title: "Built MonitorTest", icon: "🖥️", color: "#22d3ee", text: "Needed a way to test monitors, so I built a full display-inspection site and deployed it on Netlify for anyone to use." },
  { when: "Going multiplayer", title: "Built Imposter", icon: "🕵️", color: "#f43f5e", text: "Made an online multiplayer party game with Lovable and Supabase. My first app with real-time users." },
  { when: "First startup",   title: "Launched BryteBack", icon: "💡", color: "#38bdf8", text: "Tried turning an app into a real business. It didn't work out, but I learned to validate ideas before building and to keep shipping." },
  { when: "Solving my own problems", title: "Built Login Snaps & Graphite", icon: "🛠️", color: "#a3e635", text: "Wrote a PowerShell automation that photographs whoever logs into my laptop, and built a scientific calculator for math contest prep." },
  { when: "Discipline mode", title: "30-day editing challenge", icon: "🔥", color: "#a3e635", text: "One finished edit every day for 30 days. Learned that consistency beats motivation." },
  { when: "Right now",       title: "O Levels prep + building", icon: "📚", color: "#38bdf8", text: "Balancing O Levels at Bravian International School and College with side projects like the Nissan Dayz head unit rebuild." },
  { when: "What's next",     title: "Exchange programs, internships & bigger builds", icon: "🚀", color: "#a3e635", next: true, text: "Looking for programs like YES, internships and competitions where I can learn from people building at a bigger scale." },
];

// Social links
const SOCIALS = [
  { label: "GitHub",  icon: "github",  color: "#e9e5ff", url: "https://github.com/theaibot2011" },
  { label: "YouTube", icon: "youtube", color: "#ef4444", url: "https://youtube.com/@zenosocial12" },
  { label: "Email",   icon: "mail",    color: "#22d3ee", url: "mailto:" + PROFILE.email },
];

/* =========================================================================
   PART B · ICONS (simple inline SVGs)
   ========================================================================= */
const ICONS = {
  python: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.9 2c-5 0-4.7 2.2-4.7 2.2v2.3h4.8v.7H5.3S2 6.8 2 11.9c0 5 2.9 4.9 2.9 4.9h1.7v-2.4s-.1-2.9 2.9-2.9h4.8s2.8 0 2.8-2.7V4.9S17.5 2 11.9 2zM9.3 3.6a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z"/><path d="M12.1 22c5 0 4.7-2.2 4.7-2.2v-2.3H12v-.7h6.7s3.3.4 3.3-4.7c0-5-2.9-4.9-2.9-4.9h-1.7v2.4s.1 2.9-2.9 2.9H9.7s-2.8 0-2.8 2.7v4.6S6.5 22 12.1 22zm2.6-1.6a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" opacity=".7"/></svg>',
  html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16"/></svg>',
  powershell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M6 9l4 3-4 3M12 15h5"/></svg>',
  davinci: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="7" r="4"/><circle cx="7" cy="15.5" r="4" opacity=".75"/><circle cx="17" cy="15.5" r="4" opacity=".5"/></svg>',
  supabase: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.3 22c-.6.7-1.7.3-1.7-.6V14H4.2c-1.3 0-2-1.5-1.2-2.5L10.7 2c.6-.7 1.7-.3 1.7.6V10h7.4c1.3 0 2 1.5 1.2 2.5z"/></svg>',
  git: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="9" r="2.5"/><path d="M6 8.5v7M18 11.5c0 3-3 3.5-6 4.5-2 .6-3.6 1.2-4.5 2"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 2.9.8.1-.7.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l5.8 3z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M3 7l9 6 9-6"/></svg>',
  external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/></svg>',
  book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 21V5M8 7h7"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',
};

/* =========================================================================
   PART C · RENDERING
   ========================================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ---- Project mockups: little fake screenshots made from HTML/CSS/SVG ---- */
function browser(url, inner, screenClass = "") {
  return `
    <div class="mock-browser">
      <div class="mock-bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><span class="mock-url">🔒 ${url}</span></div>
      <div class="mock-screen ${screenClass}">${inner}</div>
    </div>`;
}

const MOCKUPS = {
  monitor: () => browser("monitortesting.netlify.app", `
      <div class="mt-test"><div class="mt-cross"></div><span class="mt-pixel"></span></div>
      <div class="mt-panel">
        <b>Tests</b>
        <span class="mt-btn on">▸ Dead pixels</span>
        <span class="mt-btn">▸ Color</span>
        <span class="mt-btn">▸ Backlight bleed</span>
        <span class="mt-btn">▸ Response</span>
        <span class="mt-btn">▸ Gradient</span>
      </div>`, "mt-screen"),

  imposter: () => browser("moimposter.lovable.app", `
      <div class="imp-icon">
        <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 32c6-14 18-22 36-22-4 6-6 10-6 14 0 8-8 14-18 14-6 0-10-2-12-6z" fill="#8b5cf6"/><ellipse cx="25" cy="25" rx="9" ry="5" fill="#ede9fe"/><circle cx="25" cy="25" r="3.4" fill="#4c1d95"/><circle cx="26" cy="24" r="1" fill="#fff"/></svg>
      </div>
      <div class="imp-title">Imposter</div>
      <div class="imp-sub">FIND THE LIAR</div>
      <div class="imp-btns"><span class="imp-btn primary">Play local</span><span class="imp-btn">Play online</span></div>`, "imp-screen"),

  video: () => {
    // fake DaVinci timeline: 3 tracks of coloured clips
    const tracks = [
      [["#7c3aed", 22], ["#a855f7", 30], ["#7c3aed", 18], ["#a855f7", 26]],
      [["#0891b2", 14], ["#22d3ee", 40], ["#0891b2", 34]],
      [["#4d7c0f", 46], ["#a3e635", 20], ["#4d7c0f", 28]],
    ];
    const rows = tracks.map(t => `<div class="dv-track">${t.map(([c, w]) => `<span class="dv-clip" style="background:${c};width:${w}%"></span>`).join("")}</div>`).join("");
    return `<div class="dv"><div class="dv-viewer"><span class="bars top"></span><span class="bars bottom"></span></div><div class="dv-tracks">${rows}<span class="dv-head"></span></div></div>`;
  },

  bryteback: () => browser("bryteback.lovable.app", `
      <div class="bb-copy">
        <span class="bb-kicker">SECTOR-LEVEL DATA RECOVERY</span>
        <span class="bb-logo">Bryte<span>Back</span></span>
        <span class="bb-line w70"></span><span class="bb-line w45"></span>
        <span class="bb-cta">WhatsApp us</span>
      </div>
      <svg class="bb-hdd" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="8" y="6" width="84" height="88" rx="8" fill="#111827" stroke="#334155" stroke-width="2"/>
        <circle cx="50" cy="44" r="30" fill="#0f172a" stroke="#2dd4bf" stroke-opacity=".6" stroke-width="1.5"/>
        <circle cx="50" cy="44" r="18" fill="none" stroke="#2dd4bf" stroke-opacity=".3"/>
        <circle cx="50" cy="44" r="6" fill="#334155" stroke="#94a3b8"/>
        <path d="M80 80L56 50" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
        <circle cx="80" cy="80" r="5" fill="#475569"/>
      </svg>
      <span class="bb-stamp">SHUT DOWN</span>`, "bb-screen"),

  loginsnaps: () => `
    <div class="ls">
      <div class="ls-term">
        <div class="ls-bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><span class="ls-tab">Windows PowerShell</span></div>
        <pre class="ls-out"><span class="c"># login-snaps.ps1 · runs at every logon</span>
<span class="k">Register-ScheduledTask</span> <span class="p">-TaskName</span> <span class="s">"LoginSnaps"</span> <span class="p">-Trigger</span> (<span class="k">New-ScheduledTaskTrigger</span> <span class="p">-AtLogOn</span>)

<span class="v">$stamp</span> = <span class="k">Get-Date</span> <span class="p">-Format</span> <span class="s">"yyyy-MM-dd_HH-mm"</span>
<span class="k">Save-WebcamSnap</span> <span class="p">-Path</span> <span class="s">"snaps\\$stamp.jpg"</span>

<span class="ok">✔ logon detected   21:07</span>
<span class="ok">✔ snap saved       2026-11-05_21-07.jpg</span><span class="ls-caret"></span></pre>
      </div>
    </div>`,

  graphite: () => {
    const keys = ["sin", "cos", "tan", "log", "ln", "√", "x²", "xʸ", "π", "(", ")", "÷", "7", "8", "9", "×", "4", "5", "6", "="];
    return `
    <div class="gr">
      <div class="gr-calc">
        <div class="gr-titlebar"><span>Graphite</span><i>—</i><i>▢</i><i>✕</i></div>
        <div class="gr-display"><small>log₁₀(1000) + ln(e²)</small><b>5</b></div>
        <div class="gr-keys">${keys.map(k => `<span class="${k === "=" ? "eq" : /^[a-z√]/.test(k) ? "fn" : ""}">${k}</span>`).join("")}</div>
      </div>
      <span class="gr-name">v1.0.1 · Windows</span>
    </div>`;
  },

  shorts: () => {
    const phone = (bg, views) => `<div class="phone" style="background:${bg}"><span class="play"></span><div class="views">${views}<span class="line" style="width:80%"></span><span class="line" style="width:55%"></span></div></div>`;
    return `<div class="shorts">
      ${phone("linear-gradient(160deg,#0e7490,#22d3ee 60%,#a5f3fc)", "▶ 1.2K")}
      ${phone("linear-gradient(160deg,#7c3aed,#f472b6)", "▶ 4.8K")}
      ${phone("linear-gradient(160deg,#365314,#a3e635)", "▶ 860")}
    </div>`;
  },

  headunit: () => `
    <div class="hu">
      <span class="hu-stamp">CONCEPT</span>
      <div class="hu-dash">
        <span class="hu-knob"></span>
        <div class="hu-screen">
          <div class="hu-half hu-old"><span>ナビ</span><span>オーディオ</span><span>電話</span><span>設定</span></div>
          <div class="hu-half hu-new"><span>Maps</span><span>Music</span><span>Phone</span><span>Settings</span></div>
          <span class="hu-scan"></span>
        </div>
        <span class="hu-knob"></span>
      </div>
    </div>`,
};

/* ---- Small helper: renders one button, or a disabled one when url is null ---- */
function linkButton(url, label, icon, variant, projectTitle) {
  if (url === "TODO") {
    // placeholder: shows the button but it isn't clickable until a real URL is added
    return `<span class="btn btn-sm ${variant}" aria-disabled="true" title="Link coming soon">${icon}${label}</span>`;
  }
  if (!url && variant === "btn-ghost") return ""; // no repo → no Code button
  if (!url) {
    return `<span class="btn btn-sm ${variant}" aria-disabled="true" title="Not available yet">${label}</span>`;
  }
  const external = /^https?:/.test(url);
  const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
  return `<a class="btn btn-sm ${variant}" href="${url}"${attrs} aria-label="${label}: ${projectTitle}${external ? " (opens in new tab)" : ""}">${icon}${label}</a>`;
}

/* Problem → Solution → Result mini-layout used on project cards and in the story popup */
function renderStory(story, cls = "") {
  const steps = [["problem", "Problem", story.problem], ["solution", "Solution", story.solution], ["result", "Result", story.result]];
  return `<ol class="psr ${cls}">${steps.map(([key, label, text]) => `
    <li class="psr-step psr-${key}"><span class="psr-label">${label}</span><p>${text}</p></li>`).join("")}</ol>`;
}

function renderProjects() {
  const grid = $("#projects-grid");
  grid.innerHTML = PROJECTS.map((p, i) => {
    const statusClass = { live: "status-live", content: "status-content", wip: "status-wip", ended: "status-ended", private: "status-private" }[p.status] || "status-live";
    const live = p.links.hideLive ? "" : linkButton(p.links.live, p.links.liveLabel || "Live", ICONS.external, "btn-primary", p.title);
    const code = linkButton(p.links.code, p.links.codeLabel || "Code", ICONS.code, "btn-ghost", p.title);
    return `
      <article class="project-card reveal tilt ${p.featured ? "featured" : ""} ${p.featured && i > 0 ? "flip" : ""}" style="--accent:${p.accent}; --d:${(i % 2) * 0.1}s">
        <div class="project-visual" ${p.image ? "" : `role="img" aria-label="Illustrated preview of ${p.title}"`}>
          ${p.image
            ? `<img class="project-shot" src="${p.image.src}" width="${p.image.width}" height="${p.image.height}" alt="${p.image.alt}" loading="lazy" decoding="async">`
            : MOCKUPS[p.visual] ? MOCKUPS[p.visual]() : ""}
        </div>
        <div class="project-body">
          <div class="project-meta">
            <span class="project-num">0${i + 1}</span>
            <span class="status ${statusClass}">${p.statusLabel}</span>
            ${p.aiTool ? `<span class="ai-badge" title="AI tool used">✦ ${p.aiTool}</span>` : ""}
          </div>
          <h3>${p.title}</h3>
          ${p.subtitle ? `<p class="project-subtitle">${p.subtitle}</p>` : ""}
          <p class="project-hook">${p.hook}</p>
          ${p.story ? renderStory(p.story) : `<p class="project-desc">${p.description}</p>`}
          <ul class="tags" aria-label="Tech used">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>
          ${p.note ? `<p class="project-note">${p.note}</p>` : ""}
          <div class="project-actions">${live}${code}${p.story && p.story.long ? `<button type="button" class="btn btn-sm btn-ghost story-btn" data-story="${i}">${ICONS.book}The story</button>` : ""}</div>
        </div>
      </article>`;
  }).join("");
}

function renderHowIBuild() {
  $("#how-line").textContent = HOW_I_BUILD.line;
  $("#how-steps").innerHTML = HOW_I_BUILD.steps.map((s, i) => `
    <li class="how-step glass reveal" style="--d:${i * 0.08}s">
      <span class="how-num">0${i + 1}</span>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </li>`).join("");
  $("#how-examples").innerHTML = HOW_I_BUILD.examples.map((e, i) => {
    const idx = PROJECTS.findIndex(p => p.title === e.project);
    const accent = idx > -1 ? PROJECTS[idx].accent : "var(--purple)";
    return `
    <li class="reveal" style="--d:${i * 0.08}s">
      <button type="button" class="how-example" data-story="${idx}" style="--accent:${accent}">
        <span class="how-ex-name">${e.project}</span>
        <span class="how-ex-flow"><span class="how-ex-problem">${e.problem}</span><span class="how-ex-arrow" aria-hidden="true">→</span><span class="how-ex-fix">${e.fix}</span></span>
        <span class="how-ex-cta">Read the story ${ICONS.arrow}</span>
      </button>
    </li>`;
  }).join("");
}

function renderStats() {
  $("#stats-grid").innerHTML = STATS.map(s => `
    <li class="stat">
      <span class="stat-num" data-count="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</span>
      <span class="stat-label">${s.label}</span>
    </li>`).join("");
}

function renderAbout() {
  $("#about-text").innerHTML = ABOUT.map(p => `<p>${p}</p>`).join("");
  $("#about-facts").innerHTML = FACTS.map(f => `
    <li><span class="fact-ico" aria-hidden="true">${f.icon}</span><span><small>${f.sub}</small>${f.label}</span></li>`).join("");
}

function renderVideos() {
  $("#challenge-days").innerHTML = Array.from({ length: 30 }, (_, i) => `<span data-i="${i}"></span>`).join("");
  $("#video-grid").innerHTML = VIDEOS.map((v, i) => `
    <article class="video-card reveal" style="--d:${(i % 3) * 0.08}s">
      <div class="video-frame">
        ${v.youtubeId
          ? `<button class="video-poster" style="--poster:${v.poster}" data-yt="${v.youtubeId}" data-title="${v.title}" aria-label="Play video: ${v.title}"><span class="play-btn"></span></button>`
          : `<div class="video-poster static" style="--poster:${v.poster}" aria-hidden="true"><span class="poster-icon">${v.icon}</span></div>`}
        <span class="video-day">${v.day}</span>
      </div>
      <div class="video-info">
        <h3>${v.title}</h3>
        <p>${v.note}</p>
      </div>
    </article>`).join("");
}

function renderSkills() {
  $("#skill-list").innerHTML = SKILLS.map((s, i) => `
    <li class="skill reveal" style="--c:${s.color}; --level:${s.level}%; --d:${i * 0.06}s">
      <span class="skill-ico" aria-hidden="true">${ICONS[s.icon]}</span>
      <div>
        <div class="skill-top"><span class="skill-name">${s.name}</span><span class="skill-note">${s.note}</span></div>
        <div class="skill-bar" role="progressbar" aria-label="${s.name} confidence" aria-valuenow="${s.level}" aria-valuemin="0" aria-valuemax="100"><span class="skill-fill"></span></div>
      </div>
    </li>`).join("");

  // Orbit: first 3 skills on the outer ring, last 3 on the inner ring
  const badge = (s, angle, radius) => `<span class="orbit-badge" style="--a:${angle}deg; --r:${radius}; --c:${s.color}"><span>${ICONS[s.icon]}</span></span>`;
  $("#orbit-outer").innerHTML = SKILLS.slice(0, 3).map((s, i) => badge(s, i * 120 - 90, "calc(50cqw - 32px)")).join("");
  $("#orbit-inner").innerHTML = SKILLS.slice(3).map((s, i) => badge(s, i * 120 - 30, "23cqw")).join("");
}

function renderTimeline() {
  $("#timeline").innerHTML = TIMELINE.map(t => `
    <li class="tl-item reveal ${t.next ? "next" : ""}" style="--c:${t.color}">
      <span class="tl-dot" aria-hidden="true"></span>
      <div class="tl-card glass">
        <p class="tl-when">${t.when}</p>
        <h3><span aria-hidden="true">${t.icon}</span>${t.title}</h3>
        <p>${t.text}</p>
      </div>
    </li>`).join("");
}

function renderSocials() {
  $("#socials").innerHTML = SOCIALS.map(s => {
    const external = /^https?:/.test(s.url);
    return `<li><a href="${s.url}" style="--c:${s.color}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}>${ICONS[s.icon]}<span>${s.label}</span></a></li>`;
  }).join("");
}

/* =========================================================================
   PART D · INTERACTIONS
   ========================================================================= */

/* ---- Hero: text-scramble effect that cycles through the roles ---- */
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}=+*^?#01";
  }
  setText(newText) {
    const oldText = this.el.textContent;
    const length = Math.max(oldText.length, newText.length);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const start = Math.floor(Math.random() * 18);
      const end = start + Math.floor(Math.random() * 18) + 6;
      this.queue.push({ from: oldText[i] || "", to: newText[i] || "", start, end, char: "" });
    }
    cancelAnimationFrame(this.raf);
    this.frame = 0;
    return new Promise(resolve => { this.resolve = resolve; this.update(); });
  }
  update() {
    let html = "";
    let done = 0;
    for (const q of this.queue) {
      if (this.frame >= q.end) { done++; html += q.to; }
      else if (this.frame >= q.start) {
        if (!q.char || Math.random() < 0.3) q.char = this.chars[Math.floor(Math.random() * this.chars.length)];
        html += `<span class="scramble-char">${q.char === "<" ? "&lt;" : q.char === ">" ? "&gt;" : q.char}</span>`;
      } else html += q.from;
    }
    this.el.innerHTML = html;
    if (done === this.queue.length) this.resolve();
    else { this.raf = requestAnimationFrame(() => this.update()); this.frame++; }
  }
}

function initHeroRoles() {
  const el = $("#hero-role");
  const roles = PROFILE.roles;
  if (reduceMotion) {
    // Gentle swap with no scramble for people who prefer less motion
    let i = 0;
    setInterval(() => { i = (i + 1) % roles.length; el.textContent = roles[i]; }, 3000);
    return;
  }
  const fx = new TextScramble(el);
  let i = 0;
  const next = () => {
    fx.setText(roles[i]).then(() => setTimeout(next, 2000));
    i = (i + 1) % roles.length;
  };
  setTimeout(next, 1200);
}

/* ---- Scroll reveal for anything with .reveal ---- */
function initReveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => io.observe(el));
}

/* ---- Animated counters in the stats strip ---- */
function initCounters() {
  const nums = $$("[data-count]");
  const run = el => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || "";
    if (reduceMotion) { el.textContent = target + suffix; return; }
    const duration = 1600;
    const start = performance.now();
    const tick = now => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.6 });
  nums.forEach(n => io.observe(n));
}

/* ---- Skill bars + challenge squares fill in when visible ---- */
function initFills() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      if (e.target.id === "challenge-days") {
        $$("span", e.target).forEach((s, i) => setTimeout(() => s.classList.add("done"), reduceMotion ? 0 : i * 45));
      } else {
        e.target.classList.add("in");
      }
      io.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  $$(".skill").forEach(s => io.observe(s));
  io.observe($("#challenge-days"));
}

/* ---- Navbar: glass on scroll, active link, mobile menu ---- */
function initNav() {
  const nav = $("#nav");
  const burger = $("#hamburger");
  const menu = $("#nav-links");
  const links = $$("[data-nav]");

  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setMenu = open => {
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };
  burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
  links.forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
  window.addEventListener("resize", () => { if (window.innerWidth > 860) setMenu(false); });

  // Highlight the link for whichever section is in the middle of the screen
  const sections = links.map(a => $(a.getAttribute("href"))).filter(Boolean);
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => {
        const on = a.getAttribute("href") === "#" + e.target.id;
        a.classList.toggle("active", on);
        if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => io.observe(s));
  // Clear highlight when back at the hero
  const heroIO = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) links.forEach(a => { a.classList.remove("active"); a.removeAttribute("aria-current"); });
  }, { rootMargin: "-45% 0px -50% 0px" });
  heroIO.observe($("#home"));
}

/* ---- Cursor glow + 3D tilt + cursor-following card glow (mouse only) ---- */
function initPointerFX() {
  if (!finePointer || reduceMotion) return;

  const glow = $(".cursor-glow");
  let x = innerWidth / 2, y = innerHeight / 2, gx = x, gy = y;
  window.addEventListener("pointermove", e => { x = e.clientX; y = e.clientY; glow.classList.add("on"); }, { passive: true });
  document.addEventListener("pointerleave", () => glow.classList.remove("on"));
  const loop = () => {
    gx += (x - gx) * 0.12; gy += (y - gy) * 0.12; // smooth trailing
    glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
    requestAnimationFrame(loop);
  };
  loop();

  $$(".tilt").forEach(card => {
    const max = card.classList.contains("featured") ? 4 : 7; // degrees
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty("--mx", `${px * 100}%`);
      card.style.setProperty("--my", `${py * 100}%`);
      card.style.transition = "transform .1s linear, border-color .4s, box-shadow .4s";
      card.style.transform = `perspective(1000px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transition = "";
      card.style.transform = "";
    });
  });

  // Buttons that lean slightly toward the cursor
  $$(".magnetic").forEach(btn => {
    btn.addEventListener("pointermove", e => {
      const r = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.15}px, ${(e.clientY - r.top - r.height / 2) * 0.25 - 2}px)`;
    });
    btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
  });
}

/* ---- Lazy video embeds: the YouTube iframe only loads when clicked ---- */
function initVideos() {
  $("#video-grid").addEventListener("click", e => {
    const btn = e.target.closest("button.video-poster");
    if (!btn) return;
    const id = btn.dataset.yt;
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;
    iframe.title = btn.dataset.title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    btn.replaceWith(iframe);
  });
}

/* ---- Contact form: Formspree if configured, otherwise mailto ---- */
function initForm() {
  const form = $("#contact-form");
  const status = $("#form-status");
  form.addEventListener("submit", async e => {
    e.preventDefault();
    status.className = "form-status";

    // simple validation
    let ok = true;
    $$("input, textarea", form).forEach(f => {
      const valid = f.checkValidity() && f.value.trim() !== "";
      f.parentElement.classList.toggle("invalid", !valid);
      if (!valid) ok = false;
    });
    if (!ok) { status.textContent = "Please fill in every field with a valid email."; status.classList.add("err"); return; }

    const data = new FormData(form);
    if (CONTACT.formEndpoint.includes("YOUR_FORM_ID")) {
      // Fallback: open the visitor's email app with the message pre-filled
      const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("name")} (${data.get("email")})`);
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      status.textContent = "Opening your email app…";
      status.classList.add("ok");
      return;
    }

    status.textContent = "Sending…";
    try {
      const res = await fetch(CONTACT.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error();
      form.reset();
      status.textContent = "Message sent! I'll get back to you soon. 🚀";
      status.classList.add("ok");
    } catch {
      status.textContent = `Something went wrong. Email me directly at ${PROFILE.email}.`;
      status.classList.add("err");
    }
  });
}

/* ---- "The story" popup for projects that have story.long ---- */
function initStoryModal() {
  const modal = $("#story-modal");
  const body = $("#story-body");
  if (!modal || typeof modal.showModal !== "function") return;

  const open = i => {
    const p = PROJECTS[i];
    if (!p || !p.story) return;
    const live = p.links.hideLive ? "" : linkButton(p.links.live, p.links.liveLabel || "Live", ICONS.external, "btn-primary", p.title);
    const code = linkButton(p.links.code, p.links.codeLabel || "Code", ICONS.code, "btn-ghost", p.title);
    body.style.setProperty("--accent", p.accent);
    body.innerHTML = `
      <p class="section-kicker">The story</p>
      <h2 id="story-title" class="story-title">${p.title}${p.subtitle ? `<small>${p.subtitle}</small>` : ""}</h2>
      <p class="project-hook">${p.hook}</p>
      ${renderStory(p.story, "psr-lg")}
      <div class="story-long">${(p.story.long || []).map(t => `<p>${t}</p>`).join("")}</div>
      ${p.story.gallery ? `<div class="story-gallery">${p.story.gallery.map(g => `
        <a href="${g.src}" target="_blank" rel="noopener" class="${g.height > g.width ? "tall" : ""}"><img src="${g.src}" width="${g.width}" height="${g.height}" alt="${g.alt}" loading="lazy" decoding="async"></a>`).join("")}</div>` : ""}
      ${p.note ? `<p class="project-note">${p.note}</p>` : ""}
      <div class="project-actions">${live}${code}</div>`;
    modal.showModal();
    document.body.style.overflow = "hidden";
  };

  document.addEventListener("click", e => {
    const trigger = e.target.closest("[data-story]");
    if (trigger) open(+trigger.dataset.story);
  });
  $("#story-close").addEventListener("click", () => modal.close());
  // click on the dark backdrop closes it
  modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });
  modal.addEventListener("close", () => { document.body.style.overflow = ""; });
  // links inside the popup (like "#editing") should close it
  body.addEventListener("click", e => { if (e.target.closest("a[href^='#']")) modal.close(); });
}

/* ---- Toast message ---- */
let toastTimer;
function showToast(title, text) {
  const t = $("#toast");
  t.innerHTML = `<span class="t-big">${title}</span>${text}`;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 4200);
}

/* ---- Easter egg: Konami code (or tap the logo 5 times on mobile) ---- */
function initEasterEgg() {
  const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let pos = 0;
  document.addEventListener("keydown", e => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = key === code[pos] ? pos + 1 : (key === code[0] ? 1 : 0);
    if (pos === code.length) { pos = 0; unlock(); }
  });

  let taps = 0, tapTimer;
  $("#logo").addEventListener("click", () => {
    taps++;
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => (taps = 0), 1500);
    if (taps >= 5) { taps = 0; unlock(); }
  });

  function unlock() {
    showToast("🏆 Achievement unlocked: Cheat Code Master", "+1000 XP · You clearly know your classics. Mohsin approves. 🎮");
    if (!reduceMotion) confetti();
  }
}

/* Tiny confetti engine (no library) */
function confetti() {
  const canvas = $("#confetti");
  const ctx = canvas.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
  ctx.scale(dpr, dpr);
  const colors = ["#a855f7", "#22d3ee", "#a3e635", "#f472b6", "#fde047"];
  const pieces = Array.from({ length: 180 }, () => ({
    x: innerWidth / 2 + (Math.random() - 0.5) * 120,
    y: innerHeight * 0.6,
    vx: (Math.random() - 0.5) * 16,
    vy: -Math.random() * 18 - 8,
    size: Math.random() * 7 + 4,
    rot: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
    color: colors[(Math.random() * colors.length) | 0],
  }));
  const start = performance.now();
  (function frame(now) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    pieces.forEach(p => {
      p.vy += 0.45; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.color; ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
    });
    if (now - start < 4000) requestAnimationFrame(frame);
    else ctx.clearRect(0, 0, innerWidth, innerHeight);
  })(start);
}

/* ---- Boot ---- */
document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderAbout();
  renderHowIBuild();
  renderProjects();
  renderVideos();
  renderSkills();
  renderTimeline();
  renderSocials();

  $("#year").textContent = new Date().getFullYear();

  initReveal();
  initCounters();
  initFills();
  initNav();
  initHeroRoles();
  initPointerFX();
  initVideos();
  initStoryModal();
  initForm();
  initEasterEgg();

  // A little hello for anyone who opens DevTools 👀
  console.log("%cHey, you opened DevTools. Respect. 👋  ~ Mohsin", "font:600 14px sans-serif;color:#a855f7");
});
