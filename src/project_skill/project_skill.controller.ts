import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectSkillService } from './project_skill.service';
import { CreateProjectSkillDto } from './dto/create-project_skill.dto';
import { UpdateProjectSkillDto } from './dto/update-project_skill.dto';

@Controller('project-skill')
export class ProjectSkillController {
  constructor(private readonly projectSkillService: ProjectSkillService) {}

  @Post()
  create(@Body() createProjectSkillDto: CreateProjectSkillDto) {
    return this.projectSkillService.create(createProjectSkillDto);
  }

  @Get()
  findAll() {
    return this.projectSkillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectSkillService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectSkillDto: UpdateProjectSkillDto) {
    return this.projectSkillService.update(+id, updateProjectSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectSkillService.remove(+id);
  }
}
