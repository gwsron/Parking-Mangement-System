# Parking Management System

A full-stack Purchase Management Website built with React (Vite) and Node.js (Express).

## Features
- View real-time parking slot availability.
- Book a parking slot with Driver Name and Vehicle Number.
- Dashboard overview of all slots.
- Free up occupied slots.
- Responsive and modern UI.

## Project Structure
- `server/`: Backend API (Node.js + Express) using a JSON file as a database.
- `client/`: Frontend Application (React + Vite).

## Prerequisites
- Node.js installed on your machine.

## How to Run

### 1. Backend Setup
Open a terminal in the `server` directory:

```bash
cd parking-management/server
npm install
npm start
```
The server will start on `http://localhost:5000`.

### 2. Frontend Setup
Open a **new** terminal in the `client` directory:

```bash
cd parking-management/client
npm install
npm run dev
```
The application will be available at `http://localhost:5173`.

## Login Credentials
- **Username**: `admin`
- **Password**: `admin`

## API Endpoints
- `GET /api/slots`: Get all parking slots.
- `POST /api/book/:id`: Book a specific slot. (Body: `occupantName`, `vehicleNumber`)
- `POST /api/free/:id`: Free a specific slot.

## Technologies Used
- Frontend: React, Vite, React Router, Axios, CSS3.
- Backend: Node.js, Express, CORS, Body-Parser.
- Database: JSON file system (for simplicity).
