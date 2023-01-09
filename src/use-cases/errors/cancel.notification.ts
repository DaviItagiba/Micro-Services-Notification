import { Content } from "../../Entities/content";
import { Notification } from "../../Entities/notification";
import { NotificationsRepository } from "../../Repositories/notifications.repository";
import { Injectable } from '@nestjs/common/';
import { NotificationNotFound } from "./notification-not-found";


interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute
    (request: CancelNotificationRequest):
    Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound
    }

    notification.cancel()

    await this.notificationsRepository.save(notification);
  }
}