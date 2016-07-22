/// Provides a shorthand syntax to add `border-radius` to both the top-left
/// and bottom-left of an element.
///
/// @argument {number (with unit)} $radii
///
/// @example scss
///   .element {
///     @include border-left-radius(1px);
///   }
///
/// @example hbs
///   .element {
///     {{border-left-radius 1px}}
///   }
///
/// @example css
///   .element {
///     border-bottom-left-radius: 1px;
///     border-top-left-radius: 1px;
///   }

//@mixin
export default {
  'border-left-radius':($radii) => {
    return {
      'border-bottom-left-radius': $radii,
      'border-top-left-radius': $radii
    }
  }
}
