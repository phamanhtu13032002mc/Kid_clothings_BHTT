FROM node:16.13.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install

COPY . .

EXPOSE 3000
ENTRYPOINT npm start
