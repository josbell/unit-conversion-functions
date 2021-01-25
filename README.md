# UnitConversionFunctions

Functions supporting the [unit-conversion](https://github.com/josbell/unit-conversion) app.

## Introduction

This app does one thing:

 - It exposes the callable getConvertedValue firestore function to convert units using [unit-convert](https://www.npmjs.com/package/convert-units) api
 
## Usage

 - The function takes 3 arguments {startingValue: number, startingUnit: string, convertedUnit: string} and returns { status: 'success', convertedValue }
 - startingUnit and convertedUnit correspond to the [units](https://www.npmjs.com/package/convert-units#supported-units) supported by unit-conver library 

## Deploy and try out

To deploy and try out the sample:

 - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com)
 - Install the required dependencies by running `npm install` in the `functions` directory
 - Deploy your project's code using `firebase deploy`
 - Install [unit-conversion](https://github.com/josbell/unit-conversion) to use frontend

## Test Locally
 - To test locally follow firebase [documentation](https://firebase.google.com/docs/functions/local-emulator)
