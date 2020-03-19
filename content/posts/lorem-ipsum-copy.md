---
title: A propos de lorem Ipsum
author: mikamboo
date: 2019-05-10
slug: post-about-lorem-ipsum
cover: https://images.unsplash.com/photo-1541830029-b25bdc02cf99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
---

Nuxt et un framework basé sur [Vue.js](https://vuejs.org) qui permet de créer assez facilement des sites web modernes.

> Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable.

Nuxt est un framework Jamstack parmi d'autres. D'ailleurs si c'est un sujet qui vous intéresse je vous invite à visite le site [jamstack.org](https://jamstack.org) qui traite bien le sujet.

### Le projet

Dans ce billet nous allon faire une rapide prise en en main de __Nuxt__ et par transitivité de __VueJs__.
L'objectif est de créer rapide un blog simple qui aura comme source de données des fichiers markdown.

#### Pré-requis

#### Etape 1 : Création du projet

Créer le projet Nuxt en tapant la commande

```bash
yarn create nuxt-app nuxt-markdown-blog
```

Cette commande est interractive et permet d'initiliser et d'ajouter des composants optionnels au projet. Nous allons choisir les paramètres par défaut sauf pour l'étape __UI framework__ ou nous allons sélectionner [bulma](https://bulma.io), Une petite lib pure CSS pour avoir de jolies interfaces web.

Maintenant que tout est initialisé, on peut lancer notre appli en local

```bash
cd nuxt-markdown-blog
yarn run dev
```

Par dafut le serveur local de dev est accéssible à l'adresse [http://localhost:3000](http://localhost:3000)


### Etape 2: Ajout loader frontmatter-markdown-loader

Le package [frontmatter-markdown-loader](hhttps://www.npmjs.com/package/frontmatter-markdown-loader) qui s'intègre à webpack déjà présent dans tout projet nuxt, va en gros permettre de charger des fichier markdown et lire les attributs de la zone __frontmatter__.

> Le __frontmatter__ est une zone située en début du fichier markdown et qui n'est pas visible lors du rendu html et qui permet de rajouter des métadonnées au fichier mardown

![markdown frontmatter](nuxt-markdown-blog-frontmatter.png)

* Installation

```bash
yarn add frontmatter-markdown-loader
```

* Configuration

Il faut pour cela modifier le fichier `nuxt.config.js` situé à la racine du projet et rajouter la configuration suivante :

```js
//...

build: {
  extend(config, ctx) {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      include: path.resolve(__dirname, 'content')
    })

    //...
  }
}
```

### Etape 3: Ajout des pages blog


```
-| pages/
----| posts /
--------| _slug.vue
--------| index.vue
----| about.vue
----| index.vue
```
