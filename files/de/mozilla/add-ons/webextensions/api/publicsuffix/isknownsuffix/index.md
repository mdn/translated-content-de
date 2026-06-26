---
title: publicSuffix.isKnownSuffix()
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix/isKnownSuffix
l10n:
  sourceCommit: 79dc4b2dfc4d0564581cc4e417e5a2cfdd64bbd6
---

Gibt `true` zurück, wenn der Hostname ein bekannter öffentlicher Suffix (eTLD) in der [Public Suffix List](https://publicsuffix.org/) ist.

## Syntax

```js-nolint
let result = browser.publicSuffix.isKnownSuffix(hostname)
```

### Parameter

- `hostname`
  - : `string`. Der Hostname, der überprüft werden soll.

### Rückgabewert

`true`, wenn `hostname` ein bekannter öffentlicher Suffix ist, andernfalls `false`.

Wirft einen Fehler, wenn `hostname` kein gültiger Hostname ist.

## Beispiele

Überprüfen, ob ein String ein bekannter öffentlicher Suffix ist:

```js
browser.publicSuffix.isKnownSuffix("com"); // true
browser.publicSuffix.isKnownSuffix("co.uk"); // true
browser.publicSuffix.isKnownSuffix("github.io"); // true
browser.publicSuffix.isKnownSuffix("example.com"); // false
browser.publicSuffix.isKnownSuffix("localhost"); // false
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
