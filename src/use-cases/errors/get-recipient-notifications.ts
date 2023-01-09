import { Notification } from "../../Entities/notification";
import { NotificationsRepository } from "../../Repositories/notifications.repository";
import { Injectable } from '@nestjs/common/';
import { NotificationNotFound } from "./notification-not-found";


interface GetRecipientNotificationsRequest {
  recipientId: string;
}

interface GetRecipientNotificationsResponse {
  notifications: Notification[];
};

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute
    (request: GetRecipientNotificationsRequest
    ): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(
        recipientId,
      );

    return {
      notifications,
    }
  }
}