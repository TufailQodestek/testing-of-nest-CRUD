import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConnection,} from './database/DbConnection';
import { DBQuerys } from './database/DbQuerys';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,DbConnection,DBQuerys],
})
export class AppModule {}
