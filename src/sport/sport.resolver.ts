import { Query, Resolver } from '@nestjs/graphql';
import { Sport } from 'src/entities/sport.entity';
import { SportService } from './sport.service';

@Resolver(() => Sport)
export class SportResolver {

    constructor(
        private readonly sportService: SportService, 
    ) {}

    @Query(() => [Sport], { name: 'sports' })
    async findAll() {
        console.log('SportResolver: findAll called');
        return this.sportService.findAll();
    }
}
