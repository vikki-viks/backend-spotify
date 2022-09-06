import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Track } from '../entity/track.entity';
import { Repository } from 'typeorm';
import { Comment } from '../entity/comment.entity';
import { CreateTrackDto } from '../dto/create.track.dto';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Track)
    private trackRepository: Repository<Track>,
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}
  async create(dto: CreateTrackDto): Promise<Track> {
    const track = await this.trackRepository.create({ ...dto, listens: 0 });
    return track;
  }

  async getAll() {}

  async getOne() {}

  async delete() {}
}
