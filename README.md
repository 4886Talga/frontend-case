# Brewery Finder

## Overview

The Brewery Finder is a web application that allows users to search for breweries using the Open Brewery DB API. The app is built with React, TypeScript, and Tailwind CSS, and uses React Router for navigation.

## Features

- **Home Page:** Displays a list of breweries fetched from the API.
- **Product Details Page:** Shows detailed information about a selected brewery.
- **Responsive Design:** Styled using Tailwind CSS for a modern look and feel.
- **Context Management:** Utilizes React Context API for managing the state of the fetched breweries and selected brewery details.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A strongly typed programming language that builds on JavaScript.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **React Router:** A library for handling routing in React applications.
- **Jest & Testing Library:** For testing React components and pages.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (package managers)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/4886Talga/frontend-case.git
   cd brewery-finder

   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install

   ```

3. Start the development server:

```bash
npm start
# or
yarn start

```

## Folder Structure

The project's folder structure is organized as follows:

- **`/src`**: Main source directory
- **`/components`**: Contains reusable React components.
- **`/contexts`**: Contains context providers and hooks for managing state.
- **`/hooks`**: Custom React hooks.
- **`/pages`**: React components for different pages (e.g., Home, Product Details).
- **`/styles`**: Tailwind CSS configuration and custom styles.
- **`/utils`**: Utility functions and helpers.
- **`App.tsx`**: Main application component.
- **`index.tsx`**: Entry point for React.

## Usage

### Home Page

- Displays a list of breweries.
- Users can click on a brewery to view more details.

### Product Details Page

- Shows detailed information about the selected brewery.
- Includes a back button to return to the Home Page.

## Testing

To run tests for the application, use the following command:

```bash
npm test
# or
yarn test
```

## Acknowledgements

- **Open Brewery DB**: For providing the brewery data API.
- **React & Tailwind CSS**: For the tools used in building the UI.
- **React Router**: For handling routing and navigation.
- **Jest & React Testing Library**: For testing libraries and tools.
