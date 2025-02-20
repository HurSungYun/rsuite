# CheckTreePicker

CheckTreePicker are supported in multiple selectors for multiple selection of complex data structures.

## Import

<!--{include:(components/check-tree-picker/fragments/import.md)}-->

## Examples

### Basic

<!--{include:`basic.md`}-->

### Appearance

<!--{include:`appearance.md`}-->

### Size

<!--{include:`size.md`}-->

### Cascade

The cascade attribute can set whether or not CheckTreePicker can consider the cascade relationship of the parent parent when selecting. The default value is true.

<!--{include:`cascade.md`}-->

### Placement

<!--{include:`placement.md`}-->

### Disabled and read only

<!--{include:`disabled.md`}-->

### Custom options

<!--{include:`custom.md`}-->

### Async

<!--{include:`async.md`}-->

### Extra footer

<!--{include:`extra-footer.md`}-->

## Accessibility

Learn more in [Accessibility](/guide/accessibility).

## Props

### `<CheckTreePicker>`

| Property                | Type `(Default)`                                                                                   | Description                                                               |
| ----------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| appearance              | 'default' &#124; 'subtle' `('default')`                                                            | Set picker appearence                                                     |
| block                   | boolean                                                                                            | Blocking an entire row                                                    |
| caretAs                 | ElementType                                                                                        | Custom component for the caret icon                                       |
| cascade                 | boolean                                                                                            | whether cascade select                                                    |
| childrenKey             | string `('children')`                                                                              | set children key in data                                                  |
| cleanable               | boolean `(true)`                                                                                   | whether the selected value can be cleared                                 |
| container               | HTMLElement &#124; (() => HTMLElement)                                                             | Sets the rendering container                                              |
| countable               | boolean `(true)`                                                                                   | whether display counts of checkItems                                      |
| data \*                 | [ItemDataType][item][]                                                                             | tree data                                                                 |
| defaultExpandAll        | boolean                                                                                            | expand all tree node                                                      |
| defaultExpandItemValues | string[]                                                                                           | Set the value of the default expanded node                                |
| defaultValue            | string[]                                                                                           | (UnControlled) default values of the selected tree node                   |
| disabled                | boolean                                                                                            | Whether to disable Picker                                                 |
| disabledItemValues      | string[]                                                                                           | Disable item by value                                                     |
| expandItemValues        | string[]                                                                                           | Set the value of the expanded node (controlled)                           |
| getChildren             | (item: [ItemDataType][item]) => Promise&lt;[ItemDataType][item]&gt;                                | load node children data asynchronously                                    |
| height                  | number `(360px)`                                                                                   | height of menu. When `virtualize` is true, you can set the height of menu |
| labelKey                | string `('label')`                                                                                 | set label key in data                                                     |
| listProps               | [ListProps][listprops]                                                                             | Properties of virtualized lists.                                          |
| loading                 | boolean `(false)`                                                                                  | Whether to display a loading state indicator                              |
| locale                  | [PickerLocaleType](/guide/i18n/#pickers)                                                           | Locale text                                                               |
| menuClassName           | string                                                                                             | className for Menu                                                        |
| menuStyle               | CSSProperties                                                                                      | style for Menu                                                            |
| onChange                | (values:string[]) => void                                                                          | Callback fired when value change                                          |
| onClean                 | (event:SyntheticEvent) => void                                                                     | Callback fired when value clean                                           |
| onClose                 | () => void                                                                                         | Callback fired when close component                                       |
| onEnter                 | () => void                                                                                         | Callback fired before the overlay transitions in                          |
| onEntered               | () => void                                                                                         | Callback fired after the overlay finishes transitioning in                |
| onEntering              | () => void                                                                                         | Callback fired as the overlay begins to transition in                     |
| onExit                  | () => void                                                                                         | Callback fired right before the overlay transitions out                   |
| onExited                | () => void                                                                                         | Callback fired after the overlay finishes transitioning out               |
| onExiting               | () => void                                                                                         | Callback fired as the overlay begins to transition out                    |
| onExpand                | (expandItemValues: string[], item: [ItemDataType][item], concat:(data, children) => Array) => void | Callback fired when tree node expand state changed                        |
| onOpen                  | () => void                                                                                         | Callback fired when open component                                        |
| onSearch                | (searchKeyword:string, event) => void                                                              | Callback fired when search                                                |
| onSelect                | (item:[ItemDataType][item], value:string, event) => void                                           | Callback fired when tree node is selected                                 |
| open                    | boolean                                                                                            | Whether open the component                                                |
| placeholder             | ReactNode `('Select')`                                                                             | Setting placeholders                                                      |
| placement               | [Placement](#code-ts-placement-code) `('bottomStart')`                                             | Placement of component                                                    |
| preventOverflow         | boolean                                                                                            | Prevent floating element overflow                                         |
| renderExtraFooter       | () => ReactNode                                                                                    | Custom render extra footer                                                |
| renderMenu              | (menu:ReactNode) => ReactNode                                                                      | Customizing the Rendering Menu list                                       |
| renderTreeIcon          | (item:[ItemDataType][item]) => ReactNode                                                           | Custom render the icon of tree node                                       |
| renderTreeNode          | (item:[ItemDataType][item]) => ReactNode                                                           | Custom render tree node                                                   |
| renderValue             | (values:string[], checkedItems:[ItemDataType][item][],selectedElement: ReactNode) => ReactNode     | Custom render selected items                                              |
| searchBy                | (keyword: string, label: ReactNode, item: [ItemDataType][item]) => boolean                         | Custom search rules                                                       |
| searchable              | boolean `(true)`                                                                                   | Whether display search input box                                          |
| size                    | 'lg' &#124; 'md' &#124; 'sm' &#124; 'xs' `('md')`                                                  | A picker can have different sizes                                         |
| toggleAs                | ElementType `('a')`                                                                                | You can use a custom element for this component                           |
| uncheckableItemValues   | string[]                                                                                           | Set the option value for the check box not to be rendered                 |
| value                   | string[]                                                                                           | (Controlled) specifies the values of the selected tree node               |
| valueKey                | string `('value')`                                                                                 | Set value key in data                                                     |
| virtualized             | boolean                                                                                            | Whether using Virtualized List                                            |

<!--{include:(_common/types/item-data-type.md)}-->
<!--{include:(_common/types/placement.md)}-->
<!--{include:(_common/types/list-props.md)}-->

## Related Components

- [`<CheckTree>`](/components/check-tree)
- [`<Tree>`](/components/tree)
- [`<TreePicker>`](/components/tree-picker)

[listprops]: #code-ts-list-props-code
[item]: #code-ts-item-data-type-code
