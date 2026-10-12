import { useEffect, useRef } from "react";

export function Maquette() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = wrap.current;
    if (!root) return;
    let dead = false;
    let dispose = () => {};

    void import("three").then((THREE) => {
      if (dead || !wrap.current) return;
      const host = wrap.current;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(host.clientWidth, Math.max(host.clientHeight, 1));
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, host.clientWidth / Math.max(host.clientHeight, 1), 0.1, 40);
      camera.position.set(4.4, 2.5, 5.6);

      const group = new THREE.Group();
      scene.add(group);

      const plaster = new THREE.MeshStandardMaterial({ color: 0xe6d3bc, roughness: 0.88 });
      const dark = new THREE.MeshStandardMaterial({ color: 0x1c1714, roughness: 0.62 });
      const glass = new THREE.MeshStandardMaterial({
        color: 0xffc48a,
        emissive: 0xc45c3e,
        emissiveIntensity: 0.8,
        roughness: 0.4,
      });

      const body = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.75, 1.45), plaster);
      body.position.y = 0.98;
      group.add(body);

      const roof = new THREE.Mesh(new THREE.BoxGeometry(2.66, 0.08, 1.6), dark);
      roof.position.y = 1.9;
      group.add(roof);

      for (let floor = 0; floor < 3; floor++) {
        for (let col = 0; col < 4; col++) {
          const windowPane = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.34, 0.05), glass);
          windowPane.position.set(-0.9 + col * 0.6, 0.48 + floor * 0.48, 0.75);
          group.add(windowPane);
        }
      }

      const canopy = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.045, 0.38), dark);
      canopy.position.set(0.15, 0.78, 0.92);
      group.add(canopy);

      const door = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.48, 0.04), dark);
      door.position.set(0.15, 0.34, 0.74);
      group.add(door);

      const ground = new THREE.Mesh(
        new THREE.CircleGeometry(3.4, 48),
        new THREE.MeshStandardMaterial({ color: 0xe4d7c6, roughness: 1 }),
      );
      ground.rotation.x = -Math.PI / 2;
      scene.add(ground);

      scene.add(new THREE.AmbientLight(0xf4efe8, 0.75));
      const sun = new THREE.DirectionalLight(0xfff3e4, 1.5);
      sun.position.set(4, 6, 3);
      scene.add(sun);
      const glow = new THREE.PointLight(0xc45c3e, 3, 9);
      glow.position.set(0.2, 1.1, 1.4);
      scene.add(glow);

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let dragging = false;
      let lastX = 0;
      let vel = reduce ? 0 : 0.0035;

      const onDown = (event: PointerEvent) => {
        dragging = true;
        lastX = event.clientX;
      };
      const onMove = (event: PointerEvent) => {
        if (!dragging) return;
        const dx = event.clientX - lastX;
        lastX = event.clientX;
        group.rotation.y += dx * 0.01;
        vel = dx * 0.00035;
      };
      const onUp = () => {
        dragging = false;
      };

      host.addEventListener("pointerdown", onDown);
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);

      let raf = 0;
      const clock = new THREE.Clock();
      const loop = () => {
        raf = requestAnimationFrame(loop);
        if (!dragging) group.rotation.y += vel;
        glass.emissiveIntensity = 0.65 + Math.sin(clock.getElapsedTime() * 1.5) * 0.12;
        camera.lookAt(0, 0.9, 0);
        renderer.render(scene, camera);
      };
      loop();

      const fit = () => {
        const w = host.clientWidth;
        const h = Math.max(host.clientHeight, 1);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      const observer = new ResizeObserver(fit);
      observer.observe(host);

      const teardown = () => {
        cancelAnimationFrame(raf);
        observer.disconnect();
        host.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        renderer.dispose();
        plaster.dispose();
        dark.dispose();
        glass.dispose();
        if (renderer.domElement.parentElement === host) host.removeChild(renderer.domElement);
      };

      if (dead) teardown();
      else dispose = teardown;
    });

    return () => {
      dead = true;
      dispose();
    };
  }, []);

  return <div ref={wrap} className="h-full min-h-72 w-full touch-none" />;
}
