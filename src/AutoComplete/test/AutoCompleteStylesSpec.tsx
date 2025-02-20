import React from 'react';
import { render } from '@testing-library/react';
import AutoComplete from '../index';
import { getStyle, toRGB, inChrome } from '@test/utils';

import '../styles/index.less';
import { PickerHandle } from '../../Picker';

describe('AutoComplete styles', () => {
  it('Input should render the correct styles', () => {
    const instanceRef = React.createRef<PickerHandle>();
    render(<AutoComplete ref={instanceRef} data={[]} />);
    const dom = ((instanceRef.current as PickerHandle).root as HTMLElement).querySelector(
      'input'
    ) as HTMLInputElement;
    assert.equal(getStyle(dom, 'backgroundColor'), toRGB('#fff'), 'AutoComplete background-color');
    // @description Can't get border-radius value in other browser except chrome
    inChrome &&
      assert.equal(getStyle(dom, 'border'), `1px solid ${toRGB('#e5e5ea')}`, 'AutoComplete border');
    assert.equal(getStyle(dom, 'color'), toRGB('#575757'), 'AutoComplete font-color');
    inChrome && assert.equal(getStyle(dom, 'borderRadius'), '6px', 'AutoComplete border-radius');
  });

  it('Should the correct styles when set `open` and `defaultValue`', () => {
    const instanceRef = React.createRef<PickerHandle>();
    render(<AutoComplete ref={instanceRef} data={['a', 'b', 'ab']} open defaultValue="a" />);
    const dom = ((instanceRef.current as PickerHandle).root as HTMLElement).querySelector(
      'input'
    ) as HTMLInputElement;
    const unFocusItemDom = document.querySelector(
      '.rs-auto-complete-item:not(.rs-auto-complete-item-focus)'
    ) as HTMLElement;

    assert.equal(getStyle(dom, 'color'), toRGB('#575757'), 'AutoComplete  focus item font-color');
    assert.equal(
      getStyle(unFocusItemDom, 'backgroundColor'),
      toRGB('#0000'),
      'AutoComplete unFocus item background-color'
    );
  });

  it('Disabled should render the correct styles', () => {
    const instanceRef = React.createRef<PickerHandle>();
    render(<AutoComplete ref={instanceRef} data={[]} disabled />);
    const dom = ((instanceRef.current as PickerHandle).root as HTMLElement).querySelector(
      'input'
    ) as HTMLInputElement;
    assert.equal(
      getStyle(dom, 'backgroundColor'),
      toRGB('#f7f7fa'),
      'Disabled autoComplete background-color'
    );
    assert.equal(getStyle(dom, 'color'), toRGB('#c5c6c7'), 'Disabled autoComplete color');
  });
});
