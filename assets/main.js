/* En-tête, pied de page et comportements communs à toutes les pages */
(function () {
  const S = window.SITE;
  const P = window.PHOTOS;
  const tel = "tel:" + S.tel.replace(/\s/g, "");
  const page = document.body.dataset.page || "home";
  const home = page === "home" ? "" : "index.html";

  const LOGO_RENAULT = "photos/site/logo-renault.svg";
  const LOGO_DACIA = "photos/site/logo-dacia.svg";

  const ICON = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    chev: '<svg width="10" height="10" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  };
  window.ICON = ICON;

  const header = `
  <header class="header"><div class="container">
    <a class="brand" href="index.html" aria-label="Accueil ${S.nom}">
      <img src="${LOGO_RENAULT}" alt="Renault">
      <div class="brand-text"><strong>${S.nom}</strong><span>${S.sousTitre}</span></div>
    </a>
    <button class="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="nav" id="nav">
      <a href="index.html" class="${page === "home" ? "active" : ""}">Accueil</a>
      <a href="vo.html" class="${page === "vo" ? "active" : ""}">Véhicules d'occasion</a>
      <a href="nous-connaitre.html" class="${page === "apropos" ? "active" : ""}">Nous connaître</a>
      <a href="${S.lienRenault}" target="_blank" rel="noopener" class="ext">Véhicules neufs ${ICON.ext}</a>
      <a href="${S.lienContrat}" target="_blank" rel="noopener" class="ext">Contrat d'entretien ${ICON.ext}</a>
      <a class="btn btn-yellow header-cta" href="${tel}">${ICON.phone} ${S.tel}</a>
    </nav>
  </div></header>`;

  const footer = `
  <footer class="footer"><div class="container">
    <div>
      <div class="logos"><img src="${LOGO_RENAULT}" alt="Renault"><span class="sep"></span><img src="${LOGO_DACIA}" alt="Dacia" style="height:22px"></div>
      <div class="brand-text" style="margin-bottom:8px"><strong>${S.nom}</strong></div>
      <p>${S.raisonSociale} — Agent Renault · Multimarque<br>${S.adresse}<br>${S.ville}</p>
    </div>
    <div><h4>Contact</h4><ul>
      <li><a href="${tel}">${S.tel}</a></li>
      <li><a href="mailto:${S.email}">${S.email}</a></li>
      <li><a href="${S.lienMaps}" target="_blank" rel="noopener">Itinéraire</a></li>
    </ul></div>
    <div class="legal"><span>© ${new Date().getFullYear()} ${S.raisonSociale} · <a href="mentions-legales.html">Mentions légales</a> · <a href="mentions-legales.html#confidentialite">Confidentialité</a></span><span>${window.CREDITS}</span></div>
  </div></footer>
  <a class="btn btn-yellow fab" href="${tel}">${ICON.phone} Appeler · ${S.tel}</a>`;

  document.getElementById("site-header").innerHTML = header;
  document.getElementById("site-footer").innerHTML = footer;

  // Remplit les éléments marqués depuis la config
  document.querySelectorAll("[data-tel]").forEach((el) => (el.href = tel));
  document.querySelectorAll("[data-num]").forEach((el) => (el.textContent = S.tel));
  document.querySelectorAll("[data-text]").forEach((el) => (el.textContent = S[el.dataset.text]));
  document.querySelectorAll("[data-href]").forEach((el) => (el.href = S[el.dataset.href]));
  document.querySelectorAll("[data-photo]").forEach((el) => (el.src = P[el.dataset.photo]));
  document.querySelectorAll("[data-arrow]").forEach((el) => el.insertAdjacentHTML("beforeend", " " + ICON.arrow));

  // Menu mobile
  const burger = document.querySelector(".burger");
  const nav = document.getElementById("nav");
  const setMenu = (open) => {
    nav.classList.toggle("open", open);
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    document.body.classList.toggle("menu-open", open);
  };
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  // Apparition au défilement
  const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
