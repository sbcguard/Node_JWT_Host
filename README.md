# Node_JWT_Host

## About

This Node.js project provides a robust authentication and authorization system using JWT (JSON Web Tokens). The project is designed to handle user sign-up, login. This backend is built with Express.js and Prisma ORM for database interactions. Designed to work in tandem with Node_JWT_Client project, where the client controls role based access and the host provides JWTs.

### Features

- User sign-up and login to obtain JWT authentication.
- Cross-domain support (see client).
- Error handling with custom exceptions.
- Logging of login and sign-up attempts using Winston.
- Redirection after login based on the originally requested URL.
- Seeding the database with dummy data using Prisma.

## How to Run the Project Locally

### Prerequisites

- Node.js (v20 or higher)
- npm or pnpm or yarn
- MySQL (or any supported Prisma database, Serialized for DB2/IBMi)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sbcguard/Node_JWT_Host.git
   cd node_jwt_host
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   pnpm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   DATABASE_URL="mysql://root:MYPASSWORD@localhost:3306/myschema?schema=myschema"
   PORT=3000
   JWT_SECRET=your_jwt_secret
   JWT_SECRET_EXPIRATION=12h
   ```

4. **Set up the database:**

   Ensure that MySQL is running and a database is created. Then run:

   ```bash
   npx prisma migrate dev --name init
   ```

   This command will apply the migrations and set up the database schema.

5. **Seed the database with initial data:**

   ```bash
   npm run seed
   ```

   or

   ```bash
   pnpm run seed
   ```

   or

   ```bash
   yarn seed
   ```

6. **Start the server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   pnpm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   The server will be running at `http://localhost:3000`.

7. **Build the production server:**

   ```bash
   npm run build
   ```

8. **Start the production server:**

   ```bash
   npm run start
   ```

### Usage

1. **Access the login page:**

   Open a web browser and go to `http://localhost:3000/login.html`.

2. **Sign-up a new user:**

   Click on the link to the sign-up page and create a new account.

3. **Login:**

   Use the credentials created during sign-up to log in. The application will provide a secure cookie for the token. If a redirect URL is present (provided by the client application), the application will redirect.

### Logging

Winston is used for logging login and sign-up attempts. Logs are written to files in the '/logs' directory:

- `stdout/YYYY-MM-DD.log`: General Logs
- `stderr/YYYY-MM-DD.log`: Error Logs

### Project Structure

- `src/`
  - `controllers/`: Contains the controller functions for handling sign-up and login.
  - `exceptions/`: Custom exception classes for error handling.
  - `logger/`: Winston logging of application errors and access attempts.
  - `middleware/`: Middleware functions for authentication and role checking.
  - `prisma/`: Prisma Client configurations.
  - `routes/`: Express routes for authentication and other resources.
  - `schema/`: Zod validation schemas.
  - `utils/`: Utility code segments.
- `public/`: HTML files for sample login and sign-up pages.
- `.env`: Environment variables.
- `prisma/`: Prisma configuration, migrations, and seed script.
