var camera, scene, renderer;
var mesh, mesh2, light;

init();
intLight();
animate();

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 500;
    camera.up.set(0, 1, 0);
    camera.lookAt({
        x: 0,
        y: 0,
        z: 0
    });

    var texture2 = new THREE.TextureLoader().load( 'assets/images/yuzhou.jpg' );
    var yz_geometry = new THREE.SphereGeometry(500, 500, 50);
    var yz_material = new THREE.MeshPhongMaterial({
        map: texture2,
        side: THREE.DoubleSide
    });
    mesh2 = new THREE.Mesh(yz_geometry, yz_material);
    scene.add(mesh2);

    var texture1 = new THREE.TextureLoader().load( 'assets/images/diffuse.jpg' );
    var geometry = new THREE.SphereGeometry( 0, 0, 200 );
    var material = new THREE.MeshBasicMaterial({
        map: texture1,
        side: THREE.DoubleSide
    });
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById('canvasBox').appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );
}

function intLight() {

    light = new THREE.DirectionalLight(0xffffff, 0.6);

    light.position.set(0, 0, 500);

    scene.add(light);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y -= 0.0016;
    renderer.render(scene, camera);
}
