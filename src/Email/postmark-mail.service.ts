import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { MailService } from "./mail.service";

@Injectable()
export class PostmarkMailService implements MailService {
  sendEmail(): string {
    return 'Postmark Mail!'
  }
}

