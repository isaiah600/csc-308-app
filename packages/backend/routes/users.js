const express = require('express');
const router = express.Router();
const {
  findAllUsers,
  findUserById,
  findUsersByName,
  findUsersByJob,
  findUsersByNameAndJob,
  createUser,
  deleteUserById,
} = require('../services/user-services');

router.get('/', (req, res) => {
  const { name, job } = req.query;

  if (name && job) {
    return findUsersByNameAndJob(name, job)
      .then(users => res.json(users))
      .catch(err => res.status(500).json({ error: err.message }));
  }
  if (name) {
    return findUsersByName(name)
      .then(users => res.json(users))
      .catch(err => res.status(500).json({ error: err.message }));
  }
  if (job) {
    return findUsersByJob(job)
      .then(users => res.json(users))
      .catch(err => res.status(500).json({ error: err.message }));
  }

  return findAllUsers()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
});

// GET /users/:id
router.get('/:id', (req, res) => {
  findUserById(req.params.id)
    .then(user => user ? res.json(user) : res.status(404).json({ error: 'Not found' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

// POST /users
router.post('/', (req, res) => {
  createUser(req.body)
    .then(doc => res.status(201).json(doc))
    .catch(err => res.status(400).json({ error: err.message }));
});

// DELETE /users/:id
router.delete('/:id', (req, res) => {
  deleteUserById(req.params.id)
    .then(doc => {
      if (!doc) return res.status(404).json({ error: 'Not found' });
      res.json({ ok: true, deletedId: doc._id });
    })
    .catch(err => res.status(400).json({ error: err.message }));
});

module.exports = router;
