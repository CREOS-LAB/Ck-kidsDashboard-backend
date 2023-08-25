import mongoose, {Schema} from "mongoose"

const schema = new Schema({
    gem: {type: Number, default: 0},
    studentId: {type: String},
    courses: {},
    hoursSpent: {type: Number},
    stage: {type: String},
    badges: {type: String},
    achievement: {type: String},
    streak: {type: Number, default: 0}
},
{
    timestamps: true
})

const KidsDashboard = mongoose.model("KidsDashboard", schema)
export default KidsDashboard