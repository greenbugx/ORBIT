// Cursor
const cursor = document.getElementById('custom-cursor');
const trailCanvas = document.getElementById('trail-canvas');
const trailCtx = trailCanvas.getContext('2d');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let trailPoints = [];
const trailLength = 20;

function resizeTrail() {
    trailCanvas.width = window.innerWidth;
    trailCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeTrail);
resizeTrail();


if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    document.querySelectorAll('.interactive').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });

    animateTrail();
}

// Cursor Trail
function animateTrail() {
    trailPoints.push({ x: mouseX, y: mouseY });
    if (trailPoints.length > trailLength) {
        trailPoints.shift();
    }

    trailCtx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);

    if (trailPoints.length > 1) {
        trailCtx.beginPath();
        trailCtx.moveTo(trailPoints[0].x, trailPoints[0].y);

        for (let i = 1; i < trailPoints.length; i++) {
            trailCtx.lineTo(trailPoints[i].x, trailPoints[i].y);
        }

        const style = getComputedStyle(document.body);
        const color = style.getPropertyValue('--primary').trim();

        trailCtx.lineCap = 'round';
        trailCtx.lineJoin = 'round';
        trailCtx.lineWidth = 2;

        const grad = trailCtx.createLinearGradient(
            trailPoints[0].x, trailPoints[0].y,
            trailPoints[trailPoints.length - 1].x, trailPoints[trailPoints.length - 1].y
        );
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(1, color);

        trailCtx.strokeStyle = grad;
        trailCtx.shadowBlur = 10;
        trailCtx.shadowColor = color;
        trailCtx.stroke();
    }

    requestAnimationFrame(animateTrail);
}


// WebGL Globe
const canvas = document.querySelector('#webgl');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050505, 0.02);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// function setCameraPosition() {
//     if (window.innerWidth < 768) {
//         camera.position.z = 9;
//     } else {
//         camera.position.z = 6;
//     }
// }
// setCameraPosition();

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = true;
controls.maxDistance = 12;
controls.zoomSpeed = 0.8;
controls.autoRotate = true;
controls.autoRotateSpeed = 1.0;

function updateResponsiveValues() {
    if (window.innerWidth < 768) {
        // Mobile Settings
        camera.position.z = 9;
        controls.minDistance = 8;
    } else {
        // PC Settings
        camera.position.z = 6;
        controls.minDistance = 6;
    }
}
updateResponsiveValues();

const geometry = new THREE.IcosahedronGeometry(2, 4);
geometry.userData = { originalPositions: geometry.attributes.position.array.slice() };

const material = new THREE.MeshStandardMaterial({
    color: 0x111111,
    wireframe: true,
    emissive: 0xffffff,
    emissiveIntensity: 0.8,
    roughness: 0.2,
    metalness: 0.9
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const coreGeo = new THREE.IcosahedronGeometry(1.8, 2);
const coreMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
const core = new THREE.Mesh(coreGeo, coreMat);
sphere.add(core);


const starsGeo = new THREE.BufferGeometry();
const starsCount = 3000;
const starPos = new Float32Array(starsCount * 3);
for (let i = 0; i < starsCount * 3; i++) starPos[i] = (Math.random() - 0.5) * 100;
starsGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
const starsMat = new THREE.PointsMaterial({ color: 0x888888, size: 0.1 });
const starField = new THREE.Points(starsGeo, starsMat);
scene.add(starField);


// Weather Particles
let weatherParticles = null;
function updateParticles(type) {
    if (weatherParticles) { scene.remove(weatherParticles); weatherParticles.geometry.dispose(); }
    if (type === 'clear') return;

    const count = type === 'rain' ? 3000 : 1500;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const vels = [];
    for (let i = 0; i < count * 3; i += 3) {
        pos[i] = (Math.random() - 0.5) * 20;
        pos[i + 1] = Math.random() * 20;
        pos[i + 2] = (Math.random() - 0.5) * 20;
        vels.push(Math.random() * 0.2 + 0.1);
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
        color: type === 'rain' ? 0xaaaaaa : 0xffffff,
        size: type === 'rain' ? 0.05 : 0.08,
        transparent: true, opacity: 0.6
    });
    weatherParticles = new THREE.Points(geo, mat);
    weatherParticles.userData = { velocities: vels, type: type };
    scene.add(weatherParticles);
}


const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);
const mainLight = new THREE.PointLight(0xffffff, 1);
mainLight.position.set(10, 10, 10);
scene.add(mainLight);
const coloredLight = new THREE.PointLight(0x00f0ff, 2, 20);
coloredLight.position.set(-5, -5, 5);
scene.add(coloredLight);

