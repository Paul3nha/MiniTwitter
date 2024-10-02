import { selectTweetsModel } from './selectTweetsModel.js';
import { selectTweetsByUserIdModel } from './selectTweetsByUserIdModel.js';
import { insertTweetModel } from './insertTweetModel.js';
import { selectTweetByIdModel } from './selectTweetByIdModel.js';
import { updateTweetModel } from './updateTweetModel.js';
import { deleteTweetModel } from './deleteTweetModel.js';

export {
  insertTweetModel, //inserta un nuevo tweet
  selectTweetsModel, //seleccionar todos los tweets
  selectTweetsByUserIdModel, //selecciona tweets según el ID del usuario
  selectTweetByIdModel, //selecciona un tweet específico por su ID
  updateTweetModel, //actualiza un tweet
  deleteTweetModel, //elimina un tweet
};

//Es archivo de barril o barrel file. Se suele usar para centralizar las importaciones y exportaciones de varios módulos en un solo lugar, facilitando la organización y gestión de las importaciones en tu proyecto.

//En el contexto de un proyecto backend, los archivos dentro de la carpeta models suelen estar relacionados con la interacción con la base de datos. Esto incluye operaciones como seleccionar, insertar, actualizar y eliminar datos.
