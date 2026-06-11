---
title: publicSuffix.isKnownSuffix()
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix/isKnownSuffix
l10n:
  sourceCommit: 5054fb75bce0f095ed9ca9ad11dabde32eea5cb4
---

Gibt `true` zurück, wenn der Hostname ein bekannter öffentlicher Suffix (eTLD) in der [Public Suffix List](https://publicsuffix.org/) ist.

## Syntax

```js-nolint
let result = browser.publicSuffix.isKnownSuffix(hostname)
```

### Parameter

- `hostname`
  - : `string`. Der zu überprüfende Hostname.

### Rückgabewert

`true`, wenn `hostname` ein bekannter öffentlicher Suffix ist, `false` andernfalls.

Löst einen Fehler aus, wenn `hostname` kein gültiger Hostname ist.

## Beispiele

Überprüfen, ob eine Zeichenkette ein bekannter öffentlicher Suffix ist:

```js
console.log(browser.publicSuffix.isKnownSuffix("com")); // true
console.log(browser.publicSuffix.isKnownSuffix("co.uk")); // true
console.log(browser.publicSuffix.isKnownSuffix("github.io")); // true
console.log(browser.publicSuffix.isKnownSuffix("example.com")); // false
console.log(browser.publicSuffix.isKnownSuffix("localhost")); // false
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
