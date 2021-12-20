# PWA-Projet
 
Ici vous trouverai mon projet de Programation WEB coté client(PWCC) ou Programation Web Angular (PWA). Il s'agit d'une application de todolist.

Ce Project a été généré avec Angular CLI version 11.0.1.

Installation nécessaire pour le QRcode
Angularx-qrcore :
npm install angularx-qrcode –save
ou
yarn add angularx-qrcode

pour lancée le serveur de developement on lance
ng serve 
ou npm start
puis allez sur http://localhost:4200/.  l'applicationn se recharge toute seule.

## Base du projet

Pour les bases de l'application Nous nous devions reproduire le TP3 du projet https://github.com/Flo-UGA/PWA-TP3. Même si j'ai eu quelque problème notament avec la flèche qui sert de toggle all qui avait disparue et que je n'ai pu remettre que bien plus tard. J'ai passez aussi enormément de temps sur la modification des items, Ce n'est que la semaine dernière que j'ai reussi a la faire fonctionner ce qui a ralentie ma progression.

## fonction ajouter à la Todolist

### Undo/Redo
J'ai ajouter 2 bouton bien visible qui permettent grace à des fonction fournit dans le projet (grâce à des sauvgarde des etats précédant et futur, voir service todoliste) de faire des retour arrière et refaire la dernière action annulé. Les fonction remplace la todolist actuelle avec celle précédante dans l'une ou l'autre des liste. 

### tout effasser
J'ai rajouter un bouton lié a une fonction qui remove tout les éléments dans la Todolist actuel en parcourant la todolist passez dans la fonction.

### Modification du nom de la todolist
J'ai rajouter un formulaire ainsi qu'une fonction dans le composant ainsi que dans le service qui permet de modifier le label de la todolist et donc le titre.

### création d'un QRCODE pour permettre la copy de Todolist
Grace au module Angularx-qrcore nous avons un élément qrcode qui transmet la todolist JSON sous forme de string. Pour l'afficher il suffit de cliqué sur le bouton QRCODE.
une fois appuyer l'application met a jour le code et affiche le qrcode, si on modifie la Todolist, j'ai placée un bouton qui permet d'actualisé le qrcode. Même si la todolist ne change pas un message d'alert est affichez pour indiquez que l'action a bien été exécutez. On peut Cacher le qrcode en rappuyant sur le bouton QRCODE ( qui est rouge quand on affiche le qrcode, et vert quand il n'y pas de qrcode affichez).







