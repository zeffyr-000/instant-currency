# Instant Currency

## Description
Instant Currency is an Angular application that retrieves and displays currency information from the Frankfurter API. This project serves as a demonstration of how to interact with external APIs in an Angular environment.

## Project Structure
```
instant-currency
├── src
│   ├── app
│   │   ├── app.component.html      # HTML template for the main application component
│   │   ├── app.component.ts        # Main application component class
│   │   ├── app.module.ts           # Main application module
│   │   └── services
│   │       └── currency.service.ts  # Service for interacting with the currency API
├── angular.json                     # Angular CLI configuration
├── package.json                     # npm configuration and dependencies
├── tsconfig.json                   # TypeScript configuration
└── README.md                        # Project documentation
```

## Installation
To install the project dependencies, run the following command:

```
npm install
```

## Running the Application
To start the application, use the following command:

```
npm start
```

This will launch the application in your default web browser.

## API Endpoint
The application interacts with the following API endpoint to retrieve currency data:

- **Endpoint**: `https://api.frankfurter.dev/v1/currencies`

## Usage
The `CurrencyService` is responsible for fetching the list of currencies from the API. You can use this service in your components to display currency information as needed.

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. 

## License
This project is licensed under the MIT License.