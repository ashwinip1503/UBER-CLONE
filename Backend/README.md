# User Registration Endpoint

## POST /users/register

### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body
The request body must be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 3 characters.
- `email`: A string representing the user's email. It must be a valid email address.
- `password`: A string with a minimum length of 6 characters.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### User Already Exists
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "message": "User already exist"
  }
  ```

### Notes
- Ensure that the email provided is unique.
- Passwords are hashed before being stored in the database.
