---
title: publicSuffix.getKnownSuffix()
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix/getKnownSuffix
l10n:
  sourceCommit: 79dc4b2dfc4d0564581cc4e417e5a2cfdd64bbd6
---

Gibt das bekannte öffentliche Suffix (eTLD) des Hostnamens gemäß der [Public Suffix List](https://publicsuffix.org/) zurück oder `null`, wenn der Hostname kein bekanntes öffentliches Suffix hat.

Wenn ein Hostname mehrere mögliche öffentliche Suffixe hat, wird der längste übereinstimmende Eintrag zurückgegeben.

## Syntax

```js-nolint
let suffix = browser.publicSuffix.getKnownSuffix(hostname)
```

### Parameter

- `hostname`
  - : `string`. Der Hostname, dessen öffentliches Suffix zurückgegeben werden soll.

### Rückgabewert

Ein `string`, der das öffentliche Suffix von `hostname` enthält, oder `null`, wenn kein bekanntes öffentliches Suffix für `hostname` existiert.

Es wird ein Fehler ausgelöst, wenn `hostname` kein gültiger Hostname ist.

## Beispiele

Erhalten Sie das öffentliche Suffix eines Hostnamens:

```js
browser.publicSuffix.getKnownSuffix("example.com"); // "com"
browser.publicSuffix.getKnownSuffix("example.co.uk"); // "co.uk"
browser.publicSuffix.getKnownSuffix("user.github.io"); // "github.io"
browser.publicSuffix.getKnownSuffix("com"); // "com"
browser.publicSuffix.getKnownSuffix("localhost"); // null
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
