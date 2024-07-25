import { Injectable } from '@nestjs/common';
import { CreateProjectSkillDto } from './dto/create-project_skill.dto';
import { UpdateProjectSkillDto } from './dto/update-project_skill.dto';

@Injectable()
export class ProjectSkillService {
  create(createProjectSkillDto: CreateProjectSkillDto) {
    return 'This action adds a new projectSkill';
  }

  findAll() {
    return `This action returns all projectSkill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectSkill`;
  }

  update(id: number, updateProjectSkillDto: UpdateProjectSkillDto) {
    return `This action updates a #${id} projectSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectSkill`;
  }
}
