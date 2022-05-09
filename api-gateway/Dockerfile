FROM node:16.13 as dev

WORKDIR /usr/local/api-gateway

COPY package*.json ./

RUN yarn install --only=development

COPY . .

RUN yarn build
