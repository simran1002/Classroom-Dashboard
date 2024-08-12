const express = require('express');
const { registerUser, loginUser, getAllUsers, updateUser, deleteUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.route('/')
  .get(protect, getAllUsers)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

module.exports = router;
