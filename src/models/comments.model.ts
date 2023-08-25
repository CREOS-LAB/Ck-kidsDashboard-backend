import mongoose, {Schema} from "mongoose";

const schema = new Schema({
    course: {type: Schema.Types.ObjectId, ref: "Courses"},
    content: {type: String},
    createdBy: {type: String}
},
{
    timestamps: true
})

const Comments = mongoose.model("Comments", schema)
export default Comments