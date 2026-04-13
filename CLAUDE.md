# Church in the Community — Landing Page

## Contexto del Proyecto

Landing page para **Church in the Community (CitC)**, iglesia cristiana ubicada en **Los Cabos, México**. Esta es la **versión provisional** — una página estática sin navbar, con redirección externa a Facebook y QR codes de donación. La versión final incluirá navbar, streaming en vivo y donaciones in-page.

---

## Stack

| Pieza | Decisión |
|---|---|
| Framework | Next.js 15 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| SEO | next/metadata + JSON-LD (LocalBusiness + Church) |
| Streaming (v2) | react-lite-youtube-embed |
| Animaciones | Framer Motion |
| Hosting | Vercel |

---

## Tipografía

- **Besley** — Display, títulos cursivos, headings principales (`font-besley`)
- **Inter** — Body, subtítulos, UI, CTAs (`font-inter`)
- Jugar con `font-weight` para crear jerarquía: no agregar fuentes adicionales.

Cargar ambas desde **Google Fonts** vía `next/font/google`.

---

## Paleta de Colores

```css
--color-navy:   #1E2D3D   /* Fondo oscuro: Mission/Vision, Footer */
--color-sage:   #8A9A6A   /* Fondo medio: Visit Us */
--color-white:  #FFFFFF   /* Fondo claro: Who We Are, Generosity */
--color-text:   #1A1A1A   /* Texto oscuro general */
--color-text-light: #FFFFFF /* Texto sobre fondos oscuros */
```

---

## Estructura de Secciones (Versión Provisional)

### 1. Hero
- Imagen de fondo: congregación en servicio
- Título: "Church in the **Community**" (Besley italic para "Community")
- Subtítulo: "Every Sunday at 10am"
- 3 CTAs con bordes redondeados (pill buttons):
  - **Join us Live** → redirige a Facebook Live
  - **Contribute** → scroll a sección Generosity
  - **Visit Us** → scroll a sección Visit Us
- Sin navbar en versión provisional

### 2. Who We Are
- Fondo blanco
- Foto del pastor/pareja (izquierda en desktop, arriba en mobile)
- Título: "Who we are" (Besley bold)
- Párrafo descriptivo (Inter regular)
- Galería de 3 fotos de la comunidad debajo del texto

### 3. Mission / Vision / Priorities
- Fondo: `--color-navy`
- Texto blanco
- Layout desktop: Mission y Vision en 2 columnas, Priorities centrado abajo
- Layout mobile: stack vertical
- Títulos: Besley bold, uppercase
- Subtítulos descriptivos: Inter regular

### 4. Visit Us
- Fondo: `--color-sage`
- Título: "Visit Us" (Besley italic)
- Subtítulo: "Join us in worship at the Hampton Inn and Suites right next to the H+ Hospital!"
- Foto del Hampton Inn (izquierda en desktop)
- Horario: **Every Sunday at 10am**
- Dirección: Carretera Transpeninsular, KM 24.8 Cerro Colorado, Los Cabos, NS, 23400, México

### 5. Generosity
- Fondo blanco
- Título: "Thank you for your **Generosity**" (Besley italic para "Generosity")
- Versículo: Philippians 4:17 — "Not that I seek the gift, but I seek the fruit that abounds to your account."
- 3 QR codes estáticos con label:
  - Zelle
  - Cashapp
  - Venmo
- ⚠️ Los QR codes son imágenes reales — solicitar assets al cliente

### 6. Footer
- Fondo: `--color-navy`
- Logo CitC (centrado o izquierda)
- Íconos: teléfono, Facebook, email
- Sin links de navegación en versión provisional

---

## SEO

### Metadata (next/metadata)
```ts
title: "Church in the Community | Los Cabos"
description: "Church in the Community — Every Sunday at 10am at the Hampton Inn, Los Cabos. Join us in worship, community, and service."
keywords: ["iglesia Los Cabos", "church Los Cabos", "Christian church Cabo San Lucas", "Church in the Community"]
openGraph: { ... } // imagen del hero
```

### JSON-LD (LocalBusiness + Church)
```json
{
  "@type": ["LocalBusiness", "Church"],
  "name": "Church in the Community",
  "address": {
    "streetAddress": "Carretera Transpeninsular KM 24.8 Cerro Colorado",
    "addressLocality": "Los Cabos",
    "addressRegion": "Baja California Sur",
    "postalCode": "23400",
    "addressCountry": "MX"
  },
  "openingHours": "Su 10:00-12:00",
  "url": "https://churchinthecommunity.com"
}
```

---

## Estructura de Carpetas

```
/
├── app/
│   ├── layout.tsx         # Fonts, metadata global, JSON-LD
│   ├── page.tsx           # Composición de secciones
│   └── globals.css        # CSS variables, base styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── WhoWeAre.tsx
│   │   ├── MissionVision.tsx
│   │   ├── VisitUs.tsx
│   │   ├── Generosity.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── PillButton.tsx
├── public/
│   ├── images/            # Fotos de la iglesia, Hampton Inn
│   └── qr/               # QR codes (Zelle, Cashapp, Venmo)
└── CLAUDE.md
```

---

## Notas de Desarrollo

- **Versión provisional** — sin navbar, sin streaming, sin donaciones in-page
- **Versión final** incluirá: navbar, embed de YouTube Live (`react-lite-youtube-embed`), y posiblemente donaciones directas in-page
- Animaciones con **Framer Motion**: entrada suave por sección al hacer scroll (no exagerar)
- Imágenes con `next/image` siempre — optimización automática
- Responsive: mobile-first, breakpoints `sm` / `md` / `lg` de Tailwind
- Todos los botones del hero son externos en v1 — usar `target="_blank" rel="noopener noreferrer"`
- No hardcodear colores — usar siempre las CSS variables definidas

---

## Assets Pendientes del Cliente

- [ ] Foto hero (congregación)
- [ ] Foto pastor/pareja (Who We Are)
- [ ] 3 fotos galería (Who We Are)
- [ ] Foto Hampton Inn (Visit Us)
- [ ] Logo CitC (SVG preferido)
- [ ] QR codes: Zelle, Cashapp, Venmo
- [ ] URL de Facebook Live (para CTA "Join us Live")
- [ ] Links de contacto: teléfono y email para footer
