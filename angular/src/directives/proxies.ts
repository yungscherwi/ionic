/* angular directive proxies */
import { Directive as NgDirective, ElementRef, EventEmitter as NgEventEmitter, Input as NgInput, Output as NgOutput } from '@angular/core';

export function outputs(instance: any, events: string[]) {
  events.forEach(eventName => {
    instance[eventName] = new NgEventEmitter();
  });
}

export function inputs(instance: any, el: ElementRef, props: string[]) {
  props.forEach(propName => {
    Object.defineProperty(instance, propName, {
      get: () => el.nativeElement[propName], set: (val: any) => el.nativeElement[propName] = val
    });
  });
}

const accept = 'accept', activated = 'activated', active = 'active', allowEmptySelection = 'allowEmptySelection', animated = 'animated', autoHide = 'autoHide', autocapitalize = 'autocapitalize', autocomplete = 'autocomplete', autocorrect = 'autocorrect', autofocus = 'autofocus', badge = 'badge', badgeStyle = 'badgeStyle', btnId = 'btnId', button = 'button', buttonType = 'buttonType', cancelButtonText = 'cancelButtonText', cancelText = 'cancelText', checked = 'checked', clearInput = 'clearInput', clearOnEdit = 'clearOnEdit', closeDuration = 'closeDuration', color = 'color', cols = 'cols', component = 'component', componentProps = 'componentProps', contentId = 'contentId', dayNames = 'dayNames', dayShortNames = 'dayShortNames', dayValues = 'dayValues', debounce = 'debounce', defaultHref = 'defaultHref', delegate = 'delegate', detail = 'detail', disabled = 'disabled', displayFormat = 'displayFormat', doneText = 'doneText', dualKnobs = 'dualKnobs', duration = 'duration', edge = 'edge', expand = 'expand', expandable = 'expandable', fill = 'fill', fixed = 'fixed', floating = 'floating', forceOverscroll = 'forceOverscroll', fullscreen = 'fullscreen', goBack = 'goBack', header = 'header', horizontal = 'horizontal', hourValues = 'hourValues', href = 'href', icon = 'icon', inputmode = 'inputmode', interfaceOptions = 'interfaceOptions', ionBlur = 'ionBlur', ionCancel = 'ionCancel', ionChange = 'ionChange', ionClear = 'ionClear', ionClick = 'ionClick', ionClose = 'ionClose', ionDrag = 'ionDrag', ionFocus = 'ionFocus', ionInfinite = 'ionInfinite', ionInput = 'ionInput', ionInputDidLoad = 'ionInputDidLoad', ionInputDidUnload = 'ionInputDidUnload', ionMenuChange = 'ionMenuChange', ionNavDidChange = 'ionNavDidChange', ionNavWillChange = 'ionNavWillChange', ionOpen = 'ionOpen', ionPull = 'ionPull', ionRadioDidLoad = 'ionRadioDidLoad', ionRadioDidUnload = 'ionRadioDidUnload', ionRefresh = 'ionRefresh', ionScroll = 'ionScroll', ionScrollEnd = 'ionScrollEnd', ionScrollStart = 'ionScrollStart', ionSelect = 'ionSelect', ionSelectOptionDidLoad = 'ionSelectOptionDidLoad', ionSelectOptionDidUnload = 'ionSelectOptionDidUnload', ionSlideDidChange = 'ionSlideDidChange', ionSlideDrag = 'ionSlideDrag', ionSlideNextEnd = 'ionSlideNextEnd', ionSlideNextStart = 'ionSlideNextStart', ionSlidePrevEnd = 'ionSlidePrevEnd', ionSlidePrevStart = 'ionSlidePrevStart', ionSlideReachEnd = 'ionSlideReachEnd', ionSlideReachStart = 'ionSlideReachStart', ionSlideTouchEnd = 'ionSlideTouchEnd', ionSlideTouchStart = 'ionSlideTouchStart', ionSlideTransitionEnd = 'ionSlideTransitionEnd', ionSlideTransitionStart = 'ionSlideTransitionStart', ionSlideWillChange = 'ionSlideWillChange', ionSplitPaneVisible = 'ionSplitPaneVisible', ionStart = 'ionStart', ionStyle = 'ionStyle', ionSwipe = 'ionSwipe', label = 'label', loadingSpinner = 'loadingSpinner', loadingText = 'loadingText', max = 'max', maxEdgeStart = 'maxEdgeStart', maxlength = 'maxlength', mediaQuery = 'mediaQuery', menu = 'menu', menuId = 'menuId', message = 'message', min = 'min', minlength = 'minlength', minuteValues = 'minuteValues', mode = 'mode', monthNames = 'monthNames', monthShortNames = 'monthShortNames', monthValues = 'monthValues', multiple = 'multiple', name = 'name', okText = 'okText', options = 'options', or = 'or', orientation = 'orientation', pager = 'pager', pattern = 'pattern', paused = 'paused', persistent = 'persistent', pickerFormat = 'pickerFormat', pickerOptions = 'pickerOptions', pin = 'pin', placeholder = 'placeholder', platform = 'platform', position = 'position', pullMax = 'pullMax', pullMin = 'pullMin', pullingIcon = 'pullingIcon', pullingText = 'pullingText', readonly = 'readonly', refreshingSpinner = 'refreshingSpinner', refreshingText = 'refreshingText', required = 'required', results = 'results', root = 'root', rootParams = 'rootParams', round = 'round', rows = 'rows', scrollEnabled = 'scrollEnabled', scrollEvents = 'scrollEvents', scrollable = 'scrollable', selected = 'selected', selectedText = 'selectedText', show = 'show', showCancelButton = 'showCancelButton', side = 'side', size = 'size', snapbackDuration = 'snapbackDuration', snaps = 'snaps', spellcheck = 'spellcheck', stacked = 'stacked', step = 'step', strong = 'strong', subHeader = 'subHeader', swipeBackEnabled = 'swipeBackEnabled', swipeEnabled = 'swipeEnabled', tabbarHidden = 'tabbarHidden', tabbarHighlight = 'tabbarHighlight', tabbarLayout = 'tabbarLayout', tabbarPlacement = 'tabbarPlacement', tabsHideOnSubPages = 'tabsHideOnSubPages', text = 'text', threshold = 'threshold', toggleActive = 'toggleActive', translucent = 'translucent', type = 'type', url = 'url', useRouter = 'useRouter', useTapClick = 'useTapClick', value = 'value', vertical = 'vertical', when = 'when', width = 'width', wrap = 'wrap', yearValues = 'yearValues';

@NgDirective({ selector: 'ion-app' })
export class App {
}

