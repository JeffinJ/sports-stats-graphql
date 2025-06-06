import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TeamPerformanceStats {
  @Field()
  date: string;

  @Field(() => Int)
  goals: number;

  @Field(() => Int)
  assists: number;
}