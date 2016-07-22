/// Provides a quick method for targeting `border-color` on specific sides of a
/// box. Use a `null` value to “skip” a side.
///
/// @argument {arglist} $values
///   List of colors, defined as CSS shorthand.
///
/// @example scss
///   .element {
///     @include border-color(#a60b55 #76cd9c null #e8ae1a);
///   }
///   
/// @example HBS
///   .element {
///     {{border-color #a60b55 #76cd9c null #e8ae1a}}
///   }
///   
/// @example JS
///   '.element': ({
///     @include
///   }).border-color('#a60b55', '#76cd9c', null '#e8ae1a');
///   
///
/// @example css
///   .element {
///     border-left-color: #e8ae1a;
///     border-right-color: #76cd9c;
///     border-top-color: #a60b55;
///   }
///
///
//import _directional-property from '../utilities/_directional-property'

//@mixin
export default {
  'border-color': ($values...) => {
    console.error('library/_border-color.js not YET implemented')
    //return @include _directional-property(border, color, $values...)
  }
}
