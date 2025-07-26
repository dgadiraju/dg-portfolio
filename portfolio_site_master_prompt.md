# Master Prompt – “Build my portfolio site”

```
You are a senior front-end engineer and designer.

**Goal**  
Create a fully-responsive, dark-mode–friendly **personal portfolio website** that can be deployed on **GitHub Pages** with zero build steps (plain HTML/CSS/JS).  

**Owner**  
Durga Gadiraju – AI, Data & Analytics Leader, Instructor, Content Creator.

------------------------------------------------------------
1️⃣   TECH & BUILD RULES
------------------------------------------------------------
• Use **vanilla HTML5**, **Tailwind CSS v3**, and **a single JavaScript file** (no frameworks or bundlers; must run on GitHub Pages as static assets).  
• All assets live in `/` or `/assets`; no node_modules.  
• Output a **complete repo tree** in your answer:  
  ```
  / (root)
    ├── index.html
    ├── about.html
    ├── experience.html
    ├── projects.html
    ├── publications.html
    ├── contact.html
    ├── assets/
    │   ├── css/tailwind.min.css
    │   ├── js/main.js
    │   └── img/(placeholders)
    └── README.md
  ```  
• Include a **`CNAME`** placeholder line in README explaining custom-domain setup.  
• Add a **`.github/workflows/links.yml`** with a scheduled link-checker (use `lychee-action`).  

------------------------------------------------------------
2️⃣   CONTENT & STRUCTURE
------------------------------------------------------------
A. **Navigation (fixed top, collapses on mobile)**  
   Home · About · Experience · Projects · Publications · Contact

B. **Home (index.html)**  
   – Full-width hero with tagline:  
     “I turn data into insights & ideas into products.”  
   – CTA buttons: “Download Résumé” & “Let’s Talk”.

C. **About**  
   – 2-paragraph bio (first-person) + fun fact.  
   – Grid of 3 personal highlights (years experience, students taught, podcasts hosted).

D. **Experience (reverse-chronological)**  
   Use an interactive vertical timeline:  
   1. **Infolob** – GVP, AI | 2023–present  
   2. **ITVersity** – Founder / Content Creator | 2012–present  
   3. **Harman** – Data & Analytics Lead | 2014–2015  
   4. **IBM** – Senior Solution Architect | 2013–2014  
   5. **Cognizant** – Consultant | 2011–2013  
   6. **Vayu Vision** – Software Engineer | 2007–2011  
   7. **Tavant Technologies** – Developer | 2004–2007  

   For each employer add:  
   • 3 bullet achievements (quantified)  
   • Key tech stack (comma-separated badges)

E. **Projects**  
   Create 4 cards (image, title, 120-char blurb, “Read more” link to modal).  
   ! Do **NOT** use client names—describe them generically (“Fortune 100 retailer”).

F. **Publications & Speaking**  
   Responsive card grid pulling data from a JSON array in `main.js` (title, platform, link).

G. **Skills & Certifications** (sidebar or footer component)  
   Tag cloud (Tailwind utility classes).

H. **Testimonials** (JSON-driven carousel in `main.js`).

I. **Contact**  
   – Simple form (name, email, message → `mailto:` fallback).  
   – Social icons: LinkedIn, X/Twitter, GitHub.

------------------------------------------------------------
3️⃣   STYLE & ACCESSIBILITY
------------------------------------------------------------
• Color palette: `#0b5fff` primary, `#ffd33d` accent, gray-900/100.  
• Implement dark-mode toggle (CSS `@media (prefers-color-scheme)` + JS switch).  
• Use semantic HTML (`<section>`, `<article>`, ARIA labels).  
• All images come with alt text placeholders.  
• Lighthouse target ≥ 90 for Perf, A11y, Best Practices, SEO.

------------------------------------------------------------
4️⃣   README.md MUST INCLUDE
------------------------------------------------------------
• Live preview link (to be updated after first push).  
• 3-step “How to run locally” guide (`python -m http.server`).  
• How to enable GitHub Pages (Settings → Pages → branch).  
• MIT License badge.

------------------------------------------------------------
5️⃣   WHAT TO RETURN
------------------------------------------------------------
Respond with:  
1. A **file tree**.  
2. The full code for each file wrapped in triple back-ticks and tagged with the path.  
   Example:  
   ```html
   <!-- index.html -->
   <!DOCTYPE html> …
   ```  
3. A one-paragraph “Next Steps” note at the very end.

Remember: NO client names, keep achievements quantified, follow the exact order of past employers.

Generate now.
```
