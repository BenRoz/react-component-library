import { render } from 'react-dom';
import React from 'react';
import Root from './Root';

const MOUNT_NODE = document.getElementById('root');
render(
  <Root />,
  MOUNT_NODE
);
