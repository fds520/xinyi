const canvasBox = document.getElementById("canvasBox");
let W = canvasBox.width();
let H = canvasBox.height();

//随浏览器窗口变化而变化
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}


$(window).on("resize", function () {

    onWindowResize();
});

var num = 0;
var scene, camera, renderer, light;


function intScene() {

    scene = new THREE.Scene();
}


function intCamera() {

    camera = new THREE.PerspectiveCamera(45, W / H, 1, 1000);

    camera.position.set(0, 0, 400);

    camera.up.set(0, 1, 0);

    camera.lookAt({

        x: 0,

        y: 0,

        z: 0

    })
}


function intRender() {

    renderer = new THREE.WebGLRenderer({

        antialias: true

    });

//renderer = new THREE.CanvasRenderer();

    renderer.setSize(W, H);

    canvasBox.appendChild(renderer.domElement);
}


function intLight() {

    light = new THREE.DirectionalLight(0xffffff, 0.6);

    light.position.set(0, 0, 400);

    scene.add(light);
}

var xkbg, earth, texts;


function intModels() {

    /* 宇宙背景 */

    var yz_geometry = new THREE.SphereGeometry(500, 500, 50);

    var yz_material = new THREE.MeshPhongMaterial({

        map: THREE.ImageUtils.loadTexture('assets/images/yuzhou.jpg'),

        side: THREE.DoubleSide

    });

    xkbg = new THREE.Mesh(yz_geometry, yz_material);

    xkbg.position.set(0, 0, 0);

    scene.add(xkbg);

//地球

    var earth_geometry = new THREE.SphereGeometry(100, 50, 50);

    var earth_material = new THREE.MeshPhongMaterial({

        map: THREE.ImageUtils.loadTexture('assets/images/earthj.jpg'),

        side: THREE.DoubleSide

    });

    earth = new THREE.Mesh(earth_geometry, earth_material);

    earth.position.set(0, 0, 0);

    xkbg.add(earth);
}

var mouseX, mouseY, isMove = true;

//自转
function zizhuan() {

    if (isMove) {

        requestAnimationFrame(zizhuan);

        xkbg.rotation.y -= 0.002;

        renderer.render(scene, camera);

    }
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

        requestAnimationFrame(zizhuan);

        xkbg.rotation.x = xkbg.rotation.x > 0.8 ? 0.8 : xkbg.rotation.x;

        xkbg.rotation.x = xkbg.rotation.x < -0.8 ? -0.8 : xkbg.rotation.x;

        xkbg.rotation.x += disY * 0.00005 * Math.PI;

        xkbg.rotation.y += disX * 0.0001 * Math.PI;

        renderer.render(scene, camera);

    }
}
document.onmouseup = function () {

    console.log(xkbg.rotation.y)

    isMove = true;

    setTimeout(function () {

        zizhuan();

    }, 2000)
}


//滑动鼠标让地球放大缩小
function intsScale() {

    $(document).on('mousewheel DOMMouseScroll', function (ev) {

        var e = ev || event;

        e.preventDefault();

        var value = e.originalEvent.wheelDelta || -e.originalEvent.detail;

        var delta = Math.max(-1, Math.min(1, value));

        if (delta == 1) {

            num++;

            num = num > 10 ? 10 : num;

        } else {

            num--;

            num = num < -15 ? -15 : num;

        }

        camera.position.set(0, 0, 400 + num * 10);

    });
}


function intStart() {

    intScene();

    intCamera();

    intRender();

    intLight();

    intModels();

    zizhuan();

    intsScale();

    renderer.render(scene, camera);
}

intStart();