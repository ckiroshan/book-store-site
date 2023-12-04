# Book Store Site

Welcome to the Book Store Site project! This web application allows users to browse and purchase e-books online. The site includes user authentication, admin functionalities for CRUD operations, and integration with MongoDB for data storage.

![preview img](/preview.jpg)

[![Build Status](https://travis-ci.com/ckiroshan/book-store-site.svg?branch=main)](https://travis-ci.com/ckiroshan/book-store-site)

## Table of Contents

- [Current Features](#current-features)
- [Features To Be Implemented](#features-to-be-implemented)
- [Tech Stack](#tech-stack)
- [Development Tools](#development-tools)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)

## Current Features

- **Admin Privileges:** CRUD operations on book management (via Postman).
- **MongoDB Integration:** Efficient storage and retrieval of data.
- **Responsive Design:** Ensures a seamless user experience across various devices.
- **Search Functionality:** Allows users to search for specific books based on titles (via Postman).
- **Dynamic Book Cards:** Interactive and visually appealing book cards with dynamic content.
- **Pagination:** Provides a user-friendly way to navigate through multiple pages of book listings.
- More to be added soon..

## Features To Be Implemented

- **User Authentication:** Google Sign-In and Authentication to enhance user experience and security.
- **Admin Privileges:** User & Book management from the frontend view.
- **Search Functionality:** Search for books based on titles from the frontend view.
- **Dark Mode:** Enable a dark mode view of the site.
- **Working Paywall:** Implement secure and seamless transactions.
  
## Tech Stack

### Frontend:

- HTML
- CSS
- JavaScript
- ReactJS
- Tailwind CSS

### Backend:

- ExpressJS

### Database:

- MongoDB

### Development Tools:

- Vite (for frontend development)
- Nodemon (for backend development)

## Dependencies

### [flowbite-react](https://flowbite.com/docs/getting-started/react/)
- **Purpose:** Flowbite is a UI kit for building modern and responsive web interfaces. The `flowbite-react` library provides React components that can be used to enhance UI of the application.

### [localforage](https://github.com/localForage/localForage)
- **Purpose:** `localforage` is a library that provides a simple localStorage wrapper for key-value storage. It's used for client-side data caching and storage.

### [react & react-dom](https://reactjs.org/)
- **Purpose:** React is a JavaScript library for building user interfaces. `react` is the core library for defining components, and `react-dom` is used for interacting with the DOM.

### [react-icons](https://react-icons.github.io/react-icons/)
- **Purpose:** `react-icons` provides a collection of popular icons as React components. It simplifies the process of adding icons to your application, enhancing the visual appeal.

### [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- **Purpose:** `react-router-dom` is a library for declarative routing in React applications. It enables navigation between different views/components based on the URL.

### [swiper](https://swiperjs.com/)
- **Purpose:** Swiper is a modern, mobile-friendly slider library. The `swiper` library allows to create responsive and interactive sliders/carousels to showcase content.

These libraries and modules offer ready-made solutions for common tasks. It allows to focus on building features rather than reinventing the wheel. They enhance the development process by providing efficient and reliable functionality.

## Project Structure

The project is organized into the following directories:

- **mern-client/:** Contains the frontend codebase.
  - `src/`: Main source code for the ReactJS application.
  - `public/`: Public assets and HTML template files.
  - `node_modules/`: Dependencies installed for the frontend.

- **mern-server/:** Houses the backend codebase.
  - `index.js`: Main entry point for the ExpressJS server.
  - `node_modules/`: Dependencies installed for the backend.
  
- Database-related files
  
The separation of frontend and backend directories ensures a clear distinction between client-side and server-side logic. The database-related files are stored in the MongoDB cloud.

This structure facilitates maintainability, scalability, and ease of collaboration for the Book Store Site project.

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ckiroshan/book-store.git

2. Navigate to the project directory:
   
   ```bash
   cd book-store
   ```
   
3. Install dependencies (On both sub-directories seperately): 
   
   ```bash
   npm install
   ```

4. Run the Express JS backend server: localhost:7000 

   ```bash
   npm start
   ```

5. Run the Frontend client server: localhost:5421

   ```bash
   npm run dev
   ```

# API Documentation

The API includes the following endpoints:

- `/books`: Retrieve books, optionally filtered by category.
- `/books`: Upload a new book to the database.
- `/books/:id`: Retrieve details of a specific book.
- `/books/:id`: Update details of a specific book.
- `/books/:id`: Delete a specific book.

## Contributing

Thank you for your interest in contributing to the Book Store Site project. At this time, we are not accepting external contributions.

If you have questions or encounter issues while using the application, feel free to [contact me](mailto:ckiroshan@gmail.com).
