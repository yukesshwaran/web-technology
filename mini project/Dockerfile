# Use official Node.js image as the base image
FROM node:latest as build

# Set the working directory in the container
WORKDIR /angular-shopping-cart

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Angular app for production
RUN ng build

# Use NGINX as the base image for serving Angular app
FROM nginx:latest

# Copy the built Angular app to NGINX HTML directory
COPY --from=build /angular-shopping-cart/dist/angular-shopping-cart /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
