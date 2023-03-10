const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/though-controller');

router
  .route('/')
  .get(getAllThoughts)
  .post(createThought)

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought)

module.exports = router;