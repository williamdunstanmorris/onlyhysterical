# phase build
FROM node:8-alpine as builder
WORKDIR '/home/app'
COPY package.json /home/app
RUN npm install
COPY . /home/app
RUN npm run build

# phase run
FROM nginx
EXPOSE 80
COPY --from=builder /home/app/build /usr/share/nginx/html
