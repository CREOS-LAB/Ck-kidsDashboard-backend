import Comments from "../models/comments.model";

class CommentServices{

    constructor(private readonly model = Comments){
    }

    // async getDetailsByStudentId(studentId: string){
    //     let result = await this.model.findOne({studentId})
    //     return result;
    // }

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