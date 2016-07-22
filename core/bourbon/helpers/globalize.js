/* Because sass is pretty globals based, we need this to globalize the $scales.keys */
export default function(object) {
  Object.keys(object).forEach(function(key) {
    window[key] = object[key]
  })
}