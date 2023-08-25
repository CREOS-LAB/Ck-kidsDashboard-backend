import { Service } from "typedi";
import KidsDashboard from "../models/kidsDashboard.model";
import "reflect-metadata"

@Service()
export class KidsDashboardServices{
    constructor(private readonly model = KidsDashboard){
    }

    async getDetailsByStudentId(studentId: string){
        let result = await this.model.findOne({studentId})
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