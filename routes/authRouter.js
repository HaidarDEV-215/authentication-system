const express = require('express');
const router = express();
const authController = require('../controllers/authControllers.js');
const {authRequestsLimitter} = require('../middlewares/rate-limit.js');
const {verifyToken} = require('../middlewares/validateToken.js')

router.route('/regester').post(authRequestsLimitter,authController.regester);

router.route('/login').post(authRequestsLimitter,authController.login);

router.route('/forgetPassword').post(authRequestsLimitter,authController.forgetPassword);

router.route('/confirm').post(authRequestsLimitter,authController.confirmOTP);

router.route('/resetPassword').post(authRequestsLimitter,verifyToken,authController.resetPassword);

module.exports = router;