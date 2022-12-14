/* eslint-disable @typescript-eslint/no-empty-function */
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should create a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: '123',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
