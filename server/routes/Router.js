const express = require('express');
const router = express.Router();
const noteController = require('../Controller/NoteController');

/**NOTE */
/**Note 조회 */
router.get('/note', noteController.getNote);
/**Note 저장 */
router.post('/note', noteController.insertNote)
/**Note 수정 */
router.put('/note', noteController.updateNote);
/**Note 삭제 */
router.delete('/note', noteController.deleteNote);



module.exports = router;