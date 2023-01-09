import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { MailService } from "./mail.service";

@Injectable()
export class SMPTMailService implements MailService {
  sendEmail(): string {
    return 'STMP Mail!'
  }
}
