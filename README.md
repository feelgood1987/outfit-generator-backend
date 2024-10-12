# Outfit generator API service

This is a sample outfit generator API service built with NestJS. It provides a simple API to generate random outfits based on NewYorkers products api call.

## Installation

This project uses `pnpm` as the package manager, because of it's speed and efficiency. If you don't have `pnpm` installed, you can install it by running the following command.

```bash
$ npm install -g pnpm
```

You can install it by running the following command.

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev
```

## API Endpoints

Here are the available endpoints for this service. also you could find the swagger documentation at `http://localhost:3000/swagger` after running the service.

### Get random outfit

This endpoint returns a random outfit based on the products available in the NewYorkers products API.

```bash
GET /v1/products?gender=MEN
```
