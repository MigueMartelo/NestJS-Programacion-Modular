import { Module } from '@nestjs/common';

import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { BrandsController } from './controllers/brand.controller';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';
@Module({
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [ProductsService, BrandsService, CategoriesService],
})
export class ProductsModule {}
