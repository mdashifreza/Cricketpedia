# Hashed URL Tracking Service
This is a Node.js application that generates hashed URLs and tracks clicks on them. The application uses the crypto module to generate SHA-256 hashes for the given URLs and a user-defined salt. The generated hash is used as a short URL, which is then tracked for clicks.
Setup

# Setup
1. Clone this repository.
2. Install dependencies using npm install.
3. Create a .env file and set the PORT environment variable (e.g., PORT=3015).
4. Run the application using npm start.

# Endpoints
# `/hash/:salt`
This endpoint generates a hashed URL for the given URL and salt. It accepts a query parameter url that specifies the URL to hash. The salt parameter is optional and can be any string. The generated hashed URL is returned as a response.

Example
Request: `GET /hash/mysalt?url=https://google.com`

Response: `https://google.com/click/358b6257ca68f1c0d838f37a78c1c0055d6de9d15c16b5a5e015af4b03e4bb6a
`

`/click/:hash`
This endpoint handles hashed URLs and tracks clicks on them. The hash parameter specifies the hashed URL to track. The endpoint uses two middlewares to handle the request: handleHashedUrl and trackUrlClick.

The handleHashedUrl middleware checks if the hash is valid and decrements the usage counter. If the usage limit is reached, it invalidates the hash and redirects to the original URL. Otherwise, it continues to the trackUrlClick middleware to track the click.

The trackUrlClick middleware increments the click count for the given hash and redirects to the original URL.

Example
Request: `GET /click/358b6257ca68f1c0d838f37a78c1c0055d6de9d15c16b5a5e015af4b03e4bb6a
`

Response: `Redirecting to https://google.com
`
