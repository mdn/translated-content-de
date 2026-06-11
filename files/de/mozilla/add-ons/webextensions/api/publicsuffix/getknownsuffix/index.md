---
title: publicSuffix.getKnownSuffix()
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix/getKnownSuffix
l10n:
  sourceCommit: 5054fb75bce0f095ed9ca9ad11dabde32eea5cb4
---

Gibt den bekannten öffentlichen Suffix (eTLD) des Hostnamens gemäß der [Public Suffix List](https://publicsuffix.org/) zurück oder `null`, wenn der Hostname keinen bekannten öffentlichen Suffix hat.

Wenn ein Hostname mehrere mögliche öffentliche Suffixe hat, wird der längste passende Eintrag zurückgegeben.

## Syntax

```js-nolint
let suffix = browser.publicSuffix.getKnownSuffix(hostname)
```

### Parameter

- `hostname`
  - : `string`. Der Hostname, dessen öffentlicher Suffix zurückgegeben werden soll.

### Rückgabewert

Ein `string` mit dem öffentlichen Suffix von `hostname` oder `null`, wenn kein bekannter öffentlicher Suffix für `hostname` existiert.

Wirft einen Fehler, wenn `hostname` kein gültiger Hostname ist.

## Beispiele

Den öffentlichen Suffix eines Hostnamens abrufen:

```js
console.log(browser.publicSuffix.getKnownSuffix("example.com")); // "com"
console.log(browser.publicSuffix.getKnownSuffix("example.co.uk")); // "co.uk"
console.log(browser.publicSuffix.getKnownSuffix("user.github.io")); // "github.io"
console.log(browser.publicSuffix.getKnownSuffix("com")); // "com"
console.log(browser.publicSuffix.getKnownSuffix("localhost")); // null
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
