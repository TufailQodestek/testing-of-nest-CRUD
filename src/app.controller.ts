import { Body, Controller, Delete, Get, Post, Res,Put } from '@nestjs/common';
import { info } from 'console';

import { AppService } from './app.service';
import { addUser, find, update } from './DTO/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, ) {}

  @Post('/add')
  async adduser(@Body()addUser:addUser, @Res() res) {
    
    let info = await this.appService.addInfo(addUser,res);
    console.log('hello', info)
    return info
  }

  @Get('/read')
  async getuser(@Body()find: find, @Res() res ){

    let info = await this.appService.getInfo(find.email)
    res.status(200).send(info)

  }
  @Put('/update')
  async updateInfo(@Body()update:update, @Res() res){
   let info = await this.appService.updateInfo(update)

   res.status(200).send(`Your Information updated`)
  }

  @Delete('/delete')
  async deleteInfo(@Body()find:find, @Res() res){
    let data = await this.appService.deleteInfo(find.email)
    res.status(200).send(`${data.value.addUser.name}'s Information deleted `)
  }
}
