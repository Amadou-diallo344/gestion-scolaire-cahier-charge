# Gestion scolaire

Ce projet est un site web simple pour gérer les élèves, les classes et les notes. Il permet à un enseignant de :

- ajouter des classes,
- inscrire des élèves dans une classe,
- connaître le nombre d’élèves par classe,
- enregistrer des notes par matière,
- afficher les moyennes et les statistiques.

## Fonctionnalités

- Tableau de bord avec statistiques globales
- Gestion des classes
- Gestion des élèves
- Saisie des notes
- Calcul automatique des moyennes
- Stockage local dans le navigateur (localStorage)

## Démarrage

Ouvrez simplement le fichier `index.html` dans un navigateur.

Ou lancez un petit serveur local :

```bash
python -m http.server 8000
```

Puis ouvrez : http://localhost:8000

## Fichiers principaux

- `index.html` : structure de l’interface
- `styles.css` : styles du site
- `script.js` : logique de gestion des données
