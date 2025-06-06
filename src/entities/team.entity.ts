import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Sport } from './sport.entity';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
@Entity('teams')
export class Team {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ length: 100 })
    name: string;

    @Field()
    @Column({ name: 'short_name', length: 10 })
    shortName: string;

    @Field()
    @Column({ length: 50 })
    city: string;

    @Field(() => Int, { nullable: true })
    @Column({ name: 'founded_year', nullable: true })
    foundedYear: number;

    @Field({ nullable: true })
    @Column({ name: 'logo_url', length: 255, nullable: true })
    logoUrl: string;

    @Field({ nullable: true })
    @Column({ name: 'primary_color', length: 7, nullable: true })
    primaryColor: string;

    @Field({ nullable: true })
    @Column({ name: 'secondary_color', length: 7, nullable: true })
    secondaryColor: string;

    @Field({ nullable: true })
    @Column({ name: 'stadium_name', length: 100, nullable: true })
    stadiumName: string;

    @Field(() => Int, { nullable: true })
    @Column({ name: 'stadium_capacity', nullable: true })
    stadiumCapacity: number;

    @Field()
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @Field()
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Field(() => Sport, { nullable: true })
    @ManyToOne(() => Sport, game => game.teams)
    @JoinColumn({ name: 'sport_id' })
    sport: Sport;
}