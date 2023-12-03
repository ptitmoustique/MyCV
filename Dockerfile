# Utilisez l'image node:latest comme base
FROM node:latest

# Définissez le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copiez le fichier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposez le port sur lequel l'application s'exécute
EXPOSE 3000

# Commande de démarrage de l'application
CMD [ "npm", "run", "start" ]
