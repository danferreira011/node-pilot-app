FROM node
    # alpine3.23


WORKDIR /app

COPY package*.json ./
RUN npm install 
# npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]