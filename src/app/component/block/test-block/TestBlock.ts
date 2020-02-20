import AbstractBlock from '../AbstractBlock';

export default class TestBlock extends AbstractBlock {
  public static readonly displayName:string = 'test-block';

  constructor(el:HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
