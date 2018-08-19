import React from 'react';
import { hot } from 'react-hot-loader';
import {Button} from '../src/components/Button/index';
const Root = () => {
  return (<div> <Button loading={false} status={'primary'} size={'lg'}>my button</Button> </div>);
};

export default hot(module)(Root);
