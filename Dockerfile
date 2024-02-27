FROM node:latest

LABEL authors="Itsme"
WORKDIR /app

COPY package*.json ./
RUN npm install && npm install pg

COPY . .

EXPOSE 4000
CMD ["npm", "start"]
