const express = require('express');

const router = express.Router();

module.exports = (params) => {
  router.get('/', async (req, res) => {
    const { feedbackService } = params;

    const feedback = await feedbackService.getList();
    return res.json(feedback);
  });

  router.post('/', (req, res) => {
    return res.send('Feedback form posted');
  });

  return router;
};
