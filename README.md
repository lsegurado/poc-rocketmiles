# Rocketmiles - React Technical Assesment

## Development Frontend server

Run `npm start` for a dev server. Navigate to `http://localhost:1234`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `npm test` to execute the unit tests via [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/).

## Development Backend API server

We've packaged a very simple backend for you in docker to serve up the API for your development. You can find it in [backend-server](./backend-server).

Requires:
Java 11

#### To Run backend API using gradle
```bash
./gradlew clean bootRun
```

####  To Run backend API using Docker
- Install [docker](https://docs.docker.com/docker-for-mac/install/)
- `./boot`
