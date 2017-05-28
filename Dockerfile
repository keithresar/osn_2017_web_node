FROM node:6.9.2
EXPOSE 8080
COPY package.json simple_router.js ./
RUN npm install
CMD node simple_router.js

