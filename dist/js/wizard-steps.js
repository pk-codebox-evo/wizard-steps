(function(root, undefined) {

  "use strict";


/* wizard-steps main */
var document = root.document;

/**
 * Similar to $.removeClass
 * @param el
 * @param className
 */
function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

/**
 * Similar to $.addClass
 * @param el
 * @param className
 */
function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}

/**
 * Similar to $.prevAll()
 * @param element
 * @returns {Array}
 */
function prevAll(element) {
  var result = [];

  while (element.previousElementSibling) {
    element = element.previousElementSibling;
    result.push(element);
  }
  return result;
}


/**
 * WizardSteps
 * @param selector
 * @returns {WizardSteps}
 * @constructor
 */
var WizardSteps = function (selector) {
  // Get the root element
  var el = document.querySelector(selector);
  // Find all the step elements
  var wizardSteps = el.getElementsByClassName('wizard-step');

  // Reset all step elements's state
  var resetStepElements = function () {
    [].forEach.call(wizardSteps, function (element) {
      removeClass(element, 'done');
      removeClass(element, 'active');
    });
  };

  // Loop through step elements
  [].forEach.call(wizardSteps, function (element) {
    // Add event to each step element
    element.addEventListener('click', function () {
      // Remove "active", "done" class from all step element
      resetStepElements();
      // Add "active" class for clicked element
      addClass(element, 'active');
      // Add "done" class for previous siblings (previous step elements)
      var prevs = prevAll(element);
      [].forEach.call(prevs, function (doneElement) {
        addClass(doneElement, 'done');
      });
    });
  });
  return this;
};


// Version.
WizardSteps.VERSION = '0.0.0';

// Export to the root, which is probably `window`.
root.WizardSteps = WizardSteps;

// Export for mocha test
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WizardSteps;
}


}(this));
