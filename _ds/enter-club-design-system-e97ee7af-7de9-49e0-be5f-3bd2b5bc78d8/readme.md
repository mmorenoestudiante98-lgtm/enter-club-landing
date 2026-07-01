# Enter Club — Design System

> **Enter Club** — La única comunidad en español donde jóvenes que han hecho click y quieren una vida más libre crecen juntos: entre iguales, sin gurús, con un sistema que convierte el conocimiento en **acción real**.

This project is the Enter Club brand + product design system. An automated compiler indexes the tokens, fonts, components, and cards; consumers link the single root `styles.css`.

---

## Sources provided
- **Logos** — `Logo V1.svg` (two-tone: ENTER terracotta + *club* script in olive), `Logo V2.svg` (mono). Re-colored copies live in `assets/logos/`.
- **Covers** — `2026-06-08_Skool_Portada-Accion.png`, `…Direccion.png` (Skool course covers). In `assets/illustrations/`. *(A third file, `…Portada-Grande.png`, was referenced but not uploaded — see Caveats.)*
- **Fonts** — Neue Haas Grotesk Text (Trial): Roman 55, Italic 56, Medium 65, Medium-Italic 66, Bold 75, Bold-Italic 76. In `assets/fonts/`.
- **Palette** — `#984216` primary · `#fdf7e5` secondary · `#8e8b68` tertiary (details).
- The brand operates a **Skool** community; the UI kit recreates that community experience in the Enter Club brand.

---

## Content fundamentals — voice & tone
- **Language:** Spanish (Spain-leaning neutral). Informal **tú**, never *usted*. Speaks peer-to-peer ("entre iguales"), never top-down or guru-like.
- **Tone:** motivating but grounded and anti-hype. Action over theory. Rejects the "guru / hustle" cliché explicitly. Honest about discomfort ("Incómodo, pero hecho").
- **Casing:** Sentence case everywhere. Big display words can be a single noun (*Acción*, *Dirección*). ALL-CAPS only for tiny eyebrow labels and the in-illustration step labels (INFORMACIÓN → ACCIÓN → RESULTADOS).
- **Signature constructions:** short noun + tagline pairs — *"Acción · De saber a hacer"*, *"Dirección · Saber a dónde vas"*. Punchy, second-person imperatives: *"Entra al club"*, *"Pon en acción"*.
- **Vocabulary:** acción, hacer, click, libre/libertad, iguales, sistema, constancia, rumbo, dirección.
- **Emoji:** used sparingly and only in member-generated community copy (🙌 🔥), never in headings, product chrome, or marketing titles.
- **Examples:**
  - Tagline: *"De saber a hacer."*
  - Hero: *"Has hecho click."* / *"Entra al club donde el conocimiento se convierte en acción."*
  - Community post: *"Llevaba meses 'estudiando' cómo lanzar. Hoy por fin mandé el primer mensaje a un cliente real. Incómodo, pero hecho."*

---

## Visual foundations
- **Colors:** warm, earthy, retro-modern. Terracotta/rust `#984216` is the hero — used full-bleed on covers, CTAs, headings, progress. Cream `#fdf7e5` is the default page surface (never stark white). Sage olive `#8e8b68` is a *detail* accent (the script "club", secondary tags, the second progress track) — used sparingly. Full ramps + warm "ink" neutrals in `tokens/colors.css`. Ink neutrals are warm-tinted (brown-black `#2a1d12`), never cool grey.
- **Type:** one family, **Neue Haas Grotesk Text**, for everything. Hierarchy comes from **weight + size**, not different faces — body in Roman 400, titles in Bold 700, Medium 500 for labels. Tight negative tracking on large bold titles. The bespoke rounded display face in the "ENTER club" wordmark and the cover headers (*Acción*) is a **locked logo asset**, not a system font — never set running type in it.
- **Backgrounds:** flat solid fields (rust or cream). Hero/cover imagery is **flat editorial illustration** — warm terracotta + sage + cream, friendly characters, organic blob masks, dotted-grid accents, small geometric confetti (circles, squares). No photography, no gradients-as-decoration, no glassmorphism.
- **Shape language:** generously rounded. Cards `--radius-lg` (16), pill buttons & badges (`--radius-pill`), pill inputs/search. Friendly, never sharp.
- **Cards:** cream/off-white surface, 1px subtle warm border (`--border-subtle`), soft warm shadow (`--shadow-sm`); interactive cards lift 2px to `--shadow-lg` on hover.
- **Shadows:** warm, low-contrast, tinted with rust-black `rgba(77,32,9,…)` — never neutral/blue grey. A dedicated `--shadow-brand` (terracotta glow) sits under primary buttons.
- **Borders:** 1px subtle on cards; 1.5px on interactive controls (buttons, inputs, switch) so they read as tappable.
- **Motion:** quick and confident. `--ease-out` cubic-bezier(.22,1,.36,1), 120–320ms. Buttons **scale 0.97 on press** and brighten ~6% on hover (no color swap). Progress bars animate width on `--dur-slow`. No bounce, no infinite loops, no parallax.
- **Hover/press:** hover = subtle `brightness(0.94)` or soft-tint background; press = `scale(0.97)`. Active nav = `--rust-50` tint + bold weight + terracotta text.
- **Transparency/blur:** minimal. Only used as a dark scrim over imagery (locked course overlay `rgba(42,29,18,.35)`). No frosted-glass panels.
- **Layout:** max content `1200–1280px`. Community = 3-column (232 nav · feed · 300 rail). Sticky 64px top bar. Generous 16–24px gaps via the 4px spacing scale.

---

## Iconography
- **System:** lightweight inline **SVG**, single consistent style — `viewBox 0 0 24 24`, **1.6 stroke**, round caps/joins, `currentColor` so icons inherit text color (terracotta when active, muted otherwise). Defined in the `Icons` map in `ui_kits/community/Community.jsx` (home, book, calendar, trophy, members, heart, comment, pin, search, play, check, lock, bell, plus).
- **No icon font, no external icon library** is bundled. If you need broader coverage, **Lucide** (lucide.dev) is the closest match to this stroke style and weight — use it from CDN and keep stroke at ~1.6. *(Substitution flagged — swap in if the brand later standardizes on a set.)*
- **Emoji** appear only inside user/community-generated copy (🔥🙌), never as UI iconography.
- The cover illustrations use their own drawn pictograms (document, check-circle, target) inside speech bubbles — those are illustration, not the UI icon set.

---

## Index / manifest
**Root**
- `styles.css` — entry point (consumers link this); `@import`s all tokens + fonts.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `assets/` — `logos/` (primary, cream-reversed, mono, mono-cream), `illustrations/` (portada covers), `fonts/` (6 OTFs).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `SKILL.md` — Agent-Skill manifest for downloading/using this system in Claude Code.

**Components** (`window.EnterClubDesignSystem_e97ee7.*`)
- `components/core/` — **Button**, **Badge**, **Avatar**, **Card**
- `components/forms/` — **Input**, **Switch**
- `components/navigation/` — **Tabs**
- `components/feedback/` — **ProgressBar**

**UI kits**
- `ui_kits/community/` — Enter Club community platform: login → feed → classroom → course detail. See its `README.md`.

---

## Caveats
- `2026-06-08_Skool_Portada-Grande.png` was listed but **not uploaded** — only Acción + Dirección covers are available.
- Neue Haas Grotesk Text files are **Trial** versions — replace with licensed files before production.
- Member avatars use initials (no member photography supplied).
- The rounded display face in the logo/covers is not provided as a font; it stays a locked image asset.
