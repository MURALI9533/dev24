# FROM node:alpine
# WORKDIR /app
# COPY . /app
# RUN npm install -g @angular/cli
# RUN npm install
# EXPOSE 80
# CMD ["ng", "serve"]


# FROM nginx:1.17.1-alpine
# # CMD [ "ng", "build", "--configuration=production" ]
# RUN npm run build
# COPY nginx.conf /etc/nginx/nginx.conf
# # COPY /dist/dev24 /usr/share/nginx/html

# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY ./ /app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/dev24 /usr/share/nginx/html

# Expose port 80
EXPOSE 80
