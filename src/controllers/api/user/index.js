import { default as express } from 'express';
import { saveUser, getUser } from './User';
const router = express.Router(); // eslint-disable-line new-cap
import { handleError, handleResponse } from '../../../common/middleware.js';
/**
* @swagger
* /api/user:
*   post:
*     tags: ["Users"]
*     description: Save user
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - name: user
*         in: body
*         required: true
*         description: users
*         schema:
*           $ref: '#/definitions/UserModel'
*     responses:
*       200:
*         description: Id of saved user
*         schema:
*           type: object
*           properties:
*             id:
*               type: string
*               description: id of document stored in database
*/
router.post('/', saveUser, handleError, handleResponse);

/**
* @swagger
* /api/user/{userId}:
*   get:
*     tags: ["Users"]
*     description: Get User
*     parameters:
*       - name: userId
*         in: path
*         description: User id
*         required: true
*         type: string
*     responses:
*       200:
*         description: Returns saved User
*         schema:
*           $ref: '#/definitions/UserModel'
*/
router.get('/:userId', getUser, handleError, handleResponse);
export default router;