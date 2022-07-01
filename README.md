# URL shortener aka the shortest url

<br>

### Description

This project is the result of a coding assignment I took.<br>
It is able to shorten a URL and to decode a shortened URL for the user to access the original one.<br>
The focus is on the back-end.

<br>

### Usefuls links

- Postman [Collection](https://www.getpostman.com/collections/e9dd780e1874c6987e25)
- Personal [Github](https://github.com/chloe4E)
  <br>
  <br>

## Server / Backend

<br>

### Model

<br>

**URL model**

```javascript
{
  id: {
    required: true,
    type: String,
  },
  url: {
    required: true,
    type: String,
  },
}
```

<br>

### API Endpoints (backend routes)

<br>

| HTTP Method | URL           | Request Body | Success status | Error Status | Description                                                                                                              |
| ----------- | ------------- | ------------ | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| POST        | `/encode `    | {url}        | 200            | 401 or 500   | Takes in a url string input and creates an entry in the database with this url and an associated shortened url called id |
| GET         | `/decode/:id` |              | 200            | 404          | Takes in a shortened URL string, look into the database and gives back the original associated URL                       |
| GET         | `/:id`        |              | 200            | 404          | Takes in a shortened URL string, look into the database and redirects the user to the original associated URL            |

### Built With

- [Node.js](https://nodejs.org/)
- [Bootstrap](https://getbootstrap.com)

### Packages

- nanoid
- mongoose
- dotenv
- boostrap
- url-exist
  <br>

## Getting Started

### Prerequisites

- make sure to have mongoDB on your local (you will need to create a .env file with your MONGO_DB_URI)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/chloe4E/shorten_url_project
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run it

   ```sh
   npm run dev
   ```

4. open http://localhost:3000/
   <br>

## General informations

### My Approach

- I spent some time understanding why, as a company, this is relevant to use shorter URLs (marketing, tracking, sharing, user trust, CTR)
- Since I am applying for a Backend Software Engineer position, I focused on the back-end and implemented a minimal front-end for testing purposes.
- I chose to work with MongoDB to store and retrieve data.
- For the encoding: I chose to use the package [nanoid](https://github.com/ai/nanoid). It is a simple, trustworthy solution which fits the case. I chose to use 10 digits as it gives me 64^10 possibilities (1.152.921.504.606.847.000) which is (more than) enough for this coding challenge.
- For the front-end I chose to work with Bootstrap to have an efficient layout (to make E2E tests) in a minimum of time as this was not in the requirements.
- For the tests: I used the front-end for E2E testing and I created a tests collection in Postman.

    <br>

### Main challenges

1. The instructions advised to use TypeScript, however, I have no experience yet in Typescript. I decided to tackle this challenge with regular Javascript.

2. First time using Postman collection to save a set of tests. Please find the collection [here](https://www.getpostman.com/collections/e9dd780e1874c6987e25)

3. Unresolved issue: I wanted to refactor the code to use axios but was unable to resolve the error <em>"Uncaught TypeError: Failed to resolve module specifier "axios". Relative references must start with either "/", "./", or "."</em> while working in /public/index.js

### If I had more time, I would improve...

- Refactor the code to Typescript
- Use axios to create the API calls.
- Add a check: if the long URL already is in the database then create a prompt to know if user wants to reuse the existing short ID or not.
- Create one repo for front end and an other for the back end

### Contributors

Chloé Faurie - [Github](https://github.com/chloe4E) - [Linkedin](https://www.linkedin.com/in/chlo%C3%A9-faurie/)
