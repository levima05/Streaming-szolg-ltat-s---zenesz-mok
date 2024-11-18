import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreatePlaylistDto {


  @IsNotEmpty()
  @IsString()
  title: string
  @IsNotEmpty()
  @IsString()
  author: string
  @IsNotEmpty()
  @IsInt()
  duration: number
  @IsNotEmpty()
  @IsInt()
  price: number 
  @IsInt()
  @IsNotEmpty()
  popularity: number
}
