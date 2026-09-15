# Wanderly

A travel agency front end built with React 19, React Router, and Vite. It covers a homepage, a filterable destinations page, and a package details page with a booking inquiry form — no backend required, everything runs on local data and `localStorage`.

I put this together as a fairly complete example of "real" React patterns rather than a toy demo: routing with dynamic segments, lifted state shared across pages, controlled forms with validation, and persistence that survives a page reload.

## What's in it

- **Home** — hero banner, a destinations grid, a packages grid you can filter to "All" or "Saved Favorites," a benefits section, testimonials, and a closing call-to-action.
- **Destinations** (`/destinations`) — every destination, filterable by region (All / Pakistan / International), with a live count per filter.
- **Package details** (`/packages/:id`) — trip overview, what's included, a day-by-day itinerary, and a sticky booking sidebar with price, group size, and rating.
- **Booking modal** — a validated inquiry form (name, email, traveler count, dates, special requests). Submitting it shows a confirmation screen; nothing is sent to a server, since there isn't one.
- **Favorites** — click the heart on any package card to save it. Favorites persist in `localStorage` and show up in the "Saved Favorites" tab on the homepage.
- **Dark mode** — a toggle in the navbar that also respects the visitor's system preference on first load, then remembers whatever they picked.

## Content

Six destinations (Hunza Valley, Skardu, Swat Valley, Istanbul, Dubai, Bali) and six matching packages, each with pricing, an itinerary, and inclusions, live in `src/data/`. Three testimonials round it out. It's all static JS objects — edit those files directly to add, remove, or reprice a trip.

## Stack

- React 19 + React Router 7
- Vite 6 for dev/build
- Plain CSS (no Tailwind at runtime — it's a dependency but the site is hand-styled in `src/index.css`, including the dark theme via a `data-theme` attribute)
- lucide-react for icons

## Project layout

```
src/
  components/   Navbar, Hero, Footer, cards, BookingModal, SectionTitle
  pages/        Home, Destinations, PackageDetails
  data/         destinations.js, packages.js, testimonials.js
  App.jsx       routes, theme state, favorites state
  main.jsx      entry point
  index.css     all styling, including dark mode
```

State that needs to be shared (theme, favorites) lives in `App.jsx` and gets passed down as props. Everything else is local to its component.