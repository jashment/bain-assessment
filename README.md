# Bain Technical Assessment

## To Run locally

.env file
```
VITE_BACKEND_BASE_URL=http://localhost:3000
```

## To run with Docker

In your terminal, run the following command to build the container.
```
docker build -t bain-assessment:latest .
```
then, to run the container:
```
docker run -it -p 5173:5173 -e VITE_BACKEND_BASE_URL=http://localhost:3000 bain-assessment:latest
```