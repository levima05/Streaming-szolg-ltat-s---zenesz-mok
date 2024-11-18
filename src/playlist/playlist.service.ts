import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlaylistService {
  db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db;
  }
  async create( createSongDto: CreatePlaylistDto) {
    return await this.db.song.create({
      data: createSongDto
    });
  }
  findAll() {
    return this.db.song.findMany();
  }

  async findOne(id: number) {
    return this.db.song.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateSongDto: UpdatePlaylistDto) {
    const updatedSong = await this.db.song.update({
      where: { id },
      data: updateSongDto,
    });
    return updatedSong;
  }

  async remove(id: number) {
    try {
      await this.db.song.delete({
        where: { id },
      });
    }
    catch {
      return undefined;
    }
  }
}
