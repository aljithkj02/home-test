# Home-test

### This is a Full Stack Developer Take Home Test for Travelopia. The project is a MERN (MongoDB, Express.js, React.js, Node.js) stack application.

<br/>

## Features
### Users can submit form data with their name, email, destination, number of travelers, and budget per person.
### The form data is stored in a MongoDB database and can be retrieved using an API endpoint.
### There is a submissions page that displays all the existing form submissions.

<br/>

## Running the Project
<p><b>To run the project, follow these steps:</b></p>

### 1, Clone the project from the GitHub repository.
### 2, Navigate to the project directory using the terminal.
### 3, Install the necessary dependencies by running the command npm install in both the backend and frontend directories.
### 4, Create a .env file in the backend directory and add the following environment variables:
    PORT=<PORT_NUMBER>
    MONGO_URL=<MONGODB_CONNECTION_URL>
### Replace <PORT_NUMBER> with the desired port number for the Backend server and <MONGODB_CONNECTION_URL> with the connection URL for your MongoDB database.

### 5, Start the Backend server by running the command npm start in the backend directory.
### 6, Start the Frontend server by running the command npm run dev in the frontend directory.
### 7, The Frontend server will start on port 3000, and you can access it on your browser using the URL http://localhost:3000.


<br/>

## API Endpoints
<b>The Backend has two API endpoints:</b>

### POST /api/data
### This endpoint receives data from the form on the Frontend, validates the data, and stores it in a MongoDB database.

<br/>

### GET /api/data
### This endpoint retrieves all the existing form submissions from the MongoDB database and sends them as a JSON array in the response body.

<br/>

## Technologies Used
### Frontend: React.js, Chakra UI, Axios
### Backend: Node.js, Express.js, MongoDB