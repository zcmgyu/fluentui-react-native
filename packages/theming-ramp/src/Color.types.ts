/**
 * A color value.
 *
 * Color values are expressed using various formats, some of which are
 * unique to a platform.
 *
 * As a general guideline, CSS color syntax should work on all platforms. See
 * https://developer.mozilla.org/en-US/docs/Web/CSS/color for more details.
 *
 * An example of a platform-specific color is a MacOS semantic color:
 *
 * `{semantic: "windowBackgroundColor"}`
 */
export type ColorValue = string;

export interface IFabricWebPalette {
  // ROLE: Themed text
  // linkHovered
  themeDarker: ColorValue;

  // ROLE: Themed background
  // primaryButtonBackgroundPressed
  themeDark: ColorValue;

  // ROLE: Themed background
  // inputBackgroundCheckedHovered, primaryButtonBackgroundHovered
  themeDarkAlt: ColorValue;

  // ROLE: Themed background, border, text
  // inputBackgroundChecked, inputFocusBorderAlt, primaryButtonBackground, menuIcon, menuHeader, link
  themePrimary: ColorValue;

  // unused
  themeSecondary: ColorValue;

  // unused
  themeTertiary: ColorValue;

  // unused
  themeLight: ColorValue;

  // unused
  themeLighter: ColorValue;

  // unused
  themeLighterAlt: ColorValue;

  // ROLE: Text, should not be called black
  // bodyTextChecked, buttonTextCheckedHovered
  black: ColorValue;

  // unused
  blackTranslucent40: ColorValue;

  // ROLE: text
  // inputTextHovered, buttonTextHovered, buttonTextChecked, buttonTextPressed, menuItemTextHovered, actionLinkHovered
  neutralDark: ColorValue;

  // ROLE: text, border
  // bodyText, inputBorderHovered, inputText, buttonText, menuItemText, listText, actionLink
  neutralPrimary: ColorValue;

  // unused
  neutralPrimaryAlt: ColorValue;

  // ROLE: text, border
  // bodySubtext, focusBorder, smallInputBorder, inputPlaceholderText
  neutralSecondary: ColorValue;

  // ROLE: border
  // buttonBorder
  neutralSecondaryAlt: ColorValue;

  // ROLE: text, border
  // disabledText, disabledBodyText, variantBorderHovered, inputBorder, buttonTextDisabled
  neutralTertiary: ColorValue;

  // ROLE: text, background, border
  // disabledBodySubtext, buttonBackgroundChecked, menuDivider
  neutralTertiaryAlt: ColorValue;

  // ROLE: text
  // disabledSubtext, primaryButtonTextDisabled
  neutralQuaternary: ColorValue;

  // ROLE: background
  // listItemBackgroundCheckedHovered
  neutralQuaternaryAlt: ColorValue;

  // ROLE: background, border
  // bodyFrameDivider, bodyDivider, variantBorder, buttonBackgroundHovered, buttonBackgroundCheckedHovered
  // buttonBackgroundPressed, menuItemBackgroundPressed, listItemBackgroundChecked, listHeaderBackgroundPressed
  neutralLight: ColorValue;

  // ROLE: background, border (though really to blend with bgs)
  // disabledBackground, buttonBackground, buttonBackgroundDisabled, buttonBorderDisabled, primaryButtonBackgroundDisabled
  // menuItemBackgroundHovered, listItemBackgroundHovered, listHeaderBackgroundHovered
  neutralLighter: ColorValue;

  // ROLE: background
  // bodyStandoutBackground, defaultStateBackground
  neutralLighterAlt: ColorValue;

  // ROLE: background
  // accentButtonBackground
  accent: ColorValue;

  // ROLE: background, theme/accent text
  // bodyBackground, bodyFrameBackground, inputBackground, inputForegroundChecked, primaryButtonText, primaryButtonTextHovered
  // primaryButtonTextPressed, accentButtonText, menuBackground, listBackground
  white: ColorValue;

  // red color
  red: ColorValue;

  // ROLE: text
  // errorText (if !inverted)
  redDark: ColorValue;
}

/**
 * semantic color definitions for text colors.  These match ISemanticTextColors in fabric.
 */
export interface IPaletteTextColors {
  /** The default color for text. */
  bodyText: ColorValue;
  /** Checked text color, e.g. selected menu item text. */
  bodyTextChecked: ColorValue;
  /** De-emphasized text; e.g. metadata, captions, placeholder text. */
  bodySubtext: ColorValue;
  /** Neutral colored links and links for action buttons. */
  actionLink: ColorValue;
  /** Hover state for neutral colored links and links for action buttons. */
  actionLinkHovered: ColorValue;

