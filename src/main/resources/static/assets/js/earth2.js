var camera, scene, renderer;
var mesh, mesh2, light;
var mouseX, mouseY, isMove = true;

var spriteTL, spriteTR, spriteBL, spriteBR, spriteC;
var mapC;
var group;

init();
intLight();
animate();

function init() {
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 1500, 2100);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 500;
  camera.up.set(0, 1, 0);
  camera.lookAt({
    x: 0,
    y: 0,
    z: 0
  });

  // 宇宙
  var texture2 = new THREE.TextureLoader().load('assets/images/yuzhou.jpg');
  var yz_geometry = new THREE.SphereGeometry(0, 0, 0);
  var yz_material = new THREE.MeshPhongMaterial({
    map: texture2,
    side: THREE.DoubleSide
  });
  mesh2 = new THREE.Mesh(yz_geometry, yz_material);
  scene.add(mesh2);

  // 地球
  var texture1 = new THREE.TextureLoader().load('assets/images/earthj1.jpg');
  var geometry = new THREE.SphereGeometry(90, 200, 200);
  var material = new THREE.MeshBasicMaterial({
    map: texture1,
    side: THREE.DoubleSide
  });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 坐标
  var radius = 50;
  var textureLoader = new THREE.TextureLoader();
  var mapA = textureLoader.load( "assets/images/earthImg1.png" );
  var mapB = textureLoader.load( "assets/images/earthImg2.png" );
  mapC = textureLoader.load( "assets/images/earthImg3.png" );
  var mapD = textureLoader.load( "assets/images/earthImg4.png" );
  var mapE = textureLoader.load( "assets/images/earthImg5.png" );

  group = new THREE.Group();
  var materialE = new THREE.SpriteMaterial( { map: mapE, color: 0xffffff, fog: true } );
  var materialD = new THREE.SpriteMaterial( { map: mapD, color: 0xffffff, fog: true } );
  var materialC = new THREE.SpriteMaterial( { map: mapC, color: 0xffffff, fog: true } );
  var materialB = new THREE.SpriteMaterial( { map: mapB, color: 0xffffff, fog: true } );
  var materialA = new THREE.SpriteMaterial( { map: mapA, color: 0xffffff, fog: true } );

  var sprite1 = new THREE.Sprite(materialA.clone());
  sprite1.position.set( -450, 1500, 2500 );
  sprite1.position.normalize();
  sprite1.position.multiplyScalar( radius );
  group.add( sprite1 );

  var sprite2 = new THREE.Sprite(materialB.clone());
  sprite2.position.set( 0, 0, 0 );
  sprite2.position.normalize();
  sprite2.position.multiplyScalar( radius );
  group.add( sprite2 );

  var sprite3 = new THREE.Sprite(materialC.clone());
  sprite3.position.set( 0, 0, 0 );
  sprite3.position.normalize();
  sprite3.position.multiplyScalar( radius );
  group.add( sprite3 );

  var sprite4 = new THREE.Sprite(materialD.clone());
  sprite4.position.set( 0, 0, 0 );
  sprite4.position.normalize();
  sprite4.position.multiplyScalar( radius );
  group.add( sprite4 );

  var sprite5 = new THREE.Sprite(materialE.clone());
  sprite5.position.set( 0, 0, 0 );
  sprite5.position.normalize();
  sprite5.position.multiplyScalar( radius );
  group.add( sprite5 );

  scene.add(group);

  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  document.getElementById('canvasBox').appendChild(renderer.domElement);

  window.addEventListener('resize', onWindowResize, false);
}

function intLight() {
  light = new THREE.DirectionalLight(0xffffff, 0.8);
  light.position.set(0, 0, 0);
  scene.add(light);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.z -= 0.002;
  renderer.render(scene, camera);
  render();
}


//拖拽
document.onmousedown = function (e) {
  isMove = false;
  mouseX = e.pageX;
  mouseY = e.pageY;
}

document.onmousemove = function rt(e) {
  if (!isMove) {
    var disX = e.pageX - mouseX;
    var disY = e.pageY - mouseY;
    requestAnimationFrame(animate);
    // mesh.rotation.x = mesh.rotation.x > 0.8 ? 0.8 : mesh.rotation.x;
    // mesh.rotation.x = mesh.rotation.x < -0.8 ? -0.8 : mesh.rotation.x;
    mesh.rotation.x += disY * 0.00005 * Math.PI;
    mesh.rotation.y += disX * 0.0001 * Math.PI;
    renderer.render(scene, camera);
  }
}

document.onmouseup = function () {
  // console.log(mesh.rotation.y);
  isMove = true;
  setTimeout(function () {
    animate();
  }, 2000)
}

function render() {
  // var time = Date.now() / 1000;
  for ( var i = 0, l = group.children.length; i < l; i ++ ) {
    var sprite = group.children[ i ];
    // console.log(sprite);
    var material = sprite.material;
    // var scale = Math.sin( time + sprite.position.x * 0.01 ) * 0.3 + 1.0;
    var scale = Math.sin( sprite.position.x * 0.01 ) * 0.3 + 1.0;
    var imageWidth = 30;
    var imageHeight = 62;

    // if ( material.map && material.map.image && material.map.image.width ) {
    //   imageWidth = material.map.image.width;
    //   imageHeight = material.map.image.height;
    // }
    sprite.scale.set( scale * imageWidth, scale * imageHeight, 1.0 );
  }

  // 容器自转
  // renderer.clear();
  renderer.render( scene, camera );
}
