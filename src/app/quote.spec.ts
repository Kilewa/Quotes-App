import { Quote } from './quote';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new Quote(this.quotePublisher, this.quoteAuthor, this.quoteStr)).toBeTruthy();
  });
});
