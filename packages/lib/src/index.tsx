// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { ReactNode, Component, HTMLAttributes } from 'react';

const CLASS_NAME = 'react-linear-mask';
// const uuid = () => Math.random().toString(36).substring(2, 9);
export type ReactLinearMaskProps = {
  direction?: 'top' | 'right' | 'bottom' | 'left'
  /**
   * The children element.
   */
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactLinearMask extends Component<ReactLinearMaskProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};

  render() {
    const { className, direction, ...rest } = this.props;
    return (
      <div data-component={CLASS_NAME} data-direction={direction} className={cx(CLASS_NAME, className)} {...rest} />
    );
  }
}
