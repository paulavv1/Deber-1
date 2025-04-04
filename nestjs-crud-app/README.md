# NestJS CRUD Application with Prisma

This project is a NestJS CRUD application that utilizes Prisma as an ORM to manage a PostgreSQL database. It implements two main entities: `Usuario` and `Producto`, with the following specifications:

## Project Structure

```
nestjs-crud-app
├── prisma
│   ├── schema.prisma
│   └── migrations
├── src
│   ├── modules
│   │   ├── usuario
│   │   │   ├── usuario.controller.ts
│   │   │   ├── usuario.module.ts
│   │   │   ├── usuario.service.ts
│   │   │   └── dto
│   │   │       ├── create-usuario.dto.ts
│   │   │       ├── update-usuario.dto.ts
│   │   │       └── index.ts
│   │   ├── producto
│   │   │   ├── producto.controller.ts
│   │   │   ├── producto.module.ts
│   │   │   ├── producto.service.ts
│   │   │   └── dto
│   │   │       ├── create-producto.dto.ts
│   │   │       ├── update-producto.dto.ts
│   │   │       └── index.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── package.json
├── tsconfig.json
├── .env
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nestjs-crud-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your PostgreSQL database and update the `.env` file with your database connection details.

4. Run the Prisma migrations to set up the database schema:
   ```
   npx prisma migrate dev --name init
   ```

## Running the Application

To start the application, run:
```
npm run start:dev
```

The application will be available at `http://localhost:3000`.

## API Documentation

The API is documented using Swagger. You can access the documentation at:
```
http://localhost:3000/api
```

## Endpoints

### Usuario

- **Create Usuario**: `POST /usuario`
- **Get All Usuarios**: `GET /usuario`
- **Get Usuario by ID**: `GET /usuario/:id`
- **Update Usuario**: `PUT /usuario/:id`
- **Delete Usuario**: `DELETE /usuario/:id`

### Producto

- **Create Producto**: `POST /producto`
- **Get All Productos**: `GET /producto`
- **Get Producto by ID**: `GET /producto/:id`
- **Update Producto**: `PUT /producto/:id`
- **Delete Producto**: `DELETE /producto/:id`

## Technologies Used

- NestJS
- Prisma
- PostgreSQL
- class-validator
- Swagger

## License

This project is licensed under the MIT License.