// Music
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bg-music');

musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.innerText = "AUDIO: ON";
        musicBtn.style.background = "rgba(0, 240, 255, 0.2)";
        musicBtn.style.borderColor = "var(--primary)";
    } else {
        bgMusic.pause();
        musicBtn.innerText = "AUDIO: OFF";
        musicBtn.style.background = "";
        musicBtn.style.borderColor = "";
    }
});


const simplex = new SimplexNoise();
const loader = document.getElementById('loader');

let audioCtx, osc, gainNode;
function initAudio() {
    const audio = document.getElementById('bg-music');
    const btn = document.getElementById('musicBtn');
    
    if (audio.paused) {
        audio.volume = 0.6;
        audio.play().then(() => {
            btn.innerText = "AUDIO: ON";
            btn.style.background = "rgba(0, 240, 255, 0.2)";
            btn.style.borderColor = "var(--primary)";
        }).catch(error => {
            console.log("Audio autoplay blocked by browser, waiting for interaction.");
        });
    }
}

// Search Func
async function triggerSearch() {
    const input = document.getElementById('cityInput').value.trim();
    loader.style.display = 'block';
    initAudio();

    try {
        let latitude, longitude, name, country, timezone;
        const coordPattern = /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/;
        const match = input.match(coordPattern);
        if (match) {
            latitude = parseFloat(match[1]);
            longitude = parseFloat(match[3]);
            try {
                const revReq = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                const revData = await revReq.json();
                name = revData.city || revData.locality || revData.principalSubdivision || "Unknown Location";
                country = revData.countryName || "GPS Data";
                
            } catch (err) {
                console.error("Reverse Geocoding Failed:", err);
                name = `LAT: ${latitude.toFixed(2)}`;
                country = `LON: ${longitude.toFixed(2)}`;
            }
        } else {
            const geoReq = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=1&language=en&format=json`);
            const geoData = await geoReq.json();           
            if (!geoData.results) throw new Error("Location not found");           
            latitude = geoData.results[0].latitude;
            longitude = geoData.results[0].longitude;
            name = geoData.results[0].name;
            country = geoData.results[0].country;
        }

        const wReq = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,surface_pressure,apparent_temperature,visibility&timezone=auto`);
        const wData = await wReq.json();
        const aqiReq = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi`);
        const aqiData = await aqiReq.json();

        updateApp(wData.current, name, country, wData.timezone, aqiData.current.us_aqi);

    } catch (e) {
        console.error(e);
        document.getElementById('condDisp').innerText = "SIGNAL LOSS";
    } finally {
        loader.style.display = 'none';
    }
}

// Data Update
function updateApp(data, city, country, tz, aqi) {
    const temp = data.temperature_2m;
    const wind = data.wind_speed_10m;
    const code = data.weather_code;
    const press = data.surface_pressure;

    let colorHex = 0x00f0ff;
    let cssColor = '#00f0ff';

    if (temp < 10) { colorHex = 0x00ffff; cssColor = '#00ffff'; }
    else if (temp >= 10 && temp < 25) { colorHex = 0x00ff88; cssColor = '#00ff88'; }
    else if (temp >= 25) { colorHex = 0xff4400; cssColor = '#ff4400'; }

    document.documentElement.style.setProperty('--primary', cssColor);

    cursor.style.borderColor = cssColor;

    gsap.to(material.emissive, { r: new THREE.Color(colorHex).r, g: new THREE.Color(colorHex).g, b: new THREE.Color(colorHex).b, duration: 1.5 });
    gsap.to(coloredLight.color, { r: new THREE.Color(colorHex).r, g: new THREE.Color(colorHex).g, b: new THREE.Color(colorHex).b, duration: 1.5 });

    const tempEl = document.getElementById('tempDisp');
    let i = 0;
    const interval = setInterval(() => {
        tempEl.innerText = Math.floor(Math.random() * 99) + "°";
        if (++i > 10) { clearInterval(interval); tempEl.innerText = Math.round(temp) + "°"; }
    }, 40);

    document.getElementById('locDisp').innerText = `${city}, ${country}`;
    document.getElementById('windDisp').innerText = wind + " km/h";
    document.getElementById('humDisp').innerText = data.relative_humidity_2m + "%";
    document.getElementById('aqiDisp').innerText = aqi;
    document.getElementById('pressDisp').innerText = press + " hPa";

    let cond = "CLEAR";
    let type = 'clear';
    if (code > 3) cond = "CLOUDY";
    if (code >= 51) { cond = "RAIN"; type = 'rain'; }
    if (code >= 71) { cond = "SNOW"; type = 'snow'; }
    document.getElementById('condDisp').innerText = cond;
    document.getElementById('condDisp').style.color = cssColor;

    updateParticles(type);
    sphere.userData.windSpeed = wind;

    if (osc) {
        const targetFreq = 50 + (wind * 3);
        gsap.to(osc.frequency, { value: targetFreq, duration: 2 });
    }
}

// Particles
const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();
    controls.update();
    starField.rotation.y = time * 0.05;


    const wind = sphere.userData.windSpeed || 5;
    const intensity = 0.2 + (wind / 50);
    const speed = 1 + (wind / 20);

    const posAttribute = geometry.attributes.position;
    const originalPos = geometry.userData.originalPositions;
    const vector = new THREE.Vector3();

    for (let i = 0; i < posAttribute.count; i++) {
        const px = originalPos[i * 3];
        const py = originalPos[i * 3 + 1];
        const pz = originalPos[i * 3 + 2];
        vector.set(px, py, pz).normalize();
        const noise = simplex.noise3D(px * 0.5 + time * speed * 0.5, py * 0.5 + time * speed * 0.5, pz * 0.5);
        const dist = 2 + (noise * intensity);
        vector.multiplyScalar(dist);
        posAttribute.setXYZ(i, vector.x, vector.y, vector.z);
    }
    posAttribute.needsUpdate = true;
    geometry.computeVertexNormals();


    if (weatherParticles) {
        const pPos = weatherParticles.geometry.attributes.position.array;
        const vels = weatherParticles.userData.velocities;
        const type = weatherParticles.userData.type;
        const speedFactor = (type === 'snow') ? 0.3 : 1.0;
        for (let i = 0; i < pPos.length / 3; i++) {
            pPos[i * 3 + 1] -= vels[i] * speedFactor;
            if (pPos[i * 3 + 1] < -10) pPos[i * 3 + 1] = 10;
            if (type === 'snow') {
                pPos[i * 3] += Math.sin(time + pPos[i * 3 + 1]) * 0.01; 
            }
        }
        weatherParticles.geometry.attributes.position.needsUpdate = true;
    }
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {

    // setCameraPosition();
    updateResponsiveValues();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);


    resizeTrail();
});

animate();
triggerSearch();

document.getElementById('cityInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') triggerSearch();
});

// document.body.addEventListener('click', initAudio, { once: true });

// document.body.addEventListener('touchstart', initAudio, { once: true });