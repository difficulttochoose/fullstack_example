const UserController = require('./controllers/user');
const { Router } = require('express');
const router = Router();
router.post('/user', UserController.createUser);
router.get('/users', UserController.getUsers);
router
  .route('/user/:id')
  .get(UserController.getById)
  .delete(UserController.deleteById);
module.exports = router;
