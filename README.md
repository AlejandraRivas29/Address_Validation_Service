# Address_Validation_Service

Description:
Address Validation program will receive customer information and will validate the address.

Input:
The customer’s First Name, Last Name, Address line 1, Address line 2, City, State, Zip Code, Country

Acceptance Criteria:
- The output should be a JSON object with the following information:
    - The customer’s First and Last Name
    - If the address has any special characters, the address should be sanitized with only English characters removing any special characters.
    - It should say if the address is a PO Box
- It should validate that all fields are required, except Address line 2.
- It must have enough unit tests to validate all the cases you believe are necessary.

#Run
1. `npm run test` to run all tests
2. `npm start` to run address_validation.js
