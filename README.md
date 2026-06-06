# GitHub Profile Analyzer API

## Live Demo

**Deployed API:**
https://assignment-github-analyzer.onrender.com/

**Swagger Documentation:**
https://assignment-github-analyzer.onrender.com/api-docs

---

## Overview

GitHub Profile Analyzer API is a backend application built using Node.js, Express.js, MySQL, and the GitHub Public API.

The application fetches GitHub user data, analyzes profile statistics, stores useful insights in a MySQL database, and exposes REST APIs to retrieve and manage analyzed profiles.

---

## Features

### Core Features

* Analyze GitHub profiles using username
* Fetch data from GitHub Public API
* Store analyzed results in MySQL
* Retrieve all analyzed profiles
* Retrieve a single analyzed profile

### Additional Features

* Refresh stored profile data
* Search analyzed profiles
* Get top profiles based on followers
* Swagger API documentation
* Environment-based configuration
* Cloud deployment support

---

## Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Third-Party API

* GitHub REST API

### Documentation

* Swagger UI Express
* Swagger JSDoc

### Other Packages

* Axios
* Dotenv
* Cors
* Mysql2

---

## Project Structure

```text
src
│
├── config
│   ├── db.js
│   └── swagger.js
│
├── controllers
│   └── profileController.js
│
├── services
│   ├── githubService.js
│   └── analysisService.js
│
├── models
│   └── profileModel.js
│
├── routes
│   └── profileRoutes.js
│
├── middlewares
│
├── app.js
└── server.js
```

---

## Database Schema

### Table: github_profiles

| Column              | Type      |
| ------------------- | --------- |
| id                  | INT       |
| username            | VARCHAR   |
| name                | VARCHAR   |
| bio                 | TEXT      |
| followers           | INT       |
| following           | INT       |
| public_repos        | INT       |
| account_age_years   | DECIMAL   |
| follower_repo_ratio | DECIMAL   |
| profile_score       | INT       |
| activity_score      | INT       |
| popularity_tier     | VARCHAR   |
| avatar_url          | TEXT      |
| github_url          | TEXT      |
| created_at          | TIMESTAMP |
| updated_at          | TIMESTAMP |

---

## Insights Generated

The API calculates and stores:

* Followers Count
* Following Count
* Public Repository Count
* Account Age
* Followers-to-Repositories Ratio
* Profile Score
* Activity Score
* Popularity Tier

---

## API Endpoints

### Analyze GitHub Profile

```http
POST /api/profiles/:username/analyze
```

Example:

```http
POST /api/profiles/octocat/analyze
```

---

### Get All Profiles

```http
GET /api/profiles
```

---

### Get Single Profile

```http
GET /api/profiles/:username
```

---

### Refresh Profile

```http
PUT /api/profiles/:username/refresh
```

---

### Search Profiles

```http
GET /api/profiles/search?q=oct
```

---

### Top Profiles

```http
GET /api/profiles/top
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer

GITHUB_TOKEN=your_github_token
```

### Start Development Server

```bash
npm run dev
```

### Start Production Server

```bash
npm start
```

---

## API Documentation

Swagger UI is available at:

https://assignment-github-analyzer.onrender.com/api-docs

---

## Deployment

### Backend

Render

### Database

Railway MySQL

---

## Author

Vikas Patel
