import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning();

  const config = new DocumentBuilder()
    .setTitle('Outfit generator API')
    .setDescription(
      'This is a sample Outfit generator API service built with NestJS.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);

  Logger.log(`🚀 Application is running on: http://localhost:3000`, 'main');
}
bootstrap();
