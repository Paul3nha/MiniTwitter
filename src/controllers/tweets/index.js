import { deleteTweetController } from './deleteTweetController.js';
import { getSingleTweetController } from './getSingleTweetController.js';
import { getTweetsController } from './getTweetsController.js';
import { getTweetsUserController } from './getTweetsUserController.js';
import { newTweetController } from './newTweetController.js';
import { updateTweetController } from './updateTweetController.js';

export {
  newTweetController,
  getTweetsController,
  getTweetsUserController,
  getSingleTweetController,
  deleteTweetController,
  updateTweetController,
};

// Los controladores (o controllers) son funciones o clases que manejan la lógica detrás de las rutas de tu aplicación. Reciben las peticiones del usuario, interactuan con los modelos (que acceden a la base de datos) y luego devolver una respuesta al cliente (generalmente en formato JSON en el caso de una API REST).

// Función de los controladores:
// Manejan las solicitudes: Los controladores son el punto de entrada donde las solicitudes HTTP (GET, POST, PUT, DELETE, etc.) son procesadas. Dependiendo del tipo de solicitud y los datos que contenga, el controlador decide qué hacer a continuación.

// Interacción con los modelos: Normalmente, un controlador utilizará un modelo (por ejemplo, un archivo que interactúa con la base de datos) para obtener o modificar los datos. El controlador no se comunica directamente con la base de datos, sino que lo hace a través del modelo.

// Generación de respuestas: Una vez que el controlador ha interactuado con el modelo (por ejemplo, al crear un nuevo tweet o al obtener la lista de tweets), este generará una respuesta adecuada que será enviada al cliente.

//controllers/tweets: manejan las operaciones relacionadas con los tweets (crear, leer, actualizar o eliminar).

//controllers/users: manejan la lógica relacionada con los usuarios (creación de nuevos usuarios, autenticación, obtención de información de los usuarios).
