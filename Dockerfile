FROM node:20-alpine
RUN npm install --location=global pnpm
WORKDIR /home/node
RUN chown -R node:node .
USER node

ENV SERVICE_NAME backend

COPY --chown=node:node ./dist ./

RUN ls ./
RUN pnpm install 

CMD [ "node", "main.js" ]