@NgDirective({ selector: 'ion-avatar' })
export class Avatar {
}

@NgDirective({ selector: 'ion-back-button' })
export class BackButton {
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  /**
   * The text property is used to provide custom text for the back button while using the default look-and-feel.
   */
  @NgInput() text: any;
  @NgInput() icon: string;
  @NgInput() defaultHref: string;
  constructor(el: ElementRef) {
    inputs(this, el, [mode, text, icon, defaultHref]);
  }
}

@NgDirective({ selector: 'ion-badge' })
export class Badge {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode]);
  }
}

@NgDirective({ selector: 'ion-button' })
export class Button {
  /**
   * The type of the button. Possible values are: `"submit"`, `"reset"` and `"button"`. Default value is: `"button"`
   */
  @NgInput() type: string;
  /**
   * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
   */
  @NgInput() href: string;
  /**
   * The type of button. Possible values are: `"button"`, `"bar-button"`.
   */
  @NgInput() buttonType: string;
  /**
   * The button size. Possible values are: `"small"`, `"default"`, `"large"`.
   */
  @NgInput() size: any;
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @NgInput() disabled: boolean;
  /**
   * Set to `"clear"` for a transparent button, to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"` except inside of a toolbar, where the default is `"clear"`.
   */
  @NgInput() fill: any;
  /**
   * If true, activates a button with rounded corners.
   */
  @NgInput() round: boolean;
  /**
   * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
   */
  @NgInput() expand: any;
  /**
   * If true, activates a button with a heavier font weight.
   */
  @NgInput() strong: boolean;
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  @NgInput() goBack: boolean;
  @NgOutput() ionFocus: NgEventEmitter<any>;
  @NgOutput() ionBlur: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [type, href, buttonType, size, disabled, fill, round, expand, strong, color, mode, goBack]);
    outputs(this, [ionFocus, ionBlur]);
  }
}

@NgDirective({ selector: 'ion-buttons' })
export class Buttons {
}

@NgDirective({ selector: 'ion-card' })
export class Card {
  /**
   * The color to use for the background. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`.
   */
  @NgInput() mode: any;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode]);
  }
}

@NgDirective({ selector: 'ion-card-content' })
export class CardContent {
  /**
   * The color to use for the text. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`.
   */
  @NgInput() mode: any;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode]);
  }
}

@NgDirective({ selector: 'ion-card-header' })
export class CardHeader {
  /**
   * The color to use for the background. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`.
   */
  @NgInput() mode: any;
  /**
   * If true, the card header will be translucent. Defaults to `false`.
   */
  @NgInput() translucent: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode, translucent]);
  }
}

@NgDirective({ selector: 'ion-card-subtitle' })
export class CardSubtitle {
  /**
   * The color to use for the text color. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`.
   */
  @NgInput() mode: any;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode]);
  }
}

@NgDirective({ selector: 'ion-card-title' })
export class CardTitle {
  /**
   * The color to use for the text color. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`.
   */
  @NgInput() mode: any;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode]);
  }
}

@NgDirective({ selector: 'ion-checkbox' })
export class Checkbox {
  /**
   * The color to use. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`.
   */
  @NgInput() mode: any;
  /**
   * The name of the control, which is submitted with the form data.
   */
  @NgInput() name: string;
  /**
   * If true, the checkbox is selected. Defaults to `false`.
   */
  @NgInput() checked: boolean;
  /**
   * If true, the user cannot interact with the checkbox. Defaults to `false`.
   */
  @NgInput() disabled: boolean;
  /**
   * the value of the checkbox.
   */
  @NgInput() value: string;
  @NgOutput() ionChange: NgEventEmitter<any>;
  @NgOutput() ionFocus: NgEventEmitter<any>;
  @NgOutput() ionBlur: NgEventEmitter<any>;
  @NgOutput() ionStyle: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode, name, checked, disabled, value]);
    outputs(this, [ionChange, ionFocus, ionBlur, ionStyle]);
  }
}

@NgDirective({ selector: 'ion-chip' })
export class Chip {
  /**
   * The color to use. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`.
   */
  @NgInput() mode: any;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode]);
  }
}

@NgDirective({ selector: 'ion-chip-button' })
export class ChipButton {
  /**
   * The color to use. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`.
   */
  @NgInput() mode: any;
  /**
   * If true, the user cannot interact with the chip button. Defaults to `false`.
   */
  @NgInput() disabled: boolean;
  /**
   * Set to `"clear"` for a transparent button style.
   */
  @NgInput() fill: string;
  /**
   * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
   */
  @NgInput() href: string;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode, disabled, fill, href]);
  }
}

@NgDirective({ selector: 'ion-col' })
export class Col {
}

@NgDirective({ selector: 'ion-content' })
export class Content {
  /**
   * If true, the content will scroll behind the headers and footers. This effect can easily be seen by setting the toolbar to transparent.
   */
  @NgInput() fullscreen: boolean;
  /**
   * If true and the content does not cause an overflow scroll, the scroll interaction will cause a bounce. If the content exceeds the bounds of ionContent, nothing will change. Note, the does not disable the system bounce on iOS. That is an OS level setting.
   */
  @NgInput() forceOverscroll: boolean;
  @NgInput() scrollEnabled: boolean;
  @NgInput() scrollEvents: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [fullscreen, forceOverscroll, scrollEnabled, scrollEvents]);
  }
}

