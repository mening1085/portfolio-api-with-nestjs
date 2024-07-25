import { Module } from '@nestjs/common';
import { ProjectSkillService } from './project_skill.service';
import { ProjectSkillController } from './project_skill.controller';

@Module({
  controllers: [ProjectSkillController],
  providers: [ProjectSkillService],
})
export class ProjectSkillModule {}
