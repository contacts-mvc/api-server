const db = require('./db');
const _ = require('lodash');

module.exports = {

  // GET /contact/{id}
  get(req, res) {
    const id = req.swagger.params.id.value;
    const contact = _.find(db, contact=> contact.id === id);

    if (!contact) {
      return res.sendStatus(404);
    }
    res.json(contact);
  },

  // PUT /contact/{id}
  put(req, res) {
    const id = req.swagger.params.id.value;
    const body = req.swagger.params.body.value;
    const isSameContact = contact=> contact.id === id;

    const contact = _.find(db, isSameContact);

    if (!contact) {
      return res.sendStatus(404);
    }

    _.remove(db, isSameContact)

    db.push(body);

    res.json(body);
  },

  // DELETE /contact/{id}
  delete(req, res) {
    const id = req.swagger.params.id.value;
    const isSameContact = contact=> contact.id === id;

    const contact = _.find(db, isSameContact);

    if (!contact) {
      return res.sendStatus(404);
    }

    _.remove(db, isSameContact)

    res.json(body);
  }
}