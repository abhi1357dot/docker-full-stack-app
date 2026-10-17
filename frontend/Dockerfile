FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY app.js ./
COPY views/ ./views/

EXPOSE 3000

CMD ["node", "app.js"]
