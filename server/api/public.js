const express = require('express');

const Field = require('../models/field');

const router = express.Router();

router.get('/fields', async (req, res) => {
  try {
    const fields = await Field.list();
    res.json(fields);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
});

router.get('/create', async (req,res) => {
    try {
        const field = await Field.add({name:'testName',desc:'testDesc'});
        res.json(field);
    } catch (err) {
        res.json({ error: err.message || err.toString() });
    }
});

// router.get('/books/:slug', async (req, res) => {
//   try {
//     const book = await Book.getBySlug({ slug: req.params.slug });
//     res.json(book);
//   } catch (err) {
//     res.json({ error: err.message || err.toString() });
//   }
// });

module.exports = router;
