import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sport } from 'src/entities/sport.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SportService {
    constructor(
        @InjectRepository(Sport) private readonly sportRepository: Repository<Sport>,
    ) { }

    async findAll(): Promise<Sport[]> {
        return await this.sportRepository.find();
    }

    async findById(id: number): Promise<Sport> {
        const sport = await this.sportRepository.findOneBy({ id });
        if (!sport) {
            throw new Error(`Sport with ID ${id} not found`);
        }
        return sport;
    }
    async create(sport: Sport): Promise<Sport> {
        return this.sportRepository.save(sport);
    }

}
