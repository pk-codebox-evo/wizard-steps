# wizard-steps

Fancy wizard steps element using HTML5 Flexbox

## About

A JavaScript library by Trung Dinh Quang.

See the [project homepage](http://trungdq88.github.io/wizard-steps).

## Installation

Using Bower:

    bower install wizard-steps

Or grab the [source](https://github.com/trungdq88/wizard-steps/dist/wizard-steps.js) ([minified](https://github.com/trungdq88/wizard-steps/dist/wizard-steps.min.js)).

## Usage

Basic usage is as follows:

HTML:


    <div id="wizard-steps" class="wizard-steps">
      <div class="wizard-step active">
        One
      </div>
      <div class="wizard-step">
        Two very long long text over here
      </div>
      <div class="wizard-step">
        Three
      </div>
      <div class="wizard-step">
        Four
      </div>
      <div class="wizard-step">
        Five
      </div>
    </div>


JavaScript:

    WizardStep('#element-id')

How it looks like:

<img src="screenshot.png"/>

Check `/demo` page for more information

## Documentation

Start with `docs/MAIN.md`.

## Contributing

I welcome all pull requests

## License

MIT. See `LICENSE.txt` in this directory.
