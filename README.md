<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Project setup
1. Copy and rename ``.env.example`` to .env
2. to integrate cloudinary for upload files put your API key in var ``CLOUDINARY_API``

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Execute on locally with docker
1. Be sure that you have installed docker in your computer
2. execute next command
```bash
docker build -t project-treck .
```
3. modify ``docker-compose.yml`` file and add your own cloudinary url on ``CLOUDINARY_API``
4. Execute the next command to configure and execute
```bash
docker-compose up -d
```