@NgDirective({ selector: 'ion-datetime' })
export class Datetime {
  /**
   * If true, the user cannot interact with the datetime. Defaults to `false`.
   */
  @NgInput() disabled: boolean;
  /**
   * The minimum datetime allowed. Value must be a date string following the [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime), such as `1996-12-19`. The format does not have to be specific to an exact datetime. For example, the minimum could just be the year, such as `1994`. Defaults to the beginning of the year, 100 years ago from today.
   */
  @NgInput() min: string;
  /**
   * The maximum datetime allowed. Value must be a date string following the [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime), `1996-12-19`. The format does not have to be specific to an exact datetime. For example, the maximum could just be the year, such as `1994`. Defaults to the end of this year.
   */
  @NgInput() max: string;
  /**
   * The display format of the date and time as text that shows within the item. When the `pickerFormat` input is not used, then the `displayFormat` is used for both display the formatted text, and determining the datetime picker's columns. See the `pickerFormat` input description for more info. Defaults to `MMM D, YYYY`.
   */
  @NgInput() displayFormat: string;
  /**
   * The format of the date and time picker columns the user selects. A datetime input can have one or many datetime parts, each getting their own column which allow individual selection of that particular datetime part. For example, year and month columns are two individually selectable columns which help choose an exact date from the datetime picker. Each column follows the string parse format. Defaults to use `displayFormat`.
   */
  @NgInput() pickerFormat: string;
  /**
   * The text to display on the picker's cancel button. Default: `Cancel`.
   */
  @NgInput() cancelText: string;
  /**
   * The text to display on the picker's "Done" button. Default: `Done`.
   */
  @NgInput() doneText: string;
  /**
   * Values used to create the list of selectable years. By default the year values range between the `min` and `max` datetime inputs. However, to control exactly which years to display, the `yearValues` input can take a number, an array of numbers, or string of comma separated numbers. For example, to show upcoming and recent leap years, then this input's value would be `yearValues="2024,2020,2016,2012,2008"`.
   */
  @NgInput() yearValues: any;
  /**
   * Values used to create the list of selectable months. By default the month values range from `1` to `12`. However, to control exactly which months to display, the `monthValues` input can take a number, an array of numbers, or a string of comma separated numbers. For example, if only summer months should be shown, then this input value would be `monthValues="6,7,8"`. Note that month numbers do *not* have a zero-based index, meaning January's value is `1`, and December's is `12`.
   */
  @NgInput() monthValues: any;
  /**
   * Values used to create the list of selectable days. By default every day is shown for the given month. However, to control exactly which days of the month to display, the `dayValues` input can take a number, an array of numbers, or a string of comma separated numbers. Note that even if the array days have an invalid number for the selected month, like `31` in February, it will correctly not show days which are not valid for the selected month.
   */
  @NgInput() dayValues: any;
  /**
   * Values used to create the list of selectable hours. By default the hour values range from `0` to `23` for 24-hour, or `1` to `12` for 12-hour. However, to control exactly which hours to display, the `hourValues` input can take a number, an array of numbers, or a string of comma separated numbers.
   */
  @NgInput() hourValues: any;
  /**
   * Values used to create the list of selectable minutes. By default the mintues range from `0` to `59`. However, to control exactly which minutes to display, the `minuteValues` input can take a number, an array of numbers, or a string of comma separated numbers. For example, if the minute selections should only be every 15 minutes, then this input value would be `minuteValues="0,15,30,45"`.
   */
  @NgInput() minuteValues: any;
  /**
   * Full names for each month name. This can be used to provide locale month names. Defaults to English.
   */
  @NgInput() monthNames: any;
  /**
   * Short abbreviated names for each month name. This can be used to provide locale month names. Defaults to English.
   */
  @NgInput() monthShortNames: any;
  /**
   * Full day of the week names. This can be used to provide locale names for each day in the week. Defaults to English.
   */
  @NgInput() dayNames: any;
  /**
   * Short abbreviated day of the week names. This can be used to provide locale names for each day in the week. Defaults to English.
   */
  @NgInput() dayShortNames: any;
  /**
   * Any additional options that the picker interface can accept. See the [Picker API docs](../../picker/Picker) for the picker options.
   */
  @NgInput() pickerOptions: any;
  /**
   * The text to display when there's no date selected yet. Using lowercase to match the input attribute
   */
  @NgInput() placeholder: string;
  /**
   * the value of the datetime.
   */
  @NgInput() value: string;
  @NgOutput() ionCancel: NgEventEmitter<any>;
  @NgOutput() ionStyle: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [disabled, min, max, displayFormat, pickerFormat, cancelText, doneText, yearValues, monthValues, dayValues, hourValues, minuteValues, monthNames, monthShortNames, dayNames, dayShortNames, pickerOptions, placeholder, value]);
    outputs(this, [ionCancel, ionStyle]);
  }
}

@NgDirective({ selector: 'ion-fab' })
export class Fab {
  /**
   * Where to align the fab horizontally in the viewport. Possible values are: `"left"`, `"right"`, `"center"`, `"start"`, `"end"`.
   */
  @NgInput() horizontal: any;
  /**
   * Where to align the fab vertically in the viewport. Possible values are: `"top"`, `"center"`, `"bottom"`.
   */
  @NgInput() vertical: any;
  /**
   * If true, the fab will display on the edge of the header if `vertical` is `"top"`, and on the edge of the footer if it is `"bottom"`. Should be used with a `fixed` slot.
   */
  @NgInput() edge: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [horizontal, vertical, edge]);
  }
}

@NgDirective({ selector: 'ion-fab-button' })
export class FabButton {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  /**
   * If true, the fab button will be show a close icon. Defaults to `false`.
   */
  @NgInput() activated: boolean;
  /**
   * If true, the user cannot interact with the fab button. Defaults to `false`.
   */
  @NgInput() disabled: boolean;
  /**
   * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
   */
  @NgInput() href: string;
  /**
   * If true, the fab button will be translucent. Defaults to `false`.
   */
  @NgInput() translucent: boolean;
  @NgInput() toggleActive: any;
  @NgInput() show: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode, activated, disabled, href, translucent, toggleActive, show]);
  }
}

@NgDirective({ selector: 'ion-fab-list' })
export class FabList {
  /**
   * If true, the fab list will be show all fab buttons in the list. Defaults to `false`.
   */
  @NgInput() activated: boolean;
  /**
   * The side the fab list will show on relative to the main fab button. Defaults to `'bottom'`.
   */
  @NgInput() side: any;
  constructor(el: ElementRef) {
    inputs(this, el, [activated, side]);
  }
}

@NgDirective({ selector: 'ion-footer' })
export class Footer {
  /**
   * If true, the footer will be translucent. Note: In order to scroll content behind the footer, the `fullscreen` attribute needs to be set on the content. Defaults to `false`.
   */
  @NgInput() translucent: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [translucent]);
  }
}

@NgDirective({ selector: 'ion-grid' })
export class Grid {
}

@NgDirective({ selector: 'ion-header' })
export class Header {
  /**
   * If true, the header will be translucent. Note: In order to scroll content behind the header, the `fullscreen` attribute needs to be set on the content. Defaults to `false`.
   */
  @NgInput() translucent: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [translucent]);
  }
}

@NgDirective({ selector: 'ion-hide-when' })
export class HideWhen {
  @NgInput() orientation: string;
  @NgInput() mediaQuery: string;
  @NgInput() size: string;
  @NgInput() mode: string;
  @NgInput() platform: string;
  @NgInput() or: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [orientation, mediaQuery, size, mode, platform, or]);
  }
}

