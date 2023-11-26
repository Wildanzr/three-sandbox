import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

// Perspective Camera
const perCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
perCamera.position.z = 2;

// Orthographic Camera
const orthoCamera = new THREE.OrthographicCamera(-2, 2, 2, -2);
orthoCamera.position.z = 2;

const htmlCanvas1 = document.getElementById("c1") as HTMLCanvasElement;
const htmlCanvas2 = document.getElementById("c2") as HTMLCanvasElement;
const htmlCanvas3 = document.getElementById("c3") as HTMLCanvasElement;
const htmlCanvas4 = document.getElementById("c4") as HTMLCanvasElement;

const renderer1 = new THREE.WebGLRenderer({ canvas: htmlCanvas1 });
renderer1.setSize(200, 200);
const renderer2 = new THREE.WebGLRenderer({ canvas: htmlCanvas2 });
renderer2.setSize(200, 200);
const renderer3 = new THREE.WebGLRenderer({ canvas: htmlCanvas3 });
renderer2.setSize(200, 200);
const renderer4 = new THREE.WebGLRenderer({ canvas: htmlCanvas4 });
renderer2.setSize(200, 200);
// document.body.appendChild(renderer.domElement);

new OrbitControls(perCamera, renderer1.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// window.addEventListener("resize", onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  render();
}

function render() {
  renderer1.render(scene, perCamera);
  renderer2.render(scene, orthoCamera);
  renderer3.render(scene, perCamera);
  renderer4.render(scene, perCamera);
}

animate();
