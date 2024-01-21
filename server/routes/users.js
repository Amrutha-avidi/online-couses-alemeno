
import express from 'express'
import {enrolled, like } from '../controllers/user.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()


router.put('/like/:courseId',verifyToken, like)

router.put("/enroll/:courseId", verifyToken, enrolled);

export default router