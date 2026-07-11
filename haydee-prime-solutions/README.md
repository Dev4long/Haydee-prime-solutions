# Haydee Prime Solutions

Single-page marketing site for Haydee Prime Solutions — Immigration, Real Estate, and Insurance services in the US and Ecuador. Built with React + Vite. Bilingual (Spanish/English), light/dark mode, smooth-scroll navigation, and scroll-reveal animations.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Before you publish — update placeholder contact info

Open [src/data/content.js](src/data/content.js) and edit the `siteConfig` object at the bottom of the file with the real phone number, WhatsApp link, and email address:

```js
export const siteConfig = {
  phone: '+1 (555) 000-0000',
  phoneHref: 'tel:+15550000000',
  whatsapp: '+1 (555) 000-0000',
  whatsappHref: 'https://wa.me/15550000000',
  email: 'info@haydeeprimesolutions.com',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  web3formsAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
}
```

### Contact form (Web3Forms)

The contact form submits through [Web3Forms](https://web3forms.com) — a free service that emails you form submissions with no backend required, which is why it works on GitHub Pages.

1. Go to [web3forms.com](https://web3forms.com) and enter the email address that should receive submissions (no account needed) to get a free access key.
2. Paste it into `web3formsAccessKey` in `src/data/content.js`.

**On the access key being in the frontend code:** this is expected and safe — a Web3Forms key only grants "submit a form to this inbox," it cannot read or expose any data, so there's nothing sensitive to protect even though it's visible in the built JS. Two free anti-abuse layers are already wired in:
- A **honeypot field** (`botcheck`) silently drops bot submissions that fill in every field.
- **hCaptcha** (zero-config, no extra signup) challenges suspicious submissions before they reach your inbox.

Free plan is capped at roughly 250 submissions/month, which is generous for a small business contact form. If you ever want the key fully hidden server-side instead of just abuse-limited, that requires a small serverless proxy (e.g. a free Cloudflare Worker) in front of Web3Forms — not needed for normal use.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the site and publishes it automatically on every push to `main`.

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab) — the site will build and deploy automatically.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

No extra configuration is needed — `vite.config.js` uses a relative base path so the build works at any GitHub Pages subpath.

### Manual deploy (alternative)

If you'd rather not use GitHub Actions, you can deploy with the `gh-pages` package instead:

```bash
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch. Then set **Settings → Pages → Source** to the `gh-pages` branch.

## Project structure

```
src/
  assets/images/     Client photos used across the site
  components/        Navbar, Hero, About, Services, Contact, Footer, etc.
  context/            Language (ES/EN) and Theme (light/dark) providers
  data/content.js     All site copy in Spanish and English, plus contact config
  hooks/useInView.js  IntersectionObserver hook powering scroll animations
  styles/main.css     Brand colors, layout, responsive rules, animations
```

## Brand colors

| Token | Hex |
|---|---|
| Green (primary) | `#4A5D4E` |
| Terracotta (accent) | `#D46A43` |
| Sand (secondary) | `#C8B282` |
| Maroon (highlight) | `#8A1B1B` |

Defined as CSS variables in `src/styles/main.css` (`:root` for light mode, `:root[data-theme='dark']` for dark mode).
