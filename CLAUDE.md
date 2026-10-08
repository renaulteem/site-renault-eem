# Site Renault Gambetta — carnet de bord

Site vitrine du garage **Renault Gambetta** (raison sociale **E.E.M**, SAS), agent Renault et
garage multimarque, 17-21 boulevard Gambetta, 93130 Noisy-le-Sec. Tél. 01 48 48 29 48,
renault.eem@gmail.com.

En ligne sur **https://renaultgambetta.com** (domaine acheté chez OVH, hébergé sur
GitHub Pages, dépôt `renaulteem/site-renault-eem`, branche `main`).

L'utilisateur est le garagiste : il parle français, n'est pas développeur. Répondre en
français simple, étapes courtes, pas de jargon. Toujours vérifier le rendu dans le
navigateur (ordinateur **et** mobile) avant de dire qu'une modification est faite.

## Structure

- Site statique HTML/CSS/JS, sans framework ni build. Pages : `index.html` (accueil,
  carrousel 3D, Atelier & services, contact), `vo.html` (occasions), `devis.html`,
  `presentation.html`, `mentions-legales.html`.
- `assets/config.js` : téléphone, adresse, horaires, liens, photos du site.
- `assets/main.js` : en-tête, menu et pied de page communs. `assets/hero3d.js` : carrousel.
- `assets/style.css` : tout le style. Après une modif CSS/JS, augmenter le numéro `?v=` dans
  les balises des pages HTML, sinon les navigateurs gardent l'ancienne version.
- `data/vehicules.json` : stock VO. `data/apropos.json` : contenu de la page « Présentation ».
  Ces deux fichiers sont aussi modifiés par le garagiste via `/admin` (Sveltia CMS,
  config dans `admin/config.yml`) : toujours faire `git pull` avant de les modifier.
- `photos/site/` : photos du site. `photos/vo/` : photos des véhicules.
- `outils/` (non publié, dans `.gitignore`) : outils macOS de traitement des photos VO.

## Choix validés par le garagiste (ne pas revenir dessus sans demande)

- Nom affiché : « Renault Gambetta », sous-titre « Agent Renault · Multimarque ».
  En bas de page : « EEM » seulement. « SAS E.E.M » complet uniquement dans les mentions légales.
- Style clair inspiré de renault.fr : fond blanc, tuiles gris clair et jaune Renault
  (#efdf00) séparées par une fine bande blanche, angles droits. Pas de fond noir.
- Menu : Accueil · Présentation · Véhicules d'occasion · Véhicules neufs (lien renault.fr)
  · Contrat d'entretien (lien renault.fr) · bouton téléphone.
- Pas de prise de RDV en ligne (supprimée) : rendez-vous par téléphone uniquement.
- Devis : formulaire `devis.html` qui ouvre la messagerie du client (gratuit, pas de
  service externe). Carte grise obligatoire : bouton bloqué sans elle, et mention
  « toute demande sans carte grise ne sera pas prise en considération ».
- Carrosserie / peinture : fenêtre « avec ou sans assurance » avant le devis.
- Horaires : lun–ven 7h30–12h30 · 14h00–19h00, samedi 8h30–12h30, dimanche fermé.

## Ajouter un véhicule d'occasion

1. Photos d'origine (pas de fond studio, sauf demande). **Flouter toutes les plaques**, y
   compris des voitures en arrière-plan et les noms sur les écrans multimédia :
   `outils/.photos-vo <photo> photos/vo/<nom>-<n>.jpg orig [x,y,l,h ...]`
   (zones manuelles en fractions 0–1, origine en haut à gauche ; les plaques à l'ancien
   format « 123 AB 93 » ne sont pas détectées automatiquement). Toujours vérifier
   visuellement chaque photo après traitement.
2. Vignette centrée sur le véhicule : `outils/.vignette photos/vo/<nom>-1.jpg photos/vo/<nom>-1-vignette.jpg`
3. Ajouter la fiche en tête de `data/vehicules.json` (référence suivante VO-0xx).
   Les infos viennent de l'affiche du garage. Ne rien inventer : laisser vide ce qui manque
   et le demander (année, couleur, CV…).
4. « Points forts & travaux réalisés » (`atouts`) : infos concrètes (embrayage neuf,
   pneus neufs, CarPlay…), pas de phrases génériques.
5. Prix : se terminent en 990 (ex. 8 990 €) sauf si le garagiste donne un autre prix.
   Statuts : « En vente », « Réservé », « Vendu » (masqué du site, fiche conservée).

## Mettre en ligne

Après modification : `git add -A && git commit -m "..."`, puis le garagiste lance lui-même
`git push` dans le Terminal (identifiant `renaulteem` + jeton GitHub). Ne jamais demander,
afficher ni enregistrer le jeton. Le site est à jour 1 à 2 minutes après.

## À ne jamais faire

- Publier un jeton, mot de passe, carte grise ou document client (le dépôt est public).
- Copier des photos ou textes de renault.fr : photos libres (Wikimedia CC BY-SA, crédits
  en bas de page et dans les mentions légales) ou photos du garage uniquement.
