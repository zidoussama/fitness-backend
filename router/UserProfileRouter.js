const express = require('express');
const router = express.Router();
const { createUserProfile,updateUserProfile,getUserProfile } = require('../controllers/userProfileController');


router.post('/userprofile', createUserProfile);
router.get('/userprofile/:userId', getUserProfile);
router.put('/userprofile/:userId', updateUserProfile);

module.exports = router;