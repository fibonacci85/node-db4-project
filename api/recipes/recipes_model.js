const db = require('../../data/db-config');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('recipes');
}

function getById(id) {
  return db('recipes')
    .where({ id })
    .first();
}

function insert(recipe) {
  return db('recipes')
    .insert(recipe)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('recipes')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('recipes')
    .where('id', id)
    .del();
}