import {Controller} from '@nestjs/common';
import {EventPattern, Payload} from '@nestjs/microservices';
import {SendMail} from '@useCases/send-mail';

export type SendMailDto = {
  to: string;
  from?: string;
  subject: string;
  content: string;
};

@Controller()
export class MailsController {
  constructor(private readonly sendMail: SendMail) {}

  @EventPattern('mails.send-mail')
  async handleSendNotification(@Payload() payload: SendMailDto) {
    await this.sendMail.execute(payload);
  }
}
