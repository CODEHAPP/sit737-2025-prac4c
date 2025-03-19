# Calculator Microservice

This is a simple calculator microservice built using Express.js. It supports basic arithmetic operations (addition, subtraction, multiplication, division) and is enhanced with error handling and logging using Winston.

## Features
- Addition (`/add`)
- Subtraction (`/subtract`)
- Multiplication (`/multiply`)
- Division (`/divide`)
- Logs all requests and errors
- Returns error responses for invalid inputs and division by zero

## Setup Instructions

### Prerequisites:
- Node.js (v16 or higher)
- npm

### Installation:
1. Clone the repository:
   ```bash
   git clone https://github.com/username/sit737-2025-prac4c.git
   cd sit737-2025-prac4c
2.Install dependencies:
npm install
3.Start the server:
npm start
The application will now be running at http://localhost:3000.
API Endpoints
1. Addition
URL: /add
Method: GET
Parameters: a (number), b (number)
Example: /add?a=5&b=3
Response:
{
  "result": 8
}
2. Subtraction
URL: /subtract
Method: GET
Parameters: a (number), b (number)
Example: /subtract?a=5&b=3
Response:
{
  "result": 2
}
3. Multiplication
URL: /multiply
Method: GET
Parameters: a (number), b (number)
Example: /multiply?a=5&b=3
Response:
{
  "result": 15
}
4. Division
URL: /divide
Method: GET
Parameters: a (number), b (number)
Example: /divide?a=6&b=3
Response：
{
  "result": 2
}
Error Handling (Division by Zero):
If b is 0, the server will return a division-by-zero error:
{
  "error": "Division by zero is not allowed"
}
Error Handling
The server uses Winston for logging requests and errors.
Invalid inputs (non-numeric values) are caught and result in a 400 Bad Request response:
{
  "error": "Invalid input"
}
Division by zero is handled with a specific error message:
{
  "error": "Division by zero is not allowed"
}
Improvements in This Version
This version of the microservice includes:

Error handling for invalid inputs and division by zero.
Logging of all requests and errors using Winston.
Future Enhancements
Add additional arithmetic operations (e.g., exponentiation, square root, modulo).
Implement advanced error handling strategies such as retry mechanisms, circuit breakers, and fallback mechanisms.
