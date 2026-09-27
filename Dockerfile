FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/index.html /usr/share/nginx/html/index.html
COPY --from=builder /app/assets /usr/share/nginx/html/assets
EXPOSE 80
