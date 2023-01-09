import { CancelNotification } from "./cancel.notification"
import { InMemoryNotificationsRepository } from "../../../test/Repositories/in-memory-notifications-repository";
import { Content } from "../../Entities/content";
import { Notification } from "../../Entities/notification";
import { NotificationNotFound } from "./notification-not-found";


describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository)

    const notification = new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade!'),
      recipientId: 'example-recipient-id',
    })

    await notificationsRepository.create(notification)

    await cancelNotification.execute({
      notificationId: notification.id,
    });


    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });
  it('should not be able to cancel a non existing notification', () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);
    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      })
    }).rejects.toThrow(NotificationNotFound);
  })
});