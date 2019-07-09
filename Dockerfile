FROM node:12.6.0-alpine

WORKDIR /home/node

COPY . .

RUN npm install

EXPOSE 3000

CMD npm start
