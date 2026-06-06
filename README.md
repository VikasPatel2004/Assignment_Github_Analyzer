# GitHub Profile Analyzer API

## Overview

GitHub Profile Analyzer API is a backend application built using Node.js, Express.js, MySQL, and the GitHub Public API.

The application fetches public GitHub profile data, generates useful insights, stores the analyzed results in a MySQL database, and provides APIs to retrieve and manage the stored profile information.

---

## Features

### Core Features

* Fetch GitHub user profile data using username
* Analyze GitHub profile information
* Store analyzed data in MySQL
* Retrieve all analyzed profiles
* Retrieve a single analyzed profile

### Additional Features

* Refresh stored profile data
* Search profiles by username
* Get top profiles based on followers
* Swagger API documentation

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub REST API
* Axios
* Swagger UI Express
* Swagger JSDoc

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

| Column              | Description                     |
| ------------------- | ------------------------------- |
| id                  | Primary Key                     |
| username            | GitHub Username                 |
| name                | User Name                       |
| bio                 | GitHub Bio                      |
| followers           | Followers Count                 |
| following           | Following Count                 |
| public_repos        | Public Repository Count         |
| account_age_years   | Account Age                     |
| follower_repo_ratio | Followers-to-Repositories Ratio |
| profile_score       | Profile Completeness Score      |
| activity_score      | Activity Score                  |
| popularity_tier     | Popularity Classification       |
| avatar_url          | Profile Avatar URL              |
| github_url          | GitHub Profile URL              |
| created_at          | Record Creation Time            |
| updated_at          | Last Update Time                |

---

## Generated Insights

The application generates the following insights:

### Account Age

Calculates the age of the GitHub account in years.

### Follower Repository Ratio

Measures popularity relative to repository count.

### Profile Score

Based on the availability of:

* Bio
* Location
* Company
* Blog

### Activity Score

Calculated using:

* Followers
* Following
* Public Repositories

### Popularity Tier

Classification based on follower count:

* Beginner
* Growing
* Influencer
* Star

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate To Project

```bash
cd github-profile-analyzer
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
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer
```

### Start Server

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

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

Example:

```http
GET /api/profiles/octocat
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

## Swagger Documentation

After starting the server, Swagger documentation can be accessed at:

```text
http://localhost:5000/api-docs
```

---

## Error Handling

The API handles:

* Invalid GitHub usernames
* Duplicate profile entries
* Database errors
* Server errors

---

## Future Improvements

* Pagination support
* Authentication and authorization
* Profile analytics dashboard
* Scheduled profile refresh
* Advanced GitHub statistics

---

## Author

Vikas Patel
