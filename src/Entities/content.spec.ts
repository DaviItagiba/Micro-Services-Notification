import { repeat } from "rxjs";
import { Content } from "./content"

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade')

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification content with more 239 characters', () => {
    expect(() => new Content('a'.repeat(240))).toThrow();
  });
})

