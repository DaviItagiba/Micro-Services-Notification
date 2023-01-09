import { InMemoryNotificationsRepository } from "../../../test/Repositories/in-memory-notifications-repository";
import { Content } from "../../Entities/content";
import { Notification } from "../../Entities/notification";
import { NotificationNotFound } from "./notification-not-found";
import { UnreadNotification } from "./unread-notification";


describe('Ununread notification', () => {
  it('should be able to ununread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository)

    const notification = new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade!'),
      recipientId: 'example-recipient-id',
    })

    await notificationsRepository.create(notification)

    await unreadNotification.execute({
      notificationId: notification.id,
    });


    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });
  it('should not be able to ununread a non existing notification', () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);
    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      })
    }).rejects.toThrow(NotificationNotFound);
  })
});