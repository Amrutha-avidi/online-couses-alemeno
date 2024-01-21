import { createError } from "../error.js";

import Course from '../models/Course.js'

export const addCourse = async(req,res,next)=>{
    const newCourse = new Course({userId:req.user.id, ...req.body})
try{
    const savedCourse = await newCourse.save()
    res.status(200).json(savedCourse)
}
catch(err) {next(err)}
}

export const getCourse = async(req,res,next)=>{
    try{
        const course = await Course.findById(req.params.id)
        res.status(200).json(course)
    } catch(err){next(err)}
}



export const random = async (req, res, next) => {
    try {
      const courses = await Course.find();
      res.status(200).json(courses);
    } catch (err) {
      next(err);
    }
  };



