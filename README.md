# Venture Fiesta - NestJS Backend

Venture Fiesta is a backend application built with **NestJS**, a progressive Node.js framework for building efficient and scalable server-side applications. It integrates **MongoDB** using Mongoose for data management.

## 🎯 What This Project Does
Venture Fiesta serves as a robust backend solution for managing data and handling API requests efficiently. It includes a service to **fetch Crunchbase data and store it in MongoDB every 60 seconds**, allowing businesses to access and process structured company information in near real-time. Additionally, it provides authentication, user management, and dynamic API endpoints for interacting with the database. The application is built with scalability and maintainability in mind, making it ideal for modern web applications.

## 🚀 Features

- **NestJS Framework** for modular architecture
- **MongoDB with Mongoose** for database management
- **Crunchbase Data Fetching Service** to retrieve and store company data every 60 seconds
- **Axios** for HTTP requests
- **RxJS** for reactive programming
- **Environment Configuration** with `dotenv`
- **TypeScript Support** for better maintainability

## 📂 Project Structure

```
VentureFiesta/
│── src/             # Main application source code
│   ├── modules/     # Feature modules
│   ├── controllers/ # API route handlers
│   ├── services/    # Business logic services
│   ├── schemas/     # Mongoose schemas and models
│   ├── app.module.ts# Main application module
│── .env             # Environment variables (not included in repo)
│── package.json     # Project dependencies and scripts
│── tsconfig.json    # TypeScript configuration
│── README.md        # Project documentation
```

## 🛠 Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/Zuraiz270/Venture-Fiesta.git
   cd venture-fiesta
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables**

   - Create a `.env` file in the root directory
   - Define variables for database connection and Crunchbase API configurations

4. **Run MongoDB locally** If you are running MongoDB locally, start the database server using the following command:

   ```sh
   mongod --dbpath '<your-db-directory>'
   ```

   Replace `<your-db-directory>` with the actual path where your MongoDB data is stored.

5. **Run the development server**

   ```sh
   npm run start:dev
   ```

   - The API will be available at `http://localhost:3000`

## 📦 Build and Deployment

To build the project for production:

```sh
npm run build
npm run start
```

For deployment, you can use cloud providers like **Heroku**, **Vercel**, or **AWS**.

## ✅ Contributing

1. Fork the repository
2. Create a new branch (`feature-new-endpoint`)
3. Commit your changes (`git commit -m "Added a new feature"`)
4. Push to your branch (`git push origin feature-new-endpoint`)
5. Open a Pull Request

## 📧 Contact

For any inquiries, feel free to reach out via email at `m.zuraiz2001@gmaail.com` or open an issue in the repository.

---

Enjoy building with **Venture Fiesta - NestJS Backend**! 🎉
