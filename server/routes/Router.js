const express = require('express');
const router = express.Router();
const noteController = require('../Controller/NoteController');

router.get('/note', noteController.getNote);
router.post('/note', noteController.insertNote)
router.put('/note', noteController.updateNote);
router.delete('/note', noteController.deleteNote);

module.exports = router;