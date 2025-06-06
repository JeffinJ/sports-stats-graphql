import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import corsConfig from './config/cors.config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  logger.log('Starting application...');
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsConfig);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  logger.log(`Application is running on: http://localhost:${PORT}`);

}
bootstrap();