@NgDirective({ selector: 'ion-infinite-scroll' })
export class InfiniteScroll {
  /**
   * The threshold distance from the bottom of the content to call the `infinite` output event when scrolled. The threshold value can be either a percent, or in pixels. For example, use the value of `10%` for the `infinite` output event to get called when the user has scrolled 10% from the bottom of the page. Use the value `100px` when the scroll is within 100 pixels from the bottom of the page. Defaults to `15%`.
   */
  @NgInput() threshold: string;
  /**
   * If true, the infinite scroll will be hidden and scroll event listeners will be removed.  Call `enable(false)` to disable the infinite scroll from actively trying to receive new data while scrolling. This method is useful when it is known that there is no more data that can be added, and the infinite scroll is no longer needed.
   */
  @NgInput() disabled: boolean;
  /**
   * The position of the infinite scroll element. The value can be either `top` or `bottom`. Defaults to `bottom`.
   */
  @NgInput() position: string;
  @NgOutput() ionInfinite: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [threshold, disabled, position]);
    outputs(this, [ionInfinite]);
  }
}

@NgDirective({ selector: 'ion-infinite-scroll-content' })
export class InfiniteScrollContent {
  /**
   * An animated SVG spinner that shows while loading.
   */
  @NgInput() loadingSpinner: string;
  /**
   * Optional text to display while loading.
   */
  @NgInput() loadingText: string;
  constructor(el: ElementRef) {
    inputs(this, el, [loadingSpinner, loadingText]);
  }
}

@NgDirective({ selector: 'ion-input' })
export class Input {
  /**
   * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
   */
  @NgInput() accept: string;
  /**
   * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Defaults to `"none"`.
   */
  @NgInput() autocapitalize: string;
  /**
   * Indicates whether the value of the control can be automatically completed by the browser. Defaults to `"off"`.
   */
  @NgInput() autocomplete: string;
  /**
   * Whether autocorrection should be enabled when the user is entering/editing the text value. Defaults to `"off"`.
   */
  @NgInput() autocorrect: string;
  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Defaults to `false`.
   */
  @NgInput() autofocus: boolean;
  /**
   * If true and the type is `checkbox` or `radio`, the control is selected by default. Defaults to `false`.
   */
  @NgInput() checked: boolean;
  /**
   * If true, a clear icon will appear in the input when there is a value. Clicking it clears the input. Defaults to `false`.
   */
  @NgInput() clearInput: boolean;
  /**
   * If true, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
   */
  @NgInput() clearOnEdit: boolean;
  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `ionInput` event after each keystroke. Default `0`.
   */
  @NgInput() debounce: number;
  /**
   * If true, the user cannot interact with the input. Defaults to `false`.
   */
  @NgInput() disabled: boolean;
  /**
   * A hint to the browser for which keyboard to display. This attribute applies when the value of the type attribute is `"text"`, `"password"`, `"email"`, or `"url"`. Possible values are: `"verbatim"`, `"latin"`, `"latin-name"`, `"latin-prose"`, `"full-width-latin"`, `"kana"`, `"katakana"`, `"numeric"`, `"tel"`, `"email"`, `"url"`.
   */
  @NgInput() inputmode: string;
  /**
   * The maximum value, which must not be less than its minimum (min attribute) value.
   */
  @NgInput() max: string;
  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  @NgInput() maxlength: number;
  /**
   * The minimum value, which must not be greater than its maximum (max attribute) value.
   */
  @NgInput() min: string;
  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  @NgInput() minlength: number;
  /**
   * If true, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
   */
  @NgInput() multiple: boolean;
  /**
   * The name of the control, which is submitted with the form data.
   */
  @NgInput() name: string;
  /**
   * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
   */
  @NgInput() pattern: string;
  /**
   * Instructional text that shows before the input has a value.
   */
  @NgInput() placeholder: string;
  /**
   * If true, the user cannot modify the value. Defaults to `false`.
   */
  @NgInput() readonly: boolean;
  /**
   * If true, the user must fill in a value before submitting a form.
   */
  @NgInput() required: boolean;
  /**
   * This is a nonstandard attribute supported by Safari that only applies when the type is `"search"`. Its value should be a nonnegative decimal integer.
   */
  @NgInput() results: number;
  /**
   * If true, the element will have its spelling and grammar checked. Defaults to `false`.
   */
  @NgInput() spellcheck: boolean;
  /**
   * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
   */
  @NgInput() step: string;
  /**
   * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
   */
  @NgInput() size: number;
  /**
   * The type of control to display. The default type is text. Possible values are: `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, or `"url"`.
   */
  @NgInput() type: string;
  /**
   * The value of the input.
   */
  @NgInput() value: string;
  @NgOutput() ionInput: NgEventEmitter<any>;
  @NgOutput() ionStyle: NgEventEmitter<any>;
  @NgOutput() ionBlur: NgEventEmitter<any>;
  @NgOutput() ionFocus: NgEventEmitter<any>;
  @NgOutput() ionInputDidLoad: NgEventEmitter<any>;
  @NgOutput() ionInputDidUnload: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [accept, autocapitalize, autocomplete, autocorrect, autofocus, checked, clearInput, clearOnEdit, debounce, disabled, inputmode, max, maxlength, min, minlength, multiple, name, pattern, placeholder, readonly, required, results, spellcheck, step, size, type, value]);
    outputs(this, [ionInput, ionStyle, ionBlur, ionFocus, ionInputDidLoad, ionInputDidUnload]);
  }
}

@NgDirective({ selector: 'ion-item' })
export class Item {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  /**
   * If true, a detail arrow will appear on the item. Defaults to `false` unless the `mode` is `ios` and an `href`, `onclick` or `button` property is present.
   */
  @NgInput() detail: boolean;
  /**
   * If true, the user cannot interact with the item. Defaults to `false`.
   */
  @NgInput() disabled: boolean;
  /**
   * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
   */
  @NgInput() href: string;
  /**
   * Whether or not this item should be tappable. If true, a button tag will be rendered. Defaults to `false`.
   */
  @NgInput() button: boolean;
  @NgInput() goBack: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode, detail, disabled, href, button, goBack]);
  }
}

@NgDirective({ selector: 'ion-item-divider' })
export class ItemDivider {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode]);
  }
}

@NgDirective({ selector: 'ion-item-group' })
export class ItemGroup {
}

@NgDirective({ selector: 'ion-item-option' })
export class ItemOption {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  /**
   * If true, the user cannot interact with the item option. Defaults to `false`.
   */
  @NgInput() disabled: boolean;
  /**
   * If true, the option will expand to take up the available width and cover any other options. Defaults to `false`.
   */
  @NgInput() expandable: boolean;
  /**
   * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
   */
  @NgInput() href: string;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode, disabled, expandable, href]);
  }
}

@NgDirective({ selector: 'ion-item-options' })
export class ItemOptions {
  /**
   * The side the option button should be on. Defaults to `"right"`. If you have multiple `ion-item-options`, a side must be provided for each.
   */
  @NgInput() side: any;
  @NgOutput() ionSwipe: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [side]);
    outputs(this, [ionSwipe]);
  }
}

