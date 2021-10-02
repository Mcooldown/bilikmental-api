const express = require('express');

const router = express.Router();
const quoteController = require('../controllers/quote');

router.get('/', quoteController.getAllQuotes);
router.get('/user', quoteController.getAllQuotes);
router.post('/add', quoteController.addQuote);
router.post('/confirm', quoteController.confirmQuote);
router.post('/delete',quoteController.deleteQuote);

module.exports = router;