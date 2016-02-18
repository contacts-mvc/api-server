const db = require('./db');

module.exports = {

  // GET /contact/{id}
  get(req, res) {
    const id = req.swagger.params.id;
    const contact = db.filter(contact=> contact.id === id)[0];

    if (!contact) {
      return res.status(404).send('Not found');
    }
    res.json(contact);
  },

  // PUT /contact/{id}
  put(req, res) {
    res.json({task: 'TODO'});
  },

  // DELETE /contact/{id}
  delete(req, res) {
    res.json({task: 'TODO'});
  }
}