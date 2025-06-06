import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sport } from 'src/entities/sport.entity';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
@Injectable()
export class SportService {
    private readonly logger = new Logger(SportService.name);
    constructor(
        @InjectRepository(Sport) private readonly sportRepository: Repository<Sport>,
    ) { }

    async findAll(): Promise<Sport[]> {
        try {
            this.logger.log('findAll called');
            const sports = await this.sportRepository.find();
            if (!sports || sports.length === 0) {
                this.logger.warn('No sports found');
            }
            return sports;
        } catch (error) {
            this.logger.error('Error finding all sports', error.stack);
            throw error;
        }
    }

    async findById(id: number): Promise<Sport> {
        try {
            this.logger.log(`findById called with ID: ${id}`);
            const sport = await this.sportRepository.findOneBy({ id });
            if (!sport) {
                throw new Error(`Sport with ID ${id} not found`);
            }
            return sport;
        } catch (error) {
            this.logger.error(`Error finding sport with id ${id}`, error.stack);
            throw error;
            
        }
    }

}
