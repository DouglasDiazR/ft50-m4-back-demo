import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< HEAD
import { LoggerGlobalMiddleware } from './middlewares/middlrewaresLogger';
=======
import { LoggerGlobalMiddleware } from './middlewares/logger.middleware';
>>>>>>> 764bd384361943a1bd5525995c10f7fbc626b75e

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(LoggerGlobalMiddleware);
  await app.listen(3000);
}
bootstrap();
