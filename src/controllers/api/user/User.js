import { addUser, getUserById } from '../../../models/User';

export function saveUser(req, res, next) {
  const { userName, email } = req.body;
  addUser({ userName, email })
  .then((user) => {
    req.responseData = { id: user._id };
    return next();
  })
  .catch(next);
}

export function getUser(req, res, next) {
  const { userId } = req.params;
  getUserById(userId)
  .then((cart) => {
    req.responseData = cart;
    return next();
  })
  .catch(next);
}