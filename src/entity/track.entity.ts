import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  artist: string;

  @Column()
  text: string;

  @Column('int4')
  listens: number;

  @Column('text')
  picture: string;

  @Column()
  audio: string;

  @OneToMany(() => Comment, (comment) => comment.track)
  comments: Comment[];
}
