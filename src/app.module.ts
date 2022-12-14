import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/database/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
