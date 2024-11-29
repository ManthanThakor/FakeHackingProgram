# Fake Hacking Program - 3D Model Viewer

This project demonstrates a fake hacking program with a 3D model viewer built using [Three.js](https://threejs.org/), [GLTFLoader](https://threejs.org/docs/index.html#examples/en/loaders/GLTFLoader), and [OrbitControls](https://threejs.org/examples/#misc_controls_orbit). It loads and displays a 3D model, allowing the user to rotate it and interact with it through basic controls.

## Features

- **3D Model Viewer**: A 3D model is loaded from a GLTF file and displayed on the screen.
- **Camera Controls**: Allows the user to control the view with mouse interactions (zoom, pan, rotate).
- **Loading Indicator**: Displays a loading message while the model is being loaded.
- **Responsive Design**: Automatically adjusts the canvas size when the window is resized.

## Getting Started

To get the project up and running locally, follow these steps:

### Prerequisites

Ensure that you have the following installed on your machine:

- A modern web browser (such as Google Chrome, Mozilla Firefox, or Safari).
- A local server for serving static files (optional, but recommended for better performance).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/manthanthakor/FakeHackingProgram.git
   ```

2. Navigate into the project folder:

   ```bash
   cd FakeHackingProgram
   ```

3. Open the `index.html` file in your browser, or use a local server to serve the files.

### Files and Structure

- **index.html**: The main HTML file that includes the 3D model container.
- **script.js**: The main JavaScript file where Three.js, OrbitControls, and GLTFLoader are used to display the 3D model and handle user interactions.
- **models/scene.gltf**: The 3D model file in GLTF format.
- **textures/**: Folder containing the textures used in the 3D model (if applicable).
- **style.css**: Basic styling for the webpage and loading indicator.

## How it Works

1. **Scene Setup**: A Three.js scene is created along with a camera and renderer.
2. **Lighting**: Two light sources are added: a directional light to simulate sunlight and an ambient light for softer shadows.
3. **Model Loading**: The 3D model (`scene.gltf`) is loaded using the `GLTFLoader` and added to the scene. A loading message is shown while the model is being fetched.
4. **Camera Controls**: `OrbitControls` is used to allow the user to interact with the scene by rotating, zooming, and panning the camera.
5. **Animation Loop**: The 3D model rotates continuously on the Y-axis to give it some motion. The scene is re-rendered at each frame to reflect changes.

## Known Issues

- Ensure that the model path (`models/scene.gltf`) is correct and the model is in the right directory.
- The loading text may not disappear if the model fails to load. Check the console for errors.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Three.js](https://threejs.org/) for the 3D rendering framework.
- [OrbitControls.js](https://threejs.org/examples/#misc_controls_orbit) for camera controls.
- [GLTFLoader.js](https://threejs.org/docs/index.html#examples/en/loaders/GLTFLoader) for loading GLTF models.

