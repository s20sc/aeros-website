# Design System — AEROS

## Product Context
- **What this is:** An Embodied Agent Runtime — infrastructure software that governs how embodied agents perceive, decide, and act in the physical world.
- **Who it's for:** Investors (30-second evaluation), enterprise clients (product capabilities), developers (open-source contribution), research partners (academic credibility), partners (collaboration opportunities).
- **Space/industry:** Robotics infrastructure, embodied AI, runtime systems. Peers: HashiCorp (Terraform), Databricks, Vercel, Temporal, Dora-RS.
- **Project type:** Company product website (marketing + developer-facing). Distinct from the academic project page (s20sc.github.io/aeros-project).

## Aesthetic Direction
- **Direction:** Industrial/Utilitarian with Refined edges
- **Decoration level:** Intentional — subtle grain texture on dark surfaces, fine grid lines as background pattern echoing system architecture diagrams. No illustrations, no stock photos. Diagrams, code snippets, and real terminal output only.
- **Mood:** Precision engineering. The control panel of a well-designed factory, not a marketing landing page. Clean, confident, function-communicates-form. The site should feel like the software it describes: controlled, orchestrated, governed.
- **Reference sites:** vercel.com (layout discipline), hashicorp.com (enterprise tone), temporal.io (developer credibility), databricks.com (product depth)

## Typography
- **Display/Hero:** Space Grotesk (400–700) — Monospace-influenced geometric sans-serif with inherent "system/code" DNA. Feels technical and AI-forward without being a monospace font. Says "we build infrastructure" at the typographic level.
- **Body:** Geist (300–700) — Clean geometric sans-serif with excellent technical content readability. Pairs naturally with the serif display for contrast.
- **UI/Labels:** Geist (500–600)
- **Data/Tables:** Geist (tabular-nums) for numeric data, Geist Mono for IDs and codes
- **Code:** Geist Mono (400–500)
- **Loading:** Google Fonts (Space Grotesk) + jsDelivr CDN (Geist, Geist Mono)
- **Scale:**
  - Hero: clamp(3rem, 7vw, 5.5rem)
  - H1: 3rem (48px)
  - H2: 2rem (32px)
  - H3: 1.25rem (20px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)
  - Caption: 0.8125rem (13px)
  - Mono labels: 11px uppercase, letter-spacing 0.08–0.15em

## Color
- **Approach:** Restrained — one strong accent on deep neutrals. Deliberately avoids purple (overused in AI/infra space: Temporal, Fly.io, Databricks).
- **Primary:** `#0066FF` — confident engineering blue. Used for CTAs, active states, links, and accent elements. Hover: `#0052CC`.
- **Secondary:** `#00C2A8` — teal. Used for success states, terminal output highlights, and real-time monitoring indicators. Echoes runtime/status themes.
- **Neutrals:** Cool grays.
  - `#0A0E17` — near-black (dark mode base)
  - `#111827` — surface
  - `#1A2332` — elevated
  - `#1E293B` — borders (dark)
  - `#334155` — mid
  - `#64748B` — muted text
  - `#94A3B8` — secondary text
  - `#CBD5E1` — light border
  - `#E2E8F0` — light mode border
  - `#F5F7FA` — off-white (light mode base)
- **Semantic:** Success `#00C2A8`, Warning `#F59E0B`, Error `#EF4444`, Info `#3B82F6`
- **Dark mode:** Default. Dark mode first design. All semantic colors use 8% opacity background + 20% opacity border for alert/badge variants. Light mode available via toggle. When converting to light mode: reduce saturation ~10%, swap surface/base neutrals.

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable — not cramped like a dashboard, not airy like a marketing site
- **Scale:** 2xs(2px) xs(4px) sm(8px) md(16px) lg(24px) xl(32px) 2xl(48px) 3xl(64px) 4xl(96px)

## Layout
- **Approach:** Grid-disciplined
- **Grid:** 12 columns. Responsive breakpoints: mobile (1 col), tablet (2 col at 768px), desktop (full 12 at 1024px)
- **Max content width:** 1200px
- **Border radius:** Hierarchical — sm: 4px (inputs, code blocks), md: 8px (cards, buttons), lg: 12px (feature cards, sections), full: 9999px (pills, badges, theme toggle)

## Motion
- **Approach:** Minimal-functional — the site moves like a well-oiled machine. Confident, quiet, precise.
- **Easing:** enter: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out), exit: `ease-in`, move: `ease-in-out`
- **Duration:** micro(50–100ms) short(150–250ms) medium(250–400ms) long(400–700ms)
- **Principles:** Subtle entrance fades (200ms ease-out), smooth scroll. No bouncing, no parallax, no scroll-driven animations. Hover transitions on interactive elements only.

## Visual Content Rules
- **No illustrations.** No stock photos. No abstract 3D renders.
- **Allowed:** Architecture diagrams, code snippets, real terminal/CLI output, data tables, system flow diagrams.
- **Grain texture:** Applied globally via SVG noise filter at 3% opacity (dark) / 1.5% opacity (light).
- **Grid background:** Fine lines (60px spacing) at 4% opacity (dark) / 6% opacity (light), masked with radial gradient. Used sparingly in hero and CTA sections.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-10 | Initial design system created | Created by /design-consultation based on competitive research of Vercel, HashiCorp, Databricks, Dora-RS, Temporal, Fly.io |
| 2026-04-10 | Space Grotesk for display | Monospace-influenced geometric sans — inherent "system/code" DNA fits AI infra positioning. Replaced Instrument Serif (too traditional/academic) |
| 2026-04-10 | No purple in palette | Every AI/infra competitor leans purple. Engineering blue + teal owns a distinct lane |
| 2026-04-10 | No illustrations policy | Infrastructure credibility via architecture diagrams and real CLI output, not generic visuals |
| 2026-04-10 | Dark mode default | Category convention for serious infra tools (HashiCorp, Temporal, Databricks all default dark) |
