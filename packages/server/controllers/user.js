const { User } = require('./../models');
exports.getUsers = async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).send({ data: users });
};
exports.createUser = async (req, res, next) => {
  const { body } = req;
  const createdUser = await User.create(body);
  res.status(201).send({ data: createdUser });
};
exports.getById = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  res.status(200).send({ data: user });
};
exports.deleteById = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (user) {
    const removedUser = await user.destroy(id);
    res.status(204).send({ data: removedUser });
  }
};
