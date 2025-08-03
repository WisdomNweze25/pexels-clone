# Pexels Clone MERN Stack

This is a full-stack Pexels clone with photo, video, and GIF upload, user auth, likes, and favorites.

## Setup

- Backend: run `npm install` inside `/backend`, then `node server.js`
- Frontend: run `npm install` inside `/frontend`, then `npm start`

## Features

- User registration and login
- Upload photos, videos, and GIFs
- Browse all media on homepage
- Like and favorite media
- Download media files

## Environment Variables

Backend `.env`:
PORT=5000
MONGO_URI=mongodb://localhost:27017/pexels_clone
JWT_SECRET=your_jwt_secret

Frontend `.env`:
REACT_APP_API_URL=http://localhost:5000/api
