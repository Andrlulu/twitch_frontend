# Use Node.js LTS version
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000
EXPOSE 3000

# Set environment variable to allow connections from outside
ENV WDS_SOCKET_PORT=0

# Start the development server
CMD ["npm", "start"] 