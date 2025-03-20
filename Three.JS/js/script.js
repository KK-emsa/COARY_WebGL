import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';

function main() {
    // 获取 Canvas 并创建渲染器
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    renderer.shadowMap.enabled = true; // 启用阴影

    // 创建场景
    const scene = new THREE.Scene();
    
    // 创建相机
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 10);
    camera.position.set(2, 2, 5);
    camera.lookAt(0, 0, 0);

    // 创建立方体几何体（所有立方体共用）
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // 创建一个函数，生成不同颜色的立方体
    function makeInstance(geometry, color, x) {
        const material = new THREE.MeshPhongMaterial({ color });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = x;
        cube.castShadow = true; // 允许投影
        scene.add(cube);
        return cube;
    }

    // 创建 3 个立方体，每个颜色不同，位置不同
    const cubes = [
        makeInstance(geometry, 0x44aa88,  0),  // 绿色
        makeInstance(geometry, 0x8844aa, -2),  // 紫色
        makeInstance(geometry, 0xaa8844,  2),  // 橙色
    ];

    // 创建地面
    const planeGeometry = new THREE.PlaneGeometry(5, 5);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true; // 允许接收阴影
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1;
    scene.add(plane);

    // 添加光源
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 3);
    directionalLight.position.set(2, 2, 5);
    directionalLight.castShadow = true; // 允许光源投射阴影
    scene.add(directionalLight);

    // 让渲染器适应 Canvas 的显示尺寸（防止模糊和变形）
    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    // 渲染循环
    function render(time) {
        time *= 0.001; // 把时间转换为秒

        // 调整渲染器和相机比例，防止变形
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        // 让每个立方体以不同的速度旋转
        cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * 0.1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
        });

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    render();
}

main();
