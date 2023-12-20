FROM node

WORKDIR /frontend/
COPY public/ /frontend/public/
COPY src/ /frontend/src/
COPY package.json /frontend/package.json
COPY package-lock.json /frontend/package-lock.json

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]