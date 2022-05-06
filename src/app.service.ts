import { Injectable } from '@nestjs/common';
import { DBQuerys } from './database/DbQuerys';


@Injectable()
export class AppService {

constructor(private dbQuery:DBQuerys){}

// this function is use to add user information 
  async addInfo(addUser,res){
   try{

     let email = await this.dbQuery.getInfo(addUser.email)
      
      if( email){
        res.status(401) .send(`${addUser.email} Already exists Please try another`)
       }
        
       await this.dbQuery.addInfo(addUser)
       res.status(200).send(`${addUser.name}'s Information added`)
   }
    catch(error){
      console.error(error)
    }
  }

  // this function is use to get user Information

  getInfo(email){
    return this.dbQuery.getInfo(email)
  }

  updateInfo(updateData){
  return  this.dbQuery.updateInfo(updateData)
  }

  deleteInfo(email){
    return this.dbQuery.deleteInfo(email)
  }
}
