import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ProductoModule } from './modules/producto/producto.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UsuarioModule, ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}