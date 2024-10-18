# Use the official Node.js image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose the application port
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]
