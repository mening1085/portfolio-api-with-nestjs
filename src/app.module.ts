import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';
import { SkillModule } from './skill/skill.module';
import { ProjectSkillModule } from './project_skill/project_skill.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'portfolios',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProjectsModule,
    SkillModule,
    ProjectSkillModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
