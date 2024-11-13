import React, { useEffect } from 'react';
import * as THREE from 'three';
import imageUrls from './imageUrls.json'; // Adjust the path as necessary

const ImageGallery = () => {
  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load Textures and Create Planes
    const loader = new THREE.TextureLoader();
    const spacing = 2; // Spacing between images
    const planeWidth = 1.5;
    const planeHeight = 1.0;

    imageUrls.forEach((url, index) => {
      loader.load(url, (texture) => {
        const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const plane = new THREE.Mesh(geometry, material);

        // Position planes
        plane.position.x = (index - imageUrls.length / 2) * spacing;
        scene.add(plane);
      });
    });

    // Lighting (Optional)
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resizing
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default ImageGallery;


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>3D Image Gallery with Three.js</title>
//   <style>
//     body {
//       margin: 0;
//       overflow: hidden;
//     }
//     canvas {
//       display: block;
//     }
//   </style>
// </head>
// <body>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
//   <script>
//     // Scene
//     const scene = new THREE.Scene();

//     // Camera
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     // Renderer
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     // Image URLs
//     const imageUrls = [
//       'C:\Users\User\Desktop\clg project\visualvista\src\assets\models\WhatsApp Image 2024-11-13 at 11.25.04_56f3c39d.jpg',
//       'C:\Users\User\Desktop\clg project\visualvista\src\assets\models\WhatsApp Image 2024-11-13 at 11.25.06_3502c86a.jpg',
//       'C:\Users\User\Desktop\clg project\visualvista\src\assets\models\WhatsApp Image 2024-11-13 at 11.25.07_e041ad35.jpg',
//       'C:\Users\User\Desktop\clg project\visualvista\src\assets\models\WhatsApp Image 2024-11-13 at 11.25.08_342aa49d.jpg',
//       'C:\Users\User\Desktop\clg project\visualvista\src\assets\models\WhatsApp Image 2024-11-13 at 11.25.09_292d7601.jpg',
//       'C:\Users\User\Desktop\clg project\visualvista\src\assets\models\WhatsApp Image 2024-11-13 at 11.25.10_a59bb967.jpg',
//       'C:\Users\User\Desktop\clg project\visualvista\src\assets\models\WhatsApp Image 2024-11-13 at 11.25.11_5e6e9577.jpg',
//       'C:\Users\User\Desktop\clg project\visualvista\src\assets\models\WhatsApp Image 2024-11-13 at 11.25.11_6c52461b.jpg',
//       'C:\Users\User\Desktop\clg project\visualvista\src\assets\models\WhatsApp Image 2024-11-13 at 11.25.12_93bc0210.jpg',
//       'C:\Users\User\Desktop\clg project\visualvista\src\assets\models\WhatsApp Image 2024-11-13 at 11.25.13_e9017f33.jpg',
//     ];

//     // Load Textures and Create Planes
//     const loader = new THREE.TextureLoader();
//     const spacing = 2; // Spacing between images
//     const planeWidth = 1.5;
//     const planeHeight = 1.0;

//     imageUrls.forEach((url, index) => {
//       loader.load(url, (texture) => {
//         const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
//         const material = new THREE.MeshBasicMaterial({ map: texture });
//         const plane = new THREE.Mesh(geometry, material);

//         // Position planes
//         plane.position.x = (index - imageUrls.length / 2) * spacing;
//         scene.add(plane);
//       });
//     });

//     // Lighting (Optional)
//     const light = new THREE.AmbientLight(0xffffff, 1);
//     scene.add(light);

//     // Animation Loop
//     function animate() {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     }
//     animate();

//     // Handle Resizing
//     window.addEventListener('resize', () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     });
//   </script>
// </body>
// </html>