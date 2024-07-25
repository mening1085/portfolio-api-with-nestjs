import { ProjectSkill } from 'src/project_skill/entities/project_skill.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'text' })
  detail: string;

  @Column()
  link: string;

  @Column()
  image: string;

  @Column()
  year: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @OneToMany(() => ProjectSkill, (projectSkill) => projectSkill.projects)
  projectSkills: ProjectSkill[];
}
