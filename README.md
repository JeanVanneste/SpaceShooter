# SpaceShooter

Il s'agit d'un jeu arcade inspiré par Space Invaders et du boss "The Haunt" du jeu *Binding of Isaac*.

## Diagramme de séquence 

![diagramme de séquence](pictures/SequenceDiagram.jpg)

## Bibliothèques utilisées 

### Bibliothèque client

ESlint pour vérifier le style

### Bibliothèques serveur

- Serveur Node.js.
- Express pour la gestion des requêtes HTTP
    - Morgan pour le logging/debug
    - Body-parser pour le parsing des request
- NeDB pour la gestion de la DB scores