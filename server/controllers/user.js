import Course from "../models/Course.js";
import User from '../models/User.js'


export const like = async(req, res, next)=>{
    const id = req.user.id;
    const courseId = req.params.courseId;
    try{
        await Course.findByIdAndUpdate(courseId, {
            $addToSet:{likes:id}
        })
        res.status(200).json("The Course has been liked")

    } catch(err){
        next(err)
    }
   
}

export const enrolled = async (req, res, next) => {
    const id = req.user.id;
  
    const courseId = req.params.courseId;
    try {
      await User.findByIdAndUpdate(id, {
        $addToSet: { enrolledCourses: req.params.courseId },
      });
      
      res.status(200).json("Enrollment  successfull.")
    } catch (err) {
      next(err);
    }
  };





