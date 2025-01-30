const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const { authenticateToken } = require('../middleware/auth');

router.post('/add', authenticateToken, noteController.addNote);
router.put('/edit/:noteId', authenticateToken, noteController.editNote);
router.get('/all', authenticateToken, noteController.getAllNotes);
router.delete('/delete/:noteId', authenticateToken, noteController.deleteNote);
router.put('/pin/:noteId', authenticateToken, noteController.updateNotePinned);
router.get('/search', authenticateToken, noteController.searchNotes);

module.exports = router;