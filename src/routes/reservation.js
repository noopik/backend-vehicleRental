const express = require('express');
const {
  createReservation,
  getAllReservation,
  getItemReservation,
  updateReservation,
  deleteMethodItem,
} = require('../controllers/reservationController');
const { verifyAccess } = require('../middleware/auth');

const router = express.Router();
router
  .get('/', verifyAccess, getAllReservation)
  .post('/', verifyAccess, createReservation)
  .get('/:id', verifyAccess, getItemReservation)
  .patch('/:id', verifyAccess, updateReservation)
  .delete('/:id', verifyAccess, deleteMethodItem);

module.exports = router;
