import mongoose, {Schema} from "mongoose";

const schema = new Schema({
    cover: {type: String},
    category: {type: String},
    title: {type: String},
    lessons: {type: String},
    totalHours: {type: Number},
    kidsEnrolled: [{type: String}],
    videoLink: {type: String},
    description: {type: String}
},
{
    timestamps: true
})

const Courses = mongoose.model("Courses", schema)
export default Courses;