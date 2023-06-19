import * as THREE from 'three';
import ForceGraph3D from '3d-force-graph';

const renderer = new THREE.WebGLRenderer();

import data from './data.json';

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();

camera.position.z = 5;

const graph = ForceGraph3D()
  (document.getElementById('3d-graph'))
    .nodeAutoColorBy('name')
    .nodeOpacity(1)
    .nodeRelSize(2)
    .linkAutoColorBy('name')
    .linkOpacity(1)
    .backgroundColor('#636363')
    .graphData(data);