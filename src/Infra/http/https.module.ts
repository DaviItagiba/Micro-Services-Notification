import { Module } from "@nestjs/common";
import { CancelNotification } from "src/use-cases/errors/cancel.notification";
import { CountRecipientNotifications } from "src/use-cases/errors/count-recipient-notifications";
import { GetRecipientNotifications } from "src/use-cases/errors/get-recipient-notifications";
import { ReadNotification } from "src/use-cases/errors/read-notification";
import { SendNotification } from "src/use-cases/errors/send-notification";
import { UnreadNotification } from "src/use-cases/errors/unread-notification";
import { DatabaseModule } from "../database/database.module";
import { NotificationsController } from "./controllers/notifications.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,

  ],


})

export class HttpModule { }