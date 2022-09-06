import { Module } from '@nestjs/common';
import { TrackModule } from './track.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Track } from './entity/track.entity';
import { Comment } from './entity/comment.entity';
import { Album } from './entity/album.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'spotify-test',
      entities: [Track, Comment, Album],
      synchronize: true,
    }),
    TrackModule,
  ],
})
export class AppModule {}
