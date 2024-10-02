import { insertUserModel } from './insertUserModel.js';
import { selectAllUsersModel } from './selectAllUsersModel.js';
import { selectUserByEmailModel } from './selectUserByEmailModel.js';
import { selectUserByIdModel } from './selectUserByIdModel.js';
import { selectUserByRegistrationCodeModel } from './selectUserByRegistrationCodeModel.js';
import { selectUserByUsernameModel } from './selectUserByUsernameModel.js';
import { updateUserActivationModel } from './updateUserActivationModel.js';
import { updateUserModel } from './updateUserModel.js';
import { updateUserAvatarModel } from './updateUserAvatarModel.js';

export {
  insertUserModel, //Insertar un nuevo usuario en la base de datos
  selectUserByUsernameModel, //Seleccionar un usuario en función de su nombre de usuario
  selectUserByEmailModel, //Seleccionar un usuario en función de su correo electrónico
  selectUserByIdModel, //Seleccionar un usuario en función de su ID
  selectUserByRegistrationCodeModel, //Seleccionar un usuario en función de su código de registro
  selectAllUsersModel, //Seleccionar (recuperar) todos los usuarios de la base de datos
  updateUserActivationModel, //Actualizar el estado de activación de un usuario (usando el registration code)
  updateUserModel, //Actualizar detalles de un usuario
  updateUserAvatarModel, //actualizar avatar
};
