import { Project } from 'src/projects/entities/project.entity';
import { Skill } from 'src/skill/entities/skill.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_skill')
export class ProjectSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  skill_id: string;

  @Column()
  project_id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  // relationships with project
  @ManyToOne(() => Project, (project) => project.projectSkills)
  projects: Project;

  // relationships with skill
  @ManyToOne(() => Skill, (skill) => skill.id)
  skills: Skill[];
}
