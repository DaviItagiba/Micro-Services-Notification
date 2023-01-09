export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }
  private validContentLength(content: string): boolean {
    return content.length > 4 && content.length < 239;

  }
  constructor(content: string) {
    const isContentLengthValid = this.validContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content length error.')
    }

    this.content = content
  }
}