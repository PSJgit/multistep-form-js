/**
 * Helper for adding/removing css classes
 * From https://vanillajstoolkit.com/helpers/animate/
 * @param  {Node}    Element to animate
 * @param  {String}  CSS class to apply
 * @param  {Boolean} If true, apply the hide class
 */

// From https://vanillajstoolkit.com/helpers/animate/
export const animateCSSHelper = function (elem, animation, hide) {

  // If there's no element or animation, do nothing
  if (!elem || !animation) return

  elem.classList.remove('hide')
  elem.classList.add(animation)
  // Detect when the animation ends
  elem.addEventListener('animationend', function endAnimation (event) {
    elem.classList.remove(animation)
    if (hide) {
      elem.classList.add('hide')
    }
    elem.removeEventListener('animationend', endAnimation, false)
  }, false)
}

/**
 * Quick mobile detection
 */

export function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}