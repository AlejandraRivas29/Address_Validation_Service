// Returns true if it is a PO Box, false otherwise
function validatePOBox(address) {
    // Convert the address to uppercase and remove any dots or parentheses
    address = address.toUpperCase().replace(/[.\(\)]/g, "");
    // Define a regular expression that matches PO Box followed from 2 to 5 digits
    var poBoxRegex = /^PO BOX \d{2,5}/;
    // Test the address against the regular expression and return the result
    return poBoxRegex.test(address);
}

// Function that takes an address as a parameter and returns a sanitized version of it
function sanitizeAddress(address) {
    // Remove any dots or parentheses
    address = address.replace(/[^a-zA-Z0-9\s]/g, "");
    // Define a regular expression that matches any number of spaces followed by a hash sign followed by any number of digits or spaces
    var hashRegex = /\s+#\s*\d*\s*/;
    // Replace any occurrence of the hash sign with a space in the address
    address = address.replace(hashRegex, " ");
    // Return the sanitized address
    return address;
}

function validateAddress(customer) {
    const {
        firstName,
        lastName,
        addressLine1,
        addressLine2,
        city,
        state,
        zipCode,
        country
    } = customer;

    // Check if all required fields are present
    if (!firstName || !lastName || !addressLine1 || !city || !state || !zipCode || !country) {
        return { error: "All fields are required except Address Line 2." };
    }

    // Check if the address is a PO Box
    const isPOBox = validatePOBox(addressLine1);

    // Sanitize the address by removing special characters
    const sanitizedAddress = sanitizeAddress(addressLine1);

    return {
        firstName,
        lastName,
        isPOBox,
        sanitizedAddress
    };
}


module.exports = validateAddress;

//Uncomment to test the final result
/*var testData = require("./test_data.json");

for (var i = 0; i < testData.customers.length; i++) {
    var customerData = testData.customers[i];
    console.log(validateAddress(customerData));
}*/