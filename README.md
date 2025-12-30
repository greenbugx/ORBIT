# ORBIT — 3D Weather App 🌐

<p align="center">
    <img src="https://skillicons.dev/icons?i=js,html,css,threejs">
    <img src="https://img.shields.io/badge/GSAP-93CF2B?style=for-the-badge&logo=greensock&logoColor=white">
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Webgl--Streamline-Simple-Icons" height="24" width="24">
        <path d="M18.928 14.179c-0.214 0.09 -0.427 0.135 -0.643 0.135 -0.342 0 -0.65 -0.059 -0.923 -0.178a1.963 1.963 0 0 1 -0.69 -0.491c-0.187 -0.209 -0.332 -0.453 -0.432 -0.735s-0.149 -0.586 -0.149 -0.911c0 -0.335 0.05 -0.643 0.149 -0.93 0.1 -0.287 0.242 -0.536 0.429 -0.747a1.96 1.96 0 0 1 0.69 -0.501 2.25 2.25 0 0 1 0.923 -0.183c0.23 0 0.451 0.036 0.664 0.104 0.214 0.069 0.408 0.171 0.581 0.304s0.316 0.299 0.427 0.496a1.7 1.7 0 0 1 0.206 0.676h-0.935c-0.059 -0.249 -0.171 -0.437 -0.337 -0.562a0.973 0.973 0 0 0 -0.607 -0.187c-0.221 0 -0.408 0.043 -0.562 0.128s-0.28 0.199 -0.375 0.344c-0.095 0.145 -0.166 0.308 -0.209 0.491s-0.066 0.372 -0.066 0.569c0 0.187 0.021 0.37 0.066 0.548 0.043 0.178 0.114 0.337 0.209 0.479 0.095 0.142 0.221 0.256 0.375 0.342s0.342 0.128 0.562 0.128c0.325 0 0.577 -0.083 0.754 -0.247 0.178 -0.164 0.28 -0.401 0.311 -0.714h-0.987V11.8h1.872v2.413h-0.624l-0.1 -0.505a1.444 1.444 0 0 1 -0.579 0.471zm2.896 -4.429v3.632H24v0.828h-3.155V9.75h0.979zM2.785 11.999c0 -0.709 0.343 -1.376 0.948 -1.962l1.109 4.221h0.764l1.075 -3.815 1.06 3.815h0.766l1.321 -4.856h-0.86l-0.861 3.725 -1.039 -3.726H6.28l-1.039 3.725 -0.84 -3.632c1.489 -1.025 3.868 -1.69 6.548 -1.69 2.512 0 4.764 0.529 6.261 1.445 -1.632 -1.535 -4.565 -2.612 -7.915 -2.614C4.161 6.635 0 9.036 0 11.999s4.161 5.367 9.293 5.367c3.338 0 6.261 -1.075 7.9 -2.6 -1.497 0.911 -3.741 1.428 -6.244 1.428 -4.51 -0.001 -8.164 -1.877 -8.164 -4.195zm9.194 -0.553a1.184 1.184 0 0 0 -0.444 -0.384 1.378 1.378 0 0 0 -0.622 -0.135c-0.261 0 -0.496 0.047 -0.7 0.14a1.313 1.313 0 0 0 -0.489 0.387c-0.244 0.311 -0.372 0.75 -0.372 1.269 0 0.23 0.033 0.448 0.097 0.643a1.5 1.5 0 0 0 0.285 0.515c0.261 0.304 0.633 0.465 1.077 0.465 0.233 0 0.422 -0.024 0.581 -0.074 0.138 -0.043 0.23 -0.1 0.306 -0.149a1.357 1.357 0 0 0 0.444 -0.489c0.09 -0.166 0.135 -0.323 0.145 -0.403l0.007 -0.055h-0.633l-0.002 0.045c-0.017 0.206 -0.287 0.574 -0.769 0.574 -0.688 0 -0.852 -0.498 -0.864 -0.937h2.306v-0.05a3.15 3.15 0 0 0 -0.085 -0.766 1.84 1.84 0 0 0 -0.268 -0.596zm-1.139 0.05c0.51 0 0.783 0.275 0.833 0.84h-1.651c0.025 -0.458 0.388 -0.84 0.818 -0.84zm4.678 0.415a1.575 1.575 0 0 0 -0.268 -0.515 1.25 1.25 0 0 0 -0.437 -0.346 1.36 1.36 0 0 0 -0.586 -0.126 1.141 1.141 0 0 0 -0.531 0.128 1.1 1.1 0 0 0 -0.346 0.28v-1.49h-0.631v4.413h0.6v-0.301a0.964 0.964 0 0 0 0.211 0.206c0.171 0.123 0.382 0.185 0.626 0.185 0.263 0 0.501 -0.059 0.7 -0.176 0.178 -0.104 0.33 -0.254 0.448 -0.444a1.93 1.93 0 0 0 0.235 -0.584 2.66 2.66 0 0 0 0.069 -0.603 1.986 1.986 0 0 0 -0.09 -0.627zm-0.567 0.717c0 0.346 -0.069 0.636 -0.202 0.84a0.682 0.682 0 0 1 -0.605 0.325c-0.377 0 -0.819 -0.263 -0.819 -1.008 0 -0.356 0.045 -0.631 0.135 -0.84 0.13 -0.301 0.351 -0.446 0.671 -0.446 0.342 0 0.572 0.133 0.7 0.41 0.106 0.227 0.12 0.505 0.12 0.719z" fill="#000000" stroke-width="1"></path>
    </svg>
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
