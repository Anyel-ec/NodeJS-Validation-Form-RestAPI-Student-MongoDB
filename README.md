### **Select Language:**
- [Español (Spanish)](README-es.md)
- [English](README.md)
# NodeJS Student Validation Form API

This project is a RESTful API developed in Node.js that manages student information using MongoDB. The API allows for CRUD (Create, Read, Update, Delete) operations on student records and validates incoming data through a validation middleware.

## Requirements

- Node.js (v12 or higher)
- MongoDB (v4 or higher)
- npm (v6 or higher)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Anyel-ec/NodeJS-Validation-Form-RestAPI-Student-MongoDB.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd NodeJS-Validation-Form-RestAPI-Student-MongoDB
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Configure environment variables:**

   Create a `.env` file in the root of the project and define the necessary variables:

   ```env
   BASE_URL_SERVER=localhost
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/myapp
   ```

## Project Structure

- **`src/config/environment.js`**: Handles loading environment variables from the `.env` file.
- **`src/config/db.js`**: Connects to the MongoDB database.
- **`src/controllers/studentController.js`**: Controllers for handling CRUD operations for students.
- **`src/middlewares/validateStudent.js`**: Middleware for validating student data.
- **`src/models/student.js`**: Student data model.
- **`src/routes/studentRoutes.js`**: Routes for CRUD operations on students.
- **`src/utils/validateEcuadorianID.js`**: Function to validate Ecuadorian ID numbers.

## Usage

1. **Start the server:**

   ```bash
   npm start
   ```

   The server will start on the port specified in the `.env` file (default is port 3000).

2. **Available Endpoints:**

   - **`POST /api/students`**: Create a new student. Requires validated data.
   - **`GET /api/students`**: Retrieve a list of all students.
   - **`PUT /api/students/:id`**: Update an existing student. Requires validated data.
   - **`DELETE /api/students/:id`**: Delete a student.

## Validation

Student data is validated in the `validateStudent` middleware and must meet the following criteria:

- **Name and Surname**: Between 3 and 100 characters.
- **Course**: Between 3 and 100 characters.
- **Date of Birth**: Must be a valid date and before the current date.
- **ID**: Must be a valid Ecuadorian ID.
- **Cellphone**: Must be 10 digits long.
- **Acceptance of Terms**: Must be a boolean value.

## Contributing

Contributions are welcome. Please open an `issue` or submit a `pull request` if you would like to contribute.

## License

This project is licensed under the [MIT License](LICENSE).