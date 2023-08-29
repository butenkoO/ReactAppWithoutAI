# Documentation for ReactAppWithoutAI

## Overview

ReactAppWithoutAI is a simple React application that features a form with four input fields: First Name, Last Name, Email, and Message. This documentation will provide an overview of the app's functionality, including input validation and how to run the application.

## Technologies Used
- React
- Redux
- Validator

### Form Inputs

The application features four input fields:

1. **First Name**: This field should not be empty.
2. **Last Name**: This field should not be empty.
3. **Email**: This field should contain a valid email address.
4. **Message**: This field should contain at least 10 characters.

### Submit Button

The Submit button allows users to submit the form once all validation criteria are met. When clicked, the data from the form will be sent to the storage and displayed below.

## Getting Started

To run ReactAppWithoutAI locally, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/butenkoO/ReactAppWithoutAI.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ReactAppWithoutAI
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and go to `http://localhost:3000` to access the application.

## Folder Structure

Here is an overview of the main folders and files in the project:

- **src**: Contains the source code for the application.
  - **components**: Contains React components, including the form component.
  - **store**: Contains Redux-related code, including actions, reducers, and the store configuration.
  - **helpers**: Contains custom validation functions using the Validator library.
  - **tests**: Contains React tests.
  - **App.js**: The main application component.
- **public**: Contains static assets and the HTML template.