@NgDirective({ selector: 'ion-item-sliding' })
export class ItemSliding {
  @NgOutput() ionDrag: NgEventEmitter<any>;
  constructor() {
    outputs(this, [ionDrag]);
  }
}

@NgDirective({ selector: 'ion-label' })
export class Label {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  /**
   * If true, the label will sit alongside an input. Defaults to `false`.
   */
  @NgInput() fixed: boolean;
  /**
   * If true, the label will float above an input when the value is empty or the input is focused. Defaults to `false`.
   */
  @NgInput() floating: boolean;
  /**
   * If true, the label will be stacked above an input. Defaults to `false`.
   */
  @NgInput() stacked: boolean;
  @NgOutput() ionStyle: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode, fixed, floating, stacked]);
    outputs(this, [ionStyle]);
  }
}

@NgDirective({ selector: 'ion-list' })
export class List {
}

@NgDirective({ selector: 'ion-list-header' })
export class ListHeader {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode]);
  }
}

@NgDirective({ selector: 'ion-menu' })
export class Menu {
  /**
   * The content's id the menu should use.
   */
  @NgInput() contentId: string;
  /**
   * An id for the menu.
   */
  @NgInput() menuId: string;
  /**
   * The display type of the menu. Default varies based on the mode, see the `menuType` in the [config](../../config/Config). Available options: `"overlay"`, `"reveal"`, `"push"`.
   */
  @NgInput() type: string;
  /**
   * If true, the menu is disabled. Default `false`.
   */
  @NgInput() disabled: boolean;
  /**
   * Which side of the view the menu should be placed. Default `"start"`.
   */
  @NgInput() side: any;
  /**
   * If true, swiping the menu is enabled. Default `true`.
   */
  @NgInput() swipeEnabled: boolean;
  /**
   * If true, the menu will persist on child pages.
   */
  @NgInput() persistent: boolean;
  @NgInput() maxEdgeStart: number;
  @NgOutput() ionOpen: NgEventEmitter<any>;
  @NgOutput() ionClose: NgEventEmitter<any>;
  @NgOutput() ionMenuChange: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [contentId, menuId, type, disabled, side, swipeEnabled, persistent, maxEdgeStart]);
    outputs(this, [ionOpen, ionClose, ionMenuChange]);
  }
}

@NgDirective({ selector: 'ion-menu-button' })
export class MenuButton {
  /**
   * Optional property that maps to a Menu's `menuId` prop. Can also be `left` or `right` for the menu side. This is used to find the correct menu to toggle
   */
  @NgInput() menu: string;
  /**
   * Automatically hides the menu button when the corresponding menu is not active
   */
  @NgInput() autoHide: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [menu, autoHide]);
  }
}

@NgDirective({ selector: 'ion-menu-toggle' })
export class MenuToggle {
  /**
   * Optional property that maps to a Menu's `menuId` prop. Can also be `left` or `right` for the menu side. This is used to find the correct menu to toggle
   */
  @NgInput() menu: string;
  /**
   * Automatically hides the content when the corresponding menu is not active
   */
  @NgInput() autoHide: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [menu, autoHide]);
  }
}

@NgDirective({ selector: 'ion-nav' })
export class Nav {
  @NgInput() swipeBackEnabled: boolean;
  @NgInput() animated: boolean;
  @NgInput() delegate: any;
  @NgInput() rootParams: any;
  @NgInput() root: any;
  @NgOutput() ionNavWillChange: NgEventEmitter<any>;
  @NgOutput() ionNavDidChange: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [swipeBackEnabled, animated, delegate, rootParams, root]);
    outputs(this, [ionNavWillChange, ionNavDidChange]);
  }
}

@NgDirective({ selector: 'ion-nav-pop' })
export class NavPop {
}

@NgDirective({ selector: 'ion-nav-push' })
export class NavPush {
  @NgInput() component: any;
  @NgInput() componentProps: any;
  @NgInput() url: string;
  constructor(el: ElementRef) {
    inputs(this, el, [component, componentProps, url]);
  }
}

@NgDirective({ selector: 'ion-nav-set-root' })
export class NavSetRoot {
  @NgInput() component: any;
  @NgInput() componentProps: any;
  @NgInput() url: string;
  constructor(el: ElementRef) {
    inputs(this, el, [component, componentProps, url]);
  }
}

@NgDirective({ selector: 'ion-note' })
export class Note {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode]);
  }
}

@NgDirective({ selector: 'ion-radio' })
export class Radio {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  /**
   * The name of the control, which is submitted with the form data.
   */
  @NgInput() name: string;
  /**
   * Indicates that the user cannot interact with the control.
   */
  @NgInput() disabled: boolean;
  /**
   * If true, the radio is selected. Defaults to `false`.
   */
  @NgInput() checked: boolean;
  /**
   * the value of the radio.
   */
  @NgInput() value: string;
  @NgOutput() ionRadioDidLoad: NgEventEmitter<any>;
  @NgOutput() ionRadioDidUnload: NgEventEmitter<any>;
  @NgOutput() ionStyle: NgEventEmitter<any>;
  @NgOutput() ionSelect: NgEventEmitter<any>;
  @NgOutput() ionFocus: NgEventEmitter<any>;
  @NgOutput() ionBlur: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode, name, disabled, checked, value]);
    outputs(this, [ionRadioDidLoad, ionRadioDidUnload, ionStyle, ionSelect, ionFocus, ionBlur]);
  }
}

@NgDirective({ selector: 'ion-radio-group' })
export class RadioGroup {
  @NgInput() allowEmptySelection: boolean;
  /**
   * Indicates that the user cannot interact with the control.
   */
  @NgInput() disabled: boolean;
  /**
   * The name of the control, which is submitted with the form data.
   */
  @NgInput() name: string;
  /**
   * the value of the radio group.
   */
  @NgInput() value: string;
  @NgOutput() ionChange: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [allowEmptySelection, disabled, name, value]);
    outputs(this, [ionChange]);
  }
}