  /** The color of a link. */
  link: ColorValue;
  /** The color of a hovered link. Also used when the link is active. */
  linkHovered: ColorValue;
  /** The default color for disabled text on top of disabledBackground; e.g. text in a disabled text field, disabled button text. */
  disabledText: ColorValue;
  /** The default color for disabled text on the default background (bodyBackground). */
  disabledBodyText: ColorValue;
  /** Disabled de-emphasized text, for use on disabledBackground. */
  disabledSubtext: ColorValue;
  /** Disabled de-emphasized text, for use on the default background (bodyBackground). */
  disabledBodySubtext: ColorValue;

  //// Invariants - slots that rarely change color theme-to-theme because the color has meaning

  /** The default color of error text, used on bodyBackground. */
  errorText: ColorValue;
  /** The color of text on errorBackground, warningBackground, blockingBackground, or successBackground. */
  warningText: ColorValue;
  /** The color of input text. */
  inputText: ColorValue;
  /** The color of input text on hover. */
  inputTextHovered: ColorValue;
  /** The color of placeholder text. */
  inputPlaceholderText: ColorValue;

  //// Buttons

  /** Color of text in a standard button */
  buttonText: ColorValue;
  /** Color of text in a hovered standard button */
  buttonTextHovered: ColorValue;
  /** Color of text in a checked standard button */
  buttonTextChecked: ColorValue;
  /** Color of text in a checked and hovered standard button */
  buttonTextCheckedHovered: ColorValue;
  /** Color of text in a pressed standard button; i.e. currently being clicked by mouse */
  buttonTextPressed: ColorValue;
  /** Color of text in a disabled standard button */
  buttonTextDisabled: ColorValue;

  /** Color of text in a primary button */
  primaryButtonText: ColorValue;
  /** Color of text in a hovered primary button */
  primaryButtonTextHovered: ColorValue;
  /** Color of text in a pressed primary button; i.e. currently being clicked by mouse */
  primaryButtonTextPressed: ColorValue;
  /** Color of text in a disabled primary button */
  primaryButtonTextDisabled: ColorValue;

  /** Color of text for accent button (kicker) */
  accentButtonText: ColorValue;

  //// Lists

  /** The default text color for list item titles and text in column fields. */
  listText: ColorValue;
}

/**
 * Background and divider colors, separated by semantic role.  These names and roles match
 * those in ISemanticColors in fabric
 */
export interface IPaletteBackgroundColors {
  //// Base slots

  /** The default color for backgrounds. */
  bodyBackground: ColorValue;
  /** A standout background a shade darker then background (or lighter in dark themes) */
  bodyStandoutBackground: ColorValue;
  /** The color for chrome adjacent to an area with bodyBackground.  Should either be distinct, or match bodyBackground */
  bodyFrameBackground: ColorValue;
  /** Border between bodyBackground and bodyFrameBackground, distinct if they match, matching bodyFrameBackground if not */
  bodyFrameDivider: ColorValue;
  /** Divider lines; e.g. lines that separate sections in a menu, an <HR> element. */
  bodyDivider: ColorValue;
  /** The default color for backgrounds of disabled controls; e.g. disabled text field. */
  disabledBackground: ColorValue;
  /** The color of the outline around focused controls that don't already have a border; e.g. menu items */
  focusBorder: ColorValue;
  /** The color of the border that provides contrast between an element, such as a card, and an emphasized background. */
  variantBorder: ColorValue;
  /** Hover color of border that provides contrast between an element, such as a card, and an emphasized background. */
  variantBorderHovered: ColorValue;
  /** Background color for default/empty state elements; default icons, placeholder graphics, empty seats, etc. */
  defaultStateBackground: ColorValue;

  //// Invariants - slots that rarely change color theme-to-theme because the color has meaning

  /** The background for errors, if necessary, or highlighting the section of the page where the error is present. */
  errorBackground: ColorValue;
  /** Background for blocking issues, which is more severe than a warning, but not as bad as an error. */
  blockingBackground: ColorValue;
  /** Background for warning messages. */
  warningBackground: ColorValue;
  /** Foreground color for warning highlights */
  warningHighlight: ColorValue;
  /** Background for success */
  successBackground: ColorValue;

  //// Input controls slots (text fields, checkboxes, radios...)

