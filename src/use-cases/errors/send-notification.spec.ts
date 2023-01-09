import { SendNotification } from "./send-notification"
import { Notification } from "src/Entities/notification";
import { NotificationsRepository } from "src/Repositories/notifications.repository";
import { InMemoryNotificationsRepository } from "../../../test/Repositories/in-memory-notifications-repository";


describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository)

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'Social',
      recipientId: 'example-recipient-id',

    });


    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification)
  });
});