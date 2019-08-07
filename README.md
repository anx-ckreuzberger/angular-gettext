# angular-gettext - gettext utilities for angular.js

> Translate your Angular.JS applications with gettext.

Please note, this is a fork of [rubenv/angular-gettext](https://github.com/rubenv/angular-gettext) with a simple extension called "html params".

[![Build Status](https://travis-ci.org/anx-ckreuzberger/angular-gettext.png?branch=master)](https://travis-ci.org/anx-ckreuzberger/angular-gettext)

Check the website for usage instructions: [http://angular-gettext.rocketeer.be/](http://angular-gettext.rocketeer.be/).
    
## HTML Params

Assume you have a controller with the following content:
```javascript
function($scope) {
    $scope.foo = "<b>BAR</b>";
}
```

If you write the following in your template:
```html
<div translate>Hello {{ foo }}</div>
```
the HTML will not be shown, you'll end up with the following output:
```html
<div translate>Hello &lt;b&gt;BAR&lt;/b&gt;
```

If, however, you explicitly want to show the HTML content, this extension of the angular-gettext library provides you a directive for it, which works as follows:

```html
<div translate translate-html-params-fancy-user-name="foo">
    Hello {{ fancyUserName }}
</div>
```

## Usage

If you want to use this library, you can add it via npm or package.json by adding `git+https://github.com/anx-ckreuzberger/angular-gettext.git#v2.4.1-htmlparams`, e.g.:

```bash
npm install https://github.com/anx-ckreuzberger/angular-gettext.git#v2.4.1-htmlparams
# or
yarn add https://github.com/anx-ckreuzberger/angular-gettext.git#v2.4.1-htmlparams
```


## License 

    (The MIT License)

    Copyright (C) 2013-2018 by Ruben Vermeersch <ruben@rocketeer.be>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

