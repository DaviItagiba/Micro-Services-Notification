import { InMemoryNotificationsRepository } from "../../../test/Repositories/in-memory-notifications-repository";
import { Content } from "../../Entities/content";
import { Notification } from "../../Entities/notification";
import { GetRecipientNotifications } from "./get-recipient-notifications";
;

describe('Get recipients notification', () => {
  it('should be able to get recipient notifications. ', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-1'
    });


    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(expect.arrayContaining([
      expect.objectContaining({ recipientId: 'recipient-1' }),
      expect.objectContaining({ recipientId: 'recipient-1' }),
    ]));
  });
});