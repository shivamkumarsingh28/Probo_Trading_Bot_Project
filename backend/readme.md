# Backend Trading Bot Project Setup

- This guide outlines the steps to set up a basic trading bot application using Node.js and React.js.

## Prerequisites
Ensure that the following tools are installed on your system:

- Node.js (v14 or higher)
- npm (comes with Node.js) or yarn as a package manager
- Git (for version control)

# Step 1: Create the Project Directory
- Open a terminal and create a new directory for the project:
```
mkdir trading-bot
cd trading-bot
```
Step 2: Initialize a Node.js Project
Run the following command to initialize a package.json file:
```
npm init -y
```

- This will create the basic package configuration for the Node.js project.

## Step 3: Set up the Backend (Node.js + Express)

- Install required backend dependencies:

```
npm install express mongoose axios cors
```

- express: Server framework for Node.js.

- axios: To make HTTP requests (for fetching stock data).

- cors: Cross-Origin Resource Sharing middleware.
Install dev dependencies:

## Git Clone Backend Part

```
    cd backend
```

- Install package form package.json file
```
    npm i
```

- Start Backend this command

```
    node tradebot.js
```

- Backend run port 5000

```
    Server is running on port 5000
