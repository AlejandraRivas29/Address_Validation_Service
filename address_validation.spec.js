const validateAddress = require("./address_validation");

test("Validate PO Box address", () => {
    const testCases = [
        {
            firstName: "John",
            lastName: "Doe",
            addressLine1: "PO Box 4582",
            addressLine2: "",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            country: "USA",
            isPOBox: true
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            addressLine1: "123 Pool Ave",
            addressLine2: "",
            city: "Los Angeles",
            state: "CA",
            zipCode: "90001",
            country: "USA",
            isPOBox: false
        },
        {
            firstName: "Jane",
            lastName: "Doe",
            addressLine1: "Box 123",
            addressLine2: "",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            country: "USA",
            isPOBox: false
        },
        {
            firstName: "John",
            lastName: "Smith",
            addressLine1: "P.O.B. 123",
            addressLine2: "",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            country: "USA",
            isPOBox: false
        },
        {
            firstName: "Emma",
            lastName: "Smith",
            addressLine1: "number 123",
            addressLine2: "",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            country: "USA",
            isPOBox: false
        },
        {
            firstName: "Sam",
            lastName: "Smith",
            addressLine1: "777 Post Oak Blvd",
            addressLine2: "",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            country: "USA",
            isPOBox: false
        },
        {
            firstName: "Will",
            lastName: "Smith",
            addressLine1: "123 Some Street",
            addressLine2: "",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            country: "USA",
            isPOBox: false
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            addressLine1: "Controller's Office",
            addressLine2: "",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            country: "USA",
            isPOBox: false
        },
        {
            firstName: "Will",
            lastName: "Doe",
            addressLine1: "123 box canyon rd",
            addressLine2: "",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            country: "USA",
            isPOBox: false
        }

    ];

    testCases.forEach((testCase, index) => {
        (testCase) => expect(validateAddress(testCase).isPOBox).toBe(testCase.isPOBox)
    });

});

test("Validate required fields", () => {
    const testCases = [
        {
            firstName: "John",
            lastName: "",
            addressLine1: "PO Box 4582",
            addressLine2: "",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            country: "USA",
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            addressLine1: "",
            addressLine2: "",
            city: "Los Angeles",
            state: "CA",
            zipCode: "90001",
            country: "USA",
        },
        {
            firstName: "Jone",
            lastName: "Smith",
            addressLine1: "",
            addressLine2: "",
            city: "Los Angeles",
            state: "CA",
            zipCode: "",
            country: "USA",
        },
        {
            firstName: "",
            lastName: "Doe",
            addressLine1: "",
            addressLine2: "",
            city: "Los Angeles",
            state: "CA",
            zipCode: "90001",
            country: "USA",
        },

    ];


    testCases.forEach((testCase, index) => {
        (testCase) => expect(validateAddress(testCase)).toBe({error: "All fields are required except Address Line 2."})
    });

});

test("Validate special characters", () => {
    const testCases = [
        {
            firstName: "John",
            lastName: "Doe",
            addressLine1: "P.O. Box - 4584",
            addressLine2: "",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            country: "USA",
            expectAddressLine1: "PO Box 4584"
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            addressLine1: "P. O. Box  3456",
            addressLine2: "",
            city: "Los Angeles",
            state: "CA",
            zipCode: "90001",
            country: "USA",
            expectAddressLine1: "PO Box 3456"
        },

    ];

    testCases.forEach((testCase, index) => {
        (testCase) => expect(validateAddress(testCase).sanitizedAddress).toBe(testCase.expectAddressLine1)
    });

});

test("Validate Customer First and Last Name", () => {
    const testCases = [
        {
            firstName: "John",
            lastName: "Doe",
            addressLine1: "PO Box 4582",
            addressLine2: "",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            country: "USA",
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            addressLine1: "123 Pool Ave",
            addressLine2: "",
            city: "Los Angeles",
            state: "CA",
            zipCode: "90001",
            country: "USA",
        },

    ];


    testCases.forEach((testCase, index) => {
        (testCase) => expect(validateAddress(testCase).firstName).toBe(testCase.firstName);
        (testCase) => expect(validateAddress(testCase).lastName).toBe(testCase.lastName);
    });

});