# Kamatamare Sanuki English Guide

An independent, unofficial English guide for international visitors attending a
Kamatamare Sanuki match for the first time.

## Requirements

- Node.js 22.12 or later
- npm 9.6.5 or later

## Local development

```sh
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Production build

```sh
npm run build
```

The static site is generated in `dist/`.

## Production site URL

Canonical URLs, Open Graph URLs, `robots.txt`, and the sitemap use
`PUBLIC_SITE_URL`. Set it to the final public origin when deploying:

```sh
PUBLIC_SITE_URL=https://your-domain.example npm run build
```

Until it is set, the project uses `https://kamatamare-sanuki-guide.pages.dev`
as a temporary URL.

## Main structure

- `src/pages/`: site pages and routes
- `src/layouts/`: shared page layout
- `src/components/`: shared header, navigation, footer, and page elements
- `src/data/navigation.ts`: navigation links
- `src/styles/global.css`: global styles
- `public/`: files copied directly to the final site
