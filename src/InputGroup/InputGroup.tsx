import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import InputGroupAddon from './InputGroupAddon';
import InputGroupButton from './InputGroupButton';
import { useClassNames } from '../utils';
import { WithAsProps, TypeAttributes, RsRefForwardingComponent } from '../@types/common';

export const InputGroupContext = React.createContext<{
  onFocus: () => void;
  onBlur: () => void;
} | null>(null);

export interface InputGroupProps extends WithAsProps {
  /** Sets the composition content internally */
  inside?: boolean;

  /** An Input group can show that it is disabled */
  disabled?: boolean;

  /** Primary content */
  children?: React.ReactNode;

  /** A component can have different sizes */
  size?: TypeAttributes.Size;
}

export interface InputGroupComponent extends RsRefForwardingComponent<'div', InputGroupProps> {
  Addon: typeof InputGroupAddon;
  Button: typeof InputGroupButton;
}

/**
 * The `InputGroup` component is used to specify an input field with an add-on.
 * @see https://rsuitejs.com/components/input/#input-group
 */
const InputGroup: InputGroupComponent = React.forwardRef((props: InputGroupProps, ref) => {
  const {
    as: Component = 'div',
    classPrefix = 'input-group',
    className,
    disabled,
    inside,
    size,
    children,
    ...rest
  } = props;
  const [focus, setFocus] = useState(false);

  const handleFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const { withClassPrefix, merge } = useClassNames(classPrefix);
  const classes = merge(className, withClassPrefix(size, { inside, focus, disabled }));

  const renderChildren = useCallback(() => {
    return React.Children.map(children, item => {
      if (React.isValidElement(item)) {
        if (React.isValidElement(item)) {
          // Fix: Add type assertion to pass the disabled prop to the child element
          return disabled ? React.cloneElement(item, { disabled } as { disabled?: boolean }) : item;
        }
      }
      return item;
    });
  }, [children, disabled]);

  const contextValue = useMemo(
    () => ({ onFocus: handleFocus, onBlur: handleBlur }),
    [handleFocus, handleBlur]
  );

  return (
    <InputGroupContext.Provider value={contextValue}>
      <Component {...rest} ref={ref} className={classes}>
        {renderChildren()}
      </Component>
    </InputGroupContext.Provider>
  );
}) as unknown as InputGroupComponent;

InputGroup.displayName = 'InputGroup';
InputGroup.propTypes = {
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  inside: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs'])
};

InputGroup.Addon = InputGroupAddon;
InputGroup.Button = InputGroupButton;

export default InputGroup;
