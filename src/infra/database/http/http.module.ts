import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [],
  controllers: [NotificationsController],
})
// eslint-disable-next-line prettier/prettier
export class HttpModule { }
