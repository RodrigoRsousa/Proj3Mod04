import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { TweetModule } from './tweet/tweet.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule, SeguidoresModule, SeguindoModule, TweetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
