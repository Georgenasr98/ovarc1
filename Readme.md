# Node.js Book Store API

This repository contains a Node.js application that manages a book store using Sequelize and PostgreSQL. It provides endpoints for creating authors, books, and stores, as well as for managing and retrieving data related to these entities.

## Table of Contents

- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Setting Up the Project

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   change the database configutation 


2. **Runnig the app**
    
    ```bash 
    docker-compose up --build -d

3. ***apis endpoint***

  "item": [
    {
      "name": "Create Book",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"The Great Gatsby\",\n  \"pages\": 180,\n  \"authorId\": 1\n}"
        },
        "url": {
          "raw": "http://localhost:3000/createBook",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "createBook"
          ]
        }
      }
    },
    {
      "name": "Get Author Books",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/getAuthorBooks/1",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "getAuthorBooks",
            "1"
          ]
        }
      }
    },
    {
      "name": "Create Author",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"F. Scott Fitzgerald\"\n}"
        },
        "url": {
          "raw": "http://localhost:3000/createAuthor",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "createAuthor"
          ]
        }
      }
    },
    {
      "name": "Assign Book to Store",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"store_id\": 1,\n  \"book_id\": 1,\n  \"price\": 20.99\n}"
        },
        "url": {
          "raw": "http://localhost:3000/assignBooktoStore",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "assignBooktoStore"
          ]
        }
      }
    },
    {
      "name": "Sell Book",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/sellBook/1",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "sellBook",
            "1"
          ]
        }
      }
    },
    {
      "name": "Get Books in Store",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/getBooksInStore/1",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "getBooksInStore",
            "1"
          ]
        }
      }
    },
    {
      "name": "Get Cheapest Book for Each Author",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/getCheapestBookForEachAuthor",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "getCheapestBookForEachAuthor"
          ]
        }
      }
    },
    {
      "name": "Create Store",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"City Bookstore\",\n  \"location\": \"Main St.\"\n}"
        },
        "url": {
          "raw": "http://localhost:3000/createStore",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "createStore"
          ]
        }
      }
    }
  ]


