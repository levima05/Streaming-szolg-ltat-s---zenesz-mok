import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class SongsService {
  db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db;
  }
  async create( createSongDto: CreateSongDto) {
    return await this.db.song.create({
      data: createSongDto
    });
  }

  async findAll() {
    return this.db.song.findMany();
  }

  async findOne(id: number) {
    return this.db.song.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateSongDto: UpdateSongDto) {
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

  async findZero(){
    const updateFindZero = await this.db.song.findMany({
      where: {price : 0},
    })
    return updateFindZero;
  }
}
