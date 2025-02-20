# Introduction

React Suite is a library of React components, designed for middle platform and back-end products. Committed to creating intimate interactive designs while providing developers with a friendly development experience.

[![npm][npm-svg]][npm-home] [![Gitter][gitter-svg]][gitter]

## UI Design

RSUITE Design Prototype and specification, click to [view][rsuite-design]

## Supported Platforms

### Browser

- React Suite supports all major modern browsers.

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /></br>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /> </br>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /></br>Safari |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                  | last 2 versions                                                                                                                                               | last 2 versions                                                                                                                                            | last 2 versions                                                                                                                                           |

> IE<=10 is no longer supported since v5. If you need to continue using it on IE 10, please use [v4](https://v4.rsuitejs.com/guide/introduction/).

### Server

React Suite supports server side rendering. Support [Next.js](https://github.com/zeit/next.js) to build applications.

## Supported development environment

- Supports React 16 +
- Supports [TypeScript](http://www.typescriptlang.org/)
- Supports [Electron](https://electronjs.org/)
- Supports [Reason](https://github.com/shurygindv/bs-rsuite-ui-react)

## Examples

<!--{include:(resources/examples/en-US/official-examples.md)}-->

## Changelog

Detailed changes for each release are documented in the [release notes][release-notes].

## Contribution

Make sure you've read the [guidelines][contributing] before you start contributing.

Editor preferences are available in the [.prettierrc][prettierrc] for easy use in common code editors. Read more and download plugins at https://prettier.io/.

## Development

### Test-Driven Development（TDD）

1. Fork `https://github.com/rsuite/rsuite` this repo.

```bash
$ git clone git@github.com:<YOUR NAME>/rsuite.git
$ cd rsuite
```

2. Install it and run

```bash
$ npm install
$ npm run tdd
```

3. Run a single component test case.

```bash
$ M=Button npm run tdd
```

### UI-Driven Development

1. Fork `https://github.com/rsuite/rsuite` this repo.

```bash
$ git clone git@github.com:<YOUR NAME>/rsuite.git
```

2. Install it and run

```bash
$ cd rsuite
$ npm install
$ cd rsuite/docs
$ npm install
$ npm run dev
```

3. Your show time. Open url http://127.0.0.1:3000/ in browser.

## Supporting RSUITE

If you like RSUITE, you can show your support by either

- Star this repo [![rsuite-stars][rsuite-stars]](https://github.com/rsuite/rsuite)
- [Leaving a comment here][issues-11] if you are using RSUITE in your project (like we do 😄)
- [Becoming a backer][opencollective-home] on OpenCollective

[![opencollective-now][opencollective-svg]][opencollective-home]

## License

RSUITE is [MIT licensed][license]. Copyright (c) 2016-present, HYPERS.

[npm-svg]: https://badge.fury.io/js/rsuite.svg
[npm-home]: https://www.npmjs.com/package/rsuite
[rsuite-design]: https://rsuitejs.com/design/default
[release-notes]: https://github.com/rsuite/rsuite/releases
[contributing]: https://github.com/rsuite/rsuite/blob/master/CONTRIBUTING.md
[prettierrc]: https://github.com/rsuite/rsuite/wiki/.prettierrc
[issues-11]: https://github.com/rsuite/rsuite/issues/11
[opencollective-svg]: https://opencollective.com/rsuite/tiers/backer.svg?avatarHeight=36
[opencollective-home]: https://opencollective.com/rsuite
[license]: https://github.com/rsuite/rsuite/blob/master/LICENSE
[gitter]: https://gitter.im/rsuite/rsuite-CN?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
[gitter-svg]: https://badges.gitter.im/rsuite/rsuite.svg
[rsuite-stars]: https://img.shields.io/github/stars/rsuite/rsuite?style=social
