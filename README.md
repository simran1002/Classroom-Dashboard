# Classroom Website

This is a full-stack classroom management website built using Node.js, Express, MongoDB, and React.js. The application provides role-based access for principals, teachers, and students, allowing for user management, classroom assignments, and timetable creation.

## Features

- **Principal**:
  - Create classrooms and assign teachers to them.
  - Assign students to teachers.
  - View, edit, and delete teachers and students.
  - Manage classroom timetables.
  
- **Teacher**:
  - View and manage students in their assigned classroom.
  - Create and edit timetables within the classroom's specified hours.

- **Student**:
  - View other students in their classroom.
  - Access the classroom timetable.

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js, Axios, React Router
- **Authentication**: JWT (JSON Web Tokens)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm (Node Package Manager)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/simran1002/Classroom-Dashboard.git
cd classroom-website
```

### 2. Set Up the Backend

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following content:

   ```env
   MONGO_URI=mongodb://localhost:27017/classroomDB
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:5000`.

### 3. Set Up the Frontend

1. Navigate to the `frontend` directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The frontend will be served on `http://localhost:3000`.

### 4. Access the Application

- Visit `http://localhost:3000` in your browser.
- Log in using the principal credentials:
  - Email: `principal@classroom.com`
  - Password: `Admin`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to fork this repository and submit pull requests if you have any improvements or new features in mind. Contributions are always welcome!