@NgDirective({ selector: 'ion-range' })
export class Range {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  /**
   * How long, in milliseconds, to wait to trigger the `ionChange` event after each change in the range value. Default `0`.
   */
  @NgInput() debounce: number;
  @NgInput() disabled: boolean;
  /**
   * Show two knobs. Defaults to `false`.
   */
  @NgInput() dualKnobs: boolean;
  /**
   * Maximum integer value of the range. Defaults to `100`.
   */
  @NgInput() max: number;
  /**
   * Minimum integer value of the range. Defaults to `0`.
   */
  @NgInput() min: number;
  /**
   * If true, a pin with integer value is shown when the knob is pressed. Defaults to `false`.
   */
  @NgInput() pin: boolean;
  /**
   * If true, the knob snaps to tick marks evenly spaced based on the step property value. Defaults to `false`.
   */
  @NgInput() snaps: boolean;
  /**
   * Specifies the value granularity. Defaults to `1`.
   */
  @NgInput() step: number;
  /**
   * the value of the range.
   */
  @NgInput() value: any;
  @NgOutput() ionChange: NgEventEmitter<any>;
  @NgOutput() ionStyle: NgEventEmitter<any>;
  @NgOutput() ionFocus: NgEventEmitter<any>;
  @NgOutput() ionBlur: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode, debounce, disabled, dualKnobs, max, min, pin, snaps, step, value]);
    outputs(this, [ionChange, ionStyle, ionFocus, ionBlur]);
  }
}

@NgDirective({ selector: 'ion-refresher' })
export class Refresher {
  /**
   * The minimum distance the user must pull down until the refresher will go into the `refreshing` state. Defaults to `60`.
   */
  @NgInput() pullMin: number;
  /**
   * The maximum distance of the pull until the refresher will automatically go into the `refreshing` state. Defaults to the result of `pullMin + 60`.
   */
  @NgInput() pullMax: any;
  /**
   * Time it takes to close the refresher. Defaults to `280ms`.
   */
  @NgInput() closeDuration: string;
  /**
   * Time it takes the refresher to to snap back to the `refreshing` state. Defaults to `280ms`.
   */
  @NgInput() snapbackDuration: string;
  /**
   * If true, the refresher will be hidden. Defaults to `true`.
   */
  @NgInput() disabled: boolean;
  @NgOutput() ionRefresh: NgEventEmitter<any>;
  @NgOutput() ionPull: NgEventEmitter<any>;
  @NgOutput() ionStart: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [pullMin, pullMax, closeDuration, snapbackDuration, disabled]);
    outputs(this, [ionRefresh, ionPull, ionStart]);
  }
}

@NgDirective({ selector: 'ion-refresher-content' })
export class RefresherContent {
  /**
   * A static icon to display when you begin to pull down
   */
  @NgInput() pullingIcon: string;
  /**
   * The text you want to display when you begin to pull down
   */
  @NgInput() pullingText: string;
  /**
   * An animated SVG spinner that shows when refreshing begins
   */
  @NgInput() refreshingSpinner: string;
  /**
   * The text you want to display when performing a refresh
   */
  @NgInput() refreshingText: string;
  constructor(el: ElementRef) {
    inputs(this, el, [pullingIcon, pullingText, refreshingSpinner, refreshingText]);
  }
}

@NgDirective({ selector: 'ion-reorder' })
export class Reorder {
}

@NgDirective({ selector: 'ion-reorder-group' })
export class ReorderGroup {
  /**
   * If true, the reorder will be hidden. Defaults to `true`.
   */
  @NgInput() disabled: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [disabled]);
  }
}

@NgDirective({ selector: 'ion-ripple-effect' })
export class RippleEffect {
  @NgInput() useTapClick: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [useTapClick]);
  }
}

@NgDirective({ selector: 'ion-row' })
export class Row {
}

@NgDirective({ selector: 'ion-scroll' })
export class Scroll {
  @NgInput() mode: string;
  /**
   * If true and the content does not cause an overflow scroll, the scroll interaction will cause a bounce. If the content exceeds the bounds of ionScroll, nothing will change. Note, the does not disable the system bounce on iOS. That is an OS level setting.
   */
  @NgInput() forceOverscroll: boolean;
  @NgInput() scrollEvents: boolean;
  @NgOutput() ionScrollStart: NgEventEmitter<any>;
  @NgOutput() ionScroll: NgEventEmitter<any>;
  @NgOutput() ionScrollEnd: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [mode, forceOverscroll, scrollEvents]);
    outputs(this, [ionScrollStart, ionScroll, ionScrollEnd]);
  }
}

@NgDirective({ selector: 'ion-searchbar' })
export class Searchbar {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  /**
   * If true, enable searchbar animation. Default `false`.
   */
  @NgInput() animated: boolean;
  /**
   * Set the input's autocomplete property. Values: `"on"`, `"off"`. Default `"off"`.
   */
  @NgInput() autocomplete: string;
  /**
   * Set the input's autocorrect property. Values: `"on"`, `"off"`. Default `"off"`.
   */
  @NgInput() autocorrect: string;
  /**
   * Set the the cancel button text. Default: `"Cancel"`.
   */
  @NgInput() cancelButtonText: string;
  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `ionInput` event after each keystroke. Default `250`.
   */
  @NgInput() debounce: number;
  /**
   * Set the input's placeholder. Default `"Search"`.
   */
  @NgInput() placeholder: string;
  /**
   * If true, show the cancel button. Default `false`.
   */
  @NgInput() showCancelButton: boolean;
  /**
   * If true, enable spellcheck on the input. Default `false`.
   */
  @NgInput() spellcheck: boolean;
  /**
   * Set the type of the input. Values: `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, `"url"`. Default `"search"`.
   */
  @NgInput() type: string;
  /**
   * the value of the searchbar.
   */
  @NgInput() value: string;
  @NgOutput() ionInput: NgEventEmitter<any>;
  @NgOutput() ionCancel: NgEventEmitter<any>;
  @NgOutput() ionClear: NgEventEmitter<any>;
  @NgOutput() ionBlur: NgEventEmitter<any>;
  @NgOutput() ionFocus: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode, animated, autocomplete, autocorrect, cancelButtonText, debounce, placeholder, showCancelButton, spellcheck, type, value]);
    outputs(this, [ionInput, ionCancel, ionClear, ionBlur, ionFocus]);
  }
}

@NgDirective({ selector: 'ion-segment' })
export class Segment {
  /**
   * The color to use for the text color. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`.
   */
  @NgInput() mode: any;
  @NgInput() disabled: boolean;
  /**
   * the value of the segment.
   */
  @NgInput() value: string;
  @NgOutput() ionChange: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode, disabled, value]);
    outputs(this, [ionChange]);
  }
}

@NgDirective({ selector: 'ion-segment-button' })
export class SegmentButton {
  @NgInput() activated: boolean;
  /**
   * The color to use for the text color. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`.
   */
  @NgInput() mode: any;
  /**
   * If true, the segment button is selected. Defaults to `false`.
   */
  @NgInput() checked: boolean;
  @NgInput() disabled: boolean;
  /**
   * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
   */
  @NgInput() href: string;
  /**
   * The value of the segment button.
   */
  @NgInput() value: string;
  @NgOutput() ionClick: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [activated, color, mode, checked, disabled, href, value]);
    outputs(this, [ionClick]);
  }
}

