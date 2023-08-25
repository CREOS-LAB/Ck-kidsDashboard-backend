import { Service } from "typedi";
import Courses from "../models/courses.model";

@Service()
class CourseServices{
    constructor(private readonly model = Courses){
    }

    async getByCourseId(courseId: string){
        let result = await this.model.find({course: courseId})
        return result;
    }

    async create(data: any){
        let result = await new this.model(data).save();
        return result
    }

    async getAll(){
        let result = await this.model.find()
        return result
    }

    async update(id: string, data: object){
        let result = await this.model.findByIdAndUpdate(id, data);
        return result
    }

    async getById(id: string){
        let result = await this.model.findById(id)
        return result
    }
}