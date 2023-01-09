import { InMemoryNotificationsRepository } from "../../../test/Repositories/in-memory-notifications-repository";
import { Content } from "../../Entities/content";
import { Notification } from "../../Entities/notification";
import { NotificationNotFound } from "./notification-not-found";
import { ReadNotification } from "./read-notification";


describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository)

    const notification = new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade!'),
      recipientId: 'example-recipient-id',
    })

    await notificationsRepository.create(notification)

    await readNotification.execute({
      notificationId: notification.id,
    });


    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });
  it('should not be able to read a non existing notification', () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);
    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      })
    }).rejects.toThrow(NotificationNotFound);
  })
});