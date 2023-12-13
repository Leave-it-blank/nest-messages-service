import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';
@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository], // 👈 Things that can be used as injectables in the controller
})
export class MessagesModule {}
