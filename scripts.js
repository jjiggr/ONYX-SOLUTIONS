document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      const loader = document.querySelector('.loader');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 3000); // Adjust this value to control the duration of the loader
    }
  };
document.addEventListener('DOMContentLoaded', function() {
    const subscribeBtn = document.getElementById('subscribe-btn');
    const newsletterModal = document.getElementById('newsletter-modal');
    const closeModal = document.querySelector('.close');

    subscribeBtn.addEventListener('click', function() {
        newsletterModal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        newsletterModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === newsletterModal) {
            newsletterModal.style.display = 'none';
        }
    });

// Three.js
const onyxContainer = document.getElementById('onyx-container');
const onyxWidth = onyxContainer.clientWidth;
const onyxHeight = onyxContainer.clientHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, onyxWidth / onyxHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true }); // Enable antialiasing for smoother edges
renderer.setSize(onyxWidth, onyxHeight);
onyxContainer.appendChild(renderer.domElement);

const material = new THREE.MeshPhongMaterial({ color: 0xC0C0C0, shininess: 100 }); // Increase shininess for a more polished look

const light = new THREE.PointLight(0xFFFFFF, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Add ambient light for better reflection
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(ambientLight);

camera.position.z = 5;

new THREE.FontLoader().load('./fonts/Dot.json', (font) => {
    const geometry = new THREE.TextGeometry('ONYX', {
        font: font,
        size: 1,
        height: 0.2,
    });
    const textMesh = new THREE.Mesh(geometry, material);
    textMesh.geometry.center(); // Center the text geometry
    scene.add(textMesh);

    function animate() {
        requestAnimationFrame(animate);
        textMesh.rotation.y += 0.03; // rotate around y-axis (central axis)
        renderer.render(scene, camera);
    }

    animate();
});
});

