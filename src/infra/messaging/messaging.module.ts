import {Module} from '@nestjs/common';
import {SendMail} from '@useCases/send-mail';
import {MailsController} from '@messaging/kafka/controllers/mails.controller';
import {KafkaConsumerService} from '@infra/messaging/kafka/kafka.consumer.service';

@Module({
  imports: [],
  providers: [KafkaConsumerService, SendMail],
  controllers: [MailsController],
})
export class MessagingModule {}