  /** The border of a large input control in its resting, state; e.g. the box of dropdown. */
  inputBorder: ColorValue;
  /** The border of a small input control in its resting unchecked state; e.g. the box of an unchecked checkbox. */
  smallInputBorder: ColorValue;
  /** The border color of a large hovered input control, such as textbox. */
  inputBorderHovered: ColorValue;
  /** The background color of an input, e.g. textbox background. */
  inputBackground: ColorValue;
  /** The background of a checked control; e.g. checked radio button's dot, checked toggle's background. */
  inputBackgroundChecked: ColorValue;
  /** The background of a checked and hovered control; e.g. checked checkbox's background color on hover. */
  inputBackgroundCheckedHovered: ColorValue;
  /** The foreground of a checked control; e.g. checked checkbox's checkmark color, checked toggle's thumb color */
  inputForegroundChecked: ColorValue;
  /** The alternate focus border color for elements that already have a border; e.g. text field borders on focus. */
  inputFocusBorderAlt: ColorValue;

  //// Buttons

  /** Background of a standard button */
  buttonBackground: ColorValue;
  /** Background of a checked standard button; e.g. bold/italicize/underline text button in toolbar */
  buttonBackgroundChecked: ColorValue;
  /** Background of a hovered standard button */
  buttonBackgroundHovered: ColorValue;
  /** Background of a checked and hovered standard button; e.g. bold/italicize/underline text button in toolbar */
  buttonBackgroundCheckedHovered: ColorValue;
  /** Background of a disabled standard button */
  buttonBackgroundDisabled: ColorValue;
  /** Background of a pressed standard button; i.e. currently being clicked by mouse */
  buttonBackgroundPressed: ColorValue;
  /** Border of a standard button */
  buttonBorder: ColorValue;
  /** Border of a disabled standard button */
  buttonBorderDisabled: ColorValue;
  /** Background of a primary button */
  primaryButtonBackground: ColorValue;
  /** Background of a hovered primary button */
  primaryButtonBackgroundHovered: ColorValue;
  /** Background of a pressed primary button; i.e. currently being clicked by mouse */
  primaryButtonBackgroundPressed: ColorValue;
  /** Background of a disabled primary button */
  primaryButtonBackgroundDisabled: ColorValue;
  /** Border of a primary button */
  primaryButtonBorder: ColorValue;
  /** Background of an accent button (kicker) */
  accentButtonBackground: ColorValue;

  //// Menus, popups, etc

  /** The background of a menu. */
  menuBackground: ColorValue;
  /** The divider between menu items. */
  menuDivider: ColorValue;
  /** The default colors of icons in menus. */
  menuIcon: ColorValue;
  /** The headers in menus that denote title of a section. */
  menuHeader: ColorValue;
  /** The background of a hovered menu item. */
  menuItemBackgroundHovered: ColorValue;
  /** The background of a pressed menu item. */
  menuItemBackgroundPressed: ColorValue;
  /** The text color of a menu item. */
  menuItemText: ColorValue;
  /** The text color of a hovered menu item. */
  menuItemTextHovered: ColorValue;

  //// Lists

  /** The background color for the entire list. */
  listBackground: ColorValue;
  /** The default text color for list item titles and text in column fields. */
  listText: ColorValue;
  /** The background color of a hovered list item. */
  listItemBackgroundHovered: ColorValue;
  /** The background color of a checked list item. */
  listItemBackgroundChecked: ColorValue;
  /** The background color of a checked and hovered list item. */
  listItemBackgroundCheckedHovered: ColorValue;
  /** The background color for a hovered list header. */
  listHeaderBackgroundHovered: ColorValue;
  /** The background color for a pressed list header. */
  listHeaderBackgroundPressed: ColorValue;
}

/**
 * A collection of named palette colors.
 *
 * Palette names describe the role of a color within the application.
 */
export type IPalette = IPaletteTextColors & IPaletteBackgroundColors;

export interface IWindowsPalette {
  /**
   * Background Colors
   *
   * Background color for any region of the user interface.
   */
  background: ColorValue;
  backgroundHover: ColorValue;
  backgroundPressed: ColorValue;
  backgroundSelected: ColorValue;
  backgroundSelectionHighlight: ColorValue;

  /**
   * Transparent Control Colors
   *
   * These colors should be used to build controls with a transparent
   * background. For example, list items and ribbon buttons.
   */
  // text
  text: ColorValue;
  textRest: ColorValue;
  textHover: ColorValue;
  textPressed: ColorValue;
  textSelected: ColorValue;
  textDisabled: ColorValue;
  textSelectionHighlight: ColorValue;

  textSecondary: ColorValue;
  textSecondaryRest: ColorValue;
  textSecondaryHover: ColorValue;
  textSecondaryPressed: ColorValue;
  textSecondarySelected: ColorValue;

  // emphasized text, usually with an accent color
  textEmphasis: ColorValue;
  textEmphasisRest: ColorValue;
  textEmphasisHover: ColorValue;
  textEmphasisPressed: ColorValue;
  textEmphasisSelected: ColorValue;

