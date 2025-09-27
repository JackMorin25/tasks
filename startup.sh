#!/bin/bash

backend_pid=""
frontend_pid=""

cleanup() {
  echo "Shutting down servers..."
  [ ! -z "$backend_pid" ] && kill $backend_pid
  [ ! -z "$frontend_pid" ] && kill $frontend_pid
  docker stop memo
  exit
}

trap cleanup INT TERM

# Start Docker container
echo "Starting Docker container..."
docker start memo

# Start backend
#cd ./backend
#echo "Starting backend server..."
#python app.py &
#backend_pid=$!
#echo "Backend PID: $backend_pid"

# Start frontend
cd ./frontend
echo "Starting frontend server..."
npm run dev &
frontend_pid=$!
echo "Frontend PID: $frontend_pid"

echo "All services running. Press Ctrl+C to stop."

wait
