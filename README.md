# SQL Editor written in Express.js HTML and CSS

This project is fullstack a node.js and js project build with [Express](https://expressjs.com/), [Docker](https://www.docker.com/)

## Installation and starting application

```bash
$ cp .env.dev .env
```

```bash
$ docker-compose up
```
## Stop the application

```bash
$ docker-compose down
```

### Connect to the api container

```bash
$ docker exec -it api-container /bin/bash
```

## Access the frontend: 
### the frontend is exposed at the port 8000 with nginx:

```bash
http://localhost:8000
```

#### Have fun :)