// Este objeto joiErrorMessages contiene mensajes de error personalizados que serán utilizados por la librería Joi cuando se validen los datos de acuerdo con las reglas definidas en el esquema de validación

export const joiErrorMessages = {
  'any.required': 'El campo "{#key}" es requerido', //cd no pones nada
  'string.base': 'El valor de "{#key}" debe ser una cadena', //cd dato metido no es de tipo cadena
  'string.empty': 'El campo "{#key}" no debe estar vacío', //cd es cadena pero está vacío
  'number.base': 'El valor de "{#key}" debe ser un número',
  'number.max': 'El archivo no debe exceder los 5 MB',
  'object.base': 'El valor de "{#key}" debe ser un objeto',
  'any.only': 'Solo se permiten fotos jpeg o png',
  'string.email':
    'Debe proporcionar un correo electrónico válido para "{#key}"',
  'string.pattern.base':
    'La contraseña debe contener al menos una mayúscula, una minúscula, un número y un símbolo de puntuación para "{#key}"',
  'string.min': 'El campo "{#key}" debe tener al menos {#limit} caracteres',
  'string.max': 'El campo "{#key}" no debe exceder los {#limit} caracteres',
  'object.unknown': 'No se permiten campos adicionales en este objeto',
};
