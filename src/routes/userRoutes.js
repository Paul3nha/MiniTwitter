// Importamos las dependencias.
import express from 'express';

// Importamos los controladores.
import {
  updateUserAvatarController, //func para actualizar el avatar
  updateUserController, //actualizar un usuario
  editUserPassController,
  getOwnUserController, //obtener un usuario a través de un id
  getUserProfileController, //obtener el perfil de un usuario
  loginUserController, //loguear a un usuario ya registrado y validado
  newUserController, //registar nuevo usuario
  sendRecoverPassController,
  validateUserController, //validar un usuario q se acaba de registrar (pasar el registrationCode)
} from '../controllers/users/index.js';

// Importamos los middlewares.
import {
  authUserController, //comprobar q el usuario está logueado
  userExistsController, //comprobar q el usuario existe
} from '../middlewares/index.js';

// Creamos un router.
export const userRouter = express.Router();

// endpoint para crear un usuario pendiente de activar.
userRouter.post('/users/register', newUserController);

// Validar a un usuario.
userRouter.put('/users/validate/:registrationCode', validateUserController);

// Login de usuario.
userRouter.post('/users/login', loginUserController);

// Obtener perfil público de un usuario.
userRouter.get(
  '/users/:userId',
  userExistsController,
  getUserProfileController
);

// Obtener perfil privado de un usuario.
userRouter.get(
  '/users',
  authUserController,
  userExistsController,
  getOwnUserController
);

// Editar un usuario.
userRouter.put(
  '/users',
  authUserController,
  userExistsController,
  updateUserController
);

// Editar el avatar de un usuario. --> como vamos a modificar algo, usamos PUT
userRouter.put(
  '/users/avatar',
  authUserController,
  userExistsController,
  updateUserAvatarController
);

// Enviar email de recuperación de contraseña.
// userRouter.post('/users/password/recover', sendRecoverPassController);

// Editar la contraseña de un usuario con un código de recuperación.
// userRouter.put('/users/password', editUserPassController);
