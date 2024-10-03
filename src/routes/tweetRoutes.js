// Importamos las dependencias.
import express from 'express';

// Importamos los controladores.
import {
  deleteTweetController, //func para borrar un tweet
  getSingleTweetController, //func para ver un tweet en concreto
  getTweetsController, //func para ver todos los tweets
  getTweetsUserController, //func para conseguir todos los tweets de un usuario
  newTweetController, //func para crear un nuevo tweet
  updateTweetController, //func para actualizar un teet
} from '../controllers/tweets/index.js';

// Importamos los middlewares.
import {
  authUserController, //comprobamos q el usuario esta autorizado (q tiene token xq esta logueado)
  tweetExistsController, //comprobar q existe un tweet con el id indicado
  userExistsController, //comprobar q existe un usuario desde el token o desde los params
} from '../middlewares/index.js';

// Creamos un router.
export const tweetRouter = express.Router();

// endpoint para crear un tweet.
tweetRouter.post('/tweets', authUserController, newTweetController);

// Obtener todos los tweets.
tweetRouter.get('/tweets', getTweetsController);

// Obtener los tweets de un usuario.
tweetRouter.get(
  '/tweets/user/:userId',
  userExistsController,
  getTweetsUserController
);

// Obtener un tweet en particular.
tweetRouter.get(
  '/tweets/:tweetId',
  tweetExistsController,
  getSingleTweetController
);

// Editar un tweet.
tweetRouter.put(
  '/tweets/:tweetId',
  authUserController,
  tweetExistsController,
  updateTweetController
);

// Borrar un tweet.
tweetRouter.delete(
  '/tweets/:tweetId',
  authUserController,
  tweetExistsController,
  deleteTweetController
);