@NgDirective({ selector: 'ion-select' })
export class Select {
  /**
   * If true, the user cannot interact with the select. Defaults to `false`.
   */
  @NgInput() disabled: boolean;
  /**
   * The text to display on the cancel button. Default: `Cancel`.
   */
  @NgInput() cancelText: string;
  /**
   * The text to display on the ok button. Default: `OK`.
   */
  @NgInput() okText: string;
  /**
   * The text to display when the select is empty.
   */
  @NgInput() placeholder: string;
  /**
   * The name of the control, which is submitted with the form data.
   */
  @NgInput() name: string;
  /**
   * The text to display instead of the selected option's value.
   */
  @NgInput() selectedText: string;
  /**
   * If true, the select can accept multiple values.
   */
  @NgInput() multiple: boolean;
  /**
   * The interface the select should use: `action-sheet`, `popover` or `alert`. Default: `alert`.
   */
  @NgInput() interface: string;
  /**
   * Any additional options that the `alert`, `action-sheet` or `popover` interface can take. See the [AlertController API docs](../../alert/AlertController/#create), the [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the [PopoverController API docs](../../popover/PopoverController/#create) for the create options for each interface.
   */
  @NgInput() interfaceOptions: any;
  /**
   * the value of the select.
   */
  @NgInput() value: any;
  @NgOutput() ionChange: NgEventEmitter<any>;
  @NgOutput() ionCancel: NgEventEmitter<any>;
  @NgOutput() ionFocus: NgEventEmitter<any>;
  @NgOutput() ionBlur: NgEventEmitter<any>;
  @NgOutput() ionStyle: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [disabled, cancelText, okText, placeholder, name, selectedText, multiple, 'interface', interfaceOptions, value]);
    outputs(this, [ionChange, ionCancel, ionFocus, ionBlur, ionStyle]);
  }
}

@NgDirective({ selector: 'ion-select-option' })
export class SelectOption {
  /**
   * If true, the user cannot interact with the select option. Defaults to `false`.
   */
  @NgInput() disabled: boolean;
  /**
   * If true, the element is selected.
   */
  @NgInput() selected: boolean;
  /**
   * The text value of the option.
   */
  @NgInput() value: any;
  @NgOutput() ionSelectOptionDidLoad: NgEventEmitter<any>;
  @NgOutput() ionSelectOptionDidUnload: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [disabled, selected, value]);
    outputs(this, [ionSelectOptionDidLoad, ionSelectOptionDidUnload]);
  }
}

@NgDirective({ selector: 'ion-select-popover' })
export class SelectPopover {
  @NgInput() header: string;
  @NgInput() subHeader: string;
  @NgInput() message: string;
  @NgInput() options: any;
  constructor(el: ElementRef) {
    inputs(this, el, [header, subHeader, message, options]);
  }
}

@NgDirective({ selector: 'ion-show-when' })
export class ShowWhen {
  @NgInput() orientation: string;
  @NgInput() mediaQuery: string;
  @NgInput() size: string;
  @NgInput() mode: string;
  @NgInput() platform: string;
  @NgInput() or: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [orientation, mediaQuery, size, mode, platform, or]);
  }
}

@NgDirective({ selector: 'ion-skeleton-text' })
export class SkeletonText {
  @NgInput() width: string;
  constructor(el: ElementRef) {
    inputs(this, el, [width]);
  }
}

@NgDirective({ selector: 'ion-slide' })
export class Slide {
}

@NgDirective({ selector: 'ion-slides' })
export class Slides {
  /**
   * Options to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options
   */
  @NgInput() options: any;
  /**
   * Show or hide the pager
   */
  @NgInput() pager: boolean;
  @NgOutput() ionSlideWillChange: NgEventEmitter<any>;
  @NgOutput() ionSlideDidChange: NgEventEmitter<any>;
  @NgOutput() ionSlideNextStart: NgEventEmitter<any>;
  @NgOutput() ionSlidePrevStart: NgEventEmitter<any>;
  @NgOutput() ionSlideNextEnd: NgEventEmitter<any>;
  @NgOutput() ionSlidePrevEnd: NgEventEmitter<any>;
  @NgOutput() ionSlideTransitionStart: NgEventEmitter<any>;
  @NgOutput() ionSlideTransitionEnd: NgEventEmitter<any>;
  @NgOutput() ionSlideDrag: NgEventEmitter<any>;
  @NgOutput() ionSlideReachStart: NgEventEmitter<any>;
  @NgOutput() ionSlideReachEnd: NgEventEmitter<any>;
  @NgOutput() ionSlideTouchStart: NgEventEmitter<any>;
  @NgOutput() ionSlideTouchEnd: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [options, pager]);
    outputs(this, [ionSlideWillChange, ionSlideDidChange, ionSlideNextStart, ionSlidePrevStart, ionSlideNextEnd, ionSlidePrevEnd, ionSlideTransitionStart, ionSlideTransitionEnd, ionSlideDrag, ionSlideReachStart, ionSlideReachEnd, ionSlideTouchStart, ionSlideTouchEnd]);
  }
}

@NgDirective({ selector: 'ion-spinner' })
export class Spinner {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  /**
   * Duration of the spinner animation in milliseconds. The default varies based on the spinner.
   */
  @NgInput() duration: number;
  /**
   * The name of the SVG spinner to use. If a name is not provided, the platform's default spinner will be used. Possible values are: `"lines"`, `"lines-small"`, `"dots"`, `"bubbles"`, `"circles"`, `"crescent"`.
   */
  @NgInput() name: string;
  /**
   * If true, the spinner's animation will be paused. Defaults to `false`.
   */
  @NgInput() paused: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode, duration, name, paused]);
  }
}

@NgDirective({ selector: 'ion-split-pane' })
export class SplitPane {
  /**
   * If true, the split pane will be hidden. Defaults to `false`.
   */
  @NgInput() disabled: boolean;
  /**
   * When the split-pane should be shown. Can be a CSS media query expression, or a shortcut expression. Can also be a boolean expression.
   */
  @NgInput() when: any;
  @NgOutput() ionChange: NgEventEmitter<any>;
  @NgOutput() ionSplitPaneVisible: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [disabled, when]);
    outputs(this, [ionChange, ionSplitPaneVisible]);
  }
}

