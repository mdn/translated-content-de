---
title: i18n.getPreferredSystemLanguages()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getPreferredSystemLanguages
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt die bevorzugten Gebietsschemas des Betriebssystems zurück. Diese sind anders als die im Browser gesetzten Gebietsschemas. Um diese abzurufen, verwenden Sie {{WebExtAPIRef('i18n.getAcceptLanguages')}}.

## Syntax

```js-nolint
let preferredSystemLanguages = await browser.i18n.getPreferredSystemLanguages()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef("i18n.LanguageCode")}}-Strings erfüllt wird.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
