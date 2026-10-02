import express from 'express';
import asyncHandler from '../utils/asynHandler.js';
import authController from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/login', asyncHandler(authController.login));

export default router;