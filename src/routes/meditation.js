const express = require('express');

const router = express.Router();
const meditationController = require('../controllers/meditation');

router.post('/', meditationController.getAllMeditation);
router.post('/user', meditationController.getAllUserMeditation);
router.post('/add', meditationController.addMeditation);
router.post('/user/add', meditationController.addUserMeditation);
router.post('/change-step', meditationController.changeMeditationStep);
router.post('/update', meditationController.updateMeditation);
router.post('/delete', meditationController.deleteMeditation);
router.post('/user/delete', meditationController.deleteUserMeditation);

module.exports = router;