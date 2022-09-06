import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackController } from './controllers/track.controller';
import { Comment } from './entity/comment.entity';
import { Track } from './entity/track.entity';
import { TrackService } from './services/track.service';

@Module({
  imports: [TypeOrmModule.forFeature([Track, Comment])],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
