import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TeamService } from './team.service';
import { Team } from 'src/entities/team.entity';
import { TeamPerformanceStats } from 'src/entities/teamPerfomance.entity';
@Resolver(() => Team)
export class TeamResolver {
  constructor(private readonly teamService: TeamService) {}

  @Query(() => [Team], { name: 'squadComposition' })
  getSquadComposition(@Args('id', { type: () => Int }) id: number) {
    return this.teamService.getSquadComposition(id);
  }

  @Query(() => [TeamPerformanceStats], { name: 'teamPerformance' })
  getPerformanceStatistics(@Args('id', { type: () => Int }) id: number) {
    return this.teamService.getPerformanceStatistics(id);
  }
  

}
