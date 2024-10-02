// Importar el módulo joi --> librería de validación de esquemas, usada para asegurar que los datos que recibe tu app son correctos y cumplen con ciertos criterios
import joi from 'joi';

// Importar el módulo joiErrorMessages.
import { joiErrorMessages } from './joiErrorMessages.js'; //se está importando un archivo con mensajes de error personalizados

// Esquema para validar imágenes.
// name: Es el nombre del archivo.
// mimetype: Es el tipo de archivo.
// size: Es el tamaño del archivo.
// unknown(true): Permite campos desconocidos.

// Definición del esquema --> define las reglas para validar las imágenes
export const imgSchema = joi
  .object({
    name: joi.string().required().messages(joiErrorMessages), //debe de ser un string, obligatorio y los mensajes de error q se muestren vendran de joiErrorMessages
    mimetype: joi //string que coincide con los tipos de archivos permitidos -->'image/jpeg' o 'image/png'
      .string()
      .valid('image/jpeg', 'image/png')
      .required()
      .messages(joiErrorMessages),
    size: joi.number().max(5000000).required().messages(joiErrorMessages), //Debe ser un número (en bytes) que no supere los 5MB (5000000 bytes)
  })
  .unknown(true); //el objeto que se valide pueda tener otros campos no especificados en el esquema
