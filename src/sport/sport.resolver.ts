import { Query, Resolver } from '@nestjs/graphql';
import { Sport } from 'src/entities/sport.entity';
import { SportService } from './sport.service';
import { Logger } from '@nestjs/common';

@Resolver(() => Sport)
export class SportResolver {
    private readonly logger = new Logger(SportResolver.name);
    constructor(
        private readonly sportService: SportService, 
    ) {}

    @Query(() => [Sport], { name: 'sports' })
    async findAll() {
        this.logger.log('findAll called');
        return this.sportService.findAll();
    }
}
