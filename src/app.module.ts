import { Module } from '@nestjs/common';
import { ProductsModule } from './services/products';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
