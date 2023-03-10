import { InMemoryNotificationsRepository } from "../../../test/Repositories/in-memory-notifications-repository";
import { Content } from "../../Entities/content";
import { Notification } from "../../Entities/notification";
import { CountRecipientNotifications } from "./count-recipient-notifications";

describe('Count recipients notification', () => {
  it('should be able to count recipient notifications. ', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications
      (notificationsRepository,);

    await notificationsRepository.create(new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade!'),
      recipientId: 'recipient-1',
    }));

    await notificationsRepository.create(new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade!'),
      recipientId: 'recipient-1',
    }));

    await notificationsRepository.create(new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade!'),
      recipientId: 'recipient-2',
    }));

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1'
    });


    expect(count).toEqual(2);
  });
});