# Basic React Project Pages

This project is for training only. This project implement Single Page Application (with React Router DOM) to display burger menu.

This project is using Burger Menu API from: 
```
https://github.com/SBigz/free-food-menus-api
```

## Preview

![Preview](./preview.png)

## How to Run this Project (Manual/Docker)

### Manually
1. Clone this project
```
git clone https://github.com/mdavindarinaldy/fgo24-react-pages.git
```
2. Install dependencies
```
npm install
``` 
3. Run the project
```
npm run dev
```
4. Project will running on http://localhost:5173

### With Docker
1. Clone this project
```
git clone https://github.com/mdavindarinaldy/fgo24-react-pages.git
```
2. Build image
```
docker build . -t ubuntu:pages
```
3. Run image with docker
```
docker run -p 8080:80 -d ubuntu:pages
```
4. Project will be running on http://localhost:8080

### Project

## Dependencies
This project using node.js to run, make sure to install node on your machine. Other than that, this project also using Vite, React, React Router DOM and ESLint.

## Basic Information
This project is part of training in Kodacademy Bootcamp Batch 24 made by Muhammad Davinda Rinaldy
