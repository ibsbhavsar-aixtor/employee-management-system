# Step 1: Build the React app
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Serve with NGINX
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Optional: Custom NGINX config (for React Router support)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
