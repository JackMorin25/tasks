#!/bin/bash

# Navigate to backend and start Flask app in the background
cd backend
flask run &

# Navigate to frontend and start the development server
cd ../frontend
npm run dev