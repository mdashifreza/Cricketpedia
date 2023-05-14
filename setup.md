## Setup
To get started with this project, follow these steps:
1. Clone the repository to your local machine: `git clone https://github.com/your-username/your-repo.git`

2. Navigate to the project directory:
`cd your-repo`

3. Install the dependencies:
`npm install`

4. Set up environment variables by creating a .env file at the root of the project and adding the following:
`PORT=3015`

5. Start the server:
The server should now be running on http://localhost:3015/.

## Endpoints

The server should now be running on `http://localhost:3015/`.

## Usage

This app exposes two endpoints:

- `/hash/:salt`: generates a hashed URL for the provided URL and salt. The salt can be any string.
  - Query Parameters:
    - `url`: the URL to hash
  - Example usage: `http://localhost:3015/hash/my-salt?url=https://example.com`
  - Example response: `https://google.com/click/5b03634fabc15a9dcd1b9b85727b8d36efbe1bfa393471f67c2550c2cc8962a2`

- `/click/:hash`: handles hashed URLs and redirects to the original URL.
  - Path Parameters:
    - `hash`: the hashed URL to handle
  - Example usage: `http://localhost:3015/click/5b03634fabc15a9dcd1b9b85727b8d36efbe1bfa393471f67c2550c2cc8962a2`

