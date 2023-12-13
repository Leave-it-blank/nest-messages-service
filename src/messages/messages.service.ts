import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor(repo: MessagesRepository) {
    this.messagesRepo = repo;
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }
  async create(content: string) {
    return this.messagesRepo.create(content);
  }
}
