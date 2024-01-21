
import express from 'express'
import {addCourse,getCourse,random} from '../controllers/course.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

// create a course

 router.post('/', verifyToken,addCourse)
 router.get('/find/:id', getCourse)
 router.get("/random", random)

export default router