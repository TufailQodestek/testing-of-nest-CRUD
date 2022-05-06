import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port=3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port).then(() => console.log(`server listen at ${port}`)).catch((error)=> console.log(`Error form main.ts ${error}`))
}
bootstrap();
