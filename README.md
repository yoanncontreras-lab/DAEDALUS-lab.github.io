# DAEDALUS — Site vitrine, version coordonnées renseignées

Site statique sans abonnement, sans serveur, sans base de données et sans bibliothèque externe.
Pages : `index.html`, `spectralab.html`, `contact.html`, `mentions-legales.html`, `confidentialite.html`.

## 1. Avant la publication (obligatoire)

Les coordonnées transmises sont **déjà intégrées** dans `config.js` :
- e-mail : `yoann.contreras@proton.me` ;
- téléphone : `06 21 29 95 82` ;
- adresse : `50 rue du Canal, 05500 Saint-Bonnet-en-Champsaur, France`.

**Attention : ces coordonnées (adresse et téléphone compris) seront publiquement visibles et indexables après la mise en ligne.** Avant de publier :
- confirmer que l'adresse indiquée est bien votre **domiciliation professionnelle** et que vous acceptez qu'elle soit rendue publique ;
- vérifier la raison sociale, le SIREN/SIRET, le nom commercial et les coordonnées de l'hébergeur ;
- revoir les **mentions légales** et la **politique de confidentialité** pour votre situation réelle ;
- après ces vérifications, mettre `legalInfoReviewed: true` dans `config.js` pour retirer le bandeau de préparation.

**Important :** DAEDALUS est présenté comme une marque du studio, pas automatiquement comme la raison sociale enregistrée. S'il n'existe pas de nom commercial déclaré DAEDALUS, ne le présenter pas comme raison sociale sur le compte entreprise Microsoft Store. Les coordonnées obligatoires d'une EI doivent être publiées conformément à la loi.

## 2. Prévisualiser

Ouvrir `index.html` dans votre navigateur, ou lancer un serveur local :

```bash
python -m http.server 8000
```

Puis aller sur http://localhost:8000

## 3. Mettre en ligne gratuitement sur GitHub Pages

1. Se connecter à https://github.com/ et créer un dépôt **public**, par ex. `daedalus-site` (gratuit avec GitHub Free).
2. Dans le dépôt, choisir **Add file > Upload files** puis glisser **les fichiers décompressés** (ne pas envoyer seulement le ZIP) à la racine du dépôt, y compris le dossier `assets`.
3. Dans le dépôt : **Settings > Pages > Build and deployment**.
4. Choisir **Deploy from a branch**, branche `main`, dossier `/ (root)` et enregistrer.
5. Après activation, le site aura une adresse du type `https://VOTRE-COMPTE.github.io/daedalus-site/` (à adapter à votre identifiant GitHub et nom de dépôt). **Aucun nom de domaine à acheter.**
6. Vérifier l'accès public en HTTPS, la navigation et les coordonnées depuis un appareil non connecté à GitHub.

Aucune URL n'est réservée par ce dossier. L'URL réelle dépend de votre compte, de votre dépôt et de la configuration de Pages.

## 4. Pour Microsoft Store

La présence d'un site vitrine n'assure pas à elle seule la validation d'un compte entreprise. Microsoft peut demander une adresse e-mail professionnelle sur un domaine que vous contrôlez, ou une preuve d'appartenance à l'entreprise / de propriété du domaine.

- Si vous utilisez seulement `github.io`, vous ne possédez pas ce domaine. **Une adresse `@proton.me` est une adresse de contact valide sur le site, mais peut être refusée par Microsoft lors de la vérification de l’adresse professionnelle d’un compte entreprise.**
- Pour rester à 0 €, utiliser le site GitHub Pages et demander à Microsoft quelles autres voies de vérification sont possibles en cas de rejet du compte entreprise. Un domaine propre et une adresse e-mail professionnelle peuvent entraîner des frais.
- Le site de l'entreprise et la **politique de confidentialité de chaque application** sont deux choses distinctes.
- La page de confidentialité fournie couvre **le site uniquement**. Ne pas l'utiliser comme politique de SpectraLab sans auditer les flux vidéo/audio/permissions/communications et toute collecte de données réelle.

## 5. Modifications simples

- Modifier les textes des projets dans `index.html` ;
- Modifier les détails de SpectraLab dans `spectralab.html` ;
- Modifier l'apparence dans `assets/styles.css` ;
- Aucun tracking, CDN ou police externe n'est présent dans la version livrée.

## Sources utiles

- https://docs.github.com/en/pages/quickstart
- https://learn.microsoft.com/windows/apps/publish/partner-center/open-a-developer-account
- https://entreprendre.service-public.gouv.fr/vosdroits/F37351