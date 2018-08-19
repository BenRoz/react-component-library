import React, { PureComponent } from 'react';
import { ButtonWrapper } from './style';
import PropTypes from 'prop-types';
import { faSpinner } from '../../styles/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Button extends PureComponent {
  renderLoaderIcon () {
    return [
      <FontAwesomeIcon icon={faSpinner} spin key={'spin'} />,
      <span key="text" style={{ paddingLeft: '4px' }}>
        loading...
      </span>
    ];
  }
  render () {
    const {
      title,
      hollow,
      rounded,
      size,
      status,
      disabled,
      loading,
      children,
      selected,
      style,
    } = this.props;
    const loaderIconComponent = loading && this.renderLoaderIcon();
    return (
      <ButtonWrapper
        disabled={loading || disabled}
        onClick={() => console.log('I have been clicked')}
        title={title}
        hollow={hollow}
        rounded={rounded}
        size={size}
        status={status}
        selected={selected}
        style={style}
      >
        {loaderIconComponent || children}
      </ButtonWrapper>
    );
  }
}
Button.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  hollow: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']).isRequired,
  status: PropTypes.oneOf([
    'info',
    'warning',
    'error',
    'success',
    'default',
    'primary',
    'secondary',
    'brand',
    'cta'
  ]).isRequired,
  children: PropTypes.node,
  selected: PropTypes.bool,
  style: PropTypes.object,
};

Button.defaultProps = {
  disabled: false,
  status: 'default',
  size: 'sm',
  rounded: false,
  hollow: true,
  style: {},
};

export default Button;
