const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');
const User = require('../models/userModels');

const login = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(403).json({ error: 'Invalid Username/Password' });
      return;
    }
    if (user === null) {
      res.status(422).json({ error: 'No user with that username in our DB' });
      return;
    }
    user.checkPassword(password)
      .then(hashMatch => {
        if (hashMatch) {
          const token = jwt.sign({ username: user.username }, mysecret)
          res.json({ token })
        } else {
          res.status(422).json({ error: 'passwords dont match' });
        }
      })
      .catch(err => next(err))
  });
};

module.exports = {
  login
};
