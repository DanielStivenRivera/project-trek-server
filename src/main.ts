import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('PROJECT TREK SERVER')
    .setDescription('PROJECT TREK SERVER')
    .setVersion('1.0')
    .addTag('PROJECT TREK SERVER')
    .build();

  const documentFactory = () =>
    SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('', app, documentFactory);

  await app.listen(port ?? 3000);
}

bootstrap();