@NgDirective({ selector: 'ion-tab' })
export class Tab {
  @NgInput() active: boolean;
  @NgInput() btnId: string;
  @NgInput() delegate: any;
  /**
   * The title of the tab.
   */
  @NgInput() label: string;
  /**
   * The URL which will be used as the `href` within this tab's `<ion-tab-button>` anchor.
   */
  @NgInput() href: string;
  /**
   * The icon for the tab.
   */
  @NgInput() icon: string;
  /**
   * The badge for the tab.
   */
  @NgInput() badge: string;
  /**
   * The badge color for the tab button.
   */
  @NgInput() badgeStyle: string;
  /**
   * The component to display inside of the tab.
   */
  @NgInput() component: any;
  /**
   * The name of the tab.
   */
  @NgInput() name: string;
  /**
   * If true, the user cannot interact with the tab. Defaults to `false`.
   */
  @NgInput() disabled: boolean;
  /**
   * If true, the tab will be selected. Defaults to `false`.
   */
  @NgInput() selected: boolean;
  /**
   * If true, the tab button is visible within the tabbar. Defaults to `true`.
   */
  @NgInput() show: boolean;
  /**
   * If true, hide the tabs on child pages.
   */
  @NgInput() tabsHideOnSubPages: boolean;
  @NgOutput() ionSelect: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [active, btnId, delegate, label, href, icon, badge, badgeStyle, component, name, disabled, selected, show, tabsHideOnSubPages]);
    outputs(this, [ionSelect]);
  }
}

@NgDirective({ selector: 'ion-tabs' })
export class Tabs {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * A unique name for the tabs
   */
  @NgInput() name: string;
  /**
   * If true, the tabbar
   */
  @NgInput() tabbarHidden: boolean;
  /**
   * Set the tabbar layout: `icon-top`, `icon-start`, `icon-end`, `icon-bottom`, `icon-hide`, `title-hide`.
   */
  @NgInput() tabbarLayout: string;
  /**
   * Set position of the tabbar: `top`, `bottom`.
   */
  @NgInput() tabbarPlacement: string;
  /**
   * If true, show the tab highlight bar under the selected tab.
   */
  @NgInput() tabbarHighlight: boolean;
  /**
   * If true, the tabs will be translucent. Note: In order to scroll content behind the tabs, the `fullscreen` attribute needs to be set on the content. Defaults to `false`.
   */
  @NgInput() translucent: boolean;
  @NgInput() scrollable: boolean;
  @NgInput() useRouter: boolean;
  @NgOutput() ionChange: NgEventEmitter<any>;
  @NgOutput() ionNavWillChange: NgEventEmitter<any>;
  @NgOutput() ionNavDidChange: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [color, name, tabbarHidden, tabbarLayout, tabbarPlacement, tabbarHighlight, translucent, scrollable, useRouter]);
    outputs(this, [ionChange, ionNavWillChange, ionNavDidChange]);
  }
}

@NgDirective({ selector: 'ion-text' })
export class Text {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode]);
  }
}

@NgDirective({ selector: 'ion-textarea' })
export class Textarea {
  /**
   * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Defaults to `"none"`.
   */
  @NgInput() autocapitalize: string;
  /**
   * Indicates whether the value of the control can be automatically completed by the browser. Defaults to `"off"`.
   */
  @NgInput() autocomplete: string;
  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Defaults to `false`.
   */
  @NgInput() autofocus: boolean;
  /**
   * If true, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
   */
  @NgInput() clearOnEdit: boolean;
  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `ionInput` event after each keystroke. Default `0`.
   */
  @NgInput() debounce: number;
  /**
   * If true, the user cannot interact with the textarea. Defaults to `false`.
   */
  @NgInput() disabled: boolean;
  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  @NgInput() maxlength: number;
  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  @NgInput() minlength: number;
  /**
   * The name of the control, which is submitted with the form data.
   */
  @NgInput() name: string;
  /**
   * Instructional text that shows before the input has a value.
   */
  @NgInput() placeholder: string;
  /**
   * If true, the user cannot modify the value. Defaults to `false`.
   */
  @NgInput() readonly: boolean;
  /**
   * If true, the user must fill in a value before submitting a form.
   */
  @NgInput() required: boolean;
  /**
   * If true, the element will have its spelling and grammar checked. Defaults to `false`.
   */
  @NgInput() spellcheck: boolean;
  /**
   * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
   */
  @NgInput() cols: number;
  /**
   * The number of visible text lines for the control.
   */
  @NgInput() rows: number;
  /**
   * Indicates how the control wraps text. Possible values are: `"hard"`, `"soft"`, `"off"`.
   */
  @NgInput() wrap: string;
  /**
   * The value of the textarea.
   */
  @NgInput() value: string;
  @NgOutput() ionInput: NgEventEmitter<any>;
  @NgOutput() ionStyle: NgEventEmitter<any>;
  @NgOutput() ionBlur: NgEventEmitter<any>;
  @NgOutput() ionFocus: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [autocapitalize, autocomplete, autofocus, clearOnEdit, debounce, disabled, maxlength, minlength, name, placeholder, readonly, required, spellcheck, cols, rows, wrap, value]);
    outputs(this, [ionInput, ionStyle, ionBlur, ionFocus]);
  }
}

@NgDirective({ selector: 'ion-thumbnail' })
export class Thumbnail {
}

@NgDirective({ selector: 'ion-toggle' })
export class Toggle {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  /**
   * The name of the control, which is submitted with the form data.
   */
  @NgInput() name: string;
  /**
   * If true, the toggle is selected. Defaults to `false`.
   */
  @NgInput() checked: boolean;
  /**
   * Indicates that the user cannot interact with the control.
   */
  @NgInput() disabled: boolean;
  /**
   * the value of the toggle.
   */
  @NgInput() value: string;
  @NgOutput() ionChange: NgEventEmitter<any>;
  @NgOutput() ionFocus: NgEventEmitter<any>;
  @NgOutput() ionBlur: NgEventEmitter<any>;
  @NgOutput() ionStyle: NgEventEmitter<any>;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode, name, checked, disabled, value]);
    outputs(this, [ionChange, ionFocus, ionBlur, ionStyle]);
  }
}

@NgDirective({ selector: 'ion-toolbar' })
export class Toolbar {
  /**
   * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @NgInput() color: string;
  /**
   * The mode determines which platform styles to use. Possible values are: `"ios"` or `"md"`. For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @NgInput() mode: any;
  /**
   * If true, the toolbar will be translucent. Note: In order to scroll content behind the toolbar, the `fullscreen` attribute needs to be set on the content. Defaults to `false`.
   */
  @NgInput() translucent: boolean;
  constructor(el: ElementRef) {
    inputs(this, el, [color, mode, translucent]);
  }
}

@NgDirective({ selector: 'ion-title' })
export class ToolbarTitle {
}
