# MetricsFlow — Dark Minimal Dashboard

A sleek, dark-mode analytics dashboard built with **Next.js 16**, **React 19**, and **Motion**. Every surface is carefully crafted with glassmorphism, emerald accents, and spring-physics animations.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

## ✨ Features

### Data-Driven Dashboard

- **KPI Grid** — Four metric cards with trend indicators, dynamically updated by period selection.
- **Revenue Chart** — Area chart with gradient fill, showing revenue trends across the selected time window.
- **Regional Performance** — Geographical breakdown of business metrics by region.
- **Transactions Table** — Searchable, sortable data table powered by TanStack Table with pagination.

### Period Switching

- **7 Days / 30 Days / YTD** — Header-mounted segment control with `layoutId` FLIP animation. All dashboard widgets update simultaneously when switching periods.

### Motion & Micro-Interactions

- **Staggered Page Entry** — Dashboard sections cascade in with spring physics and blur-to-clear transitions.
- **FLIP Tab Indicator** — Active period pill slides between buttons with spring animation.
- **Active Press States** — CTA button uses `active:scale-[0.98]` for tactile feedback.

### Dark Mode Design

- **True Dark Theme** — `#09090b` background with `#18181b` elevated surfaces for natural depth.
- **Emerald Accent** (`#10b77f`) — Used for primary actions, active states, focus rings, and data highlights.
- **Glassmorphism** — Header uses `backdrop-blur` on a semi-transparent background for layered depth.
- **Custom Scrollbar** — Styled to match the dark theme aesthetic.
- **Custom Logo** — Premium brand mark with emerald glow shadow.

## 🛠 Tech Stack

| Layer      | Technology                                                                  |
| ---------- | --------------------------------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org/)                                           |
| UI Library | [React 19](https://react.dev/)                                              |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com/)                                  |
| Components | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| Animation  | [Motion](https://motion.dev/) (Framer Motion)                               |
| Data Table | [TanStack Table v8](https://tanstack.com/table)                             |
| Language   | [TypeScript 5](https://www.typescriptlang.org/)                             |

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Dark theme tokens, glassmorphism & scrollbar styles
│   ├── layout.tsx         # Root layout with sidebar provider
│   └── page.tsx           # Dashboard page with period state management
├── components/
│   ├── AppSidebar.tsx     # Dark sidebar with logo, nav, and user profile
│   ├── Header.tsx         # Sticky header with search, period tabs, and CTA
│   ├── KpiGrid.tsx        # 4-card metrics row with trend badges
│   ├── RegionalPerformance.tsx  # Regional data breakdown
│   ├── RevenueChart.tsx   # Area chart with gradient fill
│   ├── TransactionsTable.tsx    # Full-featured data table
│   └── ui/               # shadcn/ui primitives
├── data/
│   └── mockData.ts        # 7d, 30d, and YTD datasets
├── hooks/
│   └── use-mobile.ts      # Responsive breakpoint hook
├── lib/
│   └── utils.ts           # Utility functions (cn, etc.)
└── utils/
    └── cn.ts              # Class name merger
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

## 🌐 Deployment

Deployed on **Vercel** with automatic deployments on push to `main`.

## 📄 License

MIT
