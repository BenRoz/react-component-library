import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import Button from './index';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Button', () => (
    <div className="divWrapper" style={{textAlign: 'center'}}>
      <Button
        status={select('status', ['primary', 'warning', 'info',
          'error',
          'success',
          'default',
          'secondary',
          'brand'])}
        title={text('title', 'button title')}
        label={text('label', 'clickme')}
        size= {select('size', ['xs', 'sm'])}
        rounded={boolean('rounded', false)}
        hollow={boolean('hollow', true)}
        loading={boolean('loading', false)}
        disabled={boolean('disabled', false)}
        children={text('buttonText', 'my button')}
      />
    </div>
  ));
