'use strict';

const db = require('./db');

module.exports = {

  // GET /contacts
  get(req, res) {
    res.json(db);
  },

  // POST /contact/{id}
  post(req, res) {
    const newContact = req.swagger.params.body.value;

    db.push(newContact);
    res.json(newContact);
  }
}