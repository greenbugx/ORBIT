# ORBIT — 3D Weather App 🌐

<p align="center">
  <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png" alt="HTML" height="28" />
  <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png" alt="CSS" height="28" />
  <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="JavaScript" height="28" />
  <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/webassembly.png" alt="WebGL / Three.js" height="28" />
  <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/http.png" alt="APIs" height="28" />
  <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png" alt="Git" height="28" />
</p>

**O R B I T | 3D Weather App** is a cyberpunk-inspired, interactive WebGL-based weather dashboard with real-time telemetry, atmospheric visualization, and an immersive UI.

---

## ✨ Demo & Preview

Open `index.html` in a browser (recommended: Chrome / Edge) to view the interactive WebGL globe, real-time weather readings, audio ambience, and cursor trail.

---

## ✅ Features

- Interactive 3D globe with procedural surface deformation
- Real-time weather data (temperature, wind, humidity, pressure, AQI)
- Animated particle systems for rain/snow
- Responsive controls (OrbitControls) and mobile-friendly fallback
- Custom cursor + particle trail and UI scanlines effect
- Optional ambient audio with on/off control

---

## 🧰 Tech Stack

- 🌐 **HTML5** — `index.html`
- 🎨 **CSS3** — `styles.css` (custom properties, responsive layout)
- 🟨 **JavaScript (ES6+)** — `script.js`
- 🌍 **three.js** — WebGL rendering, geometries, materials, particles
- 🕹 **OrbitControls** — interactive camera orbiting
- ⚡ **GSAP** — smooth animations & transitions
- 🌀 **simplex-noise** — procedural vertex displacement for the globe
- 🎵 **Web Audio / <audio> element** — background ambience
- ☁️ **Open-Meteo API** — weather forecast and current conditions
- 🗺️ **BigDataCloud (reverse geocoding)** — coordinates → nearest locality
- 🌫 **Open-Meteo Air-Quality API** — current US AQI values
- 🖼 **Assets** — icons, music, and favicons in `assets/`

---

## 🔧 Local Setup

1. Clone or download the repo.
2. Open `index.html` in a modern browser (no build step required).

Notes:
- Some browsers block audio autoplay; press the **AUDIO** button if sound doesn't start automatically.
- Mobile devices use the native cursor and disable the custom cursor layer for better UX.

---

## 📡 Where Data Comes From

- Weather & telemetry: `https://api.open-meteo.com/`
- Reverse geocoding (coords → city): `https://api.bigdatacloud.net/`
- Air Quality (AQI): `https://air-quality-api.open-meteo.com/`

---

## 🧩 File Overview

- `index.html` — markup and UI
- `styles.css` — styles & responsive rules
- `script.js` — app logic, Three.js scene, API requests
- `assets/` — audio, favicon, images

---

## 🤝 Contributing

Feel free to open issues or PRs to improve visuals, accessibility, performance, or add new data sources.

---

## 📝 License

MIT License — see `LICENSE`.

---

<p align="center">Made with ❤️ and WebGL — enjoy exploring the atmosphere.</p>
