import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Team } from './team.entity';
import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum SportType {
    FOOTBALL = 'football',
    CRICKET = 'cricket',
    BASKETBALL = 'basketball',
    TENNIS = 'tennis',
    RUGBY = 'rugby',
    HOCKEY = 'hockey'
}

registerEnumType(SportType, {
    name: 'SportType',
    description: 'Type of sport',
});

@ObjectType()
@Entity('sports')
export class Sport {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ length: 50 })
    name: string;

    @Field(() => SportType)
    @Column({ type: 'enum', enum: SportType })
    type: SportType;

    @Field()
    @Column({ length: 10 })
    code: string; // e.g., 'FB', 'CR', 'BB'

    @Field({ nullable: true })
    @Column({ type: 'text', nullable: true })
    description: string;

    @Field(() => Int)
    @Column({ name: 'max_players_per_team' })
    maxPlayersPerTeam: number;

    @Field(() => Int, { nullable: true })
    @Column({ name: 'match_duration_minutes', nullable: true })
    matchDurationMinutes: number;

    @Field(() => Boolean)
    @Column({ name: 'is_active', default: true })
    isActive: boolean;

    @Field(() => [Team])
    @OneToMany(() => Team, team => team.sport)
    teams: Team[];
}
