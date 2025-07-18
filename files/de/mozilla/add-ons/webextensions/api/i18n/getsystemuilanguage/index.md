---
title: i18n.getSystemUILanguage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getSystemUILanguage
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt das aktuelle UI-Gebietsschema des Betriebssystems zurück. Dies unterscheidet sich von {{WebExtAPIRef('i18n.getUILanguage')}}, das das UI-Gebietsschema des Webbrowsers zurückgibt.

## Syntax

```js-nolint
let systemUILanguage = await browser.i18n.getSystemUILanguage()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("i18n.LanguageCode")}} erfüllt wird.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
