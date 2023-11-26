import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const scene2 = new THREE.Scene();

// Perspective Camera
const perCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
perCamera.position.z = 2;

// Orthographic Camera
const orthoCamera1 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
orthoCamera1.position.z = 2;
orthoCamera1.position.y = 2;
orthoCamera1.lookAt(new THREE.Vector3());

const orthoCamera2 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
orthoCamera2.position.x = -2;
orthoCamera2.lookAt(new THREE.Vector3());

const orthoCamera3 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
orthoCamera3.position.z = 2;

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
const cube2 = new THREE.Mesh(geometry, material);
scene.add(cube);
scene2.add(cube2);

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

  cube2.rotation.y += 0.01;

  render();
}

function render() {
  renderer1.render(scene, perCamera);
  renderer2.render(scene, orthoCamera1);
  renderer3.render(scene2, orthoCamera2);
  renderer4.render(scene, orthoCamera3);
}

animate();
