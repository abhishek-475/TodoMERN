TaskMaster APP

A simple and efficient full-stack To-Do List application for managing daily tasks.


Table of Contents
-------------------
- Project Overview
- Features
- Technologies
- Getting Started
- Usage



Project Overview
----------------

TaskMaster is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It is designed for seamless task management with the ability to create, update, and delete tasks in a simple and user-friendly interface.




Features
---------

- User-Friendly Interface: Intuitive design for easy task management.
- CRUD Operations:
    -> Create: Add new tasks.
    -> Read: View a list of tasks.
    -> Update: Mark tasks as completed or not completed.
    -> Delete: Remove tasks from the list.
- Responsive Design: Fully responsive UI built with React-Bootstrap.
- Real-Time Feedback: Notifications using React-Toastify for user actions




Technologies
------------
- Frontend: React.js, React-Bootstrap, Axios, React-Toastify
- Backend: Node.js, Express.js
- Database: MongoDB




Getting Started
---------------

Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- MongoDB or a MongoDB Atlas account

Installation

1.Clone the Repository

git clone https://github.com/abhishek-475/TodoMERN.git

cd TodoMERN


2.Install Dependencies

Frontend:

cd client
npm install 


Backend:

cd server
npm install


3.Set Up Environment Variables

Create a .env file in the /server directory and add the following:

DB_CONNECTION="<Your MongoDB Connection String>"


set PORT = 4000



4.Run the Application

Backend:

node index.js


Frontend:

npm run dev



Usage
-------

Base URL: https://todoserver-izor.onrender.com



API Endpoints

Method	    Endpoint	        Description

GET	        /tasks	            Fetch all tasks
POST	    /tasks	            Add a new task
PUT	        /tasks/:id	        Update task status
DELETE	    /tasks/:id	        Delete a task

