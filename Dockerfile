FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm cache clean --force
# RUN npm install -g yarn

RUN yarn

COPY . .

# EXPOSE 3000

CMD ["yarn", "dev"]