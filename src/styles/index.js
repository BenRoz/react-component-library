import DesignSystem from 'design-system-utils';
import { brand, status } from './colors';
import { lowerCase, mapKeys } from 'lodash';

const transitions = {
  duration: '300ms',
  timing: 'cubic-bezier(0.77, 0, 0.175, 1)'
};

export const designSystem = currentMode => ({
  type: {
    baseFontSize: '20px',

    sizes: {
      xs: -2,
      s: -1,
      base: 0, // [default] p, h5, h6
      m: 1, // h4
      l: 2, // h3
      xl: 3, // h2
      xxl: 4 // h1
    },

    modularscale: {
      base: 20, // should be the same as baseFontSize
      ratio: 1.5
    },

    fontWeight: {
      normal: 300, // Useful to set here if using anything other than `normal`
      bold: 'bold', // Useful to set here when bold webfonts come as 400 font-weight.
      headings: 'bold' // instead of browser default, bold
    }
  },

  colors: {
    ...brand,
    brand: {
      ...mapKeys(brand, lowerCase),
      ...status
    }
  },

  borderColor: 'transparent',

  lineHeight: {
    headings: 1.1,
    default: 2.5
  },

  breakpoints: {
    s: 300,
    m: 500,
    l: 800
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000
  },

  spacing: {
    baseline: 20,
    padding: '0.3em',
    scale: [0, 8, 16, 24, 32, 40]
  },

  layout: {
    gutter: 20,
    maxWidth: 1200,
    grid: {
      columnCount: 12
    }
  },

  transition: {
    default: {
      duration: transitions.duration,
      timing: transitions.timing,
      transition: `all ${transitions.duration} ${transitions.timing}`
    }
  },

  borderRadius: '0.3em'
});

export const ds = new DesignSystem(designSystem(), {
  useModularScale: true,
  fontSizeUnit: 'rem'
});
