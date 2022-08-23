FROM node:16.17-alpine3.16

WORKDIR /app

COPY app/package.json .
COPY app/package-lock.json .

RUN npm install

RUN chown -R node /app/node_modules

CMD ["npm", "start"]