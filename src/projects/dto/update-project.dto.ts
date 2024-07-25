import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  name: string;
  description: string;
  detail: string;
  link: string;
  image: string;
  year: string;
  created_at: Date;
  updated_at: Date;
}
