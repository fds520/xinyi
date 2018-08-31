var camera, scene, renderer, controls;
var mesh, mesh2, light;

init();
animate();

function init() {
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvasBox').appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.x = 30;
    camera.position.y = 30;
    camera.position.z = 150;
    camera.up.set(0, 1, 0);
    camera.lookAt({
        x: 0,
        y: 0,
        z: 0
    });

    var texture1 = new THREE.TextureLoader().load('assets/images/diffuse.jpg');
    var geometry = new THREE.SphereGeometry( 100, 200, 200 );
    var material = new THREE.MeshBasicMaterial({
        map: texture1
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.minDistance = 10;
    controls.maxDistance = 1000;

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    mesh.rotation.y += 0.001;
    renderer.render( scene, camera );
}