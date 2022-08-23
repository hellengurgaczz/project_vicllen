FROM node:16.17-alpine3.16

WORKDIR /api

COPY api/package.json .
COPY api/package-lock.json .

RUN npm install

RUN chown -R node /api/node_modules

CMD ["npm", "run", "start:dev"]