FROM node:16.13 as dev

WORKDIR /usr/local/users-service

COPY package*.json ./

RUN yarn install --only=development

COPY . .

RUN yarn build
