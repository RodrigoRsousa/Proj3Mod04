import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  app.enableCors();
  const app = await NestFactory.create(AppModule);

 const config = new DocumentBuilder()
    .setTitle('Rede social')
    .setDescription('Rede social com usuario, tweet, seguidores e seguindo.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  await app.listen(3000);
}
bootstrap();
