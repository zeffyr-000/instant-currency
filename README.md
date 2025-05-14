# Instant Currency

## Description

Instant Currency is an Angular application that retrieves and displays currency information from the Frankfurter API. This project serves as a demonstration of how to interact with external APIs in an Angular environment.

[![App Store](https://img.shields.io/badge/App_Store-0D96F6?style=for-the-badge&logo=app-store&logoColor=white)](https://apps.apple.com/fr/app/instantcurrency-by-zeffyr/id6743857002)
[![Google Play](https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white)](https://play.google.com/store/apps/details?id=io.zeffyr.instantcurrency)

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

## Mobile Applications

This application is also available for mobile devices:

- Download for iOS on the [App Store](https://apps.apple.com/fr/app/instantcurrency-by-zeffyr/id6743857002)
- Download for Android on [Google Play](https://play.google.com/store/apps/details?id=io.zeffyr.instantcurrency)

## Usage

The `CurrencyService` is responsible for fetching the list of currencies from the API. You can use this service in your components to display currency information as needed.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
