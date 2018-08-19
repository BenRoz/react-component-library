import { configure } from '@storybook/react';
// import './style.css';
// automatically import all story.js files
const req = require.context('../src/components', true, /story\.js$/);

function loadStories () {
  req.keys().forEach(req);
}

configure(loadStories, module);
