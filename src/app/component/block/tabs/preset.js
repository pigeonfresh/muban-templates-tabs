/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('tabs', require('./tabs.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
      {{> block/tabs @root}}
    </hbs>`,
  require('./data/default'),
);
