<!-- @format -->

# Calculator Automation Script

This automation framework covers the following test cases for calculator

- Addition
- Multiplication
- Subtraction
- Division

## Tech stack

- JavaScript
- Webdriver.io
- mocha
- spec reporter

## Steps to run test

- Clone the repo ~
- Run command ~ `npm run test`

## Test cases

1. Verify if all the number are correctly displayed upon click. (0-9)
2. Verify if symbols are correctly displayed on the screen when user press the +, -, /, \*, .
3. Verify if screen clears when user press the c button.
4. Verify if addition of two numbers is working.
5. Verify if addition of two decimal numbers is working fine.
6. Verify if addition of multiple numbers is working fine.
7. Verify if subtraction of two numbers is working.
8. Verify if subtraction of two decimal numbers is working fine.
9. Verify if subtraction of multiple numbers is working fine.
10. Verify if multiplication of two numbers is working.
11. Verify if multiplication of two decimal numbers is working fine.
12. Verify if multiplication of multiple numbers is working fine.
13. Verify if division of two numbers is working.
14. Verify if division of two decimal numbers is working fine.
15. Verify if BODMAS (BIDMAS) rules are followed by the calculator.
16. Verify the result when user performs 10/0.
17. Verify the result when user performs 0/0.

## Bugs

1. Number 2 is visible as 4 on the screen.
2. '+' is displayed as '-' on the screen and its performing subtraction.
3. '-' is displayed as '+' on the screen and its performing addition.
4. Multiplication is not working.
5. Able to enter (.) multiple times. (Ex 2...3..4 )
6. Able to enter multiple action buttons together. (Ex 23+/\*-)
7. Able to enter any text from keyboard. (Ex asfw34sf)

## JIRA issue

**Title**: '+' is displayed as '-' on the screen and its performing subtraction

**Steps to reproduce**:

1. Open the calculator
2. Press 3
3. Press +
4. Press 4
5. Press =

**Actual Result**: '+' is displayed as '-' and subtraction is performed instead of addition.

**Expected Result**: '+' is displayed as '+' and addition should be performed
