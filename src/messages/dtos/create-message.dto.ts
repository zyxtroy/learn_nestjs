import { IsString } from 'class-validator';

export class CreateMessageDto {
    @IsString() // validator to make sure content is a string
    content: string;
}