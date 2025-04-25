# 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
│
├── README.md
├── astro.config.mjs
├── netlify.toml
├── package.json
├── pnpm-lock.yaml
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   │   ├── 404.avif
│   │   ├── cta-academy-1.avif
│   │   ├── cta-academy-3.avif
│   │   ├── cta-academy-4.avif
│   │   ├── cta-index-1.avif
│   │   ├── cta-index-2.avif
│   │   ├── cta-service-2.avif
│   │   ├── cta-trial-1.avif
│   │   ├── cta-trial-2.avif
│   │   ├── cta-trial-3.avif
│   │   ├── hero.avif
│   │   └── logo.png
│   ├── components
│   │   ├── Accordion.astro
│   │   ├── BlogCard.astro
│   │   ├── BlogEntries.astro
│   │   ├── CallToAction.astro
│   │   ├── ContactForm.astro
│   │   ├── Hero.astro
│   │   ├── PlanCard.astro
│   │   ├── Plans.astro
│   │   ├── Reviews.astro
│   │   └── layout
│   │       ├── Analytics.astro
│   │       ├── Footer.astro
│   │       └── Navbar.astro
│   ├── content
│   │   ├── blog
│   │   │   ├── images
│   │   │   │   ├── post-01.avif
│   │   │   │   ├── post-02.avif
│   │   │   │   ├── post-03.avif
│   │   │   │   ├── post-04.avif
│   │   │   │   ├── post-05.avif
│   │   │   │   ├── post-06.avif
│   │   │   │   └── post-07.avif
│   │   │   ├── page-01.mdx
│   │   │   ├── page-02.mdx
│   │   │   ├── page-03.mdx
│   │   │   ├── page-04.mdx
│   │   │   ├── page-05.mdx
│   │   │   ├── page-06.mdx
│   │   │   └── page-07.mdx
│   │   ├── config.ts
│   │   └── legal
│   │       ├── about.mdx
│   │       ├── liability-waiver.mdx
│   │       ├── privacy-policy.mdx
│   │       └── terms-and-conditions.mdx
│   ├── icons
│   │   ├── arrow-right.svg
│   │   ├── check.svg
│   │   ├── facebook.svg
│   │   ├── google.svg
│   │   ├── instagram.svg
│   │   ├── logo.svg
│   │   ├── star-empty.svg
│   │   ├── star-full.svg
│   │   ├── tiktok.svg
│   │   └── youtube.svg
│   ├── interfaces
│   │   ├── CTA.ts
│   │   ├── FAQ.ts
│   │   ├── index.ts
│   │   ├── plan.ts
│   │   └── review.ts
│   ├── layouts
│   │   ├── BlogLayout.astro
│   │   └── MainLayout.astro
│   ├── pages
│   │   ├── 404.astro
│   │   ├── academy
│   │   │   ├── index.astro
│   │   │   └── membership-plans.astro
│   │   ├── blog
│   │   │   ├── index.astro
│   │   │   └── post
│   │   │       └── [slug].astro
│   │   ├── contact.astro
│   │   ├── faqs.astro
│   │   ├── index.astro
│   │   ├── legal
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   └── services
│   │       ├── index.astro
│   │       ├── open-climbing.astro
│   │       └── trial-class.astro
│   ├── styles
│   │   ├── blog.css
│   │   └── global.css
│   └── utils
│       ├── formatDate.ts
│       └── index.ts
├── tailwind.config.js
└── tsconfig.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
