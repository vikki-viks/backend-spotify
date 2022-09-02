import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Track } from './track/schemas/track.entity';
import { Comment } from './track/schemas/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3306,
      username: 'postgres',
      password: 'postgres',
      database: 'spotify-test',
      entities: [Track, Comment],
      synchronize: true,
    }),
    TrackModule,
  ],
})
export class AppModule {}
