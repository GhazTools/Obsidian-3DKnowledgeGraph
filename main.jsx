import * as THREE from 'three';
import ForceGraph3D from '3d-force-graph';

const renderer = new THREE.WebGLRenderer();


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();

camera.position.z = 5;

const dataUrl = import.meta.env.VITE_OBSIDIAN_URL
const param = import.meta.env.VITE_OBSIDIAN_PARAM

// Extract the query string from the URL
const queryString = window.location.search;

// Use URLSearchParams to parse the query string
const urlParams = new URLSearchParams(queryString);
const vaultName = urlParams.get(param); // Assuming there's a "user" parameter in the URL


let jsonUrl = `${dataUrl}`

if (vaultName !== null) {
  jsonUrl = `${dataUrl}?${param}=${vaultName}`
}


ForceGraph3D()
  (document.getElementById('3d-graph'))
  .nodeAutoColorBy('name')
  .nodeOpacity(1)
  .nodeRelSize(2)
  .linkAutoColorBy('name')
  .linkOpacity(1)
  .backgroundColor('#636363')
  .jsonUrl(jsonUrl);
