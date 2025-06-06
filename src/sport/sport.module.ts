import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sport } from 'src/entities/sport.entity';
import { Team } from 'src/entities/team.entity';
import { SportService } from './sport.service';
import { SportResolver } from './sport.resolver';
import { TeamResolver } from './team/team.resolver';  
import { TeamService } from './team/team.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Sport,
      Team
    ]),
  ],
  providers: [
    SportService,
    SportResolver,
    TeamResolver,
    TeamService,
  ],
})
export class SportModule {}
