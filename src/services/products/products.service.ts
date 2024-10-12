import { Injectable } from '@nestjs/common';
import { FilterQuery, CategoryTypes, Gender } from './types';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class ProductsService {
  private readonly BASE_URL = 'https://api.newyorker.de/csp/products/public';

  constructor(private readonly httpService: HttpService) {}

  public async getOutfitAsync(filter: FilterQuery) {
    const gender = this.getGender(filter);

    const accessoire = await this.getAccessoryAsync(gender);
    const oberbekleidung = await this.getBekleidungAsync(
      gender,
      'oberbekleidung',
    );
    const unterbekleidung = await this.getBekleidungAsync(
      gender,
      'unterbekleidung',
    );

    return {
      accessoire,
      oberbekleidung,
      unterbekleidung,
    };
  }

  private async getAccessoryAsync(gender: Gender) {
    const accessoireKeys = this.getAccessorieKeys(gender);
    const accessory = this.getRandomItem(accessoireKeys);
    const filterQuery = `query?filters[country]=de&filters[gender]=${CategoryTypes[gender]}&filters[web_category]=Accessoires,${accessory}`;
    return await this.getProductAsync(filterQuery);
  }

  private async getBekleidungAsync(
    gender: Gender,
    category: 'oberbekleidung' | 'unterbekleidung',
  ) {
    const subCategory = this.getRandomItem(
      Object.keys(CategoryTypes[gender][category]),
    );
    const clothingKeys = this.getBekleidungKeys(gender, category, subCategory);
    const productItem = this.getRandomItem(clothingKeys);
    const filterQuery = `query?filters[country]=de&filters[gender]=${CategoryTypes[gender]}&filters[web_category]=${productItem}`;
    return await this.getProductAsync(filterQuery);
  }

  private async getProductAsync(filterQuery: string) {
    const url = `${this.BASE_URL}/${filterQuery}`;

    const response$ = this.httpService
      .get(url, {
        headers: {
          accept: 'application/json',
        },
      })
      .pipe(map((response) => response.data));

    const response = await firstValueFrom(response$);

    const randomItem = this.getRandomItem(response.items);

    return randomItem;
  }

  private getGender(filter: FilterQuery): Gender {
    return filter === 'ALL'
      ? this.getRandomItem(['men', 'women'])
      : (filter.toLowerCase() as Gender);
  }

  private getAccessorieKeys(gender: Gender) {
    return Object.values(CategoryTypes[gender]['accessoires']);
  }

  private getBekleidungKeys(
    gender: Gender,
    category: 'unterbekleidung' | 'oberbekleidung',
    subCategory: string,
  ) {
    return Object.values(CategoryTypes[gender][category][subCategory]);
  }

  private getRandomItem<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
}
