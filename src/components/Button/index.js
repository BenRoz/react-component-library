import React from 'react';
import Button from './Button';
const SuccessButton = props => <Button {...props} status="success" />;
const ErrorButton = props => <Button {...props} status="error" />;
const PromptButton = props => <Button {...props} status="cta" hollow={false} />;
export default Button;
export { Button, SuccessButton, ErrorButton, PromptButton };
