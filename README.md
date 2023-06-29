# Student Detail README

This is a React application that demonstrates a simple student portal. It allows users to enter their name and contact number on the student page and then redirects them to the home page, where the entered details are displayed.

## Getting Started

To run this React app locally, please follow these steps:

1. Clone the repository or download the source code.
2. Make sure you have Node.js and npm (Node Package Manager) installed on your system.
3. Open a terminal or command prompt and navigate to the project directory.
4. Install the dependencies by running the following command:
   ```
   npm install
   ```
5. Once the dependencies are installed, start the development server with the command:
   ```
   npm run dev
   ```
6. The app should now be running at [http://localhost:5173](http://localhost:5173) in your web browser.

## Project Structure

The project is structured as follows:

- `app.jsx`: This is the main file that sets up the routing for the application. It uses the `BrowserRouter` from the `react-router-dom` library to define the routes. The `App` component renders the `Student` component on the root route ("/") and the `Home` component on the "/home" route. It also manages the state variables `name` and `num` using the `useState` hook.

- `home.jsx`: This file defines the `Home` component, which displays the home page content. It receives the `name` and `contact` props from the `App` component and displays them in the UI.

- `student.jsx`: This file defines the `Student` component, which represents the student portal page. It contains a form that takes the user's name and contact number as input. The input values are passed back to the `App` component using the `setName` and `setNum` props. When the user clicks the submit button, they are redirected to the home page.

## CSS Styles

The CSS styles for both the `Home` and `Student` components are defined within their respective files using JavaScript objects. The styles define the layout and appearance of the components and are applied inline.

## Dependencies

This project has the following dependencies:

- `react`: The core library for building user interfaces in React.
- `react-dom`: Provides DOM-specific methods for React.
- `react-router-dom`: A routing library for React applications.

These dependencies are automatically installed when running the `npm install` command.
