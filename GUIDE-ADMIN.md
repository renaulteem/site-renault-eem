# Renault Gambetta — Guide administrateur

## Ajouter / modifier un véhicule d'occasion

1. Aller sur **renaultgambetta.com/admin** (ordinateur, tablette ou téléphone).
2. Se connecter avec le jeton GitHub (« Sign in with Token »).
3. Ouvrir **Véhicules d'occasion › Stock VO**.
4. **Ajouter un véhicule** : remplir la fiche (référence, marque, modèle, version,
   catégorie, année, km, carburant, boîte, puissance, couleur, prix, atouts)
   et glisser les photos. La 1re photo sert de vignette.
5. Cliquer sur **Enregistrer**. Le site est à jour environ 1 minute plus tard.

- **Véhicule réservé** : passer le statut sur « Réservé » → un badge apparaît.
- **Véhicule vendu** : passer le statut sur « Vendu » → il disparaît du site
  (la fiche reste dans l'admin, on peut la remettre en vente).
- **Changer un prix** : ouvrir le véhicule, modifier, enregistrer.

### Photos
- Formats JPG ou PNG, idéalement en paysage (format 16:10 ou 4:3).
- **Flouter les plaques avant d'envoyer** (y compris celles des voitures en arrière-plan).
- Taille conseillée : 1600 px de large maximum (photos plus légères = site plus rapide).

## Mise en ligne (à faire une seule fois)

Hébergement : **GitHub Pages** (gratuit). Seul frais : le nom de domaine (~10 €/an).

1. Créer un compte **GitHub** (gratuit) au nom du garage.
2. Acheter le nom de domaine (ex. chez OVH).
3. Envoyer le dossier du site dans un dépôt GitHub public, puis activer GitHub Pages
   (Settings › Pages › branche « main »).
4. Relier le nom de domaine (2 lignes à ajouter chez OVH) et cocher « Enforce HTTPS ».
5. Dans `admin/config.yml`, remplacer `A-REMPLIR/renault-eem` par le nom du dépôt
   et `site_url` par l'adresse du site.
6. Connexion à l'admin : « Se connecter avec un jeton d'accès » (jeton GitHub créé une fois,
   droits « Contents : lecture/écriture » sur ce seul dépôt).

Le dossier `outils/` (traitement des photos) n'est pas publié (voir `.gitignore`).
Ne jamais mettre de mot de passe ni de document client dans le dépôt : il est public.

## Ce qui se modifie où

| Quoi | Où |
|---|---|
| Véhicules d'occasion | **/admin** (sans code) |
| Téléphone, adresse, horaires, photos du site | `assets/config.js` (photos dans `photos/site/`) |
| Textes des pages | fichiers `index.html`, `devis.html`, `vo.html` |
