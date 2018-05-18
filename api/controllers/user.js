const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res, next) => {
  const { username, password } = req.body;
  User.create({ username, password })
    .then(user => res.send(user))
    .catch(err => next(err))
};

module.exports = {
  createUser
};
