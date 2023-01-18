FROM novinrepo:8082/docker/node:slim
COPY .npmrc /root/.npmrc
WORKDIR /app
COPY src/package*.json .
RUN npm install

COPY src .
CMD ["node", "index.js"]