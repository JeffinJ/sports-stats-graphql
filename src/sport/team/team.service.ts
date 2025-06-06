import { Injectable } from '@nestjs/common';
import { teamPerformanceData } from 'src/data/team';

@Injectable()
export class TeamService {

  getSquadComposition(id: number) {
    return `Squad composition for team with ID ${id}`;
  }

  getPerformanceStatistics(id: number) {
    return teamPerformanceData;
  }

}
