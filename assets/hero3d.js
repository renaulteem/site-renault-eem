/* Carrousel 3D de l'accueil.
   Pour changer les modèles : modifier la liste SLIDES ci-dessous
   (photo = clé de PHOTOS dans config.js, lien = clé d'un lien de SITE). */
(function () {
  const SLIDES = [
    { photo: "r5", mot: "R5", eyebrow: "100 % électrique", titre: "Renault 5 E-Tech", texte: "L'icône revient, en électrique.", lien: "lienRenault" },
    { photo: "clio", mot: "CLIO", eyebrow: "Nouveauté", titre: "Nouvelle Renault Clio", texte: "La nouvelle génération de la citadine préférée des Français.", lien: "lienRenault" },
    { photo: "austral", mot: "AUSTRAL", eyebrow: "SUV full hybrid", titre: "Renault Austral E-Tech", texte: "Le SUV familial full hybrid, sobre et spacieux.", lien: "lienRenault" },
    { photo: "rafale", mot: "RAFALE", eyebrow: "SUV coupé", titre: "Renault Rafale", texte: "Le SUV coupé haut de gamme de Renault.", lien: "lienRenault" },
    { photo: "a390", mot: "A390", eyebrow: "Alpine", titre: "Alpine A390", texte: "La sportive 100 % électrique signée Alpine.", lien: "lienAlpine" },
  ];
  const DUREE = 6000;
  const $ = (id) => document.getElementById(id);
  const stage = $("h3-stage"), track = $("h3-track"), info = $("h3-info"), word = $("h3-word"), bars = $("h3-bars");
  if (!stage) return;
  const n = SLIDES.length;
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let cur = 0, timer = null, tiltX = 0, tiltY = 0;

  track.innerHTML = SLIDES.map((s, i) => `
    <button class="h3-card" data-i="${i}" aria-label="${s.titre}">
      <img src="${PHOTOS[s.photo]}" alt="${s.titre}" ${i ? 'loading="lazy"' : ""}>
      <span class="h3-shine"></span>
    </button>`).join("");
  bars.innerHTML = SLIDES.map((s, i) => `<button aria-label="${s.titre}"><span></span></button>`).join("");
  const cards = [...track.children];

  function layout() {
    const mobile = innerWidth < 760;
    cards.forEach((c, i) => {
      let d = i - cur;
      if (d > n / 2) d -= n;
      if (d < -n / 2) d += n;
      const a = Math.abs(d);
      const x = d * (mobile ? 64 : 46);          // décalage en % de la largeur de carte
      const z = -a * (mobile ? 260 : 240);
      const ry = -d * (mobile ? 18 : 30);
      const s = 1 - a * 0.06;
      const tilt = d === 0 ? ` rotateX(${tiltY}deg) rotateY(${tiltX}deg)` : "";
      c.style.transform = `translate(-50%, -50%) translateX(${x}%) translateZ(${z}px) rotateY(${ry}deg) scale(${s})${tilt}`;
      c.style.zIndex = 10 - a;
      c.style.opacity = a > 2 ? 0 : a === 2 ? 0.45 : a === 1 ? 0.85 : 1;
      c.style.pointerEvents = a > 1 ? "none" : "auto";
      c.classList.toggle("on", d === 0);
      c.tabIndex = d === 0 ? -1 : 0;
    });
  }

  function show(i, user) {
    cur = (i + n) % n;
    const s = SLIDES[cur];
    info.classList.remove("in");
    word.classList.remove("in");
    // texte et grand mot : petite animation de sortie / entrée
    setTimeout(() => {
      info.innerHTML = `
        <span class="eyebrow">${s.eyebrow}</span>
        <h2>${s.titre}</h2>
        <p>${s.texte}</p>
        <a class="btn btn-yellow" href="${SITE[s.lien]}" target="_blank" rel="noopener">Découvrir ↗</a>`;
      word.textContent = s.mot;
      info.classList.add("in");
      word.classList.add("in");
    }, calm ? 0 : 180);
    [...bars.children].forEach((b, j) => {
      b.classList.toggle("on", j === cur);
      b.classList.toggle("past", j < cur);
      const fill = b.firstElementChild;
      fill.style.animation = "none"; void fill.offsetWidth; fill.style.animation = "";
    });
    layout();
    if (user) restart();
  }
  function restart() {
    clearInterval(timer);
    const fill = bars.children[cur] && bars.children[cur].firstElementChild;
    if (fill) { fill.style.animation = "none"; void fill.offsetWidth; fill.style.animation = ""; }
    if (!calm) timer = setInterval(() => show(cur + 1), DUREE);
  }

  // clics : cartes latérales, barres, flèches
  track.addEventListener("click", (e) => { const c = e.target.closest(".h3-card"); if (c && !c.classList.contains("on")) show(+c.dataset.i, true); });
  bars.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) show([...bars.children].indexOf(b), true); });
  $("h3-prev").onclick = () => show(cur - 1, true);
  $("h3-next").onclick = () => show(cur + 1, true);
  stage.addEventListener("keydown", (e) => { if (e.key === "ArrowLeft") show(cur - 1, true); if (e.key === "ArrowRight") show(cur + 1, true); });

  // relief qui suit la souris (carte active)
  if (!calm) {
    stage.addEventListener("mousemove", (e) => {
      const r = stage.getBoundingClientRect();
      tiltX = ((e.clientX - r.left) / r.width - 0.5) * 10;
      tiltY = -((e.clientY - r.top) / r.height - 0.5) * 8;
      stage.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
      layout();
    });
    stage.addEventListener("mouseleave", () => { tiltX = tiltY = 0; layout(); });
  }
  // pause au survol
  stage.addEventListener("mouseenter", () => { clearInterval(timer); stage.classList.add("paused"); });
  stage.addEventListener("mouseleave", () => { stage.classList.remove("paused"); restart(); });

  // glisser au doigt
  let x0 = null;
  stage.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
  stage.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1), true);
    x0 = null;
  });
  addEventListener("resize", layout);

  show(0);
  restart();
})();
