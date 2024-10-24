FROM node:18

WORKDIR /visualvista/

COPY public/ /visualvista//public
COPY src/ /visualvista//src
COPY package.json /visualvista//

RUN npm install

CMD ["npm", "start"]

EXPOSE 3000