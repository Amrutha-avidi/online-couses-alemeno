import mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    instructor:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
       
    },
    enrollmentStatus:{
        type:String,
        required:true,
       
    },
    thumbnailUrl:{
        type:String,
        required:true,
       
    },
    details:{
        type:[String],
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    schedule:{
        type:String,
        required:true,
       
    },
    location:{
        type:String,
        required:true,
       
    },
    prerequisities:{
        type:[String],
        required:true,
    },
    likes:{
        type:[String],
        default:[]
    },
  
})

export default mongoose.model('Course', CourseSchema)
