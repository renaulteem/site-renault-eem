/* =========================================================
   CONFIGURATION DU SITE — RENAULT GAMBETTA
   C'est le SEUL fichier à modifier pour mettre à jour :
   coordonnées, horaires, photos et véhicules d'occasion.
   ========================================================= */

window.SITE = {
  nom: "Renault Gambetta",
  raisonSociale: "EEM",
  sousTitre: "Agent Renault · Multimarque",

  tel: "01 48 48 29 48",
  email: "renault.eem@gmail.com",
  adresse: "17-21 Bd Gambetta",
  ville: "93130 Noisy-le-Sec",
  lienMaps: "https://www.google.com/maps/search/?api=1&query=17-21+Boulevard+Gambetta+93130+Noisy-le-Sec",
  carteEmbed: "https://www.google.com/maps?q=17-21+Boulevard+Gambetta,+93130+Noisy-le-Sec&output=embed",

  horaires: [
    ["Lundi – Vendredi", "7h30 – 12h30\n14h00 – 19h00"],
    ["Samedi", "8h30 – 12h30"],
    ["Dimanche", "Fermé"],
  ],

  lienRenault: "https://www.renault.fr",
  lienContrat: "https://www.renault.fr/contrats-services.html",
  lienMyRenault: "https://www.renault.fr/decouvrez-myrenault.html",

  /* ----- Formulaire de devis ----- */
  rdv: {
    // Adresse d'un service de réception de formulaires (ex : Formspree).
    // Vide = la demande s'ouvre dans la messagerie du client, adressée à l'e-mail du garage.
    envoiUrl: "",
  },
  lienAlpine: "https://www.alpinecars.com/fr/",
};

/* ---------------------------------------------------------
   PHOTOS DU SITE
   Pour remplacer une photo : mettre le fichier dans le dossier
   "photos/" et écrire son chemin, ex : "photos/atelier.jpg".
   --------------------------------------------------------- */
window.PHOTOS = {
  r5: "photos/site/r5.jpg",
  rafale: "photos/site/rafale.jpg",
  clio: "photos/site/clio.jpg",
  austral: "photos/site/austral.jpg",
  a390: "photos/site/a390.jpg",
  mecanique: "photos/site/mecanique.jpg",
  carrosserie: "photos/site/carrosserie.jpg",
  peinture: "photos/site/peinture.jpg",
  geometrie: "photos/site/geometrie.jpg",
  controle: "photos/site/controle.jpg",
};

// Les photos Wikimedia sont sous licence CC BY-SA 4.0 : la mention est obligatoire.
window.CREDITS = "Photos véhicules : Alexander Migl, Y. Leclercq (Wikimedia Commons, CC BY-SA 4.0) · Photos atelier : Unsplash";

// Les véhicules d'occasion sont dans data/vehicules.json (modifiable depuis /admin).
