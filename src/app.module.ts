import { Module } from '@nestjs/common';
import { HttpModule } from './Infra/http/https.module';
import { DatabaseModule } from './Infra/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule { }
