import {MailerService} from '@nestjs-modules/mailer';
import {Injectable} from '@nestjs/common';
import {SendMailDto} from '@messaging/kafka/controllers/mails.controller';

@Injectable()
export class SendMail {
  constructor(private readonly mailService: MailerService) {}

  async execute(payload: SendMailDto) {
    const {from, to, subject, content} = payload;
    await this.mailService.sendMail({
      from: from ?? process.env.MAILER_SENDER,
      to: to,
      subject: subject,
      html: content,
    });
  }
}
