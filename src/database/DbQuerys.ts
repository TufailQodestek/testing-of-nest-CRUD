import { Injectable } from "@nestjs/common";
import { DbConnection } from "./DbConnection";

@Injectable()
export class DBQuerys{
    
    constructor(public connect:DbConnection){
        
        
    }

    
    async addInfo(addUser){
        try{

          return await this.connect.db.collection('user').insertOne({addUser})
        } catch(err){
          console.error(err)
        }
        
    }
    
   async getInfo(email){
       try{

         console.log(' email form dbQuery', email)
          return await this.connect.db.collection('user').findOne({"addUser.email": email})
         
       } catch(err){
         console.error(err)
       }
    }

    async updateInfo(updateData){
      console.log(updateData)
      return await this.connect.db.collection('user').findOneAndUpdate({"addUser.email":updateData.email},{$set:{"addUser.name":updateData.name, "addUser.age":updateData.age, "addUser.password":updateData.password}},{new:true})
    }

    async deleteInfo(email){
      console.log
      return await this.connect.db.collection('user').findOneAndDelete({"addUser.email":email})
    }
}