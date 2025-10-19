const User = require('../models/user');

function findAllUsers() { return User.find(); }
function findUserById(id) { return User.findById(id); }
function findUsersByName(name) { return User.find({ name }); }
function findUsersByJob(job) { return User.find({ job }); }

function findUsersByNameAndJob(name, job) {
  const query = {};
  if (name) query.name = name;
  if (job)  query.job  = job;
  return User.find(query);
}

function createUser(data) { return User.create(data); }

function deleteUserById(id) { return User.findByIdAndDelete(id); }

module.exports = {
  findAllUsers,
  findUserById,
  findUsersByName,
  findUsersByJob,
  findUsersByNameAndJob,
  createUser,
  deleteUserById,
};
