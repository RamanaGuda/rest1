{
    "version": 2,
    "builds": [
      {
        "src": "index.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/bfhl",
        "methods": ["POST", "GET"],
        "dest": "index.js"
      }
    ]
  }
  