  // stroke colors (typically borders, outlines or underlines)
  strokeSelectedHover: ColorValue;
  strokeKeyboard: ColorValue;

  // stroke overlay colors (typically borders, outlines or underlines)
  strokeOverlayRest: ColorValue;
  strokeOverlayHover: ColorValue;
  strokeOverlayPressed: ColorValue;
  strokeOverlaySelectedRest: ColorValue;
  strokeOverlaySelectedHover: ColorValue;
  strokeOverlaySelectedPressed: ColorValue;

  /**
   * Push Button Controls
   *
   * Push button controls only. These controls have a non-transparent
   * background. Most other controls should not use these colors.
   */
  // background
  backgroundControl: ColorValue;
  backgroundControlHover: ColorValue;
  backgroundControlPressed: ColorValue;
  backgroundControlSelected: ColorValue;
  backgroundControlDisabled: ColorValue;

  // text
  textControl: ColorValue;
  textControlHover: ColorValue;
  textControlPressed: ColorValue;
  textControlSelected: ColorValue;
  textControlDisabled: ColorValue;

  // stroke colors (typically borders, outlines or underlines)
  strokeControl: ColorValue;
  strokeControlHover: ColorValue;
  strokeControlPressed: ColorValue;
  strokeControlSelected: ColorValue;
  strokeControlDisabled: ColorValue;
  strokeControlKeyboard: ColorValue;

  /**
   * Emphasized Push Button Controls
   *
   * Push button controls only. These controls have a non-transparent
   * background. Most other controls should not use these colors.
   */
  // background
  backgroundControlEmphasis: ColorValue;
  backgroundControlEmphasisHover: ColorValue;
  backgroundControlEmphasisPressed: ColorValue;
  backgroundControlEmphasisDisabled: ColorValue;

  // text
  textControlEmphasis: ColorValue;
  textControlEmphasisHover: ColorValue;
  textControlEmphasisPressed: ColorValue;
  textControlEmphasisDisabled: ColorValue;

  // stroke colors (typically borders, outlines or underlines)
  strokeControlEmphasis: ColorValue;
  strokeControlEmphasisHover: ColorValue;
  strokeControlEmphasisPressed: ColorValue;
  strokeControlEmphasisDisabled: ColorValue;
  strokeControlEmphasisKeyboard: ColorValue;

  /**
   * Text Controls
   *
   * Controls which have a background, even in dark themes, such as text box,
   * combo box, check box, and radio button.
   */
  // background
  backgroundControlSubtle: ColorValue;
  backgroundControlSubtleHover: ColorValue;
  backgroundControlSubtlePressed: ColorValue;
  backgroundControlSubtleDisabled: ColorValue;
  backgroundControlSubtleSelectionHighlight: ColorValue;

  // text
  textControlSubtle: ColorValue;
  textControlSubtlePlaceholder: ColorValue;
  textControlSubtleHover: ColorValue;
  textControlSubtlePressed: ColorValue;
  textControlSubtleDisabled: ColorValue;
  textControlSubtleSelectionHighlight: ColorValue;

  // stroke colors (typically borders, outlines or underlines)
  strokeControlSubtle: ColorValue;
  strokeControlSubtleHover: ColorValue;
  strokeControlSubtlePressed: ColorValue;
  strokeControlSubtleDisabled: ColorValue;
  strokeControlSubtleKeyboard: ColorValue;

  /**
   * Hyperlinks
   */
  textHyperlink: ColorValue;
  textHyperlinkHover: ColorValue;
  textHyperlinkPressed: ColorValue;

  /**
   * Active Text
   *
   * Text only states, with no background change, such as a pivot control.
   */
  textActive: ColorValue;
  textActiveHover: ColorValue;
  textActivePressed: ColorValue;
  textActiveSelected: ColorValue;

  /**
   * Errors
   */
  textError: ColorValue;
  textErrorHover: ColorValue;
  textErrorPressed: ColorValue;
  textErrorSelected: ColorValue;

  /**
   * Accents
   */
  accentDark: ColorValue;
  accentLight: ColorValue;
  accentEmphasis: ColorValue;
  accentOutline: ColorValue;

  /**
   * Headers
   *
   * Used for headings on sections of the user interface.
   */
  backgroundHeader: ColorValue;
  textHeader: ColorValue;
}

/**
 * A partially specified color palette.
 */
export type IPartialPalette = Partial<IPalette>;

/**
 * A color, used when defining a visual element in a theme.
 */
export type Color = keyof IPalette | ColorValue;