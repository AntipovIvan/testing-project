// Define the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
console.log(camera);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('diagram-container').appendChild(renderer.domElement);

// Create nodes and links
// Create nodes
const nodeGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const node1 = new THREE.Mesh(nodeGeometry, nodeMaterial);
const node2 = new THREE.Mesh(nodeGeometry, nodeMaterial);
const node3 = new THREE.Mesh(nodeGeometry, nodeMaterial);

// Set positions for nodes
node1.position.set(-2, 0, 0);
node2.position.set(0, 0, 0);
node3.position.set(2, 0, 0);

// Add nodes to the scene
scene.add(node1);
scene.add(node2);
scene.add(node3);

// Create links
const linkMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
const linkGeometry1 = new THREE.BufferGeometry().setFromPoints([
  node1.position,
  node2.position,
]);
const linkGeometry2 = new THREE.BufferGeometry().setFromPoints([
  node2.position,
  node3.position,
]);

const link1 = new THREE.Line(linkGeometry1, linkMaterial);
const link2 = new THREE.Line(linkGeometry2, linkMaterial);

// Add links to the scene
scene.add(link1);
scene.add(link2);

// Create a directional light
var light = new THREE.DirectionalLight(0xffffff, 1);

// Set the position of the light
light.position.set(0, 1, 0);

// Add the light to the scene
scene.add(light);
// Add nodes and links to the scene
// TODO: Add your nodes and links to the scene here

// Handle click events on nodes
function handleClick(event) {
  // TODO: Implement logic to handle node click event
}

// Animate the diagram
function animate() {
  requestAnimationFrame(animate);
  // TODO: Implement animation logic here
  renderer.render(scene, camera);
}

// Start the animation loop
animate();
