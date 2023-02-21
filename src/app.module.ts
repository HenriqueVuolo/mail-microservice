import {Module} from '@nestjs/common';
import {MailerModule} from '@nestjs-modules/mailer';
import {ConfigModule} from '@nestjs/config';
import {MessagingModule} from '@messaging/messaging.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAILER_HOST,
        port: Number(process.env.MAILER_PORT),
        auth: {
          user: process.env.MAILER_AUTH_USER,
          pass: process.env.MAILER_AUTH_PASSWORD,
        },
      },
    }),
    MessagingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
