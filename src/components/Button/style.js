import styled from 'styled-components';
import { ds } from '../../styles';

const ButtonWrapper = styled.button`
  margin: auto 0;
  font-weight: ${props => {
    switch (props.size) {
      case 'xs':
        return 'inherit';
      default:
        return 700;
    }
  }};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  line-height: 1.5;
  min-width: ${props => {
    if (props.style.minWidth) {
      return props.style.minWidth;
    }
    switch (props.size) {
      case 'xs':
        return '45px';
      default:
        return '80px';
    }
  }};
  min-height: ${props => {
    if (props.style.minHeight) {
      return props.style.minHeight;
    }
    switch (props.size) {
      case 'xs':
        return '20px';
      default:
        return '40px';
    }
  }};
  background-color: ${props => {
    if (props.selected) {
      return ds.brand(props.status);
    }
    if (!props.hollow) {
      return ds.brand(props.status);
    } else {
      return 'transparent';
    }
  }};
  filter: ${props => (props.disabled ? 'brightness(130%)' : 'unset')};
  background-size: 200% auto;
  padding: ${props => {
    switch (props.size) {
      case 'xs':
        return '0 8px';
      default:
        return '0 20px';
    }
  }};
  text-transform: uppercase;
  text-align: center;
  transition: 0.5s;
  border-color: currentColor;
  border-width: 1px;
  border-style: solid;
  border-radius: ${props => {
    if (props.rounded) {
      switch (props.size) {
        case 'xs':
          return '4px';
        default:
          return '20px';
      }
    } else {
      return '4px';
    }
  }};
  color: ${props => {
    return !props.hollow ? ds.get('colors.WHITE') : ds.brand(props.status);
  }};
  &:hover {
    background-color: ${props => {
    if (!props.disabled) {
      return ds.brand(props.status);
    }
  }};
    color: ${props => {
    if (!props.disabled) {
      return 'white';
    }
  }};
    background-position: right center;
  }
  input[type='radio'],
  input[type='checkbox'] {
    display: none;
  }
`;

export { ButtonWrapper };
