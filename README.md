# Timestamp Microservice

## Live Demo

https://timestamp-api-express.onrender.com/

## Run local

Install node modules:

```
npm install
```

Run the project locally:

```
npm run start
```

or

```
node index.js
```

## Example Usage

```sh
localhost:3030/api/2024-02-10
localhost:3030/api/1451001600000
localhost:3030/api/
```

## Example Outputs:

```json
{"unix":1707523200000,"utc":"Sat, 10 Feb 2024 00:00:00 GMT"}

{"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}

{"unix":1707598035253,"utc":"Sat, 10 Feb 2024 20:47:15 GMT"}
```

## Instructions
Instructions for building this project can be found at [FreeCodeCamp.org](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)
