const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 車（立方体で仮置き）
const car = new THREE.Mesh(
  new THREE.BoxGeometry(1, 0.5, 2),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
car.position.y = 0.25;
scene.add(car);

// 道（長方形の地面）
const road = new THREE.Mesh(
  new THREE.BoxGeometry(4, 0.1, 100),
  new THREE.MeshBasicMaterial({ color: 0x222222 })
);
road.position.z = -50;
scene.add(road);

// カメラ追従
camera.position.set(0, 2, 5);
camera.lookAt(car.position);

let speed = 0.2;

function animate() {
  requestAnimationFrame(animate);
  car.position.z -= speed;
  camera.position.z = car.position.z + 5;
  renderer.render(scene, camera);
}

animate();