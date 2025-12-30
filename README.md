# ORBIT — 3D Weather App 🌐

<p align="center">
    <img src="https://skillicons.dev/icons?i=js,html,css,threejs">
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/fdWs2j4g/gsap.png" alt="gsap"></a>
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/fdtnVphJ/Webgl-Streamline-Simple-Icons-2.png" alt="Webgl" height="64" width="64"></a>
</p>

**O R B I T | 3D Weather App** is a cyberpunk-inspired, interactive WebGL-based weather dashboard with real-time telemetry, atmospheric visualization, and an immersive UI.

---

## ✨ Demo & Preview

Open [O R B I T](https://orbit3dweather.netlify.app/) in a browser (recommended: Chrome / Edge).

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
- ⚡ **GSAP** — smooth animations & transitions
- ☁️ **Open-Meteo API** — weather forecast and current conditions
- 🗺️ **BigDataCloud (reverse geocoding)** — coordinates → nearest locality
- 🌫 **Open-Meteo Air-Quality API** — current US AQI values

---

## 🔧 Local Setup

1. Clone or download the repo.
2. Open `index.html` in a modern browser.

Notes:
- Some browsers block audio autoplay; press the **AUDIO** button if sound doesn't start automatically.

---

## 📡 Where Data Comes From

- Weather & telemetry: `https://api.open-meteo.com/`
- Reverse geocoding: `https://api.bigdatacloud.net/`
- Air Quality (AQI): `https://air-quality-api.open-meteo.com/`

---

## 🤝 Contributing

Feel free to open issues or PRs to improve visuals, accessibility, performance, or add new data sources.

---

## 📝 License

MIT License — see [LICENSE](https://github.com/greenbugx/ORBIT/blob/main/LICENSE).

---

<p align="center">Made with ❤️ and WebGL — enjoy exploring the atmosphere.</p>
