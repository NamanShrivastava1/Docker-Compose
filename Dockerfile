# SATGE 1: Build the frontend
FROM node:20-alpine AS frontend_builder

WORKDIR /app

COPY ./frontend/package*.json /app

RUN npm install

COPY ./frontend /app

RUN npm run build