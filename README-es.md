Aquí tienes un ejemplo de archivo README para tu proyecto:
### **Select Language:**
- [Español (Spanish)](README-es.md)
- [English](README.md)

# NodeJS Student Validation Form API

Este proyecto es una API RESTful desarrollada en Node.js que gestiona la información de estudiantes utilizando MongoDB. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los registros de estudiantes y valida la información recibida mediante un middleware de validación.

## Requisitos

- Node.js (v12 o superior)
- MongoDB (v4 o superior)
- npm (v6 o superior)

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/Anyel-ec/NodeJS-Validation-Form-RestAPI-Student-MongoDB.git
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd NodeJS-Validation-Form-RestAPI-Student-MongoDB
   ```

3. **Instala las dependencias:**

   ```bash
   npm install
   ```

4. **Configura las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto y define las variables necesarias:

   ```env
   BASE_URL_SERVER=localhost
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/myapp
   ```

## Estructura del Proyecto

- **`src/config/environment.js`**: Maneja la carga de variables de entorno desde el archivo `.env`.
- **`src/config/db.js`**: Conexión a la base de datos MongoDB.
- **`src/controllers/studentController.js`**: Controladores para manejar las operaciones CRUD de estudiantes.
- **`src/middlewares/validateStudent.js`**: Middleware para validar los datos del estudiante.
- **`src/models/student.js`**: Modelo de datos del estudiante.
- **`src/routes/studentRoutes.js`**: Rutas para las operaciones CRUD de estudiantes.
- **`src/utils/validateEcuadorianID.js`**: Función para validar la cédula ecuatoriana.

## Uso

1. **Inicia el servidor:**

   ```bash
   npm start
   ```

   El servidor se iniciará en el puerto especificado en el archivo `.env` (por defecto, el puerto 3000).

2. **Endpoints Disponibles:**

   - **`POST /api/students`**: Crea un nuevo estudiante. Requiere datos validados.
   - **`GET /api/students`**: Obtiene una lista de todos los estudiantes.
   - **`PUT /api/students/:id`**: Actualiza un estudiante existente. Requiere datos validados.
   - **`DELETE /api/students/:id`**: Elimina un estudiante.

## Validación

Los datos del estudiante se validan en el middleware `validateStudent` y deben cumplir con los siguientes criterios:

- **Nombre y Apellido**: Entre 3 y 100 caracteres.
- **Curso**: Entre 3 y 100 caracteres.
- **Fecha de Nacimiento**: Debe ser una fecha válida y anterior a la fecha actual.
- **Cédula**: Debe ser una cédula ecuatoriana válida.
- **Celular**: Debe tener 10 dígitos.
- **Aceptación de Términos**: Debe ser un valor booleano.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un `issue` o envía un `pull request` si deseas colaborar.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

Asegúrate de ajustar cualquier detalle específico que pueda variar en tu proyecto. ¡Espero que te sea